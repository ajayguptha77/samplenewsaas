import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTopic, listSubTopics, listTopics } from '../../graphql/queries';
import ContextData from '../useContext';
import { createContent } from '../../graphql/mutations';
import GroupsComponent from '../groups';
import { FileUpload, SendFile } from '../FileUpload';
import CKEditorComponent from './CKEditorComponent';
import { format } from 'path';

interface SubTopic {
    id: string;
    name: string;
    subject: string;
    topicID: string;
    status: number;
}

interface Topic {
    id: string;
    name: string;
    status: number;
}

interface Group {
    label: string;
    value: string;
}

interface Content {
    id?: string;
    contentBankID: string;
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

function AddContent() {
    const location = useLocation();
    const navigate = useNavigate();
    const { data } = useContext<any>(ContextData);
    const [formData, setFormData] = useState<Content>({
        contentBankID: '',
        contentType: '',
        contentsubType: '',
        contentName: '',
        subTopic: '',
        topicId: '',
        topicName: '',
        subject: '',
        content: '',
        averageReadTime: '',
        groups: '',
        additionalInformation: '',
    });



    const [selectedSubTopic, setSelectedSubTopic] = useState<string>('');
    const [selectedSubject, setSelectedSubject] = useState<string>('');
    const [subTopics, setSubTopics] = useState<SubTopic[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [Groups, setGroups] = useState<Group[]>([]);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [file, setFile] = useState<any>();
    // const [imageFile, setImageFile] = useState(null);
    const [directory, setDirectory] = useState('');


    // console.log("formData", formData);
    // console.log('directory', directory);

    const contentBankid = location.state.contentBankid;

console.log("content bankid", contentBankid);

    useEffect(() => {

        const fetchSubTopics = async () => {
            try {
                const response: any = await API.graphql(graphqlOperation(listSubTopics));
                if (response?.data?.listSubTopics?.items) {
                    const subtopicList = response?.data?.listSubTopics?.items;
                    setSubTopics(subtopicList);
                }

                const topicResponse: any = await API.graphql(graphqlOperation(listTopics));
                if (topicResponse?.data?.listOtherData?.items) {
                    const otherDataList = topicResponse?.data?.listOtherData?.items;
                    // Process and set the other data as needed
                }
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        };
        fetchSubTopics();
    }, []);

    const handleSubTopicChange = async (selectedSubTopicID: string) => {
        setSelectedSubTopic(selectedSubTopicID);

        const selectedSubtopicObject = subTopics.find((subTopic) => subTopic.id === selectedSubTopicID);

        if (selectedSubtopicObject) {
            const getTopicInfo = await API.graphql(graphqlOperation(getTopic, { id: selectedSubtopicObject.topicID })) as any;
            const updatedFormData: Content = {
                ...formData,
                subTopic: selectedSubTopicID,
                topicId: selectedSubtopicObject.topicID,
                topicName: getTopicInfo.data.getTopic.name,
                subject: selectedSubtopicObject.subject,
            };
            setFormData(updatedFormData);
            setSelectedSubject(selectedSubtopicObject.subject);
        }
    };




    async function uploadImage(file: { name: string; }) {
        try {
            const result = await Storage.put(file.name, file);
            return result.key;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    }
    function handleJoditChange(value: string) {
        const event: any = {
            target: {
                name: 'description',
                value: value,
            },
        };
        setFormData({ ...formData, ...event });
    }

    // console.log("file", file)
    const [selectedInputType, setSelectedInputType] = useState<'url' | 'file'>('file');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const GroupIDs: any = Groups.map((obj) => obj.value);
        const getDetails: Content = { ...formData };

        const contentBankid = location.state.contentBankid;
        let fileName;

        if (file) {
            fileName = Date.now() + file.name
            await SendFile(file, fileName, directory);
        }

        // console.log("formdata content", formData) 


        const insertData = {
            input: {
                contentBankID: contentBankid,
                contentType: formData.contentType,
                contentsubType: formData.contentsubType,
                contentName: formData.contentName,
                subTopic: formData.subTopic,
                topic: formData.topicId,
                subject: formData.subject,
                adminID: data?.details?.role === "admin" ? data?.details?.id : data?.details?.adminID,
                userID: data?.details?.id,
                // content: formData.content,
                content: formData.contentType === "textUrl" ? formData.content :  fileName,
                averageReadTime: formData.averageReadTime,
                groups: GroupIDs,
                additionalInformation: formData.additionalInformation
            }
        }
            console.log("insertData", insertData);

        

        // Add code to submit the form data to your API or perform other actions here
        const getResponse: any = await API.graphql(
            graphqlOperation(createContent, insertData)
        );

        console.log("getResponse", getResponse)
        if (getResponse && getResponse.data && getResponse.data.createContent) {
            navigate("/listContents", { state: { contentBankid: location.state.contentBankid } })
        }
    };



    const handleContentChange = (data: string) => {
        setFormData({ ...formData, content: data });
    };

    const handleMediaUpload = (value: string) => {
        // console.log("formdata content", value) 
        setFormData({ ...formData, content: value });
    };

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        // console.log("file", file);
        if (file) {
            setSelectedImage(file);
            setFormData({ ...formData, content: file.name }); // Update content with the URL
        }
    };



    const setInputType = (inputType: 'url' | 'file') => {
        setSelectedInputType(inputType);
    };

    const docUpdate = (sub: any) => {

        setFormData({ ...formData, contentsubType: sub })

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
            <div className='col-md-8'>
                <div className='container mt-5'></div>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {formData.contentType === 'document' ? (
                            <>
                                <div className="col-md-6 mt-3">
                                    <div className="form-group mt-3">
                                        <label>ContentType*:</label>
                                        <select
                                            className="inputField form-control"
                                            name="contentType"
                                            onChange={(e) =>
                                                setFormData({ ...formData, contentType: e.target.value })
                                            }
                                            required
                                        >
                                            <option value="">Select ContentType</option>
                                            <option value="document">Document</option>
                                            <option value="media">Media </option>
                                            <option value="textUrl"> Text/Url </option>
                                        </select>
                                    </div>
                                </div>

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
                                            <option value="pdf">PDF</option>
                                            <option value="doc">Word </option>
                                            <option value="excel">Excel</option>
                                            <option value="ppt"> Powerpoint </option>
                                        </select>
                                    </div>
                                </div>
                            </>
                        ) : formData.contentType === 'media' ? (
                            <>
                                <div className="col-md-6 mt-3">
                                    <div className="form-group mt-3">
                                        <label>ContentType*:</label>
                                        <select
                                            className="inputField form-control"
                                            name="contentType"
                                            onChange={(e) =>
                                                setFormData({ ...formData, contentType: e.target.value })
                                            }
                                            required
                                        >
                                            <option value="">Select ContentType</option>
                                            <option value="document">Document</option>
                                            <option value="media">Media </option>
                                            <option value="textUrl"> Text/Url </option>
                                        </select>
                                    </div>
                                </div>
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
                                            <option value="img">Image</option>
                                            <option value="audio">Audio </option>
                                            <option value="video">Video</option>
                                        </select>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="col-md-12 mt-3">
                                <div className="form-group mt-3">
                                    <label>ContentType*:</label>
                                    <select
                                        className="inputField form-control"
                                        name="contentType"
                                        onChange={(e) =>
                                            setFormData({ ...formData, contentType: e.target.value })
                                        }
                                        required
                                    >
                                        <option value="">Select ContentType</option>
                                        <option value="document">Document</option>
                                        <option value="media">Media</option>
                                        <option value="textUrl"> Text/Url </option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>



                    <div className="form-group mt-3">
                        <label>Content Name:</label>
                        <input type="text" name="contentName" placeholder="Enter Content Name" className="inputFiled form-control" value={formData.contentName} onChange={(e) => setFormData({ ...formData, contentName: e.target.value })} required />
                    </div>

                    <div className="row">
                        <div className='col-md-4 mt-3'>
                            <label>Select Sub Topic</label>
                            <select name="topicID" className="inputFiled form-control" value={selectedSubTopic} onChange={(e) => handleSubTopicChange(e.target.value)} required>
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
                            <input type="text" name="topic" className="inputFiled form-control" value={formData.topicName} readOnly />
                        </div>
                        <div className="col-md-4 mt-3">
                            <label>Subject:</label><br />
                            <input type="text" name="subject" className="inputFiled form-control" value={selectedSubject} readOnly />
                        </div>
                    </div>

                    {formData.contentType === "textUrl" ? 
                        <div className='form-group mt-3'>
                            <label>Content:</label><br />


                            <div className='form-group mt-3'>
                                <label>Content:</label><br />
                                <CKEditorComponent data={formData.content} onDataChange={(newContent: any) => setFormData({ ...formData, content: newContent })} />
                            </div>

                        </div>
                        :


                        <div className='form-group mt-3'>
                            {/* <label>Content Image and Video:</label><br /> */}

                            {/* <div>

                                <label>
                                    <input type="radio" value="file" name='file' checked={selectedInputType === 'file'} onChange={() => setInputType('file')} required />
                                    File Upload
                                </label>
                                {formData.contentsubType === "Video" ?
                                    <label>
                                        <input
                                            type="radio" value="url" name='file' checked={selectedInputType === 'url'} onChange={() => setInputType('url')} required />URL
                                    </label>
                                    : null}
                            </div> */}

                            {/* {formData.contentsubType === "Video" ?( */}
                            <div>
                                {selectedInputType === 'url' ? (
                                    <div>
                                        <input
                                            type="text"
                                            className='inputFiled form-control'
                                            placeholder="Paste YouTube video link here"
                                            value={formData.content}
                                            onChange={(e) => handleMediaUpload(e.target.value)}
                                            required />
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
                                            required /> */}

                                        {/* {directory} */}

                                        <FileUpload setFile={setFile} label="Upload File" fileType={directory} />
                                    </div>
                                )}
                            </div>
                            {/* ):(
                                <div>
                                    <input
                                        type='file'
                                        className='inputFiled form-control'
                                        placeholder='Enter File'
                                        name='file'
                                        onChange={handleFileUpload}
                                        accept='image/*'
                                    />
                                </div>
                            )}  */}

                        </div>
                    }

                    <div className="form-group mt-3">
                        <label>AverageReadTime:</label><br />
                        <input type="time" name="averageReadTime" className="inputFiled form-control" value={formData.averageReadTime} onChange={(e) => setFormData({ ...formData, averageReadTime: e.target.value })} required />
                    </div>
                    <GroupsComponent Groups={Groups} setGroups={setGroups} required />

                    <div className="form-group mt-3">
                        <label>Additional Information:</label><br />
                        <input type="text" name="additionalInformation" placeholder="Enter Additional Information" className="inputFiled form-control" value={formData.additionalInformation} onChange={(e) => setFormData({ ...formData, additionalInformation: e.target.value })} required />
                    </div>

                    {/* <FileUpload setFile = {setFile} /> */}
                    <button className="btn btn-primary" style={{ marginTop: '20px' }} type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddContent;