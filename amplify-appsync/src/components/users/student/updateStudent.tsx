import React, { useState, useEffect, useContext } from 'react';
import ContextData from '../../useContext';
import Select from 'react-select';
import { useNavigate, useLocation } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import { SpinningCircles } from 'react-loading-icons';
import Modal from 'react-bootstrap/Modal';
import { getUser, listBatches, listCourses, listDepartments, listGroups, listSpecializations, listUsers } from '../../../graphql/queries';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createBatch, createDepartment, createGroup, createSpecialization, createUser, updateUser } from '../../../graphql/mutations';
import Papa from 'papaparse';
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
    course: any;
    tutorID: string;
    roleToAdd: string
  }
  
  const initialState: UserDetails = { roleToAdd: '', MobNumber: '', tutorID:'', Groups:[''], course:[''], Batch: '', department:'', specialization:'', username:'', email:'', password:'', status:1, permissions:{}, adminID:'', type:'', emailIDs:[''], uploadType:'', userID:'', hodID:'' };
  
function UpdateStudent() {
  const navigate = useNavigate();
  const location = useLocation();
//   const [data, setData] = useContext(ContextData);
  const [Groups, setGroups] = useState<Group[]>([]);

  const [CourseSelected, setCourseSelected] = useState<Group[]>([]);
  const [hods, setHODs] = useState<UserDetails[] | undefined>();
  const [Tutors, setTutors] = useState<UserDetails[] | undefined>();
  const [selectedOption, setSelectedOption] = useState<Group | any>();
  const [selectedDepart, setselectedDepart] = useState<Group | any>();
  const [selectedSpecialization, setselectedSpecialization] = useState<Group | any>();
  const [InputDetails, setInputDetails] = useState<UserDetails>(initialState);
  const [Admins, setAdmins] = useState<UserDetails[] | undefined>();
  const [Courses, setCourses] = useState([]);
  const [Loader, setLoader] = useState(false);
  const [MobileNumber, checkMobNumber] = useState(false);
  const { data } = useContext<any>(ContextData);

  let getCoursesObj: Group[] | undefined;
 
  let courseOptions: Group[] | undefined;

  useEffect(() => {
    async function provInfo() {
    const filterVariables = {
        filter: {
          role: {
            eq: 'admin'
          },
          status: {
            eq: 1
          }
        },
    }

    

    try {
        const AllAdmins = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
        setAdmins(AllAdmins.data.listUsers.items)

        const getUserByID = await API.graphql(graphqlOperation(getUser, {id: location.state.id})) as any;
        setInputDetails(getUserByID?.data?.getUser)
        console.log(getUserByID?.data?.getUser)

        getData(getUserByID?.data?.getUser?.adminID)

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

    if (courseOptions && InputDetails?.course) {
        let getEnrollDetails = InputDetails.course;
        getCoursesObj = courseOptions.filter((obj1) =>
          getEnrollDetails.some((obj2: any) => obj1.value === obj2)
        );
      }
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

async function HODInput(event: { target: { name: any; value: any; }; }){
  
  let filterForTutor = {
    filter: {
      role: {
        eq: 'tutor',
      },
      hodID: {
        eq: event.target.value,
      },
      status: {
        eq: 1
      }
    },
  }
  
  const AllTutors = await API.graphql(graphqlOperation(listUsers, filterForTutor)) as any;
  setTutors(AllTutors.data.listUsers.items)
  
  setInputDetails({
    ...InputDetails,
    hodID : event.target.value
}) 
}

async function AdminInput(event: { target: { name: any; value: any; }; }){
  getData(event.target.value)
  
  setInputDetails({
    ...InputDetails,
    adminID : event.target.value
}) 
}

  const UpdateSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
        if(InputDetails.MobNumber.length !== 10){
            checkMobNumber(true)
        }else{
            setLoader(true)
            
            const GroupIDs: any = Groups.map((obj) => obj.value);
            const courseIDs: any = CourseSelected.map((obj) => obj.value);
        const updatedUser = {
            input: {
              id: location.state.id,
              tutorID: InputDetails.tutorID,
              hodID: InputDetails.hodID,
              Groups: Groups.length ? GroupIDs : InputDetails.Groups,
              username: InputDetails.username,
              email: InputDetails.email,
              password: InputDetails.password,
              MobNumber: InputDetails.MobNumber,
              course: CourseSelected.length ? courseIDs : InputDetails.course,      
              Batch: selectedOption.value,
              department: selectedDepart.value,
              specialization: selectedSpecialization.value,       
            },
          };

        setInputDetails(initialState);

        const response: any = await API.graphql(graphqlOperation(updateUser, updatedUser ));
        if(response.data.updateUser){
            setLoader(false)
          navigate("/studentList")
        }
    }
      } catch (error) {
        console.error('Error updating data:', error);
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
          <h2>Update</h2>        
          { data?.details?.role === "MA" ? 
          <>
          <div className='form-group mt-3'>
            <label>Select Admin*:</label>
            <select className='inputFiled form-control' name='adminID' onChange={AdminInput}>
              <option value=''>Select Admin</option>
              {Admins?.map((admin: any, index) => {
                return (
                  <option value={admin.id} key={admin.id} selected={InputDetails?.adminID === admin.id}>
                    {admin.username}
                  </option>
                );
              })}
            </select>
          </div> 
          </>: null } 
          { data?.details?.role === "MA" || data?.details?.role === "admin" ? 
          <>
          <div className='form-group mt-3'>
            <label>Select Role To Add Student*:</label>
            <select className='inputFiled form-control' name='roleToAdd' onChange={RegisterInput}>
              <option value=''>Select Role</option>
              <option value='hod' selected={!!InputDetails?.hodID}>HOD</option>
              <option value='tutor' selected={InputDetails?.tutorID ? true : false}>Tutor</option>
            </select>
          </div>
          </>: null } 

        {
          (data?.details?.role === "MA" || data?.details?.role === "admin") && (InputDetails.roleToAdd === "hod" || InputDetails.hodID) ?
          <div className='form-group mt-3'>
            <label>Select HOD:</label>
            <select className='inputFiled form-control' name='hodID' onChange={HODInput}>
              <option value=''>Select HOD</option>
              {hods?.map((hod: any, index) => {
                return (
                  <option value={hod.id} key={hod.id} selected={InputDetails?.hodID === hod.id}>
                    {hod.username} {hod.email}
                  </option>
                );
              })}
            </select>
          </div>
          : null}

          { (data?.details?.role === "MA" || data?.details?.role === "admin") && (InputDetails.roleToAdd === "tutor" || InputDetails.tutorID) ?
          <div className='form-group mt-3'>
          <label>Select Tutor*:</label>
          <select className='inputFiled form-control' name='tutorID' onChange={RegisterInput}>
            <option value=''>Select Tutor</option>
            {Tutors?.map((tutor: any, index) => {
              return (
                <option value={tutor.id} key={tutor.id} selected={InputDetails?.tutorID === tutor.id}>
                  {tutor.username}  {tutor.email}
                </option>
              );
            })}
          </select>
        </div>
        : null}
          <BatchComponent selectedOption = {selectedOption} setSelectedOption={setSelectedOption} editValue = {InputDetails.Batch} />
          <Departments selectedDepart = {selectedDepart} setselectedDepart={setselectedDepart} editValue = {InputDetails.department} />
          <Specilizations selectedSpecialization = {selectedSpecialization} setselectedSpecialization={setselectedSpecialization} editValue = {InputDetails.specialization}/>        
          <GroupsComponent Groups={Groups} setGroups={setGroups} editValue = {InputDetails.Groups} />


          <div className='form-group mt-3'>
            <label>Select Courses*:</label>
            <Multiselect
              isObject={true}
              onRemove={(removed) => { setCourseSelected(removed) }}
              onSelect={(add) => { setCourseSelected(add); }}
              options={courseOptions}
              displayValue='label'
              showCheckbox
              selectedValues={getCoursesObj}
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
              defaultValue={InputDetails?.username}
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
              defaultValue={InputDetails?.email}
            />
          </div>
            {/* <div className='form-group mt-3'>
              <label>Password*:</label>
              <input
                type='text'
                className='inputFiled form-control'
                placeholder='Enter Password'
                name='password'
                onChange={RegisterInput}
                defaultValue={InputDetails?.password}
              />
            </div> */}
          <div className='form-group mt-3'>
            <label>Mobile Number*:</label>
            <input
              type='number'
              className='inputFiled form-control'
              placeholder='Enter Mobile Number'
              name='MobNumber'
              onChange={RegisterInput}
              defaultValue={InputDetails?.MobNumber}
              required
            />
          </div>
          {MobileNumber ? <p style={{ color: 'red' }}>Note: Mobile Number must be 10 digits</p> : null}
          <div className='row mt-3'>
            <div className='col-md-4'>
                <button type='submit' onClick={UpdateSubmit} className='btn btn-primary'>
                  Update
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudent;
