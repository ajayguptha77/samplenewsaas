// import React, { useEffect, useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ContextData from '../useContext';
// import "bootstrap/dist/css/bootstrap.css";
// import { Col, Row, Table, Button } from "react-bootstrap";
// import { Amplify, API, graphqlOperation } from 'aws-amplify';
// import { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
// import { listBlogs, listTopics } from '../../graphql/queries';
// import { deleteBlog, updateBlog } from '../../graphql/mutations';

// interface Topic {
//   id: string;
//   name: string;
//   status: string;
// }

// function TopicsList() {

//     const navigate = useNavigate();
//     const { data } = useContext<any>(ContextData);
//     const [Topics, setTopics] = useState<Topic[]>([]);

//     async function provInfo() {
//         try {

//             if(data?.details?.role === "MA"){
//                 const AllTopics = await API.graphql(graphqlOperation(listTopics)) as any;
//                 setTopics(AllTopics.data.listTopics.items)
//             }else{
//                 const filterVariables = {
//                     filter: {
//                       userID: {
//                         eq: data?.details?.id
//                       },
//                     },
//                   }
//                 const AllTopics = await API.graphql(graphqlOperation(listTopics, filterVariables)) as any;
//                 setTopics(AllTopics.data.listTopics.items)
//             }
//           } catch (err) {
//             console.log('error fetching',err);
//           }
//     }
//     useEffect(() => {
//         provInfo();
//     }, []);

//     const handleEdit = (e: string) => {
//         navigate("/updateBlog", { state: { id: e } });
//     }

//     const UpdateStatus = async (event: any) => {
//         try {
//           let updatedBank: any;
//           if (event.status === "Inactive") {
//             updatedBank = {
//               input: {
//                 id: event.id,
//                 status: 1,
//               },
//             };
//           } else {
//             updatedBank = {
//               input: {
//                 id: event.id,
//                 status: 0,
//               },
//             };
//           }
//           const response: any = await API.graphql(
//             graphqlOperation(updateBlog, updatedBank)
//           );
//           if (response.data) {
//             provInfo();
//           }
//         } catch (error) {
//           console.error('Error updating:', error);
//         }
//       };

//     const handleDelete = async (e: string) => {
//         const deleteData = {
//             input: {
//               id: e,
//             },
//           }
//         const response = await API.graphql(graphqlOperation(deleteBlog, deleteData));
//         if(response){
//             provInfo();
//         }
//     };

//     const STORY_HEADERS: any = [
//         {
//             title: "ID",
//             prop: "serialNumber",
//         },
//         {
//             prop: "name",
//             title: "Name",
//             sortable: true,
//             isFilterable: true
//         },
//         {
//             prop: 'status',
//             title: 'Status',
            
//         },
//         {
//             prop: 'button',
//             title: 'Actions',
//             cell: (rowData: Topic) => (
//                 <div>
//                     <Button className="btn btn-primary mx-2" onClick={() => handleEdit(rowData.id)}>Edit</Button>
//                     <Button className="btn btn-danger mx-1" onClick={() => {
//                         const confirmBox = window.confirm(
//                             "Do you really want to delete this Blog?"
//                         )
//                         if (confirmBox === true) {
//                             handleDelete(rowData.id)
//                         }
//                     }}>Delete</Button>
//                     {/* {rowData.status === "Active" ? (
//                         <Button className="btn btn-danger mx-1" onClick={() => UpdateStatus(rowData)} >Inactive</Button>
//                     ) : (
//                         <Button className="btn btn-success mx-1" onClick={() => UpdateStatus(rowData)} >Active</Button>
//                     )} */}
//                 </div>
//             ),
//         }
//     ];

    

//     function removeHtmlTagsFromQuestion(Description: string) {
//         const parser = new DOMParser();
//         const parsedContent = parser.parseFromString(Description, 'text/html');
//         return parsedContent.body.textContent;
//     }
//     const tableBodyRow = Topics.map((item, index) => {
//         return {
//             ...item,
//             serialNumber: index + 1,
//             // status: item.status === 1 ? 'Active' : 'Inactive',
//         };
//     });

//     return (
//         <div className='row col-md-12'>
//             <div className='col-md-2'></div>
//             <div className='col-md-10'>
//                 <div className='container mt-5'>
//                     <DatatableWrapper body={tableBodyRow} headers={STORY_HEADERS}
//                         paginationOptionsProps={{
//                             initialState: {
//                                 rowsPerPage: 10,
//                                 options: [5, 10, 15, 20]
//                             }
//                         }}
//                     >
//                         <Row className="mb-4 p-2">
//                             <Col xs={12} lg={4} className="d-flex flex-col justify-content-end align-items-end">
//                                 <Filter />
//                             </Col>
//                             <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0">
//                                 <PaginationOptions />
//                             </Col>
//                             <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-end align-items-end" >
//                                 <Pagination />
//                             </Col>
//                         </Row>
//                         <button className='btn btn-primary my-3' style={{ float: "right" }} onClick={() => navigate("/addTopics")}>ADD</button>
//                         <Table>
//                             <TableHeader />
//                             <TableBody />
//                         </Table>
//                     </DatatableWrapper>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TopicsList;


