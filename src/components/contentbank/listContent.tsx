import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ContextData from '../useContext';
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Table, Button, Pagination } from "react-bootstrap";
import { API, graphqlOperation } from 'aws-amplify';
import { listContents } from '../../graphql/queries';
import { DatatableWrapper, Filter, PaginationOptions, TableBody, TableHeader } from 'react-bs-datatable';
import { deleteContent } from '../../graphql/mutations';
import { getSubTopic, getTopic, getGroup } from '../../graphql/queries'; // Import the queries for related data.

interface Content {
  id: string;
  contentBankID: string;
  contentType: string;
  contentsubType: string;
  contentName: string;
  subTopic: string;
  topic: string;
  subject: string;
  content: string;
  averageReadTime: string;
  groups: string;
  additionalInformation: string;
}

function ListContents() {
  const location = useLocation();
  const navigate = useNavigate();
  const [details, setDetails] = useState<Content[]>([]);
  const { data } = useContext<any>(ContextData);
  // console.log("details", details)

  const contentBankid = location.state.contentBankid;
  console.log("contentBankid", contentBankid);
  async function fetchContents() {
    try {
      const filterVariables = {
        filter: {
          contentBankID: {
            eq: location.state.contentBankid
          },
        },
      }
      const response: any = await API.graphql(graphqlOperation(listContents, filterVariables));
      if (response && response.data) {
        const contentItems: Content[] = response.data.listContents.items;
        const updatedContentItems: any = await Promise.all(
          contentItems.map(async (content, index) => {
            console.log("index",index)
            try {
              const subTopicResponse: any = await API.graphql(
                graphqlOperation(getSubTopic, { id: content.subTopic })
              );
              console.log("subTopicResponse",subTopicResponse?.data?.getSubTopic?.name)
              contentItems[index].subTopic = subTopicResponse?.data?.getSubTopic?.name

              const topicResponse: any = await API.graphql(
                graphqlOperation(getTopic, { id: subTopicResponse.data.getSubTopic.topicID })
              );
              contentItems[index].topic = topicResponse.data.getTopic.name
              console.log("topicResponse",topicResponse)
              const groupsResponse: any = await API.graphql(
                graphqlOperation(getGroup, { id: content.groups })  
              ); 
              console.log("groupsResponse",groupsResponse)
              console.log("subTopicResponse.data.getSubTopic.name",subTopicResponse.data.getSubTopic.name)
              
              // contentItems[index][topic] = subTopicResponse.data.getSubTopic.name
              // contentItems[index].subTopicName = topicResponse.data.subTopicResponse.name
              // contentItems[index].groupName = groupsResponse.data.getGroup.name
               

              // return {
              //   ...content,
              //   subTopic: subTopicResponse.data.getSubTopic.name, 
              //   topic: topicResponse.data.getTopic.name, 
              //   groups: groupsResponse.data.getGroups.name,
              // };
            } catch (error) {
              console.error('Error fetching related data:', error);
              return content; 
            }
          })
        );

       
        setDetails(updatedContentItems);
       
      }
    } catch (err) {
      console.log('Error fetching contents:', err);
    }
  }

  useEffect(() => {
    fetchContents();
  }, []);

  const handleEdit = (id: string) => {
    navigate("/updateContent", { state: { id: id, contentBankid: location.state.contentBankid } });
  }

  const handleDelete = async (id: string) => {
    try {
      const deleteContentInput = {
        input: {
          id,
        },
      };

      const response = await API.graphql(graphqlOperation(deleteContent, deleteContentInput));

      if (response) {
        fetchContents(); // Refetch data after delete
      }
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  const CONTENT_HEADERS: any = [
    {
      title: "ID",
      prop: "serialNumber",
    },
    {
      prop: 'contentName',
      title: 'ContentName',
      sortable: true,
      isFilterable: true
    },
    {
      prop: 'subTopic',
      title: 'SubTopic',
      sortable: true,
      isFilterable: true,
    },
    {
      prop: 'topic',
      title: 'Topic',
      sortable: true,
      isFilterable: true,
    },
    {
      prop: 'subject',
      title: 'Subject',
      sortable: true,
      isFilterable: true
    },
    {
      prop: 'button',
      title: 'Actions',
      cell: (rowData: Content) => (
        <div>
          <Button className="btn btn-primary mx-2" onClick={() => handleEdit(rowData.id)} disabled={data?.details?.permissions?.Content?.edit === "0" ? true : false}>Edit</Button>
          <Button className="btn btn-danger mx-2" onClick={() => {
            const confirmBox = window.confirm(
              "Do you really want to delete this content?"
            );
            if (confirmBox === true) {
              handleDelete(rowData.id);
            }
          }} disabled={data?.details?.permissions?.Content?.edit === "0" ? true : false}>Delete</Button>
        </div>
      ),
    },
  ];


  
  const tableBodyRow = details.map((item, index) => {
    return {
      ...item,
      serialNumber: index + 1,
      subTopic: item.subTopic, // Assuming subTopic is an object with a name property
      topic: item.topic, // Assuming topic is an object with a name property
      groups: item.groups
    };
  });

  return (
    <div className='row col-md-12'>
      <div className='col-md-2'></div>
      {data?.details?.permissions?.Content?.view === "1" ?
      <div className='col-md-10'>
        <div className='container mt-5'>
          <DatatableWrapper body={tableBodyRow} headers={CONTENT_HEADERS}
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
            <button className='btn btn-primary my-3' style={{ float: "right" }} onClick={() => navigate("/addContent", { state: { contentBankid: location.state.contentBankid } })} disabled={data?.details?.permissions?.Content?.create === "0" ? true : false}>ADD</button>
            <Table>
              <TableHeader />
              <TableBody />
            </Table>
          </DatatableWrapper>
        </div>
      </div>
      :
      <h6 className="text-center mt-5" style={{color:"red"}}> <span style={{fontWeight:"bold"}}>***NOTE: </span>You are not authorized to access this page***</h6>}
    
    </div>
  )
}

export default ListContents;