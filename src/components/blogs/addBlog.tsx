import React, { useContext, useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import ContextData from '../useContext';
    import Select from 'react-select';
    import { CKEditor } from '@ckeditor/ckeditor5-react';
    import ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
    import { listGroups, listUsers } from '../../graphql/queries';
    import { API, graphqlOperation } from 'aws-amplify';
    import { createBlog } from '../../graphql/mutations';
    import { SendFile } from '../FileUpload';
    import CKEditorComponent from '../contentbank/CKEditorComponent';
    import GroupsComponent from '../groups';

    interface Group {
        id: string;
        name: string;
    }

    function BlogCreate() {
        const { data } = useContext<any>(ContextData);
        const API_URL = process.env.REACT_APP_API_MID_URL;
        const navigate = useNavigate();

        // Initialize state for form inputs and data
        const [InputDetails, setInputDetails] = useState({
            category: '',
            title: '',
            description: '',
            status: 1,
            adminID:
                data?.details?.role === 'admin' ? data?.details?.id : data?.details?.adminID,
            hodID:
                data?.details?.role === 'hod' ? data?.details?.id : data?.details?.hodID,
            tutorID:
                data?.details?.role === 'tutor' ? data?.details?.id : data?.details?.tutorID,
            userID: data?.details?.id,
        });
        const [Groups, setGroups] = useState<Group[]>([]);
        const [Admins, setAdmins] = useState([]);

        useEffect(() => {
            async function fetchData() {
                try {
                    // Fetch list of admins
                    const adminFilter = {
                        filter: {
                            role: {
                                eq: 'admin',
                            },
                            status: {
                                eq: 1,
                            },
                        },
                    };
                    const adminData: any = await API.graphql(graphqlOperation(listUsers, adminFilter));
                    setAdmins(adminData.data.listUsers.items);

                    // Fetch list of groups
                    const groupData: any = await API.graphql(graphqlOperation(listGroups));
                    setGroups(groupData.data.listGroups.items);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }

            fetchData();
        }, []);

        // Function to upload an image
        const uploadImage = async (formData: FormData, file: any, fileName: any) => {
            try {
                const getResp = await SendFile(file, fileName, 'Images');
                console.log('getResp', getResp);

                const response = await fetch(`${API_URL}/Blog/Blog`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error uploading image:', error);
                throw error;
            }
        };

        console.log('Groups', Groups);


        // Function to handle form submission
        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            console.log('submit form');

            // Extract group IDs
            const GroupIDs: any = Groups.map((obj: any) => obj.value);
            console.log('GroupIDs', GroupIDs);

            const insertData = {
                input: {
                    catergory: GroupIDs,
                    title: InputDetails.title,
                    description: InputDetails.description,
                    status: 1,
                    userID: data?.details?.id,
                    adminID: data?.details?.role === "admin" ? data?.details?.id : data?.details?.adminID,
                    hodID: data?.details?.role === "hod" ? data?.details?.id : data?.details?.hodID,
                    tutorID: data?.details?.role === "tutor" ? data?.details?.id : data?.details?.tutorID,
        
                },
            };

            console.log('insertData', insertData);

            try {
                // Create a new blog entry
                const getResponse: any = await API.graphql(graphqlOperation(createBlog, insertData));
                if (getResponse) {
                    navigate('/listBlogs');
                }
            } catch (error) {
                console.error('Error creating blog:', error);
                // Handle the error here and provide feedback to the user
            }
        };

        // Render the component
        return (
            <div className="row col-md-12">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="container mt-5">
                        <h2>Create a Blog</h2>
                        <GroupsComponent Groups={Groups} setGroups={setGroups} required />
                        <div className="form-group mt-3">
                            <label>Title:</label>
                            <input
                                type="text"
                                className="inputFiled form-control"
                                placeholder="Enter Blog Title"
                                name="blogTitle"
                                onChange={(e) =>
                                    setInputDetails({ ...InputDetails, title: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Blog Description:</label>
                            <CKEditorComponent
                                data={InputDetails.description}
                                onDataChange={(newContent: any) =>
                                    setInputDetails({ ...InputDetails, description: newContent })
                                }
                            />
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default BlogCreate;