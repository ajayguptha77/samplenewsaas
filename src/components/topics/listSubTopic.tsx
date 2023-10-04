import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ContextData from '../useContext';
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Table, Button } from "react-bootstrap";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
import { listSubTopics } from '../../graphql/queries'; // Import the listSubTopics query
import { deleteBlog, updateBlog } from '../../graphql/mutations';
import { updateSubTopic, deleteSubTopic } from '../../graphql/mutations';

interface SubTopic {
    id: string;
    name: string;
    status: any;

}

function ListSubTopics() { // Corrected the function name to follow conventions
    const location = useLocation();
    const navigate = useNavigate();
    const { data } = useContext<any>(ContextData);
    const [subTopics, setSubTopics] = useState<SubTopic[]>([]); // Corrected the state variable name

    const fetchSubTopicsData = async () => {
        try {
            let subTopicsData: SubTopic[] = [];

            if (data?.details?.role !== "student") {
                const filterVariables = {
                    filter: {
                        topicID: {
                        eq: location.state.topicID
                      },
                    },
                  }
                const response: any = await API.graphql(graphqlOperation(listSubTopics, filterVariables));
                subTopicsData = response.data.listSubTopics.items;
            }

            setSubTopics(subTopicsData); // Set the subtopics data in state
        } catch (error) {
            console.error('Error fetching subtopics:', error);
        }
    };
console.log("location", location.state.topicID);
const topicID = location.state.topicID;

    useEffect(() => {
        // Fetch the list of subtopics when the component mounts
        fetchSubTopicsData();
    }, [data]); // Added data as a dependency

    const handleEdit = (id: string) => {
        navigate("/updateSubTopic", { state: { id: id, topicID: location.state.topicID } });
    }

    const UpdateStatus = async (event: SubTopic) => {
        try {
            let updatedSubTopic: SubTopic;
            if (event.status === "Inactive") {
                updatedSubTopic = {
                    ...event,
                    status: "Active",
                };
            } else {
                updatedSubTopic = {
                    ...event,
                    status: "Inactive",
                };
            }
            const response: any = await API.graphql(
                graphqlOperation(updateSubTopic, updatedSubTopic)
            );
            if (response.data) {
                fetchSubTopicsData(); // Call the function to fetch subtopics again
            }
        } catch (error) {
            console.error('Error updating:', error);
        }
    };

    const handleDelete = async (id: string) => {
        const deleteData = {
            input: {
                id,
            },
        }
        const response = await API.graphql(graphqlOperation(deleteSubTopic, deleteData));
        if (response) {
            fetchSubTopicsData(); // Call the function to fetch subtopics again
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
            isFilterable: true
        },
        {
            prop: 'status',
            title: 'Status',

        },
        {
            prop: 'button',
            title: 'Actions',
            cell: (rowData: SubTopic) => (
                <div>
                    <Button className="btn btn-primary mx-2" onClick={() => handleEdit(rowData.id)}>Edit</Button>
                    <Button className="btn btn-danger mx-1" onClick={() => {
                        const confirmBox = window.confirm(
                            "Do you really want to delete this SubTopic?"
                        )
                        if (confirmBox === true) {
                            handleDelete(rowData.id)
                        }
                    }}>Delete</Button>
                    {/* <Button className="btn mx-1" onClick={() => UpdateStatus(rowData)} >Toggle Status</Button> */}
                    {rowData.status === "Active" ? (
                        <Button className="btn btn-danger mx-1" onClick={() => UpdateStatus(rowData)}>Inactive</Button>
                    ) : (
                        <Button className="btn btn-success mx-1" onClick={() => UpdateStatus(rowData)}>Active</Button>
                    )}
                </div>
            ),
        }
    ];

    const tableBodyRow = subTopics.map((item, index) => {
        return {
            ...item,
            serialNumber: index + 1,
            status: item.status === 1 ? 'Active' : 'Inactive',
            // TopicName: location.state.topicName
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
                        <button className='btn btn-primary my-3' style={{ float: "right" }} onClick={() => navigate("/addSubtopic", { state: { topicID: topicID } })}>ADD</button>
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

export default ListSubTopics; 