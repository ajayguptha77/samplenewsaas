import React, { useState } from 'react';


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

 
  export function UserPermissions(props: any) {

    const commonPermissions = { showInMenu: "0", create: "0", edit: "0", view: "0", publisher: "0", proctorAdmin: "0", evaluator: "0", download: "0", allow: "0", notallow: "0" };

 const [permissionsData, setpermissionsData] = useState<PermissionsData>({
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

      let name: any, value: any;
      const onchangePermission = (e: { target: { name: any; value: any; }; },item: any, item1: any) => { 
   
        name = e.target.name;
        value = e.target.value;
    
        setpermissionsData({
            ...permissionsData,
            [item]: {
                ...permissionsData[item], 
                [name]: value
            }
        });

        PermissionAllow(item, name, value)
    }

    function PermissionAllow(item: any, getName: any, getValue: any) {
      props.onUpdatePermissionsData({
        ...permissionsData,
        [item]: {
          ...permissionsData[item],
          [getName]: getValue
        }
      });
    }

    const OnChangeAllow = (item: any, item1: any) => {
      if(item1 === "allow"){
      setpermissionsData({
        ...permissionsData,
        [item]: {
          ...permissionsData[item],
          "allow": "1","notallow": "0"
        }
      }) 
      PermissionAllow(item, "allow", "1")
    }else{
      setpermissionsData({
        ...permissionsData,
        [item]: {
          ...permissionsData[item],
          "allow": "0","notallow": "1"
        }
      })
      PermissionAllow(item, "notallow", "1")
    }
    
    }

  //  console.log("props.InputPermissions",props.InputPermissions)

   
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
                                      
                                        <tr key={permissionType}>
                                          <td>{permissionType}</td>
                                          {Object.keys(permissionsData[permissionType as keyof PermissionsData] as PermissionDetails).map((permission,index) => (
                                            <td key={permission}>

                                                {
                                                    permission === "allow" || permission === "notallow" ?
                                                 <>
                                                 
                                                    <input type="radio" name={`${permissionType}`} value={permissionsData[permissionType as keyof PermissionsData][permission as keyof PermissionDetails] === "0" ? "1" : "0"} className='mx-2'  disabled = { permissionType==="Reports" || permissionType==="StudentApprove" || permissionType==="StudentReject" || permissionType==="Tutor" || permissionType==="Attendance" || permissionType==="LeaderBoard" ? false :  true  }
                                                    onChange={ (e) => OnChangeAllow( permissionType, permission) } /> 
                                                    {/* {props?.InputPermissions[permissionType][permission] === "1" ? "true" : "false"}  */}
                                                    
                                                    </>
                                                 
                                                :
                                                <>
                                                
                                                <input type="checkbox" 
                                                name={permission} 
                                                value={permissionsData[permissionType as keyof PermissionsData][permission as keyof PermissionDetails] === "0" ? "1" : "0"} 
                                                className='mx-2'  
                                                onChange={ (e) => onchangePermission(e, permissionType, permission) }
                                                disabled = { permissionType==="Reports" || permissionType==="StudentApprove" || permissionType==="StudentReject" || permissionType==="Tutor" || permissionType==="Attendance" || permissionType==="LeaderBoard" ? true :  false  } 
                                              
                                                /> 
                                                
                                                {/* {props?.InputPermissions[permissionType][permission]}  */}
                                                </> 
                                                
                                                }
                                                </td>
                                          ))}
                                        </tr>
                                      ))}

                                </tbody>
                            </table>

                        </div>
                    </form>
                </div>

  );
}



