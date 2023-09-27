import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { SpinningCircles } from 'react-loading-icons'
import Modal from 'react-bootstrap/Modal';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { updateUser } from '../../../graphql/mutations';
import { getUser } from '../../../graphql/queries';
import { UpadatePermissions } from '../updatePermissions';
import '../../../App.css'

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
 address: string;
 }

 const commonPermissions = { showInMenu: "0", create: "0", edit: "0", view: "0", publisher: "0", proctorAdmin: "0", evaluator: "0", download: "0", allow: "0", notallow: "0" };
 
 const initialState: AdminDetails = { role: 'admin', MobNumber: '', organisation:'', Groups:[''], username:'', email:'', password:'', status:1, permissions: {Jobs: { ...commonPermissions },
 Courses: { ...commonPermissions }, Exams: { ...commonPermissions }, Results: { ...commonPermissions }, QuestionBank: { ...commonPermissions }, Questions: { ...commonPermissions }, ContentBank: { ...commonPermissions }, Content: { ...commonPermissions }, Groups: { ...commonPermissions }, Tests: { ...commonPermissions }, Drives: { ...commonPermissions }, Student: { ...commonPermissions }, Reports: { ...commonPermissions }, StudentApprove: { ...commonPermissions }, StudentReject: { ...commonPermissions }, Tutor: { ...commonPermissions }, Attendance: { ...commonPermissions }, LeaderBoard: { ...commonPermissions },}, adminID:'', type:'', emailIDs:[''], uploadType:'', userID:'', hodID:'', address:'' };

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
// const { data, setData } = useContext(ContextData);

