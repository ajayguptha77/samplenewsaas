import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import ContextData from '../useContext';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { updateTopic } from '../../graphql/mutations';
import { getTopic } from '../../graphql/queries';




function UpdateTopic() {
    const location = useLocation();
    const fieldReq = 'This field is required'
    const [inputErr, setInputErr]   =   useState({errors:{
        name:''
    }});
    const navigate = useNavigate();
    const [InputDetails, setInputDetails] = useState({
        name: ''
    });
    const [GroupRes, setGroupRes] = useState(true);

    useEffect(() => {
        async function topics() {

            try {
                const getTopicByID = await API.graphql(graphqlOperation(getTopic, { id: location.state.id })) as any;
                setInputDetails(getTopicByID.data.getTopic)
                setGroupRes(true)
            } catch (err) {
                console.log('error fetching todos', err);
            }
        }
        topics()
    }, [GroupRes])

    console.log("grgggggggg ", InputDetails);


    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name } = InputDetails;

        if (!name) {
            setInputErr({
                ...inputErr,
                errors: {
                    name: fieldReq
                }
            })
        } else {
                    try{
                        const updatedTopic = {
                            input: {
                                id: location.state.id,
                                name: InputDetails.name,
                            }
                        }
    
                        const getResponse = await API.graphql(graphqlOperation(updateTopic, updatedTopic));
                        if (getResponse) {
                            navigate("/listTopics")
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
                        <label>TopicName* :</label>
                        <input
                            type="text"
                            className="inputFiled form-control"
                            placeholder="Enter topics name"
                            name="name"
                            onChange={(e) => setInputDetails({ ...InputDetails, name: e.target.value })}
                            value={InputDetails.name}
                        />
                         {!InputDetails.name && <p className='text-danger'>{inputErr.errors.name}</p>}
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
export default UpdateTopic;