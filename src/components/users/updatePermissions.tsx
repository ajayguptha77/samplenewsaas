import React, { useEffect, useState } from 'react';


interface PermissionDetails {
    showInMenu: string;
    create: string;
    edit: string;
    view: string;
    publisher: string;
    proctorAdmin: string;
    evaluator: string;
    download: string;
    allow: String;
    notallow: String
}

interface PermissionsData {
  [key: string]: PermissionDetails;
}

 
  export function UpadatePermissions(props: any) {

    const commonPermissions = { showInMenu: "0", create: "0", edit: "0", view: "0", publisher: "0", proctorAdmin: "0", evaluator: "0", download: "0", allow: "0", notallow: "0" };

 const [permissionsData, setpermissionsData] = useState<any>({
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
});

useEffect(() => {
  if(props.InputPermissions){
    // console.log("props.InputPermissions",props.InputPermissions)
    setpermissionsData(props.InputPermissions)
  }
},[])

// console.log("permsi",permissionsData)

const [isChecked, setIsChecked] = useState();

      let name: any, value: any;
      const onchangePermission = (e: { target: { name: any; value: any; }; },item: any, item1: any) => { 
   
       
        name = e.target.name;
        value = e.target.value;

        if(props.InputPermissions[item][item1] === "1"){
          props.InputPermissions[item][item1] = "0"
          PermissionAllow(item, name, "0")
        }else{
          props.InputPermissions[item][item1] = "1"
          PermissionAllow(item, name, "1")
        }

        
    }

    // console.log("props.InputPermissions",props.InputPermissions)

    function PermissionAllow(item: any, getName: any, getValue: any) {
      props.onUpdatePermissionsData({
        ...props.InputPermissions,
        [item]: {
          ...props.InputPermissions[item],
          [getName]: getValue
        }
      });
    }

    const OnChangeAllow = (item: any, item1: any) => {
      if(item1 === "allow"){
        if(props.InputPermissions[item][item1] === "1"){
          props.InputPermissions[item][item1] = "0"
          props.InputPermissions[item]["notallow"] = "1"
          PermissionAllow(item, item1, "0")
        }else{
          props.InputPermissions[item][item1] = "1"
          props.InputPermissions[item]["notallow"] = "0"
          PermissionAllow(item, item1, "1")
        }
      // setpermissionsData({
      //   ...permissionsData,
      //   [item]: {
      //     ...permissionsData[item],
      //     "allow": "1","notallow": "0"
      //   }
      // }) 
      // PermissionAllow(item, "allow", "1")
    }else{
      if(props.InputPermissions[item][item1] === "1"){
        props.InputPermissions[item][item1] = "0"
        props.InputPermissions[item]["allow"] = "1"
        PermissionAllow(item, item1, "0")
      }else{
        props.InputPermissions[item][item1] = "1"
        props.InputPermissions[item]["allow"] = "0"
        PermissionAllow(item, item1, "1")
      }
    }
    
    }

    
   

   
  return (
   
    <div className='container mt-5'>
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
                                      permissionType !== "__typename" ?
                                        <tr key={permissionType}>
                                          <td>{permissionType}</td>
                                          {Object.keys(permissionsData[permissionType as keyof PermissionsData] as PermissionDetails).map((permission,index) => (
                                            <td key={permission}>

                                                {
                                                    permission === "allow" || permission === "notallow" ?
                                                 props?.InputPermissions[permissionType][permission] === "1" ? 
                                                 <>
                                                    <input type="radio" name={`${permissionType}`} value={permissionsData[permissionType as keyof PermissionsData][permission as keyof PermissionDetails] === "0" ? "1" : "0"} className='mx-2'  disabled = { permissionType==="Reports" || permissionType==="StudentApprove" || permissionType==="StudentReject" || permissionType==="Tutor" || permissionType==="Attendance" || permissionType==="LeaderBoard" ? false :  true  }
                                                    onChange={ (e) => 
                                                      OnChangeAllow( permissionType, permission) } 
                                                      checked /> 
                                                      
                                                      </>
                                                    :<>
                                                    <input type="radio" name={`${permissionType}`} value={permissionsData[permissionType as keyof PermissionsData][permission as keyof PermissionDetails] === "0" ? "1" : "0"} className='mx-2'  disabled = { permissionType==="Reports" || permissionType==="StudentApprove" || permissionType==="StudentReject" || permissionType==="Tutor" || permissionType==="Attendance" || permissionType==="LeaderBoard" ? false :  true  }
                                                    onChange={ (e) => 
                                                      OnChangeAllow( permissionType, permission) } 
                                                      /> 
                                                      
                                                      </>
                                                :
                                                
                                                <input type="checkbox" name={permission} value={permissionsData[permissionType as keyof PermissionsData][permission as keyof PermissionDetails] === "0" ? "1" : "0"} className='mx-2'  onChange={ (e) => onchangePermission(e, permissionType, permission) }
                                                disabled = { permissionType==="Reports" || permissionType==="StudentApprove" || permissionType==="StudentReject" || permissionType==="Tutor" ||  permissionType==="Attendance" || permissionType==="LeaderBoard" ? true :  false  } checked={props.InputPermissions[permissionType][permission] === "1" ? true : false}  /> 
                                                
                                                }
                                                </td>
                                          ))}
                                        </tr>
                                        : null 
                                      ))}

                                </tbody>
                            </table>

                        </div>
                    </form>
                </div>

  );
}




// import React, { useEffect, useState } from 'react';


// interface PermissionDetails {
// showInMenu: string;
// create: string;
// edit: string;
// view: string;
// publisher: string;
// proctorAdmin: string;
// evaluator: string;
// download: string;
// allow: String;
// notallow: String
// }

// interface PermissionsData {
// [key: string]: PermissionDetails;
// }

 
// export function UpadatePermissions(props: any) {

// const commonPermissions = { showInMenu: "0", create: "0", edit: "0", view: "0", publisher: "0", proctorAdmin: "0", evaluator: "0", download: "0", allow: "0", notallow: "0" };

// // const [permissionsData, setpermissionsData] = useState<any>({
// // Jobs: { ...commonPermissions },
// // Courses: { ...commonPermissions },
// // Exams: { ...commonPermissions },
// // Results: { ...commonPermissions },
// // QuestionBank: { ...commonPermissions },
// // Questions: { ...commonPermissions },
// // ContentBank: { ...commonPermissions },
// // Content: { ...commonPermissions },
// // Groups: { ...commonPermissions },
// // Tests: { ...commonPermissions },
// // Drives: { ...commonPermissions },
// // Student: { ...commonPermissions },
// // Reports: { ...commonPermissions },
// // StudentApprove: { ...commonPermissions },
// // StudentReject: { ...commonPermissions },
// // Tutor: { ...commonPermissions },
// // Attendance: { ...commonPermissions },
// // LeaderBoard: { ...commonPermissions },
// // });


// const [permissionsData, setpermissionsData] = useState([
// {Jobs: { ...commonPermissions }},
// {Courses: { ...commonPermissions }},
// {Exams: { ...commonPermissions }},
// {Results: { ...commonPermissions }},
// {QuestionBank: { ...commonPermissions }},
// {Questions: { ...commonPermissions }},
// { ContentBank: { ...commonPermissions }},
// {Content: { ...commonPermissions }},
// {Groups: { ...commonPermissions }},
// {Tests: { ...commonPermissions }},
// {Drives: { ...commonPermissions }},
// {Student: { ...commonPermissions }},
// {Reports: { ...commonPermissions }},
// {StudentApprove: { ...commonPermissions }},
// {StudentReject: { ...commonPermissions }},
// {Tutor: { ...commonPermissions }},
// {Attendance: { ...commonPermissions }},
// {LeaderBoard: { ...commonPermissions }},
// ])
// useEffect(() => {
// if(props.InputPermissions){
// console.log("props.InputPermissions",props.InputPermissions)
// setpermissionsData(props.InputPermissions)
// }
// },[])

// console.log("permsi",permissionsData)

// const [isChecked, setIsChecked] = useState();

// let name: any, value: any;
// const onchangePermission = (e: { target: { name: any; value: any; }; },item: any, item1: any) => { 
 
 
// name = e.target.name;
// value = e.target.value;

// if(props.InputPermissions[item][item1] === "1"){
// props.InputPermissions[item][item1] = "0"
// }else{
// props.InputPermissions[item][item1] = "1"
// }

// PermissionAllow(item, name, value)
// }

// function PermissionAllow(item: any, getName: any, getValue: any) {
// props.onUpdatePermissionsData({
// ...props.InputPermissions,
// [item]: {
// ...props.InputPermissions[item],
// [getName]: getValue
// }
// });
// }

// const OnChangeAllow = (item: any, item1: any) => {
// if(item1 === "allow"){
// setpermissionsData({
// ...permissionsData,
// [item]: {
// ...permissionsData[item],
// "allow": "1","notallow": "0"
// }
// }) 
// PermissionAllow(item, "allow", "1")
// }else{
// setpermissionsData({
// ...permissionsData,
// [item]: {
// ...permissionsData[item],
// "allow": "0","notallow": "1"
// }
// })
// PermissionAllow(item, "notallow", "1")
// }
 
// }

 
 

 
// return (
 
// <div className='container mt-5'>
// <br/>
// <h5>Permissions</h5>
// <form method="post" >
// <div className="form-group mt-5">
// <table className='table table-bordered' style={{fontSize:"10px", fontWeight:"normal"}}>
// <thead>
// <tr className='text-center' >
// <th></th>
// <th>Show in menu</th>
// <th>Create</th>
// <th>Edit</th>
// <th>View</th>
// <th>Publisher</th>
// <th>Proctor Admin</th>
// <th>Evaluator</th>
// <th>Download / Export</th>
// <th>Allow</th>
// <th>Not Allow</th>
// </tr>
// </thead>
// <tbody>
 

// {Object.keys(permissionsData).map(permissionType => (
 
// <tr key={permissionType}>
// <td>{permissionType}</td>
// {Object.keys(permissionsData[permissionType as keyof PermissionsData] as PermissionDetails).map((permission,index) => (
// <td key={permission}>

// {
// permission === "allow" || permission === "notallow" ?
// <>
// <input type="radio" name={`${permissionType}`} value={permissionsData[permissionType as keyof PermissionsData][permission as keyof PermissionDetails] === "0" ? "1" : "0"} className='mx-2' disabled = { permissionType==="Reports" || permissionType==="StudentApprove" || permissionType==="StudentReject" || permissionType==="Tutor" || permissionType==="Attendance" || permissionType==="LeaderBoard" ? false : true }
// onChange={ (e) => OnChangeAllow( permissionType, permission) } defaultChecked={props?.InputPermissions[permissionType][permission] === "1" ? true : false} /> {props?.InputPermissions[permissionType][permission]} </>
 
// :
// <>
 
// <input type="checkbox" name={permission} value={permissionsData[permissionType as keyof PermissionsData][permission as keyof PermissionDetails] === "0" ? "1" : "0"} className='mx-2' onChange={ (e) => onchangePermission(e, permissionType, permission) }
// disabled = { permissionType==="Reports" || permissionType==="StudentApprove" || permissionType==="StudentReject" || permissionType==="Tutor" || permissionType==="Attendance" || permissionType==="LeaderBoard" ? true : false } checked={props.InputPermissions[permissionType][permission] === "1" ? true : false} /> {props?.InputPermissions[permissionType][permission]} 
// </> 
 
// }
// </td>
// ))}
// </tr>
// ))}

// </tbody>
// </table>

// </div>
// </form>
// </div>

// );
// }