// permissions: {
//   Jobs: {
//     showInMenu: permissionsData.Jobs.showInMenu,
//     create: permissionsData.Jobs.create,
//     edit: permissionsData.Jobs.edit,
//     view: permissionsData.Jobs.view,
//     publisher: permissionsData.Jobs.publisher,
//     proctorAdmin: permissionsData.Jobs.proctorAdmin,
//     evaluator: permissionsData.Jobs.evaluator,
//     download: permissionsData.Jobs.download,
//     allow: permissionsData.Jobs.allow,
//     notallow: permissionsData.Jobs.notallow,
//   },
//   Courses: {
//     showInMenu: permissionsData.Courses.showInMenu,
//     create: permissionsData.Courses.create,
//     edit: permissionsData.Courses.edit,
//     view: permissionsData.Courses.view,
//     publisher: permissionsData.Courses.publisher,
//     proctorAdmin: permissionsData.Courses.proctorAdmin,
//     evaluator: permissionsData.Courses.evaluator,
//     download: permissionsData.Courses.download,
//     allow: permissionsData.Courses.allow,
//     notallow: permissionsData.Courses.notallow,
//   },
//   Exams: {
//     showInMenu: permissionsData.Exams.showInMenu,
//     create: permissionsData.Exams.create,
//     edit: permissionsData.Exams.edit,
//     view: permissionsData.Exams.view,
//     publisher: permissionsData.Exams.publisher,
//     proctorAdmin: permissionsData.Exams.proctorAdmin,
//     evaluator: permissionsData.Exams.evaluator,
//     download: permissionsData.Exams.download,
//     allow: permissionsData.Exams.allow,
//     notallow: permissionsData.Exams.notallow,
//   },
//   Results: {
//     showInMenu: permissionsData.Results.showInMenu,
//     create: permissionsData.Results.create,
//     edit: permissionsData.Results.edit,
//     view: permissionsData.Results.view,
//     publisher: permissionsData.Results.publisher,
//     proctorAdmin: permissionsData.Results.proctorAdmin,
//     evaluator: permissionsData.Results.evaluator,
//     download: permissionsData.Results.download,
//     allow: permissionsData.Results.allow,
//     notallow: permissionsData.Results.notallow,
//   },
//   QuestionBank: {
//     showInMenu: permissionsData.QuestionBank.showInMenu,
//     create: permissionsData.QuestionBank.create,
//     edit: permissionsData.QuestionBank.edit,
//     view: permissionsData.QuestionBank.view,
//     publisher: permissionsData.QuestionBank.publisher,
//     proctorAdmin: permissionsData.QuestionBank.proctorAdmin,
//     evaluator: permissionsData.QuestionBank.evaluator,
//     download: permissionsData.QuestionBank.download,
//     allow: permissionsData.QuestionBank.allow,
//     notallow: permissionsData.QuestionBank.notallow,
//   },
//   Questions: {
//     showInMenu: permissionsData.Questions.showInMenu,
//     create: permissionsData.Questions.create,
//     edit: permissionsData.Questions.edit,
//     view: permissionsData.Questions.view,
//     publisher: permissionsData.Questions.publisher,
//     proctorAdmin: permissionsData.Questions.proctorAdmin,
//     evaluator: permissionsData.Questions.evaluator,
//     download: permissionsData.Questions.download,
//     allow: permissionsData.Questions.allow,
//     notallow: permissionsData.Questions.notallow,
//   },
//   ContentBank: {
//     showInMenu: permissionsData.ContentBank.showInMenu,
//     create: permissionsData.ContentBank.create,
//     edit: permissionsData.ContentBank.edit,
//     view: permissionsData.ContentBank.view,
//     publisher: permissionsData.ContentBank.publisher,
//     proctorAdmin: permissionsData.ContentBank.proctorAdmin,
//     evaluator: permissionsData.ContentBank.evaluator,
//     download: permissionsData.ContentBank.download,
//     allow: permissionsData.ContentBank.allow,
//     notallow: permissionsData.ContentBank.notallow,
//   },
//   Content: {
//     showInMenu: permissionsData.Content.showInMenu,
//     create: permissionsData.Content.create,
//     edit: permissionsData.Content.edit,
//     view: permissionsData.Content.view,
//     publisher: permissionsData.Content.publisher,
//     proctorAdmin: permissionsData.Content.proctorAdmin,
//     evaluator: permissionsData.Content.evaluator,
//     download: permissionsData.Content.download,
//     allow: permissionsData.Content.allow,
//     notallow: permissionsData.Content.notallow,
//   },
//   Groups: {
//     showInMenu: permissionsData.Groups.showInMenu,
//     create: permissionsData.Groups.create,
//     edit: permissionsData.Groups.edit,
//     view: permissionsData.Groups.view,
//     publisher: permissionsData.Groups.publisher,
//     proctorAdmin: permissionsData.Groups.proctorAdmin,
//     evaluator: permissionsData.Groups.evaluator,
//     download: permissionsData.Groups.download,
//     allow: permissionsData.Groups.allow,
//     notallow: InputDetails.permissions.Groups.notallow,
//   },
//   Tests: {
//     showInMenu: InputDetails.permissions.Tests.showInMenu,
//     create: InputDetails.permissions.Tests.create,
//     edit: InputDetails.permissions.Tests.edit,
//     view: InputDetails.permissions.Tests.view,
//     publisher: InputDetails.permissions.Tests.publisher,
//     proctorAdmin: InputDetails.permissions.Tests.proctorAdmin,
//     evaluator: InputDetails.permissions.Tests.evaluator,
//     download: InputDetails.permissions.Tests.download,
//     allow: InputDetails.permissions.Tests.allow,
//     notallow: InputDetails.permissions.Tests.notallow,
//   },
//   Drives: {
//     showInMenu: InputDetails.permissions.Drives.showInMenu,
//     create: InputDetails.permissions.Drives.create,
//     edit: InputDetails.permissions.Drives.edit,
//     view: InputDetails.permissions.Drives.view,
//     publisher: InputDetails.permissions.Drives.publisher,
//     proctorAdmin: InputDetails.permissions.Drives.proctorAdmin,
//     evaluator: InputDetails.permissions.Drives.evaluator,
//     download: InputDetails.permissions.Drives.download,
//     allow: InputDetails.permissions.Drives.allow,
//     notallow: InputDetails.permissions.Drives.notallow,
//   },
//   Student: {
//     showInMenu: InputDetails.permissions.Student.showInMenu,
//     create: InputDetails.permissions.Student.create,
//     edit: InputDetails.permissions.Student.edit,
//     view: InputDetails.permissions.Student.view,
//     publisher: InputDetails.permissions.Student.publisher,
//     proctorAdmin: InputDetails.permissions.Student.proctorAdmin,
//     evaluator: InputDetails.permissions.Student.evaluator,
//     download: InputDetails.permissions.Student.download,
//     allow: InputDetails.permissions.Student.allow,
//     notallow: InputDetails.permissions.Student.notallow,
//   },
//   Reports: {
//     showInMenu: InputDetails.permissions.Reports.showInMenu,
//     create: InputDetails.permissions.Reports.create,
//     edit: InputDetails.permissions.Reports.edit,
//     view: InputDetails.permissions.Reports.view,
//     publisher: InputDetails.permissions.Reports.publisher,
//     proctorAdmin: InputDetails.permissions.Reports.proctorAdmin,
//     evaluator: InputDetails.permissions.Reports.evaluator,
//     download: InputDetails.permissions.Reports.download,
//     allow: InputDetails.permissions.Reports.allow,
//     notallow: InputDetails.permissions.Reports.notallow,
//   },
//   StudentApprove: {
//     showInMenu: InputDetails.permissions.StudentApprove.showInMenu,
//     create: InputDetails.permissions.StudentApprove.create,
//     edit: InputDetails.permissions.StudentApprove.edit,
//     view: InputDetails.permissions.StudentApprove.view,
//     publisher: InputDetails.permissions.StudentApprove.publisher,
//     proctorAdmin: InputDetails.permissions.StudentApprove.proctorAdmin,
//     evaluator: InputDetails.permissions.StudentApprove.evaluator,
//     download: InputDetails.permissions.StudentApprove.download,
//     allow: InputDetails.permissions.StudentApprove.allow,
//     notallow: InputDetails.permissions.StudentApprove.notallow,
//   },
//   StudentReject: {
//     showInMenu: InputDetails.permissions.StudentReject.showInMenu,
//     create: InputDetails.permissions.StudentReject.create,
//     edit: InputDetails.permissions.StudentReject.edit,
//     view: InputDetails.permissions.StudentReject.view,
//     publisher: InputDetails.permissions.StudentReject.publisher,
//     proctorAdmin: InputDetails.permissions.StudentReject.proctorAdmin,
//     evaluator: InputDetails.permissions.StudentReject.evaluator,
//     download: InputDetails.permissions.StudentReject.download,
//     allow: InputDetails.permissions.StudentReject.allow,
//     notallow: InputDetails.permissions.StudentReject.notallow,
//   },
//   Tutor: {
//     showInMenu: InputDetails.permissions.Tutor.showInMenu,
//     create: InputDetails.permissions.Tutor.create,
//     edit: InputDetails.permissions.Tutor.edit,
//     view: InputDetails.permissions.Tutor.view,
//     publisher: InputDetails.permissions.Tutor.publisher,
//     proctorAdmin: InputDetails.permissions.Tutor.proctorAdmin,
//     evaluator: InputDetails.permissions.Tutor.evaluator,
//     download: InputDetails.permissions.Tutor.download,
//     allow: InputDetails.permissions.Tutor.allow,
//     notallow: InputDetails.permissions.Tutor.notallow,
//   },
//   Attendance: {
//     showInMenu: InputDetails.permissions.Attendance.showInMenu,
//     create: InputDetails.permissions.Attendance.create,
//     edit: InputDetails.permissions.Attendance.edit,
//     view: InputDetails.permissions.Attendance.view,
//     publisher: InputDetails.permissions.Attendance.publisher,
//     proctorAdmin: InputDetails.permissions.Attendance.proctorAdmin,
//     evaluator: InputDetails.permissions.Attendance.evaluator,
//     download: InputDetails.permissions.Attendance.download,
//     allow: InputDetails.permissions.Attendance.allow,
//     notallow: InputDetails.permissions.Attendance.notallow,
//   },
//   LeaderBoard: {
//     showInMenu: InputDetails.permissions.LeaderBoard.showInMenu,
//     create: InputDetails.permissions.LeaderBoard.create,
//     edit: InputDetails.permissions.LeaderBoard.edit,
//     view: InputDetails.permissions.LeaderBoard.view,
//     publisher: InputDetails.permissions.LeaderBoard.publisher,
//     proctorAdmin: InputDetails.permissions.LeaderBoard.proctorAdmin,
//     evaluator: InputDetails.permissions.LeaderBoard.evaluator,
//     download: InputDetails.permissions.LeaderBoard.download,
//     allow: InputDetails.permissions.LeaderBoard.allow,
//     notallow: InputDetails.permissions.LeaderBoard.notallow,
//   },
// },