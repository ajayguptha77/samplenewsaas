import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import ContextData from '../useContext';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { listGroups, listUsers, listTopics } from '../../graphql/queries'; // Import the listTopics query
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createBlog } from '../../graphql/mutations';
import { createSubTopic } from '../../graphql/mutations';


interface Topic {
    id: string;
    name: string;
    status: string;
}

function AddSubtopics() {
    const navigate = useNavigate();
    const location = useLocation();

    const fieldReq = 'This field is required';
    const [inputErr, setInputErr]   =   useState({errors:{
        name:'',
        subject:''
    }});
    

    // const [InputDetails, setInputDetails] = useState({
    //     name: '',
    // });

    const { data } = useContext<any>(ContextData);
    const [subTopic, setSubTopic] = useState({

        topicID: location.state.topicID,
        name: '',
        subject: '',
        status: 1,
        userID: data?.details?.id,

    });
    // console.log("topicID ", location.state.topicID);
    // console.log("subTopic is", subTopic)

    const [selectedTopic, setSelectedTopic] = useState<string>(''); // State to store the selected topic

    const [topics, setTopics] = useState<Topic[]>([]);

    console.log("topics is", topics)

    useEffect(() => {
        // Fetch the list of topics when the component mounts
        const fetchTopics = async () => {
            try {
                const response: any = await API.graphql(graphqlOperation(listTopics));
                const topicList: Topic[] = response.data.listTopics.items;
                setTopics(topicList);
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        };
        fetchTopics();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTopicID = e.target.value;
        setSelectedTopic(selectedTopicID);
        setSubTopic({ ...subTopic, topicID: selectedTopicID });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const {name, subject} = subTopic;

        if(!name || !subject) {
            setInputErr({
                ...inputErr,
                errors: {
                    name: fieldReq,
                    subject: fieldReq
                }
            })

        } else {
            try {
                const getResponse: any = await API.graphql(
                    graphqlOperation(createSubTopic, { input: subTopic })
                );
    
                //console.log("getresponse", getResponse)
                if (getResponse && getResponse.data && getResponse.data.createSubTopic) {
                    navigate("/listSubTopics", { state: { topicID: location.state.topicID } });
                } else if (getResponse && getResponse.errors) {
                    console.error("GraphQL errors:", getResponse.errors);
                } else {
                    console.error("Failed to create subtopic. Response:", getResponse);
                }
            } catch (error) {
                console.error("Error creating subtopic:", error);
            }

        }

       
    };



    return (
        <div className='row col-md-12'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='container mt-5'>
                    <h2>Add SubTopic</h2>
                    <form method="post" onSubmit={handleSubmit}>
                        {/* <div className='form-group mt-3'>
                            <label>Select Topic</label>
                            <select name="topicID" className="inputFiled form-control" value={selectedTopic} onChange={handleInputChange} >
                                <option value="">Select Topic</option>
                                {topics.map((topic) => (
                                    <option key={topic.id} value={topic.id}>
                                        {topic.name}
                                    </option>
                                ))}
                            </select>
                        </div> */}

                        <div className="form-group mt-3">
                            <label>Sub Topic Name* :</label>
                            <input
                                type="text"
                                className="inputFiled form-control"
                                placeholder="Enter Sub Topic Name"
                                name="subTopicName"
                                onChange={(e) =>
                                    setSubTopic({ ...subTopic, name: e.target.value })
                                }
                            />
                            {!subTopic.name && <p className='text-danger'>{inputErr.errors.name}</p>}
                        </div>

                        <div className="form-group mt-3">
                            <label>Subject Name* :</label>
                            <input
                                type="text"
                                className="inputFiled form-control"
                                placeholder="Enter Subject Name"
                                name="subjectName"
                                onChange={(e) =>
                                    setSubTopic({ ...subTopic, subject: e.target.value })
                                }
                            />
                            {!subTopic.subject && <p className='text-danger'>{inputErr.errors.subject}</p>}
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-primary">
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddSubtopics;