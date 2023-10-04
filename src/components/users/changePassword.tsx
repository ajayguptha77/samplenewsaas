import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { SpinningCircles } from 'react-loading-icons'
import Modal from 'react-bootstrap/Modal';
import {  API, graphqlOperation } from 'aws-amplify';
import {  updateUser } from '../../graphql/mutations';
import { getUser } from '../../graphql/queries';
import ContextData from '../useContext';
import md5 from 'md5';

interface UserDetails {
    id?: string;
    password: string;
  }

  const initialState: UserDetails = {  password: '' };

function ChangePassword() {
  const navigate = useNavigate();
  const { data } = useContext<any>(ContextData);

  const [InputDetails, setInputDetails] = useState<UserDetails>(initialState);

  const [Loader, setLoader] = useState(false);
  const [MobileNumber, checkMobNumber] = useState(false);
  
  useEffect(() => {
    async function provInfo() {
        try {
            const getCourseByID = await API.graphql(graphqlOperation(getUser, {id: data?.details?.id})) as any;
            setInputDetails(getCourseByID?.data?.getUser)
          } catch (err) {
            console.log('error fetching data', err);
          }
           
    }
    provInfo()
  }, []);


let name, value;
function RegisterInput(event: { target: { name: any; value: any; }; }){
      name = event.target.name;
      value = event.target.value;
      setInputDetails({
        ...InputDetails,
        [name] : value
    })     
  }

const UpdateUser = async (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    
    try {
       
        const updatedUser = {
            input: {
              id: data?.details?.id,
              password: md5(InputDetails.password)
            },
          };

        setInputDetails(initialState);

        const response: any = await API.graphql(graphqlOperation(updateUser, updatedUser ));
        if(response.data.updateUser){
            setLoader(false)
          navigate("/dashboard")
        }
    
      } catch (error) {
        console.error('Error updating course data:', error);
      }
   
}

  return (
    <div className='row col-md-12'>
        {Loader ?  
             <Modal size='sm' centered  show={Loader}>
                <Modal.Body>
                     <div className="form-group">
                        <h5><SpinningCircles   fill='#b3b3b3' style={{marginLeft:"20%", marginRight:"5%"}} />Loading</h5>
                   </div>                
               </Modal.Body>
            </Modal> 
          : null }
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='container mt-5'>
                    <h2>Change Password</h2>
                        
                        <div className="form-group mt-3">
                            <label>Password:</label>
                            <input type="password" className="inputFiled form-control" placeholder="Enter New Password" name="password" onChange={ (e) => {setInputDetails({ ...InputDetails, password : e.target.value}) } } />
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <button type="submit" onClick={ UpdateUser } className="btn btn-primary"> Update</button>
                            </div>
                        </div>
                </div>
            </div>
            
        </div>
  );
}

export default ChangePassword;