const fieldReq = 'This field is required *'
const [inputErr, setInputErr] = useState({errors:{
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
 
 // const [permissionsData, setpermissionsData] = useState<PermissionsData>({
 // Jobs: { read: "0", delete: "0", write: "0", view: "0" },
 // Courses: { read: "0", delete: "0", write: "0", view: "0" },
 // Exams: { read: "0", delete: "0", write: "0", view: "0" },
 // Results: { read: "0", delete: "0", write: "0", view: "0" },
 // QuestionBank: { read: "0", delete: "0", write: "0", view: "0" },
 // Questions: { read: "0", delete: "0", write: "0", view: "0" },
 // ContentBank: { read: "0", delete: "0", write: "0", view: "0" },
 // Content: { read: "0", delete: "0", write: "0", view: "0" },
 // Engagements: { read: "0", delete: "0", write: "0", view: "0" },
 // Groups: { read: "0", delete: "0", write: "0", view: "0" },
 // Tests: { read: "0", delete: "0", write: "0", view: "0" },
 // Drives:{ read: "0", delete: "0", write: "0", view: "0" },
 // Student: { read: "0", delete: "0", write: "0", view: "0" },
 // })

 let [permissionsData, setPermissionsData] = useState<any>({});

 // const [permissions, setpermissions] = useState<AllowPermissions>({
 // Reports: { allow: "0", notallow: "0" },
 // StudentApprove: { allow: "0", notallow: "0" },
 // StudentReject: { allow: "0", notallow: "0" },
 // Tutor: { allow: "0", notallow: "0" },
 // Attendance: { allow: "0", notallow: "0" },
 // LeaderBoard: { allow: "0", notallow: "0" },
 // })

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

 console.log("InputDetails",InputDetails)
 console.log("permissionsData",permissionsData)

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

 const {organisation, username, email, password, MobNumber, address} = InputDetails

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
 
 if(InputDetails.MobNumber.length !== 10){
 checkMobNumber(true)
 }else{
 setLoader(true)
 let updatedUser
 if( Object.keys(permissionsData).length === 0){
 updatedUser = {
 input: {
 id: location.state.user_id,
 role: InputDetails.role,
 organisation: InputDetails.organisation,
 username: InputDetails.username,
 email: InputDetails.email,
 password: InputDetails.password,
 MobNumber: InputDetails.MobNumber,
 address: InputDetails.address
 },
 };
 }else{
 updatedUser = {
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
 showInMenu: permissionsData.Jobs.showInMenu,
 create: permissionsData.Jobs.create,
 edit: permissionsData.Jobs.edit,
 view: permissionsData.Jobs.view,
 publisher: permissionsData.Jobs.publisher,
 proctorAdmin: permissionsData.Jobs.proctorAdmin,
 evaluator: permissionsData.Jobs.evaluator,
 download: permissionsData.Jobs.download,
 allow: permissionsData.Jobs.allow,
 notallow: permissionsData.Jobs.notallow,
 },
 Courses: {
 showInMenu: permissionsData.Courses.showInMenu,
 create: permissionsData.Courses.create,
 edit: permissionsData.Courses.edit,
 view: permissionsData.Courses.view,
 publisher: permissionsData.Courses.publisher,
 proctorAdmin: permissionsData.Courses.proctorAdmin,
 evaluator: permissionsData.Courses.evaluator,
 download: permissionsData.Courses.download,
 allow: permissionsData.Courses.allow,
 notallow: permissionsData.Courses.notallow,
 },
 Exams: {
 showInMenu: permissionsData.Exams.showInMenu,
 create: permissionsData.Exams.create,
 edit: permissionsData.Exams.edit,
 view: permissionsData.Exams.view,
 publisher: permissionsData.Exams.publisher,
 proctorAdmin: permissionsData.Exams.proctorAdmin,
 evaluator: permissionsData.Exams.evaluator,
 download: permissionsData.Exams.download,
 allow: permissionsData.Exams.allow,
 notallow: permissionsData.Exams.notallow,
 },
 Results: {
 showInMenu: permissionsData.Results.showInMenu,
 create: permissionsData.Results.create,
 edit: permissionsData.Results.edit,
 view: permissionsData.Results.view,
 publisher: permissionsData.Results.publisher,
 proctorAdmin: permissionsData.Results.proctorAdmin,
 evaluator: permissionsData.Results.evaluator,
 download: permissionsData.Results.download,
 allow: permissionsData.Results.allow,
 notallow: permissionsData.Results.notallow,
 },
 QuestionBank: {
 showInMenu: permissionsData.QuestionBank.showInMenu,
 create: permissionsData.QuestionBank.create,
 edit: permissionsData.QuestionBank.edit,
 view: permissionsData.QuestionBank.view,
 publisher: permissionsData.QuestionBank.publisher,
 proctorAdmin: permissionsData.QuestionBank.proctorAdmin,
 evaluator: permissionsData.QuestionBank.evaluator,
 download: permissionsData.QuestionBank.download,
 allow: permissionsData.QuestionBank.allow,
 notallow: permissionsData.QuestionBank.notallow,
 },
 Questions: {
 showInMenu: permissionsData.Questions.showInMenu,
 create: permissionsData.Questions.create,
 edit: permissionsData.Questions.edit,
 view: permissionsData.Questions.view,
 publisher: permissionsData.Questions.publisher,
 proctorAdmin: permissionsData.Questions.proctorAdmin,
 evaluator: permissionsData.Questions.evaluator,
 download: permissionsData.Questions.download,
 allow: permissionsData.Questions.allow,
 notallow: permissionsData.Questions.notallow,
 },
 ContentBank: {
 showInMenu: permissionsData.ContentBank.showInMenu,
 create: permissionsData.ContentBank.create,
 edit: permissionsData.ContentBank.edit,
 view: permissionsData.ContentBank.view,
 publisher: permissionsData.ContentBank.publisher,
 proctorAdmin: permissionsData.ContentBank.proctorAdmin,
 evaluator: permissionsData.ContentBank.evaluator,
 download: permissionsData.ContentBank.download,
 allow: permissionsData.ContentBank.allow,
 notallow: permissionsData.ContentBank.notallow,
 },
 Content: {
 showInMenu: permissionsData.Content.showInMenu,
 create: permissionsData.Content.create,
 edit: permissionsData.Content.edit,
 view: permissionsData.Content.view,
 publisher: permissionsData.Content.publisher,
 proctorAdmin: permissionsData.Content.proctorAdmin,
 evaluator: permissionsData.Content.evaluator,
 download: permissionsData.Content.download,
 allow: permissionsData.Content.allow,
 notallow: permissionsData.Content.notallow,
 },
 Groups: {
 showInMenu: permissionsData.Groups.showInMenu,
 create: permissionsData.Groups.create,
 edit: permissionsData.Groups.edit,
 view: permissionsData.Groups.view,
 publisher: permissionsData.Groups.publisher,
 proctorAdmin: permissionsData.Groups.proctorAdmin,
 evaluator: permissionsData.Groups.evaluator,
 download: permissionsData.Groups.download,
 allow: permissionsData.Groups.allow,
 notallow: permissionsData.Groups.notallow,
 },
 Tests: {
 showInMenu: permissionsData.Tests.showInMenu,
 create: permissionsData.Tests.create,
 edit: permissionsData.Tests.edit,
 view: permissionsData.Tests.view,
 publisher: permissionsData.Tests.publisher,
 proctorAdmin: permissionsData.Tests.proctorAdmin,
 evaluator: permissionsData.Tests.evaluator,
 download: permissionsData.Tests.download,
 allow: permissionsData.Tests.allow,
 notallow: permissionsData.Tests.notallow,
 },
 Drives: {
 showInMenu: permissionsData.Drives.showInMenu,
 create: permissionsData.Drives.create,
 edit: permissionsData.Drives.edit,
 view: permissionsData.Drives.view,
 publisher: permissionsData.Drives.publisher,
 proctorAdmin: permissionsData.Drives.proctorAdmin,
 evaluator: permissionsData.Drives.evaluator,
 download: permissionsData.Drives.download,
 allow: permissionsData.Drives.allow,
 notallow: permissionsData.Drives.notallow,
 },
 Student: {
 showInMenu: permissionsData.Student.showInMenu,
 create: permissionsData.Student.create,
 edit: permissionsData.Student.edit,
 view: permissionsData.Student.view,
 publisher: permissionsData.Student.publisher,
 proctorAdmin: permissionsData.Student.proctorAdmin,
 evaluator: permissionsData.Student.evaluator,
 download: permissionsData.Student.download,
 allow: permissionsData.Student.allow,
 notallow: permissionsData.Student.notallow,
 },
 Reports: {
 showInMenu: permissionsData.Reports.showInMenu,
 create: permissionsData.Reports.create,
 edit: permissionsData.Reports.edit,
 view: permissionsData.Reports.view,
 publisher: permissionsData.Reports.publisher,
 proctorAdmin: permissionsData.Reports.proctorAdmin,
 evaluator: permissionsData.Reports.evaluator,
 download: permissionsData.Reports.download,
 allow: permissionsData.Reports.allow,
 notallow: permissionsData.Reports.notallow,
 },
 StudentApprove: {
 showInMenu: permissionsData.StudentApprove.showInMenu,
 create: permissionsData.StudentApprove.create,
 edit: permissionsData.StudentApprove.edit,
 view: permissionsData.StudentApprove.view,
 publisher: permissionsData.StudentApprove.publisher,
 proctorAdmin: permissionsData.StudentApprove.proctorAdmin,
 evaluator: permissionsData.StudentApprove.evaluator,
 download: permissionsData.StudentApprove.download,
 allow: permissionsData.StudentApprove.allow,
 notallow: permissionsData.StudentApprove.notallow,
 },
 StudentReject: {
 showInMenu: permissionsData.StudentReject.showInMenu,
 create: permissionsData.StudentReject.create,
 edit: permissionsData.StudentReject.edit,
 view: permissionsData.StudentReject.view,
 publisher: permissionsData.StudentReject.publisher,
 proctorAdmin: permissionsData.StudentReject.proctorAdmin,
 evaluator: permissionsData.StudentReject.evaluator,
 download: permissionsData.StudentReject.download,
 allow: permissionsData.StudentReject.allow,
 notallow: permissionsData.StudentReject.notallow,
 },
 Tutor: {
 showInMenu: permissionsData.Tutor.showInMenu,
 create: permissionsData.Tutor.create,
 edit: permissionsData.Tutor.edit,
 view: permissionsData.Tutor.view,
 publisher: permissionsData.Tutor.publisher,
 proctorAdmin: permissionsData.Tutor.proctorAdmin,
 evaluator: permissionsData.Tutor.evaluator,
 download: permissionsData.Tutor.download,
 allow: permissionsData.Tutor.allow,
 notallow: permissionsData.Tutor.notallow,
 },
 Attendance: {
 showInMenu: permissionsData.Attendance.showInMenu,
 create: permissionsData.Attendance.create,
 edit: permissionsData.Attendance.edit,
 view: permissionsData.Attendance.view,
 publisher: permissionsData.Attendance.publisher,
 proctorAdmin: permissionsData.Attendance.proctorAdmin,
 evaluator: permissionsData.Attendance.evaluator,
 download: permissionsData.Attendance.download,
 allow: permissionsData.Attendance.allow,
 notallow: permissionsData.Attendance.notallow,
 },
 LeaderBoard: {
 showInMenu: permissionsData.LeaderBoard.showInMenu,
 create: permissionsData.LeaderBoard.create,
 edit: permissionsData.LeaderBoard.edit,
 view: permissionsData.LeaderBoard.view,
 publisher: permissionsData.LeaderBoard.publisher,
 proctorAdmin: permissionsData.LeaderBoard.proctorAdmin,
 evaluator: permissionsData.LeaderBoard.evaluator,
 download: permissionsData.LeaderBoard.download,
 allow: permissionsData.LeaderBoard.allow,
 notallow: permissionsData.LeaderBoard.notallow,
 },
 },
 address: InputDetails.address
 },
 };
 }

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
 
}

