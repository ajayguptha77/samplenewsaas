import React, { useContext, useEffect, useState } from 'react';
import ContextData from '../useContext';
import { useNavigate } from 'react-router-dom';
import { getContentBankDetails, getDepartment, listContentBankDetails } from '../../graphql/queries';
import { deleteContentBankDetails } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

interface QuestionBank {
  id: string;
  name: string;
  email: string;
  campus: string;
  visibility: string;
  department: string;
  description: string;
}

function ListContentBank() {
  const navigate = useNavigate();
  const { data } = useContext<any>(ContextData);
  const [getDetails, setDetails] = useState<QuestionBank[]>([]);

  useEffect(() => {
    async function fetchQuestionBankDetails() {
      try {
        if(data?.details?.role === "MA"){
          const result = await API.graphql(graphqlOperation(listContentBankDetails)) as any;
          const contentDetails = result.data.listContentBankDetails.items;
          setDetails(contentDetails);
      }else if(data?.details?.role === "admin"){
        const filterVariables = {
            filter: {
              adminID: {
                eq: data?.details?.id
              },
            },
          }
             
          const result = await API.graphql(graphqlOperation(listContentBankDetails, filterVariables)) as any;
        const contentDetails = result.data.listContentBankDetails.items;
        setDetails(contentDetails);
        }else{
          const filterVariables = {
              filter: {
                userID: {
                  eq: data?.details?.id
                },
              },
            }
               
        const result = await API.graphql(graphqlOperation(listContentBankDetails, filterVariables)) as any;
        const contentDetails = result.data.listContentBankDetails.items;
        setDetails(contentDetails);
          }
      } catch (err) {
        console.error('Error fetching content bank details:', err);
      }
    }

    fetchQuestionBankDetails();
  }, [getDetails]);


  const EditUser = (e: string) => {
    navigate('/updateContentBank', { state: { id: e } });
  };

  const DeleteUser = async (event: string) => {
    const deleteBank = {
      input: {
        id: event,
      },
    }
        const response = await API.graphql(graphqlOperation(deleteContentBankDetails, deleteBank));
  }

  async function getDepartmentName(departmentId: string) {
    try {
      const getByID = await API.graphql(
        graphqlOperation(getDepartment, { id: departmentId })
      ) as any;
      console.log("get", getByID);
      return getByID?.data?.getDepartment?.name || "";
    } catch (error) {
      console.error("Error fetching department:", error);
      return "";
    }
  }

  return (
    <div className="row col-md-12">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="row col-md-12">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <button
              className="btn btn-primary mt-3"
              style={{ float: 'right' }}
              onClick={() => navigate('/addAdmin')}
            >
              ADD
            </button>
          </div>
        </div>
        <div className="container mt-5">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Visibility</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getDetails.map( (item: any, i) =>{ 
                
                return(
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.visibility}</td>
                  <td>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => EditUser(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => DeleteUser(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListContentBank;
