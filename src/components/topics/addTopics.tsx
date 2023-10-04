import React, {  useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {  API, graphqlOperation } from 'aws-amplify';
import { createTopic } from '../../graphql/mutations';
import ContextData from '../useContext';

function AddTopics() {

    const navigate = useNavigate();
    const fieldReq = 'This field is required'
    const { data } = useContext<any>(ContextData);
    const [inputErr, setInputErr]   =   useState({errors:{
        name:''
    }});
    const [InputDetails, setInputDetails] = useState({
        name: '',
        status: 1,
        userID: data?.details?.id,
        adminID: data?.details?.role === "admin" ? data?.details?.id : data?.details?.adminID
    });

    const handleSubmit = async (e: React.FormEvent) => {
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
                const getResponse: any = await API.graphql(
                    graphqlOperation(createTopic, { input: InputDetails })
                  );
                  if(getResponse){
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
                <div className='container mt-5'>
                    <h2>Add Topic</h2>
                    <form method="post" onSubmit={handleSubmit}>
                        
                        <div className="form-group mt-3">
                            <label>Topic Name* :</label>
                            <input
                                type="text"
                                className="inputFiled form-control"
                                placeholder="Enter Topic Name"
                                name="name"
                                onChange={(e) => setInputDetails({ ...InputDetails, name: e.target.value })}
                            />
                            {!InputDetails.name && <p className='text-danger'>{inputErr.errors.name}</p>}
                        </div>
                        
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddTopics;