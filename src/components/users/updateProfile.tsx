import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { SpinningCircles } from 'react-loading-icons'
import Modal from 'react-bootstrap/Modal';
import {  API, graphqlOperation } from 'aws-amplify';
import {  updateUser } from '../../graphql/mutations';
import { getUser, listUsers } from '../../graphql/queries';
import ContextData from '../useContext';
import AWS from "aws-sdk";
import {FileUpload, updDelFile, SendFile} from '../FileUpload';

interface UserDetails {
    id?: string;
    organisation: string;
    username: string;
    email: string;
    MobNumber: string;
    resume: string
  }

  const initialState: UserDetails = { resume:'', MobNumber: '', organisation:'', username:'', email:'', };

function UpdateProfile() {
  const navigate = useNavigate();
  const { data } = useContext<any>(ContextData);

  const [InputDetails, setInputDetails] = useState<UserDetails>(initialState);
  const [file, setFile] = useState<any>();
  const [Loader, setLoader] = useState(false);
  const [MobileNumber, checkMobNumber] = useState(false);
  
  useEffect(() => {
    async function provInfo() {
        try {
          console.log("location.state.user_id",data.details.id)
            const getCourseByID = await API.graphql(graphqlOperation(getUser, {id: data?.details?.id})) as any;
            setInputDetails(getCourseByID?.data?.getUser)
            console.log("getCourseByID",getCourseByID)
            // setpermissionsData(getCourseByID?.data?.getUser?.permissions)
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

  console.log("input",InputDetails)

const UpdateUser = async (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    
    try {
        if(InputDetails.MobNumber.length !== 10){
            checkMobNumber(true)
        }else{
            setLoader(true)
            let fileName
            if(file){
              fileName = Date.now()+file.name
            }
            const fileUpload = InputDetails.resume
            
            
        const updatedUser = {
            input: {
              id: data?.details?.id,
              organisation: InputDetails.organisation,
              username: InputDetails.username,
              email: InputDetails.email,
              MobNumber: InputDetails.MobNumber,
              resume: fileName
            },
          };

        setInputDetails(initialState);

        
        const response: any = await API.graphql(graphqlOperation(updateUser, updatedUser ));
        console.log("response",response)
        if(response.data.updateUser && InputDetails.resume !== fileName){
          
            const getres = await SendFile(file,fileName,"docs")
            console.log("getres",getres)
            if(getres.status === 200){
              if(InputDetails?.resume){
                await updDelFile(InputDetails.resume, "docs" )
              }
            }
          
          setLoader(false)
          navigate("/dashboard")
        }
      
    }
      } catch (error) {
        console.error('Error updating course data:', error);
      }
   
}

const handleFileChange = (e: any) => {
  // Uploaded file
  const file = e.target.files[0];
  // Changing file state
  setFile(file);
};
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
                    <h2>Update Profile</h2>
                    {data?.details?.role === "admin" ?
                        <div className="form-group mt-5">
                            <label>Organisation Name:</label>
                            <input type="text" className="inputFiled form-control" placeholder="Enter Organisation Name" name="organisation" onChange={RegisterInput} defaultValue = {InputDetails ? InputDetails.organisation : undefined} />
                        </div> : null }
                        <div className="form-group mt-3">
                            <label>Username:</label>
                            <input type="text" className="inputFiled form-control" placeholder="Enter Username" name="username" onChange={RegisterInput} defaultValue = {InputDetails ? InputDetails.username : undefined} />
                        </div>
             
                        <div className="form-group mt-3">
                            <label>Email:</label>
                            <input type="email" className="inputFiled form-control" placeholder="Enter Email" name="email" onChange={RegisterInput} defaultValue = { InputDetails ? InputDetails.email : undefined} />
                        </div>
                        {data?.details?.role === "student" ?
                        <>
                        <FileUpload setFile = {setFile} label = "Upload Resume" fileType="doc" />
                        {/* <div className="form-group mt-3">
                            <label>Resume:</label>
                            <input type="file" className="inputFiled form-control" name="resume" onChange={handleFileChange} />
                            
                        </div> */}
                        { InputDetails.resume ? <a href='#'>File Uploaded : {InputDetails.resume}</a> : null }
                        </> : null }
                        <div className="form-group mt-3">
                            <label>Mobile Number:</label>
                            <input type="number" className="inputFiled form-control" placeholder="Enter Mobile Number" name="MobNumber" onChange={RegisterInput} defaultValue = { InputDetails ? InputDetails.MobNumber : undefined} />
                        </div>
                        {MobileNumber ? 
                            <p style={{color:"red"}}>Note : Mobile Number must be 10 digits</p>
                        : null }
                        
                         
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

export default UpdateProfile;
