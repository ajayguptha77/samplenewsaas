import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import { SpinningCircles } from 'react-loading-icons';
import Modal from 'react-bootstrap/Modal';
import { listCourses, listUsers } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../../graphql/mutations';
import md5 from 'md5';
import Departments from '../department';
import GroupsComponent from '../groups'; 
import Specilizations from '../specializations';
import BatchComponent from '../batches';
import AWS from "aws-sdk";
import {FileUpload, SendFile} from '../FileUpload';

interface Group {
  label: string;
  value: string;
}

interface UserDetails {
    id?: string;
    Groups: any;
    Batch: String;
    department: String;
    specialization: String;
    username: string;
    email: string;
    password: string;
    MobNumber: string;
  }
  
  const initialState: UserDetails = { MobNumber: '', Groups:[''], Batch: '', department:'', specialization:'', username:'', email:'', password:'' };
  
function Signup() {
  const navigate = useNavigate();
  const [Groups, setGroups] = useState<Group[]>([]);
  const [CourseSelected, setCourseSelected] = useState<Group[]>([]);
  const [selectedOption, setSelectedOption] = useState<Group | any>();
  const [selectedDepart, setselectedDepart] = useState<Group | any>();
  const [selectedSpecialization, setselectedSpecialization] = useState<Group | any>();
  const [InputDetails, setInputDetails] = useState<UserDetails>(initialState);
  const [Courses, setCourses] = useState([]);
  const [Loader, setLoader] = useState(false);
  const [MobileNumber, checkMobNumber] = useState(false);
  const [file, setFile] = useState<any>();

  const commonPermissions = { showInMenu: "0", create: "0", edit: "0", view: "0", publisher: "0", proctorAdmin: "0", evaluator: "0", download: "0", allow: "0", notallow: "0" };

 const permissionsData ={
  Jobs: { ...commonPermissions },
  Courses: { ...commonPermissions },
  Exams: { ...commonPermissions },
  Results: { ...commonPermissions },
  QuestionBank: { ...commonPermissions },
  Questions: { ...commonPermissions },
  ContentBank: { ...commonPermissions },
  Content: { ...commonPermissions },
  Groups: { ...commonPermissions },
  Tests: { ...commonPermissions },
  Drives: { ...commonPermissions },
  Student: { ...commonPermissions },
  Reports: { ...commonPermissions },
  StudentApprove: { ...commonPermissions },
  StudentReject: { ...commonPermissions },
  Tutor: { ...commonPermissions },
  Attendance: { ...commonPermissions },
  LeaderBoard: { ...commonPermissions },
};
 
  let courseOptions: Group[] | undefined;

  useEffect(() => {
    async function provInfo() {
    
    try {
        const AllCourses = await API.graphql(graphqlOperation(listCourses)) as any;
        setCourses(AllCourses.data.listCourses.items)

      } catch (err) {
        console.log('error fetching',err);
      }
    }
    provInfo();
  }, []);

  if (Courses) {
    courseOptions = Courses.map((option: any) => ({
      label: option.title,
      value: option.id,
    }));
  }

let name, value;
function RegisterInput(event: { target: { name: any; value: any; }; }){
    name = event.target.name;
    value = event.target.value;
    setInputDetails({
        ...InputDetails,
        [name] : value
    })     
}

  const Registration = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

  if(InputDetails.MobNumber.length !== 10){
    checkMobNumber(true)
  }else{
      setLoader(true)
    
    const GroupIDs: any = Groups.map((obj) => obj.value);
  const courseIDs: any = CourseSelected.map((obj) => obj.value);
 let fileName = "";
  if(file){
   fileName = Date.now()+file.name
  }
      
      
      
    const getDetails = {
      input: {
          email: InputDetails.email,
          password: md5(InputDetails.password),
          MobNumber: InputDetails.MobNumber,
          username: InputDetails.username,
          role: "student",
          status: 1,
          organisation: "",
          permissions: permissionsData,
          adminID: "",
          type: "",
          uploadType: "",
          Groups: GroupIDs,
          userID: "",
          hodID: "",
          tutorID: "",
          Batch: selectedOption ? selectedOption.value : "",
          department: selectedDepart ? selectedDepart.value : [""],
          specialization: selectedSpecialization ? selectedSpecialization.value : "",
          course: courseIDs,
          resume: fileName,
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
    const getResp: any = await API.graphql(
        graphqlOperation(createUser, getDetails)
      );
      console.log("getdetails",getResp)
      if(getResp.data.createUser){
          setLoader(false)
          if(file){
            await SendFile(file, fileName, "docs");
          }
          // navigate('/') 
            SendEmail(InputDetails.email, InputDetails.username, InputDetails.password)
            
      }
  }
    

  }
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
console.log("data",data)
} catch (error) {
console.error(error);
}
}



  return (
    <div className='row col-md-12'>
      {Loader ? (
        <Modal size='sm' centered show={Loader}>
          <Modal.Body>
            <div className='form-group'>
              <h5>
                <SpinningCircles fill='#b3b3b3' style={{ marginLeft: '20%', marginRight: '5%' }} />Loading
              </h5>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
      <div className='col-md-3'></div>
      <div className='col-md-6'>
        <div className='container mt-5'>
          <h2>Registration</h2>
        

          <BatchComponent selectedOption = {selectedOption} setSelectedOption={setSelectedOption} />
          <Departments selectedDepart = {selectedDepart} setselectedDepart={setselectedDepart}/>
          <Specilizations selectedSpecialization = {selectedSpecialization} setselectedSpecialization={setselectedSpecialization}/>        
          <GroupsComponent Groups={Groups} setGroups={setGroups} />

          <div className='form-group mt-3'>
            <label>Select Courses*:</label>
            <Multiselect
              isObject={true}
              onRemove={(removed) => { setCourseSelected(removed) }}
              onSelect={(add) => { setCourseSelected(add); }}
              options={courseOptions}
              displayValue='label'
              showCheckbox
            />
          </div>
          <div className='form-group mt-3'>
            <label>Username*:</label>
            <input
              type='text'
              className='inputFiled form-control'
              placeholder='Enter Username'
              name='username'
              onChange={RegisterInput}
              required
            />
          </div>
          <div className='form-group mt-3'>
            <label>Email*:</label>
            <input
              type='email'
              className='inputFiled form-control'
              placeholder='Enter Email'
              name='email'
              onChange={RegisterInput}
            />
          </div>
            <div className='form-group mt-3'>
              <label>Password*:</label>
              <input
                type='password'
                className='inputFiled form-control'
                placeholder='Enter Password'
                name='password'
                onChange={RegisterInput}
              />
            </div>
          <div className='form-group mt-3'>
            <label>Mobile Number*:</label>
            <input
              type='number'
              className='inputFiled form-control'
              placeholder='Enter Mobile Number'
              name='MobNumber'
              onChange={RegisterInput}
              required
            />
          </div>
          {MobileNumber ? <p style={{ color: 'red' }}>Note: Mobile Number must be 10 digits</p> : null}
        
            {/* <div className="form-group mt-3">
              <label>Resume:</label>
              <input type="file" className="inputFiled form-control" name="resume" onChange={handleFileChange} />
            </div> */}

          <FileUpload setFile = {setFile} label = "Upload Resume" fileType="doc" />

          <div className='row mt-3'>
            <div className='col-md-4'>
                <button type='submit' onClick={Registration} className='btn btn-primary'>
                  Register
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;