import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContextData from '../useContext';
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Table, Button } from "react-bootstrap";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
import { listTopics } from '../../graphql/queries'; // Import the correct query and mutation
import { updateTopic, deleteTopic } from '../../graphql/mutations';

interface Topic {
  id: string;
  name: string;
  status: any;
}

function TopicsList() {
    const navigate = useNavigate();
    const { data } = useContext<any>(ContextData);
    const [Topics, setTopics] = useState<Topic[]>([]);

    async function provInfo() {
        try {
            if (data?.details?.role === "MA") {
                const AllTopics = await API.graphql(graphqlOperation(listTopics)) as any;
                setTopics(AllTopics.data.listTopics.items);
            } else if(data?.details?.adminID){
                const filterVariables = {
                    filter: {
                        adminID: {
                            eq: data?.details?.id
                        },
                    },
                };
                const AllTopics = await API.graphql(graphqlOperation(listTopics, filterVariables)) as any;
                setTopics(AllTopics.data.listTopics.items);
            }else{
                const filterVariables = {
                    filter: {
                        userID: {
                            eq: data?.details?.id
                        },
                    },
                };
                const AllTopics = await API.graphql(graphqlOperation(listTopics, filterVariables)) as any;
                setTopics(AllTopics.data.listTopics.items);
            }
        } catch (err) {
            console.log('error fetching', err);
        }
    }

    useEffect(() => {
        provInfo();
    }, []);

    const handleEdit = (e: string) => {
        navigate("/updateTopic", { state: { id: e } });
    }

const handleAddsubTopic = (e: string) => {
    console.log("e",e);
    navigate("/listSubTopics", { state: { topicID: e } });
}

    const UpdateStatus = async (event: Topic) => {

        console.log("event",event)
    try {
      let updatedTopic: any;
      if (event.status === "Inactive") {
        updatedTopic = {
          input: {
            id: event.id,
            status: 1,
          },
        };
      } else {
        updatedTopic = {
          input: {
            id: event.id,
            status: 0,
          },
        };
      }
      const response: any = await API.graphql(
        graphqlOperation(updateTopic, updatedTopic)
      );
      // After a successful status update, update the user list
      if (response.data) {
        provInfo();
      }
    } catch (error) {
      console.error('Error updating course data:', error);
    }
        // try {
        //     const updatedTopic = {
        //         id: event.id,
        //         status: event.status === "Active" ? "Inactive" : "Active", // Toggle status
        //     };

        //     const response: any = await API.graphql(
        //         graphqlOperation(updateTopic, { input: updatedTopic })
        //     );

        //     if (response.data) {
        //         provInfo();
        //     } else if (response.errors) {
        //         console.error('GraphQL Errors:', response.errors);
        //     }
        // } catch (error) {
        //     console.error('Error updating:', error);
        // }
    };

    const handleDelete = async (e: string) => {
        const deleteData = {
            input: {
                id: e,
            },
        };

        const response = await API.graphql(graphqlOperation(deleteTopic, deleteData));

        if (response) {
            provInfo();
        }
    };

    const STORY_HEADERS: any = [
        {
            title: "ID",
            prop: "serialNumber",
        },
        {
            prop: "name",
            title: "Name",
            sortable: true,
            isFilterable: true,
            // render: (rowData: Topic) => (
            //     <Link to={`/listSubTopics`}>{rowData.name}</Link>
            //   ),
            // cellTemplate: (row: any) => {
            //     return `<a href="/listSubTopics">${row.name}</a>`;
            // },
        },
        {
            prop: 'status',
            title: 'Status',
        },
        {
            prop: 'button',
            title: 'Actions',
            cell: (rowData: Topic) => (
                <div>
                    <Button className="btn btn-primary mx-2" onClick={() => handleAddsubTopic(rowData.id)}>list subTopics</Button>
                    <Button className="btn btn-primary mx-2" onClick={() => handleEdit(rowData.id)}>Edit</Button>
                    <Button className="btn btn-danger mx-1" onClick={() => {
                        const confirmBox = window.confirm(
                            "Do you really want to delete this Topic?"
                        )
                        if (confirmBox === true) {
                            handleDelete(rowData.id)
                        }
                    }}>Delete</Button>
                    
                    {rowData.status === "Active" ? (
                        <Button className="btn btn-danger mx-1" onClick={() => UpdateStatus(rowData)}>Inactive</Button>
                    ) : (
                        <Button className="btn btn-success mx-1" onClick={() => UpdateStatus(rowData)}>Active</Button>
                    )}
                </div>
            ),
        }
    ];

    const tableBodyRow = Topics.map((item, index) => {
        return {
            ...item,
            serialNumber: index + 1,
            status: item.status === 1 ? 'Active' : 'Inactive',
        };
    });

    return (
        <div className='row col-md-12'>
            <div className='col-md-2'></div>
            <div className='col-md-10'>
                <div className='container mt-5'>
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
                        <button className='btn btn-primary my-3' style={{ float: "right" }} onClick={() => navigate("/addTopics")}>ADD</button>
                        <Table>
                            <TableHeader />
                            <TableBody />
                        </Table>
                    </DatatableWrapper>
                </div>
            </div>
        </div>
    )
}

export default TopicsList;