import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextData from '../useContext';
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Table, Button } from "react-bootstrap";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
import { listQuestionBankDetails } from '../../graphql/queries';
import { deleteQuestionBankDetails, updateQuestionBankDetails } from '../../graphql/mutations';

interface QuestionBank {
  id: string;
  name: string;
  email: string;
  campus: string;
  visibility: string;
  department: string;
  description: string;
  status: any;
}

function ListQuestionBank() {
  const navigate = useNavigate();
  const { data } = useContext<any>(ContextData);
  const [getDetails, setDetails] = useState<QuestionBank[]>([]);

  async function provInfo() {
    try {
      if (data?.details?.role === "MA") {
        const AllAdmins = await API.graphql(graphqlOperation(listQuestionBankDetails)) as any;
        setDetails(AllAdmins.data.listQuestionBankDetails.items);
      } else if(data?.details?.role === "admin"){
        const filterVariables = {
          filter: {
            adminID: {
              eq: data?.details?.id
            },
          },
        }
        const AllAdmins = await API.graphql(graphqlOperation(listQuestionBankDetails, filterVariables)) as any;
        setDetails(AllAdmins.data.listQuestionBankDetails.items);
      }else{
        const filterVariables = {
          filter: {
            userID: {
              eq: data?.details?.id
            },
          },
        }
        const AllAdmins = await API.graphql(graphqlOperation(listQuestionBankDetails, filterVariables)) as any;
        setDetails(AllAdmins.data.listQuestionBankDetails.items);
      }
    } catch (err) {
      console.log('error fetching', err);
    }
  }

  useEffect(() => {
    provInfo();
  }, []);

  const handleEdit = (e: string) => {
    navigate("/updateQuestionBank", { state: { id: e } });
  }

  const handleQuestion = (e: string) => {
    console.log("questionBank id", e);
    navigate("/listQuestions", { state: { questionbankid: e } });
  }
  const UpdateStatus = async (event: any) => {
    try {
      let updatedBank: any;
      if (event.status === "Inactive") {
        updatedBank = {
          input: {
            id: event.id,
            status: 1,
          },
        };
      } else {
        updatedBank = {
          input: {
            id: event.id,
            status: 0,
          },
        };
      }
      const response: any = await API.graphql(
        graphqlOperation(updateQuestionBankDetails, updatedBank)
      );
      if (response.data) {
        provInfo();
      }
    } catch (error) {
      console.error('Error updating:', error);
    }
  };

  const handleDelete = async (e: string) => {
    const deleteBank = {
      input: {
        id: e,
      },
    }
    const response = await API.graphql(graphqlOperation(deleteQuestionBankDetails, deleteBank));
    if (response) {
      provInfo();
    }
  };

  const CONTENT_BANK_HEADERS: any = [
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
      prop: "description",
      title: "Description",
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
      cell: (rowData: QuestionBank) => (
        <div>
          <Button className="btn btn-primary mx-2" onClick={() => handleEdit(rowData.id)} disabled={data?.details?.permissions?.QuestionBank?.edit === "0" ? true : false}>Edit</Button>
          <Button className="btn btn-primary mx-2" onClick={() => {handleQuestion(rowData.id)}} >Question</Button>
          <Button className="btn btn-danger mx-2" onClick={() => {
            const confirmBox = window.confirm(
              "Do you really want to delete this Content Bank?"
            )
            if (confirmBox === true) {
              handleDelete(rowData.id)
            }
          }} disabled={data?.details?.permissions?.QuestionBank?.edit === "0" ? true : false}>Delete</Button>
          {rowData.status === "Active" ? (
            <Button className="btn btn-danger mx-1" onClick={() => UpdateStatus(rowData)} disabled={data?.details?.permissions?.QuestionBank?.edit === "0" ? true : false}>Inactive</Button>
          ) : (
            <Button className="btn btn-success mx-1" onClick={() => UpdateStatus(rowData)} disabled={data?.details?.permissions?.QuestionBank?.edit === "0" ? true : false}>Active</Button>
          )}
        </div>
      ),
    }
  ];

  const tableBodyRow = getDetails.map((item, index) => {
    return {
      ...item,
      serialNumber: index + 1,
      status: item.status === 1 ? 'Active' : 'Inactive',
    };
  });

  return (
    <div className='row col-md-12'>
      <div className='col-md-2'></div>
      {data?.details?.permissions?.QuestionBank?.view === "1" ?
      <div className='col-md-10'>
        <div className='container mt-5'>
          <DatatableWrapper body={tableBodyRow} headers={CONTENT_BANK_HEADERS}
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
            <button className='btn btn-primary my-3' style={{ float: "right" }} onClick={() => navigate("/addQuestionBank")} disabled={data?.details?.permissions?.QuestionBank?.create === "0" ? true : false}>ADD</button>
            <Table>
              <TableHeader />
              <TableBody />
            </Table>
          </DatatableWrapper>
        </div>
      </div>
      : <h6 className="text-center mt-5" style={{color:"red"}}> <span style={{fontWeight:"bold"}}>***NOTE: </span>You are not authorized to access this page***</h6>}

    </div>
  )
}

export default ListQuestionBank;