const updatePermissionsData = (newPermissionsData: any) => {
 setPermissionsData(newPermissionsData);
};


 return (
 <div className='row col-md-12'>
 {Loader ? 
 <Modal size='sm' centered show={Loader}>
 <Modal.Body>
 <div className="form-group">
 <h5><SpinningCircles fill='#b3b3b3' style={{marginLeft:"20%", marginRight:"5%"}} />Loading</h5>
 </div> 
 </Modal.Body>
 </Modal> 
 : null }
 <div className='col-md-1'></div>
 <div className='col-md-5'>
 <div className='container mt-5'>
 <h2>Update</h2>
 <div className="form-group mt-5">
 <label>Organisation Name:</label>
 <input type="text" className="inputFiled form-control" placeholder="Enter Organisation Name" name="organisation" onChange={RegisterInput} defaultValue = {InputDetails ? InputDetails.organisation : undefined} />
 { !InputDetails.organisation && <p className='text-danger input-err-status'>{inputErr.errors.organisation}</p>}
 </div>
 <div className="form-group mt-3">
 <label>Username:</label>
 <input type="text" className="inputFiled form-control" placeholder="Enter Username" name="username" onChange={RegisterInput} defaultValue = {InputDetails ? InputDetails.username : undefined} />
 { !InputDetails.username && <p className='text-danger input-err-status'>{inputErr.errors.username}</p>}
 </div>
 
 <div className="form-group mt-3">
 <label>Email:</label>
 <input type="email" className="inputFiled form-control" placeholder="Enter Email" name="email" onChange={RegisterInput} defaultValue = { InputDetails ? InputDetails.email : undefined} />
 { !InputDetails.email && <p className='text-danger input-err-status'>{inputErr.errors.email}</p>}
 </div>
 {/* <div className="form-group mt-3">
 <label>Password:</label>
 <input type="text" className="inputFiled form-control" placeholder="Enter Password" name="password" onChange={RegisterInput} defaultValue = { InputDetails ? InputDetails.password : undefined}/>
 </div> */}
 
 <div className="form-group mt-3">
 <label>Mobile Number:</label>
 <input type="number" className="inputFiled form-control" placeholder="Enter Mobile Number" name="MobNumber" onChange={RegisterInput} defaultValue = { InputDetails ? InputDetails.MobNumber : undefined} />
 { !InputDetails.MobNumber && <p className='text-danger input-err-status'>{inputErr.errors.MobNumber}</p>}
 </div>
 {MobileNumber ? 
 <p className='text-danger input-err-status'>Note : Mobile Number must be 10 digits</p>
 : null }
 
 <div className="form-group mt-3">
 <label>Address:</label>
 <textarea className="inputFiled form-control" placeholder="Enter Address" name="address" onChange={RegisterInput} defaultValue = { InputDetails ? InputDetails.address : undefined}></textarea>
 { !InputDetails.address && <p className='text-danger input-err-status'>{inputErr.errors.address}</p>}
 </div>
 
 <div className="row mt-3">
 <div className="col-md-4">
 <button type="submit" onClick={UpdateUser} className="btn btn-primary"> Update</button>
 </div>
 </div>
 </div>
 </div>
 <div className='col-md-5'>
 
 <UpadatePermissions permissionsData={permissionsData} onUpdatePermissionsData={updatePermissionsData} InputPermissions={InputDetails?.permissions} />

 </div>
 </div>
 );
}

export default UpdateAdmin;