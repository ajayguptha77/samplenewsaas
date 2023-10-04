import React, { useState, useEffect, useContext } from 'react';
import ContextData from '../../useContext';
import { useNavigate } from 'react-router-dom';
import { SpinningCircles } from 'react-loading-icons';
import Modal from 'react-bootstrap/Modal';
import { listDepartments, listUsers } from '../../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { createDepartment, createUser, updateUser } from '../../../graphql/mutations';
import Multiselect from 'multiselect-react-dropdown';
import Papa from 'papaparse';
import md5 from 'md5';
// import Departments from '../../department';
import DepartmentComponent from '../../addDepartments';
import GroupComponent from '../../groups';
import { UserPermissions } from '../permissions'; 

interface Group {
  label: string;
  value: string;
}

interface UserDetails {
    id?: string;
    Groups: any;
    status: number;
    permissions: any;
    adminID: any;
    type: string;
    uploadType: string;
    userID: string;
    department: any;
    role: string;
    email: string;
    emailIDs: any;
  }
  
  const initialState: UserDetails = { emailIDs: [], role:'', email: '', Groups:[''], status:1, permissions: {}, adminID:'', type:'', uploadType:'', userID:'', department:['']};
  
  interface PermissionDetails {
      read: string;
      delete: string;
      write: string;
      view: string;
  }

  interface PermissionsData {
    [key: string]: PermissionDetails;
  }

function Register() {
    const [csvData, setCSVData] = useState<any[]>([]);
  const navigate = useNavigate();
  const { data } = useContext<any>(ContextData);
  const [Groups, setGroups] = useState<Group[]>([]);
  const [SelectedAdmins, setSelectedAdmins] = useState([]);
  const [SelectedDepartments, setSelectedDepartments] = useState<Group[]>([]);
  const [InputDetails, setInputDetails] = useState<UserDetails>(initialState);
  const [Admins, setAdmins] = useState<UserDetails[] | undefined>();
  const [Departments, setDepartments] = useState([]);
  const [hods, setHODs] = useState<UserDetails[] | undefined>();
  const [Loader, setLoader] = useState(false);
  const [MobileNumber, checkMobNumber] = useState(false);
  const [DepartRes, setDepartRes] = useState(true);
  const [selectedDepart, setselectedDepart] = useState<string | undefined>();
  const [SelectedAdminLen, setSelectedAdminLen] = useState(0);
  const [getDepart, setDepart] = useState<string | undefined>();

  // const [permissionsData, setpermissionsData] = useState<PermissionsData>({
  //   Jobs: { read: "0", delete: "0", write: "0", view: "0" },
  //   Courses: { read: "0", delete: "0", write: "0", view: "0" },
  //   Exams: { read: "0", delete: "0", write: "0", view: "0" },
  //   Results: { read: "0", delete: "0", write: "0", view: "0" },
  //   Questions: { read: "0", delete: "0", write: "0", view: "0" },
  //   Pdf: { read: "0", delete: "0", write: "0", view: "0" },
  //   Videos: { read: "0", delete: "0", write: "0", view: "0" },
  //   Engagements: { read: "0", delete: "0", write: "0", view: "0" },
  //   Groups: { read: "0", delete: "0", write: "0", view: "0" }
  // })

  const [permissionsData, setPermissionsData] = useState<any>({});

  let AdminOptions: any ;
  let DepartmentsOptions: any

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

    let filterForHOD
    if(data?.details?.role === "admin"){      
      filterForHOD = {
        filter: {
          role: {
            eq: 'hod',
          },
          adminID: {
            eq: data?.details?.id,
          },
          status: {
            eq: 1
          }
        },
      }
    }
 
    try {
        const AllAdmins = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
        setAdmins(AllAdmins.data.listUsers.items)

        

        const AllHODS = await API.graphql(graphqlOperation(listUsers, filterForHOD)) as any;
        setHODs(AllHODS.data.listUsers.items)
        
      } catch (err) {
        console.log('error fetching',err);
      }
    }

    provInfo();
  }, []);

  useEffect(() => {
    async function DepartmentFunction() {

      try {
        const AllDEpart = await API.graphql(graphqlOperation(listDepartments)) as any;
        setDepartments(AllDEpart.data.listDepartments.items)
        setDepartRes(true);
      } catch (err) {
        console.log('error fetching',err);
      }
    }
    DepartmentFunction();
  }, [DepartRes]);

  if (Admins) {
    AdminOptions = Admins.map((option: any) => ({
      label: option.username,
      value: option.id,
    }));
  }

  if (Departments) {
    DepartmentsOptions = Departments.map((option: any) => ({
      label: option.name,
      value: option.id,
    }));
  }

let name, value;
// async function AdminInput(event: { target: { name: any; value: any; }; }){
//   let filterForHOD

//     if(data?.details?.role === "MA"){      
//       filterForHOD = {
//         filter: {
//           role: {
//             eq: 'hod',
//           },
//           adminID: {
//             eq: event.target.value,
//           },
//           status: {
//             eq: 1
//           }
//         },
//       }
//     }else{
//       filterForHOD = {
//         filter: {
//           role: {
//             eq: 'hod',
//           },
//           adminID: {
//             eq: event.target.value,
//           },
//           userID: {
//             eq: data?.details?.id
//           },
//           status: {
//             eq: 1
//           }
//         },
//       }
//     }
//     const AllHods = await API.graphql(graphqlOperation(listUsers, filterForHOD)) as any;
//         setHODs(AllHods.data.listUsers.items)
//     setInputDetails({
//         ...InputDetails,
//         adminID : event.target.value
//     })     

// }

// async function HODInput(event: { target: { name: any; value: any; }; }){
//   let filterForTutor

//     if(data?.details?.role === "MA"){      
//       filterForTutor = {
//         filter: {
//           role: {
//             eq: 'tutor',
//           },
//           hodID: {
//             eq: event.target.value,
//           },
//           status: {
//             eq: 1
//           }
//         },
//       }
//     }else{
//       filterForTutor = {
//         filter: {
//           role: {
//             eq: 'tutor',
//           },
//           hodID: {
//             eq: event.target.value,
//           },
//           userID: {
//             eq: data?.details?.id
//           },
//           status: {
//             eq: 1
//           }
//         },
//       }
//     }
//     const AllTutors = await API.graphql(graphqlOperation(listUsers, filterForTutor)) as any;
//         setTutors(AllTutors.data.listUsers.items)
//     setInputDetails({
//         ...InputDetails,
//         hodID : event.target.value
//     })     

// }

function RegisterInput(event: { target: { name: any; value: any; }; }){
  name = event.target.name;
  value = event.target.value;
  setInputDetails({
      ...InputDetails,
      [name] : value
  })     
}

//   const onchangePermission = (e: { target: { name: any; value: any; }; },item: any, item1: any) => { 
   
//     name = e.target.name;
//     value = e.target.value;

//     setpermissionsData({
//         ...permissionsData,
//         [item]: {
//             ...permissionsData[item], 
//             [name]: value
//         }
//     });
// }

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
    const GroupIDs: any = Groups.map((obj) => obj.value);
    const Departments: any = SelectedDepartments.map((obj: any) => obj.value);
    let admins: any;
    if(data?.details?.role === "MA"){
      admins = SelectedAdmins.map((obj: any) => obj.value);
    }else if(data?.details?.role === "admin"){
      admins = [data.details.id]
    }else{
      admins = [data.details.adminID]
    }
    
    
    const {
      uploadType,
    } = InputDetails;
    // const GroupIDs: any = Groups.map((obj) => obj.value);
    // InputDetails.department = selectedDepart.value;
  
      
    const getDetails = {
      password: md5("123456"),
      MobNumber: "",
      username: "",
      role: InputDetails.role,
      status: 1,
      organisation: "",
      permissions: permissionsData,
      // adminID: admins,
      type: InputDetails.type,
      uploadType: InputDetails.uploadType,
      Groups: GroupIDs,
      userID: data?.details?.id,
      hodID: data?.details?.role === "hod" ? data?.details?.id : data?.details?.hodID,
      tutorID: "",
      Batch: "",
      department: admins.length > 1 ? [] : Departments,
      specialization: "",
      course: [],
      resume:"",
    }
      if( !uploadType || !GroupIDs || !admins || !InputDetails.role){
        alert("check and fill all the fields")
        
    }else{

      setLoader(true)
        if (uploadType === 'individual') {
          // InputDetails.emailIDs.push(InputDetails.email);
          for(const admin of admins){
          for(const element of InputDetails.emailIDs){
              const GetInsertData = { ...getDetails, email: element, adminID: admin };
              setInputDetails(initialState);

              const existingUsers: any = await API.graphql(
                graphqlOperation(listUsers, {
                  filter: {
                    email: { eq: element },
                    adminID: { eq: admin },
                  },
                })
              );
              if (existingUsers.data.listUsers.items.length > 0) {
                console.log("already registered")
              }else{
            const getResponse: any = await API.graphql(
              graphqlOperation(createUser, { input: GetInsertData })
            );

            if(getResponse){
            SendEmail(element, getDetails.username, "123456")
            }

        //     if(getResponse){
        //       const EmailData = {
        //         requestBody:{
        //             email:element,
        //             username: getDetails.username,
        //             password:getDetails.password
        //         }
                
        //     }

        //     const options = {
        //       method: "POST",
        //       headers: {
        //           "Content-Type": "application/json",
        //           "Accept": "application/json, text/plain, */*"
        //       },
        //       body: JSON.stringify(EmailData)
        //   }

        //   try {
        //     const response = await fetch('https://fvdqgrttka.execute-api.ap-south-1.amazonaws.com/dev/lms_send_email', options);                
        //     const data = await response.json();  
        //     // const data = result.data;
        //     console.log("data",data)
        // } catch (error) {
        //     console.error(error);
        // }
        //     }
            
            }
          }
        }
      
        if(InputDetails?.role === "hod"){
          navigate("/hodList")
          }else{
            navigate("/tutors")
          }
        }else if(uploadType === 'bulk'){
          
          // csvData[csvData.length] = InputDetails

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
                getDetails.password = md5(element.password)
              }

              for(const admin of admins){

              const existingUsers: any = await API.graphql(
                graphqlOperation(listUsers, {
                  filter: {
                    email: { eq: element.email },
                    adminID: { eq: admin },
                  },
                })
              );
              if (existingUsers.data.listUsers.items.length > 0) {
                
              let GetInsertData = { id: existingUsers.data.listUsers.items[0].id, ...getDetails, email: element.email, adminID: admin };
            
              setInputDetails(initialState);

              const getResponse: any = await API.graphql(graphqlOperation(updateUser, { input: GetInsertData }));
              // console.log("getResponse",getResponse)
              // if(getResponse){
              //   SendEmail(element.email, getDetails.username, element.password ? element.password : "123456")
              //   }
              }else{

              let GetInsertData = { ...getDetails, email: element.email, adminID: admin };
            
              setInputDetails(initialState);
        
              const getResponse: any = await API.graphql(
                graphqlOperation(createUser, { input: GetInsertData })
              );
            // console.log("getResponse",getResponse)
            if(getResponse){
              SendEmail(element.email, getDetails.username, element.password ? element.password : "123456")
              }
            }
          }
          }
        
          if(InputDetails?.role === "hod"){
            navigate("/hodList")
          }else{
            navigate("/tutors")
          }

        
      }
  }
}

  const EmailIDs = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const getEmails: any = event.target.value;
    const allEmails = getEmails.split('\n');
    InputDetails.emailIDs  = allEmails;
  };

  const InsertDepartment = async () => {
    // console.log(getDepart);
    if (getDepart) {
      const getGroup: any = await API.graphql(
        graphqlOperation(createDepartment, { input: {name: getDepart} })
      );
      SelectedDepartments.push({ label: getGroup.data.createDepartment.name, value:  getGroup.data.createDepartment.id });
      setDepartRes(false);
        setselectedDepart(undefined);
        setDepart(undefined);
    }
  };

  const updatePermissionsData = (newPermissionsData: any) => {
    setPermissionsData(newPermissionsData);
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

  const handleSearch = async (e: string) => {
    let DepartmentCheck: any = await DepartmentsOptions?.find(function (element: any) {
      return element.label === e;
    });
    if (DepartmentCheck) {
      setDepart(undefined);
    } else {
      setDepart(e);
    }
  };

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
      <div className='col-md-1'></div>
      <div className='col-md-5'>
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
              <input type='radio' value='bulk' name='uploadType' onChange={RegisterInput} /> Bulk upload
            </label>
          </div>
          {/* { data?.details?.role === "MA" || data?.details?.role === "admin" ? */}
          <div className='form-group mt-3'>
            <label>Choose Role*:</label>
            <select className='inputFiled form-control' name='role' onChange={RegisterInput}>
              <option value=''>Select Role</option>
              {data?.details?.role !== "hod" ? 
              <option value='hod'>
                HOD
              </option>
              : null }
              <option value='tutor'>
                Tutor
              </option>
            </select>
          </div> 
          {/* : null} */}

          {/* { data?.details?.role === "hod" ?
          <div className='form-group mt-3'>
            <label>Choose Role*:</label>
            <input
              className='inputFiled form-control'
              type="text"
              value='tutor'
              name='role'
              onChange={RegisterInput}
              readOnly
            />
          </div> : null} */}

          { data?.details?.role === "MA" ?
          <div className='form-group mt-3'>
            <label>Select Admin*:</label>
            <Multiselect
              isObject={true}
              onRemove={(removed: any) => { setSelectedAdmins(removed);setSelectedAdminLen(SelectedAdmins.length);  }}
              onSelect={(add: any) => { setSelectedAdmins(add); setSelectedAdminLen(SelectedAdmins.length); }}
              options={AdminOptions}
              displayValue='label'
              showCheckbox
            />
            {/* <select className='inputFiled form-control' name='adminID'>
              <option value=''>Select Admin</option>
              {Admins?.map((admin: any, index) => {
                return (
                  <option value={admin.id} key={admin.id}>
                    {admin.username}
                  </option>
                );
              })}
            </select> */}
          </div> : null}

          {/* { (data?.details?.role === "MA" || data?.details?.role === "admin") && InputDetails.role === "tutor" ?
          <div className='form-group mt-3'>
            <label>Select HOD*:</label>
            <select className='inputFiled form-control' name='hodID' onChange={HODInput}>
              <option value=''>Select HOD</option>
              {hods?.map((hod: any, index) => {
                return (
                  <option value={hod.id} key={hod.id}>
                    {hod.username}
                  </option>
                );
              })}
            </select>
          </div> : null} */}

          {/* { data?.details?.role !== "tutor" ?
          <div className='form-group mt-3'>
            <label>Select Tutor*:</label>
            <select className='inputFiled form-control' name='tutorID' onChange={RegisterInput}>
              <option value=''>Select Tutor</option>
              {Tutors?.map((tutor: any, index) => {
                return (
                  <option value={tutor.id} key={tutor.id}>
                    {tutor.username}
                  </option>
                );
              })}
            </select>
          </div> : null} */}
          
          
          {InputDetails.uploadType === 'individual' ? (
            <>
              <div className='form-group mt-3'>
                <label>Choose Type: </label>
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
                <label>Enter Email ID's: (Enter an email ID for each line)</label>
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
          <GroupComponent Groups={Groups} setGroups={setGroups} />
          
          {SelectedAdminLen > 1 ? (
            <div className='form-group mt-3'>
            
            <label>Select Department*:</label>
            <input className='inputFiled form-control' type="text" name='role' readOnly placeholder='Selected' />
        </div>
          ) : (
            <DepartmentComponent Departments={SelectedDepartments} setDepartments={setSelectedDepartments} />

          )}

          
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
            </div> */}
          {/* <div className='form-group mt-3'>
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
          {/* {MobileNumber ? <p style={{ color: 'red' }}>Note: Mobile Number must be 10 digits</p> : null} */}
          {InputDetails.uploadType === 'bulk' ? (
            
                <input type='file' className='inputFiled form-control mt-3' onChange={handleFileChange} />
              
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
      <div className='col-md-5'>
      <UserPermissions permissionsData={permissionsData} onUpdatePermissionsData={updatePermissionsData} InputPermissions={""} />

        {/* <div className='container mt-5'>
          <br />
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
                                                <input type="checkbox" name={permission} value={permissionsData[permissionType as keyof PermissionsData][permission as keyof PermissionDetails] === "0" ? "1" : "0"} className='mx-2'  onChange={ (e) => onchangePermission(e, permissionType, permission) } /> </td>
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

export default Register;
