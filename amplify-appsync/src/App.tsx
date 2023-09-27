import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TutorList from './components/users/staff/tutorList';
import Courses from './components/courses/courses';
import AddCourses from './components/courses/addCourses';
import UpdateCourse from './components/courses/updateCourse';
import AddAdmin from './components/users/admin/addAdmin';
import AdminList from './components/users/admin/AdminList';
import UpdateAdmin from './components/users/admin/updateAdmin';
import Register from './components/users/staff/register';
import HODlist from './components/users/staff/hodList';
import ContextData from './components/useContext';
import Signup from './components/users/signup';
import QuestionBankForm from './components/questionBank/addQuestionBank';
import ListQuestionBank from './components/questionBank/listQuestionBank';
import UpdateQuestionBank from './components/questionBank/updateQuestionBank';
import Login from './components/users/login';
import UpdateStaff from './components/users/staff/updateStaff';
import AddStudent from './components/users/student/addStudent';
import StudentList from './components/users/student/list';
import UpdateStudent from './components/users/student/updateStudent';
import BlogCreate from './components/blogs/addBlog';
import BlogsList from './components/blogs/listBlogs';
import UpdateBlog from './components/blogs/updateBlog';
import AddContentBank from './components/contentbank/addContentBank';
import ListContentBank from './components/contentbank/list';
import UpdateContentBank from './components/contentbank/updateContentBank';
import Dashboard from './components/dashboard';
import AddQuestion from './components/questions/addQuestion';
import Home from './components/home';
import Navbar from './components/navbar';
import ChangePassword from './components/users/changePassword';
import UpdateProfile from './components/users/updateProfile';
import AddContent from './components/contentbank/addContent';
import AddTopics from './components/topics/addTopics';
import AddSubtopics from './components/topics/addSubtopic';
import TopicsList from './components/topics/listTopics';
import ListSubTopics from './components/topics/listSubTopic';
import UpdateTopic from './components/topics/updateTopic';
import UpdateSubTopic from './components/topics/updateSubTopic';
import QuestionList from './components/questions/questionList';
import UpdateQuestion from './components/questions/updateQuestion';
import UpdateContent from './components/contentbank/updateContent';
import ListContent from './components/contentbank/listContent';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Blog from './components/blogs/blogs';
Amplify.configure(awsExports);

const App: React.FC = () => {
  const[data, setData] = useState(null);
  return (
    <Router>
      <ContextData.Provider value={{ data, setData }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}  />
          <Route path="/signup" element={<Signup />}  />
          <Route path="/dashboard" element={<Dashboard />}  />
          <Route path="/home" element={<Home />}  />
          <Route path="/addAdmin" element={<AddAdmin />}  />
          <Route path="/adminList" element={<AdminList />}  />
          <Route path="/hodList" element={<HODlist />}  />
          <Route path="/tutors" element={<TutorList />}  />
          <Route path="/updateAdmin" element={<UpdateAdmin />}  />
          <Route path="/register" element={<Register />}  />
          <Route path="/listContents" element={<ListContent />}  />
          <Route path="/addStudent" element={<AddStudent />}  />
          <Route path="/updateStudent" element={<UpdateStudent />}  />
          <Route path="/studentList" element={<StudentList />}  />
          <Route path="/updateStaff" element={<UpdateStaff />}  />
          <Route path="/courses" element={<Courses />}  />
          <Route path="/addCourses" element={<AddCourses />}  />
          <Route path="/updateCourse" element={<UpdateCourse />}  />
          <Route path="/listQuestionBank" element={<ListQuestionBank />}  />
          <Route path="/addQuestionBank" element={<QuestionBankForm />}  />
          <Route path="/UpdateQuestionBank" element={<UpdateQuestionBank />}  />
          <Route path="/addContentBank" element={<AddContentBank />}  />
          <Route path="/listContentBank" element={<ListContentBank />}  />
          <Route path="/updateContentBank" element={<UpdateContentBank />}  />
          <Route path="/updateContent" element={<UpdateContent />}  />
          <Route path="/addContent" element={<AddContent />}  />
          <Route path="/addBlog" element={<BlogCreate />}  />
          <Route path="/listBlogs" element={<BlogsList />}  />
          <Route path="/updateBlog" element={<UpdateBlog />}  />
          <Route path="/addQuestion" element={<AddQuestion />}  />
          <Route path='/listQuestions' element={<QuestionList />} />
          <Route path="/updateQuestion" element={<UpdateQuestion />} />
          <Route path="/addTopics" element={<AddTopics />}  />
          <Route path='/addSubTopic' element={<AddSubtopics />} />
          <Route path="/listTopics" element={<TopicsList />}  />
          <Route path='/listSubTopics' element={<ListSubTopics />} />
          <Route path='/updateTopic' element={<UpdateTopic />} />
          <Route path='/updateSubTopic' element={< UpdateSubTopic />} />
          <Route path="/blogs" element={<Blog />}  />
          <Route path="/profile" element={<UpdateProfile />}  />
          <Route path="/changePassword" element={<ChangePassword />}  />
        </Routes>
      </ContextData.Provider>
    </Router>
  );
};

export default App;
