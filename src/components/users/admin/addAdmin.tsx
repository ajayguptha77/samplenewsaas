import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { SpinningCircles } from 'react-loading-icons'
import Modal from 'react-bootstrap/Modal';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../../../graphql/mutations';
import md5 from 'md5';
import { listUsers } from '../../../graphql/queries';
import '../../../App.css'

import ContextData from '../../useContext';
import { UserPermissions } from '../permissions'; 
 
interface AdminDetails {
    id?: string;
    organisation: string;
    Groups: [string | null];
    username: string;
    email: string;
    password: string;
    MobNumber: string;
    permissions: any;
    type: string;
    uploadType: string;
    address: string;
  }
  
  const initialState: AdminDetails = { MobNumber: '', organisation:'', Groups:[''], username:'', email:'', password:'', permissions: {}, type:'', uploadType:'', address:'' };
 

function AddAdmin() {
  const navigate = useNavigate();
  const { data } = useContext<any>(ContextData);

  const fieldReq = 'This field is required *'
  const [inputErr, setInputErr]   =   useState({errors:{
      organisation: '',
      username: '',
      email: '',
      password: '',
      MobNumber: '',
      address:''
    }});

  const [InputDetails, setInputDetails] = useState<AdminDetails>(initialState);
  const [Loader, setLoader] = useState(false);
  const [MobileNumber, checkMobNumber] = useState(false);
  const [permissionsData, setPermissionsData] = useState<any>({});


  
  const updatePermissionsData = (newPermissionsData: any) => {
    setPermissionsData(newPermissionsData);
  };

    let name, value;
    function RegisterInput(event: { target: { name: any; value: any; }; }){
        name = event.target.name;
        value = event.target.value;
        setInputDetails({
            ...InputDetails,
            [name] : value
        })     
    }



const SendEmail = async (email: any, username: any, password: any) => {
    const EmailData = {
      requestBody:{
          email:email,
          username: username,
          password:password
      }
      
  }

  const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain, */*"
    },
    body: JSON.stringify(EmailData)
}

try {
  const response = await fetch('https://fvdqgrttka.execute-api.ap-south-1.amazonaws.com/dev/lms_send_email', options);                
  const data = await response.json();  
  // const data = result.data;
  // console.log("data",data)
} catch (error) {
  console.error(error);
}
  }

  console.log("permissionsData",permissionsData)

const Registration = async (e: { preventDefault: () => void; })=>{
    e.preventDefault();

    const {organisation, username, email, password, MobNumber, address}  = InputDetails

    if (!organisation || !username || !email || !password || !MobNumber || !address) {

      setInputErr({
        ...inputErr,
        errors: {
          organisation: fieldReq,
          username: fieldReq,
          email: fieldReq,
          password: fieldReq,
          MobNumber: fieldReq,
          address: fieldReq
        }
    })

    } else {

      try {

        if (InputDetails.MobNumber.length !== 10) {
            checkMobNumber(true)
        } else {
            setLoader(true)
             
        const getDetails = {
            input: {
                email: InputDetails.email,
                password: md5(InputDetails.password),
                MobNumber: InputDetails.MobNumber,
                username: InputDetails.username,
                role: "admin",  
                status: 1,  
                organisation: InputDetails.organisation,
                permissions: permissionsData,
                adminID: "",
                type: InputDetails.type,
                uploadType: InputDetails.uploadType,
                Groups: InputDetails.Groups,
                userID: data?.details?.id,
                hodID: "",
                tutorID: "",
                Batch: "",
                department: [],
                specialization: "",
                course: [],
                resume:"",
                address: InputDetails.address
            }
        }

        const existingUsers: any = await API.graphql(
            graphqlOperation(listUsers, {
              filter: {
                email: { eq: InputDetails.email },
              },
            })
          );
          if (existingUsers.data.listUsers.items.length > 0) {
            setLoader(false)
            console.log('Email already exists');
            alert("Email already exists")
          }else{
            const getAdmin: any = await API.graphql(
                graphqlOperation(createUser, getDetails)
              );
              if(getAdmin.data.createUser){
                  setLoader(false)
                  navigate('/adminList')
                    SendEmail(InputDetails.email, InputDetails.username, InputDetails.password)
                    
              }
          }
          
        
        }
      } catch (error) {
        console.log('Error creating :', error);
      }

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
            <div className='col-md-1'></div>
            <div className='col-md-5'>
                <div className='container mt-5'>
                    <h2>Registration</h2>
                        <div className="form-group mt-5">
                                <label>Organisation Name* :</label>
                                <input type="text" className="inputFiled form-control" placeholder="Enter Organisation Name" name="organisation" onChange={RegisterInput} />
                                { !InputDetails.organisation && <p className='text-danger input-err-status'>{inputErr.errors.organisation}</p>}
                            </div>
                         
                        <div className="form-group mt-3">
                            <label>Username* :</label>
                            <input type="text" className="inputFiled form-control" placeholder="Enter Username" name="username" onChange={RegisterInput} />
                            { !InputDetails.username && <p className='text-danger input-err-status'>{inputErr.errors.username}</p>}
                        </div>
             
                        <div className="form-group mt-3">
                            <label>Email* :</label>
                            <input type="email" className="inputFiled form-control" placeholder="Enter Email" name="email" onChange={RegisterInput} />
                            { !InputDetails.email && <p className='text-danger input-err-status'>{inputErr.errors.email}</p>}
                        </div>
                        <div className="form-group mt-3">
                            <label>Password* :</label>
                            <input type="password" className="inputFiled form-control" placeholder="Enter Password" name="password" onChange={RegisterInput} />
                            { !InputDetails.password && <p className='text-danger input-err-status'>{inputErr.errors.password}</p>}
                        </div>
                        
                        <div className="form-group mt-3">
                            <label>Mobile Number* :</label>
                            <input type="number" className="inputFiled form-control" placeholder="Enter Mobile Number" name="MobNumber" onChange={RegisterInput} />
                            { !InputDetails.MobNumber && <p className='text-danger input-err-status'>{inputErr.errors.MobNumber}</p>}
                        </div>
                        {MobileNumber ? <p className='text-danger input-err-status'>Note : Mobile Number must be 10 digits</p> : null }

                            <div className="form-group mt-3">
                              <label>Address:</label>
                              <textarea className="inputFiled form-control" placeholder="Enter Address" name="address" onChange={RegisterInput}></textarea>
                              { !InputDetails.address && <p className='text-danger input-err-status'>{inputErr.errors.address}</p>}
                            </div>
                       
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <button type="submit" onClick={Registration} className="btn btn-primary"> Register</button>
                            </div>
                        </div>
                </div>
            </div>
            <div className='col-md-5'>
                <UserPermissions permissionsData={permissionsData} onUpdatePermissionsData={updatePermissionsData} InputPermissions={""} />

                {/* <div className='container mt-5'>
                    <br/>
                    <h5>Permissions</h5>
                    <form method="post" >
                        <div className="form-group mt-5">
                            <table className='table table-bordered' style={{fontSize:"10px", fontWeight:"normal"}}>
                                <thead>
                                    <tr className='text-center' >
                                        <th></th>
                                        <th>Show in menu</th>
                                        <th>Create</th>
                                        <th>Edit</th>
                                        <th>View</th>
                                        <th>Publisher</th>
                                        <th>Proctor Admin</th>
                                        <th>Evaluator</th>
                                        <th>Download / Export</th>
                                        <th>Allow</th>
                                        <th>Not Allow</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    

                                    {Object.keys(permissionsData).map(permissionType => (
                                        <tr key={permissionType}>
                                          <td>{permissionType}</td>
                                          {Object.keys(permissionsData[permissionType as keyof PermissionsData] as PermissionDetails).map((permission,index) => (
                                            <td key={permission}>

                                                {
                                                    permission === "allow" || permission === "notallow" ?
                                                 
                                                    <input type="radio" name={`${permissionType}`} value={permissionsData[permissionType as keyof PermissionsData][permission as keyof PermissionDetails] === "0" ? "1" : "0"} className='mx-2'  disabled = { permissionType==="Reports" || permissionType==="StudentApprove" || permissionType==="StudentReject" || permissionType==="Tutor" || permissionType==="Attendance" || permissionType==="LeaderBoard" ? false :  true  }
                                                    onChange={ (e) => onchangePermission(e, permissionType, permission) }
                                                    /> 
                                                 
                                                :

                                                <input type="checkbox" name={permission} value={permissionsData[permissionType as keyof PermissionsData][permission as keyof PermissionDetails] === "0" ? "1" : "0"} className='mx-2'  onChange={ (e) => onchangePermission(e, permissionType, permission) }
                                                disabled = { permissionType==="Reports" || permissionType==="StudentApprove" || permissionType==="StudentReject" || permissionType==="Tutor" || permissionType==="Attendance" || permissionType==="LeaderBoard" ? true :  false  } /> 

                                                
                                                }
                                                </td>
                                          ))}
                                        </tr>
                                      ))}

                                </tbody>
                            </table>

                        </div>
                    </form>
                </div> */}
            </div>
        </div>
  );
}

export default AddAdmin;