import React, { ChangeEvent, useState, useContext, useEffect } from 'react';
import ContextData from '../useContext';
import { API, graphqlOperation } from 'aws-amplify';
import { updateContentBankDetails } from '../../graphql/mutations';
import { useLocation, useNavigate } from 'react-router-dom';
import { getContentBankDetails, listUsers } from '../../graphql/queries';
import Departments, { Group as DepartmentGroup } from '../department';
import GroupsComponent from '../groups';

interface Admin {
    id: string;
    username: string;
  }

  interface Group {
    _id: any;
    name: any;
    label: string;
    value: string;
  }

export interface QuestionFormData {
    id?: string;
    name: string;
    description: string;
    adminID: string;
    visibility: string;
    department: string;
    Groups: [string | null];
}

const visibilities = ['Public', 'Private'];

const UpdateContentBank = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const [selectedDepart, setSelectedDepart] = useState<DepartmentGroup | any>();
    const [formData, setFormData] = useState<QuestionFormData>({
        name: '',
        description: '',
        adminID: '',
        visibility: '',
        department: '',
        Groups:[''],
    });
    
    const { data } = useContext<any>(ContextData);
    const [admin, setAdmin] = useState<Admin[]>([]);
    const [Groups, setGroups] = useState<Group[]>([]);

    useEffect(() => {
        async function provInfo() {
            try {
                const getCourseByID = await API.graphql(graphqlOperation(getContentBankDetails, {id: location.state.id})) as any;
                setFormData(getCourseByID?.data?.getContentBankDetails)

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
              } catch (err) {
                console.log('error fetching todos');
              }
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
        
        let GroupIDs: any = [];
        if(Groups.length > 0){
            GroupIDs = Groups.map((obj) => obj.value);
        }else{
            GroupIDs = formData.Groups
        }
        const updatedBank = {
            input: {
                id: location.state.id,
                name: formData.name,
                description: formData.description,
                visibility: formData.visibility,
                department: selectedDepart.value,
                Groups: GroupIDs,
                adminID: formData.adminID
            }
        }
        const getAdmin: any = await API.graphql(
          graphqlOperation(updateContentBankDetails, updatedBank)
        );
        if(getAdmin){
            navigate('/listContentBank')
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
                        <label>Description</label>
                        <input type="text" name="description" className="inputFiled form-control" value={formData.description} onChange={handleInputChange} />
                    </div>
                    {/* <div className='form-group mt-3'>
                        <label>Admin</label>
                        <select name="adminID" className="inputFiled form-control" onChange={handleInputChange}>
                            <option value="">Select Admin</option>
                            {admin.map((admins) => (
                                <option key={admins.username} value={admins.id}
                                selected= {formData.adminID === admins.id}
                                >
                                    {admins.username}
                                </option>
                            ))}
                        </select>
                    </div> */}
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
                    <Departments selectedDepart = {selectedDepart} setselectedDepart={setSelectedDepart} editValue = {formData.department} />
                    <GroupsComponent Groups={Groups} setGroups={setGroups} editValue = {formData.Groups} />
                    <button  onClick={handleSubmit} className="btn btn-primary" type="submit">Update</button>
                </form>
            </div>
        </div>

    );
};

export default UpdateContentBank;