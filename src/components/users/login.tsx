import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { SpinningCircles } from 'react-loading-icons'
// import { useMutation, gql } from '@apollo/client';
import ContextData from '../useContext';
import { listUsers } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../../graphql/mutations';
import md5 from 'md5';

interface InputDetails {
    email: string;
    password: string;
    errors: {
        email: string;
        password: string;
    }
}


function Login() {

    const API_URL = process.env.REACT_APP_API_URL;
    const fieldReq = 'This field is required'
    const [loginSatus, setLoginStatus] = useState('');
    const [otpSatus, setOtpStatus] = useState('');
    const navigate = useNavigate();
    const [InputDetails, setInputDetails] = useState<InputDetails>({
        email: "",
        password: "",
        errors: {
            email: "",
            password: ""
        }
    });
    const [show, setShow] = useState(false);
    const [Response, setResponse] = useState<any>();
    const [getOTP, setOTP] = useState<any>();
    const [Loader, setLoader] = useState(false);
    const [timer, setTimer] = useState<number>(60); // 60 seconds (1 minute) timer
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const { setData } = useContext(ContextData);
    const [createMA, setCreateMA] = useState(true)
    const commonPermissions = { showInMenu: "1", create: "1", edit: "1", view: "1", publisher: "1", proctorAdmin: "1", evaluator: "1", download: "1", allow: "1", notallow: "1" };
  
  const permissionsData = {Jobs: { ...commonPermissions },
  Courses: { ...commonPermissions }, Exams: { ...commonPermissions }, Results: { ...commonPermissions }, QuestionBank: { ...commonPermissions }, Questions: { ...commonPermissions }, ContentBank: { ...commonPermissions }, Content: { ...commonPermissions }, Groups: { ...commonPermissions }, Tests: { ...commonPermissions }, Drives: { ...commonPermissions }, Student: { ...commonPermissions }, Reports: { ...commonPermissions }, StudentApprove: { ...commonPermissions }, StudentReject: { ...commonPermissions }, Tutor: { ...commonPermissions }, Attendance: { ...commonPermissions }, LeaderBoard: { ...commonPermissions },}
 

    // const [LoginDetails] = useMutation(UserLogin);

    let name: string, value: string;
    function LoginInput(event: React.ChangeEvent<HTMLInputElement>) {
        name = event.target.name;
        value = event.target.value;
        setInputDetails({
            ...InputDetails,
            [name]: value
        })
    }

    const provInfo = async () => {
        try{
        const MasterAdmin: any = {
            email: process.env.REACT_APP_MA_USERNAME,
            password: process.env.REACT_APP_MA_PWD
        }
        const existingUsers: any = await API.graphql(
            graphqlOperation(listUsers, {
              filter: {
                email: { eq: MasterAdmin.email },
                password:{  eq: md5(MasterAdmin.password) }
              },
            })
          );
          if (existingUsers.data.listUsers.items.length > 0) {
            console.log('Master Email already exists');
            setCreateMA(false)
          }else{
            const getDetails = {
                input: {
                    email: MasterAdmin.email,
                    password: md5(MasterAdmin.password),
                    MobNumber: "",
                    username: "Master Admin",
                    role: "MA",
                    status: 1,
                    organisation: "",
                    permissions: permissionsData,
                    adminID: "",
                    type: "",
                    uploadType: "",
                    Groups: [],
                    userID: "",
                    hodID: "",
                    Batch: "",
                    department: "",
                    specialization: "",
                    course: [],
                }
            }
            const getmaster: any = await API.graphql(
                graphqlOperation(createUser, getDetails)
              );
              setCreateMA(false)
              
          }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => { 
        provInfo();
    },[createMA])
    

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isTimerRunning && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsTimerRunning(false);
        }
       
        // Clean up the interval when the component unmounts or the timer is stopped
        return () => clearInterval(interval);
    }, [isTimerRunning, timer]);

    const LoginSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        
        e.preventDefault();

        const { email, password } = InputDetails;
        if (!email || !password) {
            setInputDetails({
                ...InputDetails,
                errors: {
                    email: fieldReq,
                    password: fieldReq
                }
            })
        } else {
            setLoader(true);
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json, text/plain, */*"
                },
                body: JSON.stringify(InputDetails)
            }

          

            try {
                // const result = await LoginDetails({
                //     variables: {
                //         email: email, password:password
                //     },
                // });

                const response = await fetch(`${API_URL}/dev/lms_user_login`, options);                
                const data = await response.json(); 
               
                // const data = result.data;
                if(data.accessToken){
                    setResponse(data);
                    setShow(true);
                    setLoader(false);
                    setLoginStatus('')
                    setIsTimerRunning(true);
                    setTimer(60);
                }else{
                    // alert(data.msg)
                    setLoginStatus(data.msg)
                    setLoader(false);
                }
                console.log('OTP is ', data);
            } catch (error) {
                console.error(error);
            }
        }
    }

    const CheckOTP = () => {
        if (parseInt(Response.OTP) === parseInt(getOTP)) {
            setData(Response)
            navigate("/dashboard", { state: { Data: Response } });
        } else {
            setOtpStatus("Wrong OTP");
        }
    }

    return (
        <div className='row col-md-12'>
            {Loader ?
                <Modal size='sm' centered show={Loader}>
                    <Modal.Body>
                        <div className="form-group">
                            <h5><SpinningCircles fill='#b3b3b3' style={{ marginLeft: "20%", marginRight: "5%" }} />Loading</h5>
                        </div>
                    </Modal.Body>
                </Modal>
                : null}
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <div className='container mt-5'>
                    <h2>Login</h2>
                    <p className='text-danger'>{loginSatus}</p>
                    <form method="post">
                        <div className="form-group mt-5">
                            <label>Email* :</label>
                            <input type="email" className="inputFiled form-control" placeholder="Enter Email" name="email" onChange={LoginInput} />
                            {!InputDetails.email && <p className='text-danger'>{InputDetails.errors.email}</p>}
                        </div>
                        <div className="form-group mt-3">
                            <label>Password* :</label>
                            <input type="password" className="inputFiled form-control" placeholder="Enter Password" name="password" onChange={LoginInput} />
                            {!InputDetails.password && <p className='text-danger'>{InputDetails.errors.password}</p>}
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <button type="button" onClick={LoginSubmit} className="btn btn-primary">Login</button>
                            </div>
                        </div>

                        <Modal centered show={show} onHide={() => { setShow(false) }}>
                            <Modal.Header closeButton>
                                <h5>Please enter the OTP that was sent to your registered email address</h5>                               
                            </Modal.Header>                            
                            <Modal.Body>
                                <p className='text-danger'>{otpSatus}</p>
                                <div className="form-group">
                                    {isTimerRunning ? (
                                        <>
                                            <p>Time remaining: {timer} seconds</p>
                                            <label>Enter OTP:</label>
                                            <input type="number" className='inputFiled form-control' placeholder='Enter OTP' name="otp" onChange={(e) => setOTP(e.target.value)} />
                                        </>
                                    ) : (
                                        <p className='text-center text-danger'><strong>Note: </strong>Login again</p>
                                    )}

                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                {isTimerRunning ?
                                    <button className="btn btn-primary" onClick={CheckOTP}> Check</button>
                                    : null}
                            </Modal.Footer>
                        </Modal>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;