import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextData from '../../useContext';
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Table, Button } from "react-bootstrap";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
import { deleteUser, updateUser } from '../../../graphql/mutations';
import { listUsers } from '../../../graphql/queries';
import Select from 'react-select';

interface User {
  id: string;
  username: string;
  email: string;
  MobNumber: string;
  status: any;
}

function HODlist() {

  const navigate = useNavigate();
  const { data } = useContext<any>(ContextData);
  const [getUsers, setUsers] = useState<User[]>([]);
  const [Admins, setAdmins] = useState<User[]>([]);
  const [SelectedOption, setSelectedOption] = useState();

  async function provInfo() {
    try {

      const filterAdmin = {
        filter: {
          role: {
            eq: 'admin'
          },
          status:{
            eq: 1
          }
        },
      }
      const AllAdminUser = await API.graphql(graphqlOperation(listUsers, filterAdmin)) as any;
      if(AllAdminUser.data.listUsers.items){
        const batchOptions = AllAdminUser.data.listUsers.items.map((batch: any) => ({
        label: batch.username,
        value: batch.id,
      }));
            
      setAdmins(batchOptions);
      }

        let filterVariables 
        if(data?.details?.role === "admin"){
          filterVariables = {
            filter: {
              role: {
                eq: 'hod'
              },
              adminID: {
                eq: data?.details?.id
              },
            },
          }
          const AllAdmins = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
          setUsers(AllAdmins.data.listUsers.items)
        }else if(data?.details?.role === "MA"){
          filterVariables = {
            filter: {
              role: {
                eq: 'hod'
              }
            },
          }
          const AllAdmins = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
          setUsers(AllAdmins.data.listUsers.items)
        }else{
          filterVariables = {
            filter: {
              role: {
                eq: 'hod'
              },
              userID: {
                eq: data?.details?.id
              },
            },
          }
          const AllAdmins = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
          setUsers(AllAdmins.data.listUsers.items)
        }
        
      } catch (err) {
        console.log('error fetching');
      }
}

  useEffect(() => {
    provInfo();
  }, []);

  const handleEdit = async (event: any) => {
    console.log("event",event)
    try {
      let updatedUser: any;
      if (event.status === "Inactive") {
        updatedUser = {
          input: {
            id: event.id,
            status: 1,
          },
        };
      } else {
        updatedUser = {
          input: {
            id: event.id,
            status: 0,
          },
        };
      }
      const response: any = await API.graphql(
        graphqlOperation(updateUser, updatedUser)
      );
      if (response.data) {
        provInfo();
      }
    } catch (error) {
      console.error('Error updating course data:', error);
    }
  };

  const EditUser = (e: string) => {
    navigate('/UpdateStaff', { state: { id: e } });
  };

  const DeleteUser = async (event: string) => {
    const deleteAdmin = {
      input: {
        id: event,
      },
    }
        const response = await API.graphql(graphqlOperation(deleteUser, deleteAdmin));
        if (response) {
          provInfo();
        }
  }

    const STORY_HEADERS: any = [
        {
            title: "ID",
            prop: "serialNumber",
        },
        {
            prop: "username",
            title: "Username",
            sortable: true,
            isFilterable: true
        },
        {
            prop: "email",
            title: "Email",
            sortable: true,
            isFilterable: true
        },
        {
          prop: "MobNumber",
          title: "Mobile",
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
          cell: (rowData: User) => (
              <div>
                  <Button className="btn btn-primary mx-2" onClick={() => EditUser(rowData.id)}>Edit</Button>
                  <Button className="btn btn-danger mx-1" onClick={() => {
                      const confirmBox = window.confirm(
                          "Do you really want to delete this User?"
                      )
                      if (confirmBox === true) {
                        DeleteUser(rowData.id)
                      }
                  }}>Delete</Button>
                  {rowData.status === "Active" ? (
                    <Button className="btn btn-danger mx-1" onClick={() => handleEdit(rowData)} >Inactive</Button>
                    ) : (
                    <Button className="btn btn-success mx-1" onClick={() => handleEdit(rowData)} >Active</Button>
                    )}
                  
              </div>
          ),
      }
    ];
    
    const handleAdmin = async (option : any) => {
      setSelectedOption(option);
      const filterVariables = {
        filter: {
          role: {
            eq: 'hod'
          },
          adminID: {
            eq: option.value
          },
        },
      }
      const AllAdmins = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
      setUsers(AllAdmins.data.listUsers.items)
    };

    const tableBodyRow = getUsers.map((item, index) => {
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
                { data?.details?.role === "MA" ? 
                  <div className='row col-md-12'>
                  <div className='col-md-6'>
                    Select Admin
                <Select
                  value={SelectedOption}
                  onChange={(e) => handleAdmin(e)}
                  options={Admins}
                  isSearchable={true}
                />
                <br />
                </div>
                
                <hr />
                </div>
                : null }
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
                        <button className='btn btn-primary my-3' style={{ float: "right" }} onClick={() => navigate("/register")}>ADD</button>
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

export default HODlist;
