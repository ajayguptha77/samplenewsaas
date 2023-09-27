import React, { useContext, useEffect, useState } from 'react';
import ContextData from '../../useContext';
import { useNavigate } from 'react-router-dom';
import { listUsers } from '../../../graphql/queries';
import { updateUser,deleteUser } from '../../../graphql/mutations';
import { Amplify, API, graphqlOperation } from 'aws-amplify';

interface User {
  _id: string;
  username: string;
  email: string;
  MobNumber: string;
  status: number;
}

function TutorList() {
  const navigate = useNavigate();
  const { data } = useContext<any>(ContextData);
  const [getUsers, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function provInfo() {
        try {
          let filterVariables
          if(data?.details?.role === "admin" ){
            filterVariables = {
              filter: {
                role: {
                  eq: 'tutor'
                },
                adminID: {
                  eq: data?.details?.id
                },
              },
            }
            
          }else if(data?.details?.role === "MA"){
            filterVariables = {
              filter: {
                role: {
                  eq: 'tutor'
                }
              },
            }
            
          }else{
            filterVariables = {
              filter: {
                role: {
                  eq: 'tutor'
                },
                hodID: {
                  eq: data?.details?.id
                },
              },
            }
            
          }

          const AllAdmins = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
            setUsers(AllAdmins.data.listUsers.items)

          } catch (err) {
            console.log('error fetching todos');
          }
    }

    provInfo();
  }, [getUsers]);

  const handleEdit = async (event: any) => {
    try {
      let updatedUser: any
      if(event.status === 0){
        updatedUser = {
          input: {
            id: event.id,
            status: 1
          },
        }
        
      }else{
        updatedUser = {
          input: {
            id: event.id,
            status: 0
          },
      }
       
    }
    const response: any = await API.graphql(graphqlOperation(updateUser, updatedUser ));
        
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
              onClick={() => navigate('/register')}
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
                <th>Username</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getUsers.map((item: any, i) => (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.MobNumber}</td>
                  <td>
                    {item.status === 1 ? <p>Active</p> : <p>Inactive</p>}
                  </td>
                  <td>
                    {item.status === 1 ? (
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => handleEdit(item)}
                      >
                        Inactivate
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => handleEdit(item)}
                      >
                        Activate
                      </button>
                    )}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TutorList;
