import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextData from '../useContext';
import Modal from 'react-bootstrap/Modal';
import Multiselect from 'multiselect-react-dropdown';
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Table, Button } from "react-bootstrap";
// import { useQuery , gql } from '@apollo/client';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { listCourses } from '../../graphql/queries';
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
  } from "react-bs-datatable";
import { deleteCourse, updateCourse } from '../../graphql/mutations';

interface UserDetails {
  role: string;
  permissions: {
    Courses: {
      read: string;
      write: string;
      delete: string;
      view: string;
    };
  };
}

interface Course {
  id: string;
  title: string;
  price: string;
  status: any;
}

interface EnrollDetails {
  user_id: string;
  course_id: string;
}

interface StudentInfo {
  _id: string;
  username: string;
}

interface MultiselectOption {
    value: string;
  }

//   const ALL_COURSES = gql`
//   query {
//     allCourses {
//         id
//         title
//         file
//         about
//         user_id
//         adminID
//         price
//     }
//   }
// `;

function Courses() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { data, setData } = useContext<any>(ContextData);
  const [getCourses, setCourses] = useState<Course[]>([]);
  const [inputDetails, setInputDetails] = useState<MultiselectOption[]>([]);
  const [getEnrollDetails, setEnrollDetails] = useState<EnrollDetails[]>([]);
  const [StudentsInfo, setStudentsInfo] = useState<StudentInfo[]>([]);
  const [CourseId, setCourseId] = useState<string>();
  const API_URL = process.env.REACT_APP_API_MID_URL;

  const paths = [
    { name: 'Home', url: '/home' },
    { name: 'Courses' },
  ];
  console.log("data", data)
