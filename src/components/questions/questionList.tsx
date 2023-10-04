import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ContextData from '../useContext';
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Table, Button } from "react-bootstrap";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { DatatableWrapper, Filter, Pagination, PaginationOptions, TableBody, TableHeader } from "react-bs-datatable";
import { listQuestions, getQuestions } from '../../graphql/queries';
import { deleteQuestions } from '../../graphql/mutations';


interface QuestionDetails {
  id: string;
  questionType: string;
  subject: string;
  difficulty: string;
  topic: string;
  codeEditor: string;
  textEditor: string;
  options: Array<Option>;
  solution: Array<Solution>;
  hint: Array<Hint>;
  groups: any;
  media: string;
  wordLimit?: any;
  internalKeywords: [string]
  externalKeywords: [string]
  competency: Array<Competency>
  subTopic: string;
  concepts: string;
}

interface Competency {
  progLevel: string;
  progSub: string;
  progTopic: string;
}

interface SubTopic {
  subject: any;
  id?: string;
  name: string;
  // subtype: string;
  topicID: string;
}

interface Option {
  optionNumber: number;
  correctAnswer: boolean;
  answer: string | null;
  isPartialCorrect: boolean;
  weightage: number;
  negMarks: number;
}

interface Solution {
  optionNumber: number;
  answer: string | null;
  bestSolution: string;
}

interface Hint {
  hint: string;
}

interface Group {
  label: string;
  value: string;
}

function QuestionList() {
  const location = useLocation();
  const navigate = useNavigate();
  // const { data } = useContext<any>(ContextData);
  const [questions, setQuestions] = useState([]);
  const { data } = useContext<any>(ContextData);

  const questionbankid = location.state.questionbankid;
  console.log("list id ", questionbankid);

  async function provInfo() {
    try {
      // if (data?.details?.role === "MA") {
      const filterVariables = {
        filter: {
          questionBankID: {
            eq: location.state.questionbankid
          },
        },
      }
      const AllQuestions = await API.graphql(graphqlOperation(listQuestions, filterVariables)) as any;
      setQuestions(AllQuestions.data.listQuestions.items);
      // }else if(data?.details?.role === "admin"){
      //   const filterVariables = {
      //     filter: {
      //       adminID: {
      //         eq: data?.details?.id
      //       },
      //     },
      //   }
      //   const AllQuestions = await API.graphql(graphqlOperation(listQuestions,filterVariables)) as any;
      //   setQuestions(AllQuestions.data.listQuestions.items);
      // }else{
      //   const filterVariables = {
      //     filter: {
      //       userID: {
      //         eq: data?.details?.id
      //       },
      //     },
      //   }
      //   const AllQuestions = await API.graphql(graphqlOperation(listQuestions, filterVariables)) as any;
      //   setQuestions(AllQuestions.data.listQuestions.items);

      // }
    } catch (err) {
      console.log('error fetching', err);
    }
  }

  useEffect(() => {
    provInfo();
  }, []);

  // console.log("all questions", questions)

  const handleEdit = (e: string) => {
    navigate("/updateQuestion", { state: { id: e, questionbankid: questionbankid } });
  }

  const handleDelete = async (e: string) => {
    const deleteQuestion = {
      input: {
        id: e,
      },
    }
    const response = await API.graphql(graphqlOperation(deleteQuestions, deleteQuestion));
    if (response) {
      provInfo();
    }
  };

  const QUESTION_HEADERS: any = [
    {
      title: "ID",
      prop: "serialNumber",
    },
    {
      prop: "textEditor",
      title: "Question",
      sortable: true,
      isFilterable: true
    },
    {
      prop: "answer",
      title: "Answer",
      sortable: true,
      isFilterable: true
    },
    {
      prop: 'button',
      title: 'Actions',
      cell: (rowData: QuestionDetails) => (
        <div>
          <Button className="btn btn-primary mx-2" onClick={() => handleEdit(rowData.id)} disabled={data?.details?.permissions?.Questions?.edit === "0" ? true : false}>Edit</Button>
          <Button className="btn btn-danger mx-2" onClick={() => {
            const confirmBox = window.confirm(
              "Do you really want to delete this Question?"
            )
            if (confirmBox === true) {
              handleDelete(rowData.id)
            }
          }} disabled={data?.details?.permissions?.Questions?.edit === "0" ? true : false}>Delete</Button>
          {/* {rowData.status === "Active" ? (
            <Button className="btn btn-danger mx-1" onClick={() => UpdateStatus(rowData)} >Inactive</Button>
          ) : (
            <Button className="btn btn-success mx-1" onClick={() => UpdateStatus(rowData)} >Active</Button>
          )} */}
        </div>
      ),
    }
  ];

  const tableBodyRow = questions.map((item: any, index: number) => {
    const textEditor = item?.question?.replace(/<p>|<\/p>/g, '');
    const codeEditor = item?.codeEditor;
    const answer = item?.options?.map((option: Option) => option?.answer).join(', ').replace(/<p>|<\/p>/g, '');
    return {
      ...item,
      serialNumber: index + 1,
      // codeEditor: codeEditor || 'N/A',
      textEditor: textEditor || 'N/A',
      answer: answer || 'N/A',
      //   status: item.status === 1 ? 'Active' : 'Inactive',
    };
  });


  return (
    <div className='row col-md-12'>
      <div className='col-md-2'></div>
      {data?.details?.permissions?.Questions?.view === "1" ?
        <div className='col-md-10'>
          <div className='container mt-5'>
            <DatatableWrapper body={tableBodyRow} headers={QUESTION_HEADERS}
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
              <button className='btn btn-primary my-3' style={{ float: "right" }} onClick={() => navigate("/addQuestion", { state: { questionbankid: questionbankid } })} disabled={data?.details?.permissions?.Questions?.create === "0" ? true : false}>ADD</button>
              <Table>
                <TableHeader />
                <TableBody />
              </Table>
            </DatatableWrapper>
          </div>
        </div>
        :
        <h6 className="text-center mt-5" style={{ color: "red" }}> <span style={{ fontWeight: "bold" }}>***NOTE: </span>You are not authorized to access this page***</h6>}
    </div>
  )
}
export default QuestionList;