import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContextData from './useContext';

function Navbar() {
  const navigate = useNavigate();
  const { data, setData } = useContext<any>(ContextData);
  useEffect(() => {
    // if userToken not exists redirecting to Login Form
    if (!data?.accessToken) {
      if (window.location.pathname !== '/signup') {
        navigate('/');
      }
    }
  }, [data?.accessToken, navigate]);

  async function Logout() {
    setData(null);
    window.location.href = '/';
  }

  // console.log("data", data)

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg" style={{ background: '#0099e6' }}>
        <div className="container">
          <Link className="nav-link fw-bold text-white" to="/home" style={{ fontSize: '20px' }}>
            LMS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {data?.details?.role ?


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ marginLeft: '30%' }}>
                  <Link className="nav-link text-white" to="/home">
                    Home
                  </Link>
                </li>
                {(data?.details?.role !== "student") && (
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle text-white"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Users
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {(data?.details?.role === "MA") ?
                      <li>
                        <Link className="dropdown-item" to="/adminList">
                          Admin's
                        </Link>
                      </li>
                      : null }
                      {(data?.details?.role === "MA") || (data?.details?.role === "admin") ?
                      <li>
                        <Link className="dropdown-item" to="/hodList">
                          HOD's
                        </Link>
                      </li>
                      : null }
                      {(data?.details?.role === "MA") || (data?.details?.role === "admin") || (data?.details?.role === "hod") ?
                      <li>
                        <Link className="dropdown-item" to="/tutors">
                          Tutors
                        </Link>
                      </li>
                      : null }
                      <li>
                        <Link className="dropdown-item" to="/studentList">
                          Students
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
                {(data?.details?.role !== "student") && (
                  <>
                    {/* <li>
                      <Link className="nav-link text-white" to="/appliedJobsfortutor">
                        Applied Jobs for Tutor
                      </Link>
                    </li> */}
                    {data?.details?.permissions?.Courses?.showInMenu === "1" ?
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/courses">
                        Courses
                      </Link>
                    </li>
                    : null }
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/listTopics">
                        Topics
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link text-white" to="/createQuestionPaper">
                        Exam
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/examResult">
                        Results
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/studentAttendance">
                        Student Attendance
                      </Link>
                    </li> */}
                    {/* <li className="nav-item">
                      <Link className="nav-link text-white" to="/meetingList">
                        Meeting
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/listBlogs">
                        Blogs
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="nav-link text-white" to="/jobsList">
                        Jobs
                      </Link>
                    </li> */}
                    {data?.details?.permissions?.QuestionBank?.showInMenu === "1" ?
                    <li>
                      <Link className="nav-link text-white" to="/listQuestionBank">
                        Question Bank
                      </Link>
                    </li>: null }

                    {/* {(data?.details?.role !== 'student') ?
                      <li className="nav-item dropdown">
                        <span
                          className="nav-link dropdown-toggle text-white"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Question Management
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                          <>
                          {data?.details?.permissions?.QuestionBank?.showInMenu === "1" ?
                            <li>
                              <Link className="dropdown-item" to="/listQuestionBank">
                                Question Bank
                              </Link>
                            </li>

                            : null }
                            {data?.details?.permissions?.Questions?.showInMenu === "1" ?
                            <li>
                              <Link className="dropdown-item" to="/listQuestions">
                                Questions
                              </Link>
                            </li> : null }
                          </>


                        </ul>
                      </li>
                      : null} */}

                    <li>
                      <Link className="nav-link text-white" to="/listContentBank">
                        Content Bank
                      </Link>
                    </li>
                    {/* {(data?.details?.role !== 'student') ?
                      <li className="nav-item dropdown">
                        <span
                          className="nav-link dropdown-toggle text-white"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Content Management
                        </span>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                          <>
                          {data?.details?.permissions?.ContentBank?.showInMenu === "1" ?
                            <li>
                              <Link className="dropdown-item" to="/listContentBank">
                                Content Bank
                              </Link>
                            </li>

                            : null }
                            {data?.details?.permissions?.Content?.showInMenu === "1" ?
                            <li>
                              <Link className="dropdown-item" to="/listContents">
                                Content
                              </Link>
                            </li> : null }
                          </>


                        </ul>
                      </li>
                      : null} */}
                  </>
                )}

                {/* { (data?.details?.role === "admin") || (data?.details?.role === "hod") || (data?.details?.role === "tutor") ?
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/blogs">
                        ListBlogs
                      </Link>
                    </li>:null } */}

                {data?.details?.role === 'student' && (
                  <>
                    <li className="nav-item" style={{ listStyle: 'none' }}>
                      <Link className="nav-link text-white" to="/studentMeeting">
                        Meetings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/blogs">
                        ListBlogs
                      </Link>
                    </li>
                    <li className="nav-item" style={{ listStyle: 'none' }}>
                      <Link className="nav-link text-white" to="/search">
                        Find Jobs
                      </Link>
                    </li>
                    <li style={{ listStyle: 'none' }}>
                      <Link className="nav-link text-white" to="/appliedJobs">
                        Applied Jobs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/codingScreen">
                        Code
                      </Link>
                    </li>
                  </>
                )}
              </ul>

              
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: '35%' }}>
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle text-white"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Welcome, {data.details.username}
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to="/dashboard">
                          Dashboard
                        </Link>
                      </li>
                      {data?.details?.role !== 'MA' && (
                        <>
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                     
                        <li>
                          <Link className="dropdown-item" to="/changePassword">
                            Change Password
                          </Link>
                        </li>
                        </>
                      )}
                    </ul>
                  </li>
                  <p className="text-white pt-2 mx-2">
                    <b>|</b>
                  </p>
                  <Link className="nav-link text-white mb-1" to="" onClick={Logout}>
                    LOGOUT
                  </Link>
                </ul>

                </div>

            :

            <div className="row">
              <div className="col-md-5 collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item" style={{"borderRight": "2px solid white"}}>
                  <Link className="nav-link text-white mx-2" to="/">
                    LOGIN 
                  </Link>
                  </li>
                  <li className="nav-item" >
                  <Link className="nav-link text-white mx-2" to="/signup" >
                    SignUp
                  </Link>
                  </li>
                </ul>                
              </div>
            </div>

          }
          

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