//   const { loading, error, data: allCoursesData } = useQuery(ALL_COURSES);
async function provInfo() {
    try {
        const allCoursesData = await API.graphql(graphqlOperation(listCourses)) as any;
        setCourses(allCoursesData.data.listCourses.items)
      } catch (err) {
        console.log('error fetching todos');
      }
    }
  useEffect(() => {
    
      provInfo();
}, []);

  const handleClose = () => {
    setShow(false);
    setEnrollDetails([]);
  };

  const handleShow = async (courseId: string) => {
    let getEnrollCourses = await fetch(API_URL + `/user/enrolledUsers/${courseId}`);
    let enrollDetails = await getEnrollCourses.json();
    setEnrollDetails(enrollDetails);
    setCourseId(courseId);
    setShow(true);
  };

  const handleEdit = (course: any) => {
    navigate("/updateCourse", { state: { id: course.id, courseTitle: course.title } });
  };

  const handleDelete = async (courseId: string) => {
    
    try {
        const deleteData = {
            input: {
              id: courseId,
            },
          }
            const response = await API.graphql(graphqlOperation(deleteCourse, deleteData));
        // navigate("/courses");
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  const handleSelect = (course: any) => {
    setInputDetails(course)
};

const SubmitCourse = (async (e: any) => {
    // console.log("inputs",inputDetails)

    if (getEnrollDetails && inputDetails) {
        let containsObject = getEnrollDetails.filter(function (item) {
            for (let i = 0, len = inputDetails.length; i < len; i++) {
                if (inputDetails[i].value == item.user_id) {
                    return false;
                }
            }
            return true;
        });

        for (const element of containsObject) {
            const options = {
                method: "DELETE",
                headers: {
                    // "Authorization": `${data.accessToken}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            }
            try {
                await fetch(API_URL + "/user/delEnrolledUser/" + element.course_id + "/" + element.user_id, options)
                    .then((res) => {
                        (res.json())
                            .then(data => {
                                console.log("Course deleted successfully")
                            })
                    })
            } catch (error: any) {
                console.log(error.response.data.message)
            }
        }

        for (const element of inputDetails) {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json, text/plain, */*",
                    // "Authorization": `${data.accessToken}`
                },
                body: JSON.stringify({ course_id: CourseId })
            }
            try {
                await fetch(API_URL + `/user/enroll/${element.value}`, options)
                    .then((res) => {
                        (res.json())
                            .then(data => {

                            })
                    })
            } catch (error: any) {
                console.log(error.response.data.message)
            }
        }
        setShow(false);
        setEnrollDetails([])
    }
})

const handleRemove = (removed: any) => {
    setInputDetails(removed)
};

let transformedOptions;
let getObjects
if (StudentsInfo) {

    transformedOptions = StudentsInfo.map(option => ({ label: option.username, value: option._id }));
    if (transformedOptions && getEnrollDetails) {
        getObjects = transformedOptions.filter(obj1 =>
            getEnrollDetails.some(obj2 => obj1.value === obj2.user_id)
        );
    }
};

const AddBank = (e: any) => {
console.log("eeee",e)
}

const UpdateStatus = async (event: any) => {
    try {
      let updatedCourse: any;
      if (event.status === "Inactive") {
        updatedCourse = {
          input: {
            id: event.id,
            status: 1,
          },
        };
      } else {
        updatedCourse = {
          input: {
            id: event.id,
            status: 0,
          },
        };
      }
      const response: any = await API.graphql(
        graphqlOperation(updateCourse, updatedCourse)
      );
      if (response.data) {
        provInfo();
      }
    } catch (error) {
      console.error('Error updating course data:', error);
    }
  };

const STORY_HEADERS: any = [
    {
        title: "S.no",
        prop: "serialNumber",
    },
    {
        prop: "title",
        title: "Title",
        sortable: true,
        isFilterable: true
    },
    {
        prop: "price",
        title: "Price",
        sortable: true,
        isFilterable: true
    },
    {
        prop: 'status',
        title: 'Status',
        
    },
    {
        prop: 'button',
        title: 'Actions',
        cell: (rowData: any) => (
            <div>
                <button className="btn btn-primary mx-1" onClick={() => handleEdit(rowData)} disabled={data?.details?.permissions?.Courses?.edit === "0" ? true : false}>Edit</button>
                <button className="btn btn-primary mx-1" onClick={() => AddBank(rowData.id)} disabled={data?.details?.permissions?.Courses?.edit === "0" ? true : false}>Add Banks</button>
                {/* <button className="btn btn-danger mx-2" onClick={() => handleDelete(item._id)}>Delete</button> */}
                {/* {data?.details?.role === "MA" || data?.details?.permissions?.Courses?.delete === "1" ? */}
                    <button className="btn btn-danger mx-1" onClick={() => {
                        const confirmBox = window.confirm(
                            "Do you really want to delete this Course?"
                        )
                        if (confirmBox === true) {
                            handleDelete(rowData.id)
                        }
                    }} disabled={data?.details?.permissions?.Courses?.edit === "0" ? true : false}>Delete</button>
                    {/* : null} */}
                {/* <button className="btn btn-secondary  mx-1" onClick={() => handleShow(rowData._id)} disabled={data?.details?.permissions?.Courses?.edit === "0" ? true : false}>Enroll Course to Student</button> */}
                {/* <button className="btn btn-primary mx-1" onClick={() => navigate("/viewTopics", { state: { id: rowData.id, courseTitle: rowData.title } })} disabled={data?.details?.permissions?.Courses?.edit === "0" ? true : false}>Topic</button> */}
                {/* <button className="btn btn-primary mx-1" onClick={() => navigate("/certificate", { state: { id: rowData._id } })} disabled={data?.details?.permissions?.Courses?.edit === "0" ? true : false}>Certificate</button> */}

            
                {rowData.status === "Active" ? (
                    <Button className="btn btn-danger mx-1" onClick={() => UpdateStatus(rowData)} disabled={data?.details?.permissions?.Courses?.edit === "0" ? true : false} >Inactive</Button>
                    ) : (
                    <Button className="btn btn-success mx-1" onClick={() => UpdateStatus(rowData)}  disabled={data?.details?.permissions?.Courses?.edit === "0" ? true : false}>Active</Button>
                    )}
            </div>

        ),
    }
];

const tableBodyRow = getCourses.map((item, index) => {
    return {
        ...item,
        serialNumber: index + 1,
        status: item.status === 1 ? 'Active' : 'Inactive',
    };
});

return (

    <div className='row col-md-12'>
        {/* {data?.details?.role === "MA" || data?.details?.permissions?.Courses?.view === "1" ? */}
            <>
                <div className='col-md-2'></div>
                <div className='col-md-8'>

                    <div className='row col-md-12'>
                        <div className='col-md-8 mt-4'>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    {paths.map((path: any, index) => (
                                        <li onClick={() => navigate(path.url)} key={path.name} className={index === paths.length - 1 ? 'breadcrumb-item active' : 'breadcrumb-item'} >
                                            {index === paths.length - 1 ? (
                                                path.name
                                            ) : (
                                                <>{path.name}</>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>
                        {/* {data?.details?.role === "MA" || data?.details?.permissions?.Courses?.write === "1" ? */}
                            <div className='col-md-4'>
                                <button className='btn btn-primary my-3' style={{ float: "right" }} onClick={() => navigate("/addCourses")} disabled={data?.details?.permissions?.Courses?.create === "0" ? true : false}> ADD </button>
                            </div>
                            {/* : null} */}  
                    </div>

                    {data?.details?.permissions?.Courses?.view === "1" ?
                    <div className='container mt-5'>

                        {/* <table className="table table-bordered"> */}
                        {/* <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead> */}
                        {/* <tbody>
                                {getCourses.map((item, i) => {

                                    return (

                                        <> */}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Enroll Course to Students</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="form-group">
                                    <label>Select Students:</label>
                                    <Multiselect
                                        isObject={true}
                                        onRemove={handleRemove}
                                        onSelect={handleSelect}
                                        options={transformedOptions}
                                        displayValue="label"
                                        showCheckbox
                                        // hideSelectedOptions={false}
                                        selectedValues={getObjects}
                                    />
                                </div>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <button className="btn btn-primary" onClick={SubmitCourse}>Submit</button>
                            </Modal.Footer>
                        </Modal>

                        {/* <tr key={item._id}>
                                                <td>{i + 1}</td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <button className="btn btn-primary mx-1" onClick={() => handleEdit(item._id)}>Edit</button>
                                                    {data?.details?.role === "MA" || data?.details?.permissions?.Courses?.delete === "1" ?
                                                        <button className="btn btn-danger mx-1" onClick={() => {
                                                            const confirmBox = window.confirm(
                                                                "Do you really want to delete this Course?"
                                                            )
                                                            if (confirmBox === true) {
                                                                handleDelete(item._id)
                                                            }
                                                        }}>Delete</button>
                                                        : null}
                                                    <button className="btn btn-secondary  mx-1" onClick={() => handleShow(item._id)}>Enroll Course to Student</button>
                                                    <button className="btn btn-primary mx-1" onClick={() => navigate("/viewTopics", { state: { id: item._id } })}>Topic</button>
                                                    <button className="btn btn-primary mx-1" onClick={() => navigate("/certificate", { state: { id: item._id } })}>Certificate</button>
                                                </td>
                                            </tr> */}

                        {/* </>
                                    )
                                })}
                            </tbody>
                        </table> */}
                        <DatatableWrapper body={tableBodyRow} headers={STORY_HEADERS}

                            paginationOptionsProps={{
                                initialState: {
                                    rowsPerPage: 10,
                                    options: [5, 10, 15, 20]
                                }
                            }}
                        >
                            <Row className="mb-4 p-2">
                                <Col xs={12} lg={4} className="d-flex flex-col justify-content-end align-items-end">
                                    <Filter />
                                </Col>
                                <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0">
                                    <PaginationOptions />
                                </Col>
                                <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-end align-items-end" >
                                    <Pagination />
                                </Col>
                            </Row>
                            <Table>
                                <TableHeader />
                                <TableBody />

                            </Table>
                        </DatatableWrapper>
                    </div>
                    :
                    <h6 className="text-center mt-5" style={{color:"red"}}> <span style={{fontWeight:"bold"}}>***NOTE: </span>You are not authorized to access this page***</h6>}

                </div>
            </>
            {/* : <h5 className='text-danger text-center mt-5'><b>Note :</b> You don't have access to view this page</h5>} */}
    </div>
);
}

export default Courses;