import React, { ChangeEvent, useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { updateContent } from '../../graphql/mutations';
import { useLocation, useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { GraphQLResult } from '@aws-amplify/api';
import { getSubTopic, getTopic, listSubTopics } from '../../graphql/queries';
import GroupsComponent from '../groups';
import { getContent, listContents } from '../../graphql/queries';

import {SendFile, updDelFile, FileUpload} from '../FileUpload';
import CKEditorComponent from './CKEditorComponent';


interface Topic {
    id: string;
    name: string;
}

interface Group {
    _id: any;
    name: any;
    label: string;
    value: string;
}

interface SubTopic {
    id: string;
    name: string;
    subject: string;
    topicID: string;
    status: number;
}

interface Content {
    id?: string;
    contentType: string;
    contentsubType: string;
    contentName: string;
    subTopic: string;
    topicId: string;
    topicName: string;
    subject: string;
    content: string;
    averageReadTime: string;
    groups: string;
    additionalInformation: string;
}

const UpdateContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const initialState: Content = {
        contentType: "",
        contentsubType: "",
        contentName: "",
        subTopic: "",
        topicId: "",
        topicName: "",
        subject: "",
        content: "",
        averageReadTime: "",
        groups: "",
        additionalInformation: "",
    };

    const [subTopics, setSubTopics] = useState<SubTopic[]>([]);
    const [selectedSubTopic, setSelectedSubTopic] = useState('');
    const [Groups, setGroups] = useState<Group[]>([]);
    const [selectedInputType, setSelectedInputType] = useState('file');
    const [file, setFile] = useState<any>();
    const [directory, setDirectory] = useState('');
    const [PrevDirectory, setPrevDirectory] = useState('');
    const [getEditor, setEditor] = useState(false);
    
    console.log("contentBankid ", location.state.contentBankid);
      const [InputDetails, setInputDetails] = useState<Content>(initialState);
    useEffect(() => {
        async function fetchData() {
            try {
                const getContent1 = await API.graphql(
                    graphqlOperation(getContent, { id: location.state.id })
                ) as GraphQLResult<any>;

                getDirectory(getContent1?.data?.getContent?.contentsubType)
                if(getContent1?.data?.getContent?.contentType === "textUrl" ){
                    setEditor(true)
                }
                
                const contentData = getContent1?.data?.getContent;
                if (contentData) {
                    const subtopicId = contentData.subTopic;

                    const subtopicInfo = await API.graphql(
                        graphqlOperation(getSubTopic, { id: subtopicId })
                    ) as GraphQLResult<any>;

                    const topicInfo = await API.graphql(
                        graphqlOperation(getTopic, { id: subtopicInfo?.data?.getSubTopic?.topicID })
                    ) as GraphQLResult<any>;

                     setInputDetails({
                        ...contentData,
                        subTopic: subtopicInfo?.data?.getSubTopic?.id || '',
                        topicId: subtopicInfo?.data?.getSubTopic?.topicID || '',
                        topicName: topicInfo?.data?.getTopic?.name || '',
                        subject: subtopicInfo?.data?.getSubTopic?.subject || '',
                    });
                    setSelectedSubTopic(subtopicInfo?.data?.getSubTopic?.id || '');

                    const response: any = await API.graphql(graphqlOperation(listSubTopics));
                    if (response?.data?.listSubTopics?.items) {
                        setSubTopics(response?.data?.listSubTopics?.items);
                    }
                }
            } catch (err) {
                console.error('Error fetching:', err);
            }
        }

        if (location.state && location.state.id) {
            fetchData();
        }
    }, [location.state.id]);

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setInputDetails((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubTopicChange = async (selectedSubTopicID: string) => {
        setSelectedSubTopic(selectedSubTopicID);

        const selectedSubtopicObject = subTopics.find((subTopic) => subTopic.id === selectedSubTopicID);

        if (selectedSubtopicObject) {
            const getTopicInfo = await API.graphql(graphqlOperation(getTopic, { id: selectedSubtopicObject.topicID })) as any;
            const updatedInputDetails: Content = {
                ...InputDetails,
                subTopic: selectedSubTopicID,
                topicId: selectedSubtopicObject.topicID,
                topicName: getTopicInfo.data.getTopic.name,
                subject: selectedSubtopicObject.subject,
            };
            setInputDetails(updatedInputDetails);
        }
    };
    
    const handleMediaUpload = (value: string) => {
        setInputDetails((prevData) => ({
            ...prevData,
            content: value,
        }));
    };


    const setInputType = (inputType: string) => {
        setSelectedInputType(inputType);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        //alert("hii")

        try {

            let GroupIDs: any
            if (Groups.length > 0) {
                GroupIDs = Groups.map((obj) => obj.value);
            } else {
                GroupIDs = InputDetails.groups
            }

            InputDetails.groups = GroupIDs

            let fileName;

            

            if (file && InputDetails.contentType !== "textUrl") {
                
                fileName = Date.now()+file.name
            }else{
                
                setInputDetails({ ...InputDetails, contentsubType: 'text', id: location.state.id, })
            }

            const updatedInputDetails = {
                input: {
                    id: location.state.id,
                    contentType: InputDetails.contentType,
                    contentsubType: InputDetails.contentsubType,
                    contentName: InputDetails.contentName,
                    subTopic: InputDetails.subTopic,
                    topic: InputDetails.topicId,
                    subject: InputDetails.subject,
                    content: InputDetails.contentType !== "textUrl" ? fileName : InputDetails.content,
                    averageReadTime: InputDetails.averageReadTime,
                    groups: GroupIDs,
                    additionalInformation: InputDetails.additionalInformation
                }
            }

            const updateContentResult = await API.graphql(
                graphqlOperation(updateContent, updatedInputDetails)
            );

            if (updateContentResult) {
                if(InputDetails.contentType !== "textUrl"  && InputDetails.content !== fileName){
                const getres = await SendFile(file,fileName,directory)
                if(getres.status === 200){
                    if(InputDetails?.content){
                    await updDelFile(InputDetails.content, PrevDirectory)
                    }
                }
            }
                navigate('/listContents', {state: {contentBankid: location.state.contentBankid}});
            }
        } catch (error) {
            console.error('Error updating content:', error);
        }
    };

    function handleFileUpload(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
    }


    const getDirectory = (sub: any) => {
        let dirType: any;

        if (sub === 'pdf' || sub === 'doc' || sub === 'docx' || sub === 'excel' || sub === 'ppt') {
            dirType = 'doc'
        } else if (sub === 'img' || sub === 'jpg' || sub === 'jpeg' || sub === 'png') {
            dirType = 'images'
        } else if (sub === 'audio') {
            dirType = 'audios'
        } else if (sub === 'video') {
            dirType = 'videos'
        }

        setDirectory(dirType)
        setPrevDirectory(dirType)
    }


    const docUpdate = (sub: any) => {

        setInputDetails({ ...InputDetails, contentsubType: sub })

        let dirType: any;

        if (sub === 'pdf' || sub === 'doc' || sub === 'docx' || sub === 'excel' || sub === 'ppt') {
            dirType = 'doc'
        } else if (sub === 'img' || sub === 'jpg' || sub === 'jpeg' || sub === 'png') {
            dirType = 'images'
        } else if (sub === 'audio') {
            dirType = 'audios'
        } else if (sub === 'video') {
            dirType = 'videos'
        }

        setDirectory(dirType)
    }
    
    return (
        <div className='row col-md-12'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='container mt-5'></div>

                <form onSubmit={handleSubmit}>
                    {/* <div className="form-group mt-3">
                        <label>ContentType:</label><br />
                        <select className='inputFiled form-control' name='contentType' onChange={handleInputChange} value={InputDetails.contentType}>
                            <option value=''>Select ContentType</option>
                            <option value='document'>Document</option>
                            <option value='media'>Media</option>
                            <option value='textUrl'>Text/Url</option>
                        </select>
                    </div> */}

                    {/* <div className='form-group mt-3'>
                        <label>ContentSubType*:</label>
                        <select className='inputFiled form-control' name='contentsubType' onChange={(e) => docUpdate(e.target.value)} value={InputDetails.contentsubType}>
                            <option value=''>Select ContentSubType</option>
                            <option value='pdf'>PDF</option>
                            <option value='word'>Word</option>
                            <option value='excel'>Excel</option>
                            <option value='ppt'>Powerpoint</option>
                            <option value='img'>Image</option>
                            <option value='audio'>Audio</option>
                            <option value='video'>Video</option>
                        </select>
                    </div> */}

                    <div className="row">
                       
                    {InputDetails.contentType === 'textUrl' ? (
                         <div className="col-md-12 mt-3">
                         <div className="form-group mt-3">
                             <label>ContentType*:</label>
                             <select
                                 className="inputField form-control"
                                 name="contentType"
                                 onChange={(e) =>
                                     setInputDetails({ ...InputDetails, contentType: e.target.value })
                                 }
                                 required
                             >
                                 <option value="">Select ContentType</option>
                                 <option value="document">Document</option>
                                 <option value="media">Media</option>
                                 <option value="textUrl" selected> Text/Url </option>
                             </select>
                         </div>
                     </div>) : (
                         <div className="col-md-6 mt-3">
                         <div className="form-group mt-3">
                             <label>ContentType*:</label>
                             <select
                                 className="inputField form-control"
                                 name="contentType"
                                 onChange={(e) =>
                                     setInputDetails({ ...InputDetails, contentType: e.target.value })
                                 }
                                 required
                             > 
                                 <option value="">Select ContentType</option>
                                 
                                 <option value="document" selected={InputDetails.contentType === "document" as any ? true : false}>Document{InputDetails.contentType === "document" }</option>
                                 <option value="media" selected={InputDetails.contentType === "media" as any ? true : false}>Media {InputDetails.contentType === "media" as any  }</option>
                                 <option value="textUrl" selected={InputDetails.contentType === "textUrl" as any ? true : false}> Text/Url{InputDetails.contentType === "textUrl" as any ? true : false  }</option>
                             </select>
                         </div>
                     </div>
                     )}
                                

                               
                            
                                {InputDetails.contentType === 'document' ? (
                                <div className="col-md-6 mt-3">
                                    <div className="form-group mt-3">
                                        <label>ContentSubType*:</label>
                                        <select
                                            className="inputField form-control"
                                            name="contentsubType"
                                            onChange={(e) => docUpdate(e.target.value)}
                                            required
                                        >
                                            <option value="">Select ContentSubType</option>
                                            <option value="pdf" selected={InputDetails.contentsubType === "pdf" as any }>PDF</option>
                                            <option value="doc" selected={InputDetails.contentsubType === "doc" as any }>Word </option>
                                            <option value="excel" selected={InputDetails.contentsubType === "excel" as any }>Excel</option>
                                            <option value="ppt" selected={InputDetails.contentsubType === "ppt" as any }> Powerpoint </option>
                                        </select>
                                    </div>
                                </div>
                        
                        ) : InputDetails.contentType === 'media' ? (
                            <>
                                
                                <div className="col-md-6 mt-3">
                                    <div className="form-group mt-3">
                                        <label>ContentSubType*:</label>
                                        <select
                                            className="inputField form-control"
                                            name="contentsubType"
                                            onChange={(e) => docUpdate(e.target.value)}
                                            required
                                        >
                                            <option value="">Select ContentSubType</option>
                                            <option value="img" selected={InputDetails.contentsubType === "img" as any }>Image</option>
                                            <option value="audio" selected={InputDetails.contentsubType === "audio" as any }>Audio </option>
                                            <option value="video" selected={InputDetails.contentsubType === "video" as any }>Video</option>
                                        </select>
                                    </div>
                                </div>
                            </>
                        ) : null }
                    </div>


                    <div className="form-group mt-3">
                        <label>Content Name:</label>
                        <input type="text" name="contentName" placeholder="Enter Content Name" className="inputFiled form-control" value={InputDetails.contentName} onChange={handleInputChange} />
                    </div>

                    <div className="row">
                        <div className='col-md-4 mt-3'>
                            <label>Select Sub Topic</label>
                            <select name="topicID" className="inputFiled form-control" value={selectedSubTopic} onChange={(e) => handleSubTopicChange(e.target.value)} >
                                <option value="">Select Topic</option>
                                {subTopics.map((topic) => (
                                    <option key={topic.id} value={topic.id}>
                                        {topic.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4 mt-3">
                            <label>Topic:</label><br />
                            <input type="text" name="topicName" className="inputFiled form-control" value={InputDetails.topicName} readOnly />
                        </div>
                        <div className="col-md-4 mt-3">
                            <label>Subject:</label><br />
                            <input type="text" name="subject" className="inputFiled form-control" value={InputDetails.subject} readOnly />
                        </div>
                    </div>

                    {InputDetails.contentType === "textUrl" ? (
                        <div className='form-group mt-3'>
                        {/* <label>Content:</label><br /> */}


                        {/* <div className='form-group mt-3'> */}
                            <label>Content:</label><br />
                            <CKEditorComponent data={InputDetails.content} onDataChange={(newContent: any) => setInputDetails({ ...InputDetails, content: newContent })} />
                        {/* </div> */}

                    </div>

                        // <div className='form-group mt-3'>
                        //         <label>Content:</label><br />
                        //         <CKEditorComponent data={formData.content} onDataChange={(newContent: any) => setFormData({ ...formData, content: newContent })} />
                        //     </div>
                    ) : (
                        <div className='form-group mt-3'>
                            <label>Content Image and Video:</label><br />

                            <div>
                                <label>
                                    <input type="radio" value="file" name='file' checked={selectedInputType === 'file'} onChange={() => setInputType('file')} />
                                    File Upload
                                </label>
                                {InputDetails.contentsubType === "Video" ? (
                                    <label>
                                        <input
                                            type="radio" value="url" name='file' checked={selectedInputType === 'url'} onChange={() => setInputType('url')} />URL
                                    </label>
                                ) : null}
                            </div>

                            <div>
                                {selectedInputType === 'url' ? (
                                    <div>
                                        <input
                                            type="text"
                                            className='inputFiled form-control'
                                            placeholder="Paste YouTube video link here"
                                            value={InputDetails.content}
                                            onChange={(e) => handleMediaUpload(e.target.value)}
                                        />
                                    </div>
                                ) : (
                                    <div>
                                        {/* <input
                                            type='file'
                                            className='inputFiled form-control'
                                            placeholder='Enter File'
                                            name='file'
                                            onChange={handleFileUpload}
                                            accept='image/*'
                                        /> */}

                                        <FileUpload setFile={setFile} label="Upload File" fileType={directory} />

                                        {InputDetails.content && getEditor === false ? <a href='#'>File Uploaded : {InputDetails.content}</a> : null}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="form-group mt-3">
                        <label>AverageReadTime:</label><br />
                        <input type="time" name="averageReadTime" className="inputFiled form-control" value={InputDetails.averageReadTime} onChange={handleInputChange} />
                    </div>

                    {/* <GroupsComponent Groups={Groups} setGroups={setGroups} required /> */}

                    <GroupsComponent Groups={Groups} setGroups={setGroups} editValue={InputDetails.groups} />

                    <div className="form-group mt-3">
                        <label>Additional Information:</label><br />
                        <input type="text" name="additionalInformation" placeholder="Enter Additional Information" className="inputFiled form-control" value={InputDetails.additionalInformation} onChange={handleInputChange} />
                    </div>
                    <button style={{ marginTop: "20px" }} className="btn btn-primary" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateContent;