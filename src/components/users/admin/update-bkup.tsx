import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { SpinningCircles } from 'react-loading-icons'
import Modal from 'react-bootstrap/Modal';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { updateUser } from '../../../graphql/mutations';
import { getUser } from '../../../graphql/queries';

// import ContextData from '../../../useContext';

interface AdminDetails {
    id?: string;
    role: string;
    organisation: string;
    Groups: [string | null];
    username: string;
    email: string;
    password: string;
    MobNumber: string;
    status: number;
    permissions: any;
    adminID: string;
    type: string;
    emailIDs: [string];
    uploadType: string;
    userID: string;
    hodID: string;
  }

  
  
  const initialState: AdminDetails = { role: 'admin', MobNumber: '', organisation:'', Groups:[''], username:'', email:'', password:'', status:1, permissions: {Jobs:{read:'', delete:'', write:'', view:''}, Courses:{read:'', delete:'', write:'', view:''}, Exams:{read:'', delete:'', write:'', view:''}, Results:{read:'', delete:'', write:'', view:''}, Questions:{read:'', delete:'', write:'', view:''}, Pdf:{read:'', delete:'', write:'', view:''}, Videos:{read:'', delete:'', write:'', view:''}, Engagements:{read:'', delete:'', write:'', view:''}, Groups:{read:'', delete:'', write:'', view:''}}, adminID:'', type:'', emailIDs:[''], uploadType:'', userID:'', hodID:'' };

  interface PermissionDetails {
      read: string;
      delete: string;
      write: string;
      view: string;
  }

  interface PermissionAllow {
    allow: string;
    notallow: string;
}

  interface PermissionsData {
    [key: string]: PermissionDetails;
  }

  interface AllowPermissions {
    [key: string]: PermissionAllow;
  }


function UpdateAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
//   const { data, setData } = useContext(ContextData);

  const [InputDetails, setInputDetails] = useState<AdminDetails>(initialState);

  const [Loader, setLoader] = useState(false);
  const [MobileNumber, checkMobNumber] = useState(false);
  
  const [permissionsData, setpermissionsData] = useState<PermissionsData>({
    Jobs: { read: "0", delete: "0", write: "0", view: "0" },
    Courses: { read: "0", delete: "0", write: "0", view: "0" },
    Exams: { read: "0", delete: "0", write: "0", view: "0" },
    Results: { read: "0", delete: "0", write: "0", view: "0" },
    QuestionBank: { read: "0", delete: "0", write: "0", view: "0" },
    Questions: { read: "0", delete: "0", write: "0", view: "0" },
    ContentBank: { read: "0", delete: "0", write: "0", view: "0" },
    Content: { read: "0", delete: "0", write: "0", view: "0" },
    Engagements: { read: "0", delete: "0", write: "0", view: "0" },
    Groups: { read: "0", delete: "0", write: "0", view: "0" },
    Tests: { read: "0", delete: "0", write: "0", view: "0" },
    Drives:{ read: "0", delete: "0", write: "0", view: "0" },
    Student: { read: "0", delete: "0", write: "0", view: "0" },
  })

  const [permissions, setpermissions] = useState<AllowPermissions>({
    Reports: { allow: "0", notallow: "0" },
    StudentApprove: { allow: "0", notallow: "0" },
    StudentReject: { allow: "0", notallow: "0" },
    Tutor: { allow: "0", notallow: "0" },
    Attendance: { allow: "0", notallow: "0" },
    LeaderBoard: { allow: "0", notallow: "0" },
  })

  useEffect(() => {
    async function provInfo() {
        try {
          console.log("location.state.user_id",location.state.user_id)
            const getCourseByID = await API.graphql(graphqlOperation(getUser, {id: location.state.user_id})) as any;
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

  const onchangePermission = (e: { target: { name: any; value: any; }; },item: any, item1: any) => { 
    
    name = e.target.name;
    value = e.target.value;

  if(InputDetails.permissions[item][item1] === "1"){
    InputDetails.permissions[item][item1] = "0"
  }else{
    InputDetails.permissions[item][item1] = "1"
  }
}
const UpdateUser = async (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    
    try {
        if(InputDetails.MobNumber.length !== 10){
            checkMobNumber(true)
        }else{
            setLoader(true)
            
        const updatedUser = {
            input: {
              id: location.state.user_id,
              role: InputDetails.role,
              organisation: InputDetails.organisation,
              username: InputDetails.username,
              email: InputDetails.email,
              password: InputDetails.password,
              MobNumber: InputDetails.MobNumber,
              permissions: {
                Jobs: {
                  read: InputDetails.permissions.Jobs.read,
                  delete: InputDetails.permissions.Jobs.delete,
                  write: InputDetails.permissions.Jobs.write,
                  view: InputDetails.permissions.Jobs.view,
                },
                Courses: {
                  read: InputDetails.permissions.Courses.read,
                  delete: InputDetails.permissions.Courses.delete,
                  write: InputDetails.permissions.Courses.write,
                  view: InputDetails.permissions.Courses.view,
                },
                Exams: {
                  read: InputDetails.permissions.Exams.read,
                  delete: InputDetails.permissions.Exams.delete,
                  write: InputDetails.permissions.Exams.write,
                  view: InputDetails.permissions.Exams.view,
                },
                Results: {
                  read: InputDetails.permissions.Results.read,
                  delete: InputDetails.permissions.Results.delete,
                  write: InputDetails.permissions.Results.write,
                  view: InputDetails.permissions.Results.view,
                },
                Questions: {
                  read: InputDetails.permissions.Questions.read,
                  delete: InputDetails.permissions.Questions.delete,
                  write: InputDetails.permissions.Questions.write,
                  view: InputDetails.permissions.Questions.view,
                },
                Pdf: {
                  read: InputDetails.permissions.Pdf.read,
                  delete: InputDetails.permissions.Pdf.delete,
                  write: InputDetails.permissions.Pdf.write,
                  view: InputDetails.permissions.Pdf.view,
                },
                Videos: {
                  read: InputDetails.permissions.Videos.read,
                  delete: InputDetails.permissions.Videos.delete,
                  write: InputDetails.permissions.Videos.write,
                  view: InputDetails.permissions.Videos.view,
                },
                Engagements: {
                  read: InputDetails.permissions.Engagements.read,
                  delete: InputDetails.permissions.Engagements.delete,
                  write: InputDetails.permissions.Engagements.write,
                  view: InputDetails.permissions.Engagements.view,
                },
                Groups: {
                  read: InputDetails.permissions.Groups.read,
                  delete: InputDetails.permissions.Groups.delete,
                  write: InputDetails.permissions.Groups.write,
                  view: InputDetails.permissions.Groups.view,
                },
              }
            },
          };

        setInputDetails(initialState);

        const response: any = await API.graphql(graphqlOperation(updateUser, updatedUser ));
        if(response.data.updateUser){
            setLoader(false)
          navigate("/adminList")
        }
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
            <div className='col-md-1'></div>
            <div className='col-md-5'>
                <div className='container mt-5'>
                    <h2>Registration</h2>
                        <div className="form-group mt-5">
                                <label>Organisation Name:</label>
                                <input type="text" className="inputFiled form-control" placeholder="Enter Organisation Name" name="organisation" onChange={RegisterInput} defaultValue = {InputDetails ? InputDetails.organisation : undefined} />
                            </div>
                        <div className="form-group mt-3">
                            <label>Username:</label>
                            <input type="text" className="inputFiled form-control" placeholder="Enter Username" name="username" onChange={RegisterInput} defaultValue = {InputDetails ? InputDetails.username : undefined} />
                        </div>
             
                        <div className="form-group mt-3">
                            <label>Email:</label>
                            <input type="email" className="inputFiled form-control" placeholder="Enter Email" name="email" onChange={RegisterInput} defaultValue = { InputDetails ? InputDetails.email : undefined} />
                        </div>
                        {/* <div className="form-group mt-3">
                            <label>Password:</label>
                            <input type="text" className="inputFiled form-control" placeholder="Enter Password" name="password" onChange={RegisterInput} defaultValue = { InputDetails ? InputDetails.password : undefined}/>
                        </div> */}
                        
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
            <div className='col-md-5'>
                <div className='container mt-5'>
                    <br/>
                    <h5>Permissions</h5>
                    <form method="post" >
                        <div className="form-group mt-5">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr className='text-center'>
                                        <th></th>
                                        <th>Read</th>
                                        <th>Delete</th>
                                        <th>Write</th>
                                        <th>View</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                {Object.keys(permissionsData).map(permissionType => (
                                        <tr key={permissionType}>
                                          <td>{permissionType}</td>
                                          {Object.keys(permissionsData[permissionType as keyof PermissionsData] as PermissionDetails).map(permission => (
                                            <td key={permission}>
                                              {InputDetails?.permissions[permissionType][permission] !== "" ?
                                                <input type="checkbox" name={permission} value={InputDetails?.permissions[permissionType][permission] === "0" ? "1" : "0"} className='mx-2'  onChange={ (e) => onchangePermission(e, permissionType, permission) } defaultChecked={InputDetails?.permissions[permissionType][permission] === "1"} />
                                              : null }
                                            </td>
                                          ))}
                                        </tr>
                                      ))}
                                       
                                </tbody>
                            </table>

                            <table className='table table-bordered'>
                                <thead>
                                    <tr className='text-center'>
                                        <th></th>
                                        <th>Allow</th>
                                        <th>Don't Allow</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                {Object.keys(permissions).map(permissionType => (
                                        <tr key={permissionType}>
                                          <td>{permissionType}</td>
                                          {Object.keys(permissions[permissionType as keyof AllowPermissions] as PermissionAllow).map(permission => (
                                            <td key={permission}>
                                              {InputDetails?.permissions[permissionType][permission] !== "" ?
                                                <input type="checkbox" name={permission} value={InputDetails?.permissions[permissionType][permission] === "0" ? "1" : "0"} className='mx-2'  onChange={ (e) => onchangePermission(e, permissionType, permission) } defaultChecked={InputDetails?.permissions[permissionType][permission] === "1"} />
                                              : null }
                                            </td>
                                          ))}
                                        </tr>
                                      ))}
                                       
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default UpdateAdmin;
