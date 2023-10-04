import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContextData from '../useContext';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { getBlog, listGroups } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { updateBlog } from '../../graphql/mutations';
import CKEditorComponent from '../contentbank/CKEditorComponent';
import GroupsComponent from '../groups';

interface Group {
  value: any;
  id: string;
  name: string;
}

interface Blog {
  id: string;
  title: string;
  description: string;
  status: number;
  catergory: string;
  adminID: string;
  tutorID: string;
  userID: string;
  hodID: string;
}

function UpdateBlog() {
  const API_URL = process.env.REACT_APP_API_MID_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const [file, setFile] = useState<any>();
  const { data } = useContext<any>(ContextData);
  // console.log("data ", data);

  const initialState: Blog = {
    id: '',
    title: '',
    description: '',
    status: 1,
    catergory: '',
    adminID: '',
    tutorID: '',
    userID: '',
    hodID: '',
  };

  const [inputDetails, setInputDetails] = useState<Blog>(initialState);
  const [Groups, setGroups] = useState<Group[]>([]);
  // const [selectedOption, setSelectedOption] = useState<Group[] | null>(null);

  useEffect(() => {

    console.log('useEffect')
    async function fetchData() {
      try {
        // console.log('location.state.id', location.state.id);
        const getBlogByID = await API.graphql(
          graphqlOperation(getBlog, { id: location.state.id })
        ) as any;
        const blogData = getBlogByID.data.getBlog;
        setInputDetails(blogData);

        // const groupData: any = await API.graphql(
        //   graphqlOperation(listGroups)
        // );
        // setGroups(groupData.data.listGroups.items);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [location.state.id]);



  const uploadImage = async (formData: FormData) => {
    try {
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

  // const handleDescriptionChange = (event: any, editor: any) => {
  //   const data = editor.getData();
  //   setInputDetails({ ...inputDetails, description: data });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      let GroupIDs: any
      if (Groups.length > 0) {     
        GroupIDs = Groups.map((obj) => obj.value);
      }
      else {
        GroupIDs = inputDetails.catergory
      }



      // inputDetails.catergory = GroupIDs

      // setInputDetails({ ...inputDetails, catergory: GroupIDs })

      // let fileName;
      // if (file) {
      //   fileName = Date.now() + file.name
      // } else {
      //   setInputDetails({ ...inputDetails, description: location.state.id, })
      // }
      
      const updatedBlog = {
        input: {

          id: location.state.id,
          catergory: GroupIDs,
          title: inputDetails.title,
          description: inputDetails.description,
          status: 1,
          userID: data?.details?.id,
          adminID: data?.details?.role === "admin" ? data?.details?.id : data?.details?.adminID,
          hodID: data?.details?.role === "hod" ? data?.details?.id : data?.details?.hodID,
          tutorID: data?.details?.role === "tutor" ? data?.details?.id : data?.details?.tutorID,
        },
      };

      // console.log('updatedBlog', updatedBlog);

      const getResponse: any = await API.graphql(
        graphqlOperation(updateBlog, updatedBlog)
      );

      if (getResponse) {
        navigate('/listBlogs');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  // const handleCategory = (option: any) => {
  //   setSelectedOption(option);
  // };

  return (
    <div className='row col-md-12'>
      <div className='col-md-3'></div>
      <div className='col-md-6'>
        {inputDetails.catergory && (
          <div className='container mt-5'>
            <h2>Update Blog</h2>
            {/* <GroupsComponent
              Groups={Groups}
              setGroups={setGroups}
              editValue={inputDetails.catergory}
            /> */}
             <GroupsComponent Groups={Groups} setGroups={setGroups} editValue={inputDetails.catergory} />
            <div className='form-group mt-3'>
              <label>Title:</label>
              <input type='text' className='inputFiled form-control' placeholder='Enter Blog Title'
                name='blogTitle' onChange={(e) => setInputDetails({ ...inputDetails, title: e.target.value })}
                value={inputDetails.title}
              />
            </div>
            <div className='form-group mt-3'>
              <label>Blog Description:</label>
              <CKEditorComponent data={inputDetails.description} onDataChange={(newContent: any) => setInputDetails({ ...inputDetails, description: newContent })} />

            </div>
            <div className='row mt-3'>
              <div className='col-md-4'>
                <button
                  type='submit'
                  onClick={handleSubmit}
                  className='btn btn-primary'
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateBlog;
