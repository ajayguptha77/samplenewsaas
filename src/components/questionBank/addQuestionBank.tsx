import React, { ChangeEvent, useState, useContext, useEffect } from 'react';
import ContextData from '../useContext';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { createQuestionBankDetails } from '../../graphql/mutations';
import { listUsers } from '../../graphql/queries';
import Departments from '../department';
import GroupsComponent from '../groups';
import { useNavigate } from 'react-router-dom';

interface Admin {
    id: string;
    username: string;
  }
  
  interface Group {
    label: string;
    value: string;
  }

export interface QuestionFormData {
    id?: string;
    name: string;
    code: string;
    description: string;
    adminID: string;
    visibility: string;
    department: string;
    Groups: any;
    userID: string;
    status: number;
}

const visibilities = ['Public', 'Private'];

const QuestionBankForm = () => {
    const { data } = useContext<any>(ContextData);
    const [formData, setFormData] = useState<QuestionFormData>({
        name: '',
        code: '',
        description: '',
        adminID: '',
        visibility: '',
        department: '',
        Groups:[''],
        userID: data?.details?.id, status: 1
    });
    
    
    const [admin, setAdmin] = useState<Admin[]>([]);
    const [Groups, setGroups] = useState<Group[]>([]);
    const [selectedDepart, setselectedDepart] = useState<Group | any>();
    const navigate = useNavigate()
    useEffect(() => {
        async function provInfo() {
        
        const filterVariables = {
            filter: {
              role: {
                eq: 'admin'
              },
              status: {
                eq: 1
              }
            },
        }

        const AllAdmins = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
        setAdmin(AllAdmins.data.listUsers.items)
        }
    
        provInfo();
      }, []);

      
    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const GroupIDs: any = Groups.map((obj) => obj.value);
        if(!formData.adminID){
            if(data?.details?.role === "admin"){
                formData.adminID = data?.details?.id
            }else{
                formData.adminID = data?.details?.adminID
            }
        }
        
        const getDetails: QuestionFormData = { ...formData, department: selectedDepart.value, Groups: GroupIDs };
        console.log(getDetails);
        const getAdmin: any = await API.graphql(
          graphqlOperation(createQuestionBankDetails, { input: getDetails })
        );
        if(getAdmin){
          navigate("/listQuestionBank")
        }
    };


    return (
        <div className='row col-md-12'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='container mt-5'></div>

                <form>
                    <div className="form-group mt-3">
                        <label>Name:</label><br />
                        <input type="text" name="name" className="inputFiled form-control" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Code</label>
                        <input type="text" name="code" className="inputFiled form-control" value={formData.code} onChange={handleInputChange} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Description</label>
                        <input type="text" name="description" className="inputFiled form-control" value={formData.description} onChange={handleInputChange} />
                    </div>
                    {data?.details?.role === 'MA' ?
                    <div className='form-group mt-3'>
                        <label>Admin</label>
                        <select name="adminID" className="inputFiled form-control" value={formData.adminID} onChange={handleInputChange}>
                            <option value="">Select Admin</option>
                            {admin.map((admins) => (
                                <option key={admins.username} value={admins.id}>
                                    {admins.username}
                                </option>
                            ))}
                        </select>
                    </div> : null }
                    <div className='form-group mt-3'>
                        <label>Visibility</label>
                        <select name="visibility" className="inputFiled form-control" value={formData.visibility} onChange={handleInputChange}>
                            <option value="">Select Visibility</option>
                            {visibilities.map((visibility) => (
                                <option key={visibility} value={visibility}>
                                    {visibility}
                                </option>
                            ))}
                        </select>
                    </div>
                        <Departments selectedDepart = {selectedDepart} setselectedDepart={setselectedDepart}/>
                    <GroupsComponent Groups={Groups} setGroups={setGroups} />
                    <button  onClick={handleSubmit} className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>

    );
};

export default QuestionBankForm;