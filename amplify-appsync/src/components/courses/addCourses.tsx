import React, { useState, useContext, useEffect, ChangeEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ContextData from '../useContext';
import JoditEditor from 'jodit-react';
import { Amplify, Storage, API, graphqlOperation } from 'aws-amplify';
import { createCourse } from '../../graphql/mutations';
import { listUsers } from '../../graphql/queries';
import awsExports from '../../aws-exports';

interface CourseDetails {
    id?: string;
    title: string;
    courseCode: string;
    price: string;
    file: string;
    about: string;
    user_id: string;
    adminID: string;
    validity: {
        fromTime: string;
        toTime: string;
    };
    description: string;
    leaderBoard: string;
    // video: string;
}

interface UserDetails {
    id?: string;
    role: string;
    Groups: any;
    username: string;
    email: string;
    password: string;
    MobNumber: string;
    status: number;
    permissions: any;
    adminID: string;
    type: string;
    emailIDs: any;
    uploadType: string;
    userID: string;
    hodID: string;
    tutorID: string;
}


function AddCourses() {
    const navigate = useNavigate();
    const { data, setData } = useContext<any>(ContextData);

    const location = useLocation();

    //   const [InputDetails, setInputDetails] = useState({
    //     title: '',
    //     courseCode: '',
    //     price: '',
    //     file: '',
    //     about: '',
    //     validity: {
    //       fromTime: '',
    //       toTime: '',
    //     },
    //     description: '',
    //     leaderBoard: '',
    //   });
    const initialState: CourseDetails = {
        title: '', price: '', file: '', about: '', user_id: '', adminID: '',
        courseCode: '',
        validity: {
            fromTime: '',
            toTime: ''
        },
        description: '',
        leaderBoard: ''
    };
    const [hods, setHODs] = useState<UserDetails[] | undefined>();
    const [Admins, setAdmins] = useState<UserDetails[] | undefined>();
    const [InputDetails, setInputDetails] = useState<CourseDetails>(initialState);
    //   const [CourseDetails, setCourseDetails] = useState<CourseDetails | undefined>();
    const [CourseDetails, setCourseDetails] = useState<CourseDetails[]>([]);
    const [paths, setPaths] = useState<Array<{ name: string; url: string }>>([]);
    // const [mediaFiles, setMediaFiles] = useState<(File | string)[]>([]);
    const [inputType, setInputType] = useState<'url' | 'file'>('url');


    const API_URL = process.env.REACT_APP_API_MID_URL;
    // console.log("data ", data);

    // console.log("inputDetails", InputDetails)
    // async function provInfo() {
    //     if (location.state) {
    //         const CourseID = location.state.id;

    //         if (CourseID) {
    //             let userInfo = await fetch(`http://localhost:4000/course/${CourseID}`);
    //             let res = await userInfo.json();
    //             setCourseDetails(res);
    //             setPaths([
    //                 { name: 'Home', url: '/home' },
    //                 { name: location.state.courseTitle, url: '/courses' },
    //                 { name: 'Update Courses', url: "" },
    //             ]);
    //         }
    //     } else {
    //         setPaths([
    //             { name: 'Home', url: '/home' },
    //             { name: 'Courses', url: '/courses' },
    //             { name: 'Add Courses', url: "" },
    //         ]);
    //     }
    // }

    // useEffect(() => {
    //     provInfo();
    // }, []);

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

            let filterForHOD
            if (data?.details?.role === "admin") {
                filterForHOD = {
                    filter: {
                        role: {
                            eq: 'hod',
                        },
                        adminID: {
                            eq: data?.details?.id,
                        },
                        status: {
                            eq: 1
                        }
                    },
                }
            }

            try {
                const AllAdmins = await API.graphql(graphqlOperation(listUsers, filterVariables)) as any;
                setAdmins(AllAdmins.data.listUsers.items)

                const AllHODS = await API.graphql(graphqlOperation(listUsers, filterForHOD)) as any;
                setHODs(AllHODS.data.listUsers.items)

            } catch (err) {
                console.log('error fetching', err);
            }
        }
        provInfo();
    }, []);
    async function AdminInput(event: { target: { name: any; value: any; }; }) {
        console.log("event.target.value ", event.target.value)
        let filterForHOD

        if (data?.details?.role === "MA") {
            filterForHOD = {
                filter: {
                    role: {
                        eq: 'hod',
                    },
                    adminID: {
                        eq: event.target.value,
                    },
                    status: {
                        eq: 1
                    }
                },
            }
        } else {
            filterForHOD = {
                filter: {
                    role: {
                        eq: 'hod',
                    },
                    adminID: {
                        eq: event.target.value,
                    },
                    userID: {
                        eq: data?.details?.id
                    },
                    status: {
                        eq: 1
                    }
                },
            }
        }
        const AllHods = await API.graphql(graphqlOperation(listUsers, filterForHOD)) as any;
        setHODs(AllHods.data.listUsers.items)
        setInputDetails({
            ...InputDetails,
            adminID: event.target.value
        })

    }

    let name: string | undefined, value: string | undefined;

    function CourseInput(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        name = event.target.name;
        // value = event.target.name === 'price' ? parseFloat(event.target.value) : event.target.value;
        value = event.target.value;
        setInputDetails({
            ...InputDetails,
            [name]: value,
        });
    }


    function handlevalidityChange(event: ChangeEvent<HTMLInputElement>) {
        console.log("value", event.target.value);
        const { name, value } = event.target;
        setInputDetails((prevInputDetails) => ({
            ...prevInputDetails,
            validity: {
                ...prevInputDetails.validity,
                [name]: value,
            },
        }));
    };

    function handleJoditChange(value: string) {
        const event: any = {
            target: {
                name: 'description',
                value: value,
            },
        };
        CourseInput(event);
    }
    let lastModifiedTimestamp: number;

    // const ImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    //     const selectedFiles = event.target.files;

    //     console.log("selectedFiles ", selectedFiles);
    //     if (selectedFiles && selectedFiles.length > 0) {
    //         const newFiles: Array<string | File> = [];
    //         // const newFiles: string[] = [];

    //         const processFileAtIndex = (index: number) => {
    //             if (index < selectedFiles.length) {
    //                 const file = selectedFiles[index];
    //                 const reader = new FileReader();

    //                 reader.onload = () => {
    //                     if (reader.result) {
    //                         newFiles.push(reader.result as string);
    //                     }

    //                      lastModifiedTimestamp  = file.lastModified;
    //                      console.log("lastModifiedTimestamp ", lastModifiedTimestamp);
    //                     processFileAtIndex(index + 1);
    //                 };

    //                 reader.onerror = (error) => {
    //                     console.log('Error', error);
    //                     processFileAtIndex(index + 1);
    //                 };
    //                 reader.readAsDataURL(file);
    //             } 
    //             else {
    //                 setInputDetails((prevInputDetails) => ({
    //                     ...prevInputDetails,
    //                     [inputType]: lastModifiedTimestamp,
    //                 }));
    //             }
    //         };
    //         processFileAtIndex(0);
    //     }
    // };

    const ImageUpload = async (event: any) => {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            // reader.readAsDataURL(event.target.files[0]);
            const file: File = event.target.files[0];
            // console.log("file ",file)
            // console.log("file.name ",file.name)

            // console.log("file type",event.target.files[1])

            try {
                const fileName = `${Date.now()}.${file.name.split('.').pop()}`;
                const fileInfo = fileName.split('.');
                const fileType = 'image/'+fileInfo[1]

                // console.log("fileType ",fileType[1])
                // console.log('file validation', 'image/'+fileType[1])


                console.log("filename ",fileName)
            //     const image: any = {
            //         name: fileName,
            //         file: {
            //             bucket: awsExports.aws_s3_bucket,
            //             region: awsExports.aws_s3_bucket_region,
            //             key: file,
            //         },
            //     };
            // console.log("image ",image)

                await Storage.put(fileName, file,{
                    contentType: fileType,
                });

               

                // await CourseSubmit(image);
                
                setInputDetails((prevInputDetails) => ({
                    ...prevInputDetails,
                    file: fileName,
                }));



                // reader.onload = () => {
                //     if (reader.result) {
                //         const fileContent = reader.result as string; // Explicit type assertion
                //     const base64Data = fileContent.split(',')[1];
                //         setInputDetails({
                //             ...InputDetails,
                //             file: base64Data,
                //         });
                //     }
                // };
                // reader.onerror = (error) => {
                //     console.log('Error', error);
                // };
                // reader.readAsDataURL(file);

            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };



    const handleMediaUpload = (input: string | File) => {
        if (typeof input === 'string') {
            // Handle URL input
            // setMediaFiles([...mediaFiles, input]);
            setInputDetails((prevInputDetails) => ({
                ...prevInputDetails,
                // [inputType]: input,
                file: input
            }))
        }
    };

    // const handleRemoveMedia = (index: number) => {
    //   const updatedMediaFiles = mediaFiles.filter((_, i) => i !== index);
    //   setMediaFiles(updatedMediaFiles);
    // };

    const CourseSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const { title, price, file, about, courseCode, validity, description, leaderBoard } = InputDetails;
        if (!title || !price || !file || !about || !courseCode || !validity || !description || !leaderBoard) {
            alert("fill all the fields");
        } else {
            try {

                // if(data.details.role==="admin"){
                //     InputDetails.adminID = data.details.id

                // }
                InputDetails.adminID = data.details.role === 'MA' ? InputDetails.adminID : data.details.role === 'admin' ? data.details.id : data.details.adminID;

                InputDetails.user_id = data?.details?.id

                console.log("InputDetails.user_id", InputDetails.user_id);

                const getDetails: CourseDetails = { ...InputDetails };
                console.log("getDetails", getDetails);
                setCourseDetails([...CourseDetails, getDetails]);
                setInputDetails(initialState);

                const getcourseDetails = await API.graphql(
                    graphqlOperation(createCourse, { input: getDetails })
                );
                if (getcourseDetails) {
                    navigate("/courses");
                }
                console.log(getcourseDetails);
            } catch (error) {
                console.log('Error creating course:', error);
            }
        }

    };



    return (
        <div className='row col-md-12'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
                <nav className='mt-4' aria-label='breadcrumb'>
                    <ol className='breadcrumb'>
                        {paths.map((path, index) => (
                            <li
                                onClick={() => navigate(path.url)}
                                key={index}
                                className={index === paths.length - 1 ? 'breadcrumb-item active' : 'breadcrumb-item'}
                            >
                                {index === paths.length - 1 ? (
                                    path.name
                                ) : (
                                    <>{path.name}</>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
                <div className='container mt-5'>
                    <h2>Add Course</h2>
                    <form method='post'>

                        {data?.details?.role === "MA" ?
                            <div className='form-group mt-3'>
                                <label>Select Admin*:</label>
                                <select className='inputFiled form-control' name='adminID' onChange={AdminInput}>
                                    <option value=''>Select Admin</option>
                                    {Admins?.map((admin: any, index) => {
                                        return (
                                            <option value={admin.id} key={admin.id}>
                                                {admin.username}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div> : null}

                        <div className='form-group mt-3'>
                            <label>Title:</label>
                            <input type='text' className='inputFiled form-control' placeholder='Enter Title' name='title' onChange={CourseInput}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Course Code:</label>
                            <input
                                type='text' className='inputFiled form-control' placeholder='Enter courseCode'
                                name='courseCode' onChange={CourseInput}
                            />
                        </div>
                        <label className='form-group mt-3' >Course Validity:</label><br />
                        <div className='row col-md-12'>
                        <div className='col-md-6 ml-1'>
                        <label>From Date:</label>
                            <input type="date" className='inputFiled form-control' name="fromTime" value={InputDetails.validity.fromTime}
                                onChange={handlevalidityChange}
                            />
                        </div>
                        <div className='col-md-6'>
                           

                            <label>To Date:</label>
                            <input className='inputFiled form-control'
                                type="date"
                                name="toTime"
                                value={InputDetails.validity.toTime}
                                onChange={handlevalidityChange}
                            />
                            </div> 
                        </div>
                        {/* )} */}

                        <div className='form-group mt-3'>
                            <label>Course Description:</label>
                            <JoditEditor
                                value={InputDetails.description}
                                onChange={handleJoditChange}
                            />
                        </div>

                        <div className='form-group mt-3'>
                            <label>Enable Leaderboard for this Course:</label><br />
                            <label style={{ marginRight: '10px' }}>
                                <input type="radio" name="leaderBoard" value="Yes" checked={InputDetails.leaderBoard === "Yes"} onChange={CourseInput}
                                />
                                Yes
                            </label>
                            <input type="radio" name="leaderBoard" value="No" checked={InputDetails.leaderBoard === "No"} onChange={CourseInput} />
                            No
                        </div>

                        <div className='form-group mt-3'>
                            <label>Price:</label>
                            <input type='number' className='inputFiled form-control' placeholder='Enter Price' name='price' onChange={CourseInput} />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Content:</label>
                            <textarea className='inputFiled form-control' placeholder='Enter Content' name='about' onChange={CourseInput} />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Course Image and Video:</label><br />
                            <div>
                                <label>
                                    <input
                                        type="radio" value="url" name='file' checked={inputType === 'url'} onChange={() => setInputType('url')} />URL
                                </label>
                                <label>
                                    <input type="radio" value="file" name='file' checked={inputType === 'file'} onChange={() => setInputType('file')} />
                                    File Upload
                                </label>
                            </div>

                            {inputType === 'url' ? (
                                <div>
                                    <input type="text" className='inputFiled form-control' placeholder="Paste YouTube video link here" onChange={(e) => handleMediaUpload(e.target.value)} />
                                </div>
                            ) : (
                                <div>
                                    <input type='file' className='inputFiled form-control' placeholder='Enter File' name='file' onChange={ImageUpload}
                                        accept='image/*' />
                                </div>
                            )}
                        </div>

                        <div className='row mt-3'>
                            <div className='col-md-4'>
                                <button
                                    type='button'
                                    onClick={CourseSubmit}
                                    className='btn btn-primary'>
                                    Add Course
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddCourses;