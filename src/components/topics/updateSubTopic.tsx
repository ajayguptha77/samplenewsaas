import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import ContextData from '../useContext';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { updateSubTopic } from '../../graphql/mutations';
import { getSubTopic } from '../../graphql/queries';

function UpdateSubTopic() {
    const location = useLocation();
    const navigate = useNavigate();

    const fieldReq = 'This field is required';
    const [inputErr, setInputErr]   =   useState({errors:{
        name:'',
        subject:''
    }});

    const [InputDetails, setInputDetails] = useState({
        name: '',
        subject: ''
    });
    const [GroupRes, setGroupRes] = useState(true);

    useEffect(() => {
        async function subtopics() {

            try {
                const getTopicByID = await API.graphql(graphqlOperation(getSubTopic, { id: location.state.id })) as any;
                setInputDetails(getTopicByID.data.getSubTopic)
                setGroupRes(true)
            } catch (err) {
                console.log('error fetching todos', err);
            }
        }
        subtopics()
    }, [GroupRes])

    console.log("grgggggggg ", InputDetails);


    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        const {name, subject} = InputDetails;

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
                const updatedSubTopic = {
                    input: {
                        id: location.state.id,
                        name: InputDetails.name,
                        subject: InputDetails.subject
                    }
                }
        
                const getResponse = await API.graphql(graphqlOperation(updateSubTopic, updatedSubTopic));
                if (getResponse) {
                    navigate("/listSubTopics", { state: { topicID: location.state.topicID } });
                }
            }
            catch(error) {
                console.error(error)
            }
        }
       
    };

    return (
        <div className='row col-md-12'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='container mt-5'></div>
                <h2>Update Topic</h2>
                <form method="post" onSubmit={handleUpdate}>
                    <div className="form-group mt-3">
                        <label>Sub Topic Name* :</label>
                        <input
                            type="text"
                            className="inputFiled form-control"
                            placeholder="Enter subtopic name"
                            name="name"
                            onChange={(e) => setInputDetails({ ...InputDetails, name: e.target.value })}
                            value={InputDetails.name}
                        />
                           {!InputDetails.name && <p className='text-danger'>{inputErr.errors.name}</p>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Subject Name* :</label>
                        <input
                            type="text"
                            className="inputFiled form-control"
                            placeholder="Enter Subject Name"
                            name="subjectName"
                            onChange={(e) => setInputDetails({ ...InputDetails, subject: e.target.value })}
                            value={InputDetails.subject}
                        />
                           {!InputDetails.subject && <p className='text-danger'>{inputErr.errors.subject}</p>}
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default UpdateSubTopic;