import React, { useState, useEffect, useContext } from 'react';
import ContextData from '../../useContext';
import { useNavigate } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import { SpinningCircles } from 'react-loading-icons';
import Modal from 'react-bootstrap/Modal';
import { listCourses, listUsers } from '../../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser, updateUser } from '../../../graphql/mutations';
import Papa from 'papaparse';
import md5 from 'md5';
import Departments from '../../department';
import GroupsComponent from '../../groups'; 
import Specilizations from '../../specializations';
import BatchComponent from '../../batches';

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
    status: number;
    permissions: any;
    adminID: string;
    type: string;
    emailIDs: any;
    uploadType: string;
    userID: string;
    hodID: string;
    tutorID: string;
    roleToAdd: string;
  }
  
  const initialState: UserDetails = { roleToAdd: '', MobNumber: '', Groups:[''], Batch: '', department:'', specialization:'', username:'', email:'', password:'', status:1, permissions:{}, adminID:'', tutorID:'', type:'', emailIDs:[''], uploadType:'', userID:'', hodID:'' };
  
function AddStudent() {
    const [csvData, setCSVData] = useState<any[]>([]);
    const { data } = useContext<any>(ContextData);
  const navigate = useNavigate();
  const [Groups, setGroups] = useState<Group[]>([]);
  const [CourseSelected, setCourseSelected] = useState<Group[]>([]);
  const [selectedOption, setSelectedOption] = useState<Group | any>();
  const [selectedDepart, setselectedDepart] = useState<Group | any>();
  const [hods, setHODs] = useState<UserDetails[] | undefined>();
  const [Tutors, setTutors] = useState<UserDetails[] | undefined>();
  const [selectedSpecialization, setselectedSpecialization] = useState<Group | any>();
  const [InputDetails, setInputDetails] = useState<UserDetails>(initialState);
  const [Admins, setAdmins] = useState<UserDetails[] | undefined>();
  const [Courses, setCourses] = useState([]);
  const [Loader, setLoader] = useState(false);
  const commonPermissions = { showInMenu: "0", create: "0", edit: "0", view: "0", publisher: "0", proctorAdmin: "0", evaluator: "0", download: "0", allow: "0", notallow: "0" };
  // const [MobileNumber, checkMobNumber] = useState(false);
  const permissionsData = {Jobs: { ...commonPermissions },
  Courses: { ...commonPermissions }, Exams: { ...commonPermissions }, Results: { ...commonPermissions }, QuestionBank: { ...commonPermissions }, Questions: { ...commonPermissions }, ContentBank: { ...commonPermissions }, Content: { ...commonPermissions }, Groups: { ...commonPermissions }, Tests: { ...commonPermissions }, Drives: { ...commonPermissions }, Student: { ...commonPermissions }, Reports: { ...commonPermissions }, StudentApprove: { ...commonPermissions }, StudentReject: { ...commonPermissions }, Tutor: { ...commonPermissions }, Attendance: { ...commonPermissions }, LeaderBoard: { ...commonPermissions },}
 
  let courseOptions: Group[] | undefined;

  useEffect(() => {
    async function provInfo() {
    
    if(data?.details?.role === "hod"){      
      let filterForTutor = {
        filter: {
          role: { eq: 'tutor', },
          hodID: { eq: data?.details?.id, },
          status: { eq: 1 }
        },
      }
      const AllTutors = await API.graphql(graphqlOperation(listUsers, filterForTutor)) as any;
        setTutors(AllTutors.data.listUsers.items)
    }

    

    
    if(data?.details?.role === "admin"){
      getData(data?.details?.id)
    }

    try {
      const filterVariables = {
        filter: {
          role: { eq: 'admin' },
          status: { eq: 1 }
        },
    }
        const AllAdmins = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
        setAdmins(AllAdmins.data.listUsers.items)
        
        const allCoursesData = await API.graphql(graphqlOperation(listCourses)) as any;
        setCourses(allCoursesData.data.listCourses.items)

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

  const Registration = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    console.log("input",InputDetails)

  const GroupIDs: any = Groups.map((obj: any) => obj.value);
  const courseIDs: any = CourseSelected.map((obj: any) => obj.value);
  if(InputDetails.roleToAdd === "tutor"){
    const filterVariables = {
      filter: {
        id: { eq: InputDetails.tutorID }
      },
  }
      const getHODID = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
      console.log("getHODID",getHODID)
      InputDetails.hodID = getHODID.data.listUsers.items[0].hodID
  }
  
      setLoader(true)
    const getDetails = {
      password: md5("123456"),
      MobNumber: "",
      username: "",
      role: 'student',
      status: 1,
      organisation: "",
      permissions: permissionsData,
      adminID: data.details.role === 'MA' ? InputDetails.adminID : data.details.role === 'admin' ? data.details.id : data.details.adminID,
      type: InputDetails.type,
      uploadType: InputDetails.uploadType,
      Groups: GroupIDs,
      userID: data?.details?.id,
      // hodID: data.details.role === 'MA' || data.details.role === 'admin' || data.details.role === 'tutor' ? InputDetails.hodID : data.details.role === 'hod' ? data.details.id : data.details.hodID,
      hodID: data.details.role === 'hod'  ? data.details.id : InputDetails.hodID,
      tutorID: data.details.role === 'MA' || data.details.role === 'admin' || data.details.role === 'hod' ? InputDetails.tutorID :  data.details.id,
      Batch: selectedOption ? selectedOption.value : "",
      department: selectedDepart ? selectedDepart.value : [""],
      specialization: selectedSpecialization ? selectedSpecialization.value : "",
      course: courseIDs,
      resume:"",
    }

    

      if (InputDetails.uploadType === 'individual') {
       
        for(const element of InputDetails.emailIDs){
          const GetInsertData = { ...getDetails, email: element };
          setInputDetails(initialState);
          console.log("get",GetInsertData)
          const existingUsers: any = await API.graphql(
            graphqlOperation(listUsers, {
              filter: {
                email: { eq: element }
              },
            })
          );
          console.log("exist",existingUsers)
          if (existingUsers.data.listUsers.items.length > 0) {
            console.log("already registered")
          }else{
        const getResponse: any = await API.graphql(
          graphqlOperation(createUser, { input: GetInsertData })
        );
        if(getResponse){
          SendEmail(element, getDetails.username, "123456")
          }
      
        }
        navigate("/studentList")
      }
        
      }else if(InputDetails.uploadType === 'bulk' || InputDetails.uploadType === 'withCampus' ){
          for(const element of csvData){
            if(element.role){
              getDetails.role = element.role
            }
            if(element.MobNumber){
              getDetails.MobNumber = element.MobNumber
            }
            if(element.username){
              getDetails.username = element.username
            }
            if(element.password){
              getDetails.password = element.password
            }

            if(element.adminID){
              getDetails.adminID = element.adminID
            }

            if(element.Groups){
              getDetails.Groups = element.Groups
            }

            if(element.Batch){
              getDetails.Batch = element.Batch
            }

            if(element.department){
              getDetails.department = element.department
            }

            if(element.specialization){
              getDetails.specialization = element.specialization
            }

            if(element.course){
              getDetails.course = element.course
            }

            let GetInsertData
            
            // if(element.email){
            GetInsertData = { ...getDetails, email: element.email };
            // }else{
              // GetInsertData = { ...getDetails, email: email };
            // }
          setInputDetails(initialState);

          const existingUsers: any = await API.graphql(
            graphqlOperation(listUsers, {
              filter: {
                email: { eq: GetInsertData.email },
              },
            })
          );
          if (existingUsers.data.listUsers.items.length > 0) {
            let GetInsertData = { id: existingUsers.data.listUsers.items[0].id, ...getDetails, email: element.email };
            
              setInputDetails(initialState);

              const getResponse: any = await API.graphql(graphqlOperation(updateUser, { input: GetInsertData }));
            console.log("get",getResponse)
          }else{
      
          const getResponse: any = await API.graphql(
            graphqlOperation(createUser, { input: GetInsertData })
          );
          console.log("get11",getResponse)
          if(getResponse){
          SendEmail(element.email, getDetails.username, element.password ? element.password : "123456")
          }
          
          }
          navigate("/studentList")
          }
          
      }else{
        alert("check and fill all the fields")
    }
    
  
}
  const EmailIDs = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const getEmails: any = event.target.value;
    InputDetails.emailIDs = getEmails.split('\n');
  };
const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;

        Papa.parse(content, {
          header: true,
          skipEmptyLines: true,
          complete: (result: any ) => {
            setCSVData(result.data);
          },
          error: (error: any) => {
            console.error('CSV parsing error:', error.message);
          },
        });
      };

      reader.readAsText(file);
    }
  };

  const getData = async (event: any) => {
    let filterForHOD = {
      filter: {
        role: {
          eq: 'hod',
        },
        adminID: {
          eq: event,
        },
        status: {
          eq: 1
        }
      },
    }
  
  const AllHods = await API.graphql(graphqlOperation(listUsers, filterForHOD)) as any;
  setHODs(AllHods.data.listUsers.items)
      
  let filterForTutor = {
    filter: {
      role: {
        eq: 'tutor',
      },
      adminID: {
        eq: event,
      },
      status: {
        eq: 1
      }
    },
  }

const AllTutors = await API.graphql(graphqlOperation(listUsers, filterForTutor)) as any;
setTutors(AllTutors.data.listUsers.items)

  }

  async function AdminInput(event: { target: { name: any; value: any; }; }){
    getData(event.target.value)
    setInputDetails({
      ...InputDetails,
      adminID : event.target.value
  }) 
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
          <div className='form-group mt-5'>
            <label>Upload Type*: </label>
            <br />
            <label className='mx-2'>
              <input type='radio' value='individual' name='uploadType' onChange={RegisterInput} /> Enter Individual
              Email ID's
            </label>
            <label className='mx-2'>
              <input type='radio' value='bulk' name='uploadType' onChange={RegisterInput} /> Using CSV without Campus
            </label>
            <label className='mx-2'>
              <input type='radio' value='withCampus' name='uploadType' onChange={RegisterInput} /> Using CSV
            </label>
          </div>
          { InputDetails.uploadType !== 'withCampus' ?
          <>
          { data?.details?.role === "MA" ?
          
          <div className='form-group mt-3'>
            <label>Select Admin*:</label>
            <select className='inputFiled form-control' name='adminID' onChange={AdminInput}>
              <option value=''>Select Admin</option>
              {Admins?.map((admin: any, index) => {
                return (
                  <option value={admin.id} key={admin.id}>
                    {admin.username}
                  </option>
                );
              })}
            </select>
          </div> : null}
          { data?.details?.role === "MA" || data?.details?.role === "admin" ?
          <div className='form-group mt-3'>
          <label>Select Role To Add Student*:</label>
          <select className='inputFiled form-control' name='roleToAdd' onChange={RegisterInput}>
            <option value=''>Select Role</option>
            <option value='hod'>HOD</option>
            <option value='tutor'>Tutor</option>
          </select>
        </div>
        
         : null}

          { ((data?.details?.role === "MA" && InputDetails?.roleToAdd === "hod") || (data?.details?.role === "admin" && InputDetails?.roleToAdd === "hod")) ?
          <div className='form-group mt-3'>
            <label>Select HOD:</label>
            <select className='inputFiled form-control' name='hodID' onChange={RegisterInput}>
              <option value=''>Select HOD</option>
              {hods?.map((hod: any, index) => {
                return (
                  <option value={hod.id} key={hod.id}>
                    {hod.username} {hod.email}
                  </option>
                );
              })}
            </select>
          </div> : null}

          { (data?.details?.role === "MA" && InputDetails?.roleToAdd === "tutor") || (data?.details?.role === "admin" && InputDetails?.roleToAdd === "tutor") || (data?.details?.role === "hod")?
          <div className='form-group mt-3'>
            <label>Select Tutor*:</label>
            <select className='inputFiled form-control' name='tutorID' onChange={RegisterInput}>
              <option value=''>Select Tutor</option>
              {Tutors?.map((tutor: any, index) => {
                return (
                  <option value={tutor.id} key={tutor.id}>
                    {tutor.username}  {tutor.email}
                  </option>
                );
              })}
            </select>
          </div> : null}
          {InputDetails.uploadType === 'individual' ? (
            <>
              <div className='form-group mt-3'>
                <label>Choose Type*: </label>
                <br />
                <label className='mx-2'>
                  <input
                    className='mx-2'
                    type='radio'
                    value='internal'
                    name='type'
                    onChange={RegisterInput}
                  />
                  Internal
                </label>
                <label className='mx-4'>
                  <input
                    className='mx-2'
                    type='radio'
                    value='external'
                    name='type'
                    onChange={RegisterInput}
                  />
                  External
                </label>
              </div>
              <div className='form-group mt-3'>
                <label>Enter Email ID's*:</label>
                <textarea
                  rows={4}
                  className='inputFiled form-control'
                  placeholder="Enter Email ID's"
                  name='emailIDs'
                  onChange={EmailIDs}
                />
              </div>
            </>
          ) : null}
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
          {/* <div className='form-group mt-3'>
            <label>Username*:</label>
            <input
              type='text'
              className='inputFiled form-control'
              placeholder='Enter Username'
              name='username'
              onChange={RegisterInput}
              required
            />
          </div> */}
          {/* <div className='form-group mt-3'>
            <label>Email*:</label>
            <input
              type='email'
              className='inputFiled form-control'
              placeholder='Enter Email'
              name='email'
              onChange={RegisterInput}
            />
          </div> */}
            {/* <div className='form-group mt-3'>
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
          </div> */}
          </>: null }
          {/* {MobileNumber ? <p style={{ color: 'red' }}>Note: Mobile Number must be 10 digits</p> : null} */}
          {InputDetails.uploadType === 'bulk' || InputDetails.uploadType === 'withCampus' ? (
            <div className='row mt-3'>
              <div className='col-md-4'>
                <input type='file' onChange={handleFileChange} />
              </div>
            </div>
          ) : null}
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

export default AddStudent;
