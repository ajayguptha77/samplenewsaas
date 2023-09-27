import React, { useState, useContext, useEffect, ChangeEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import ContextData from '../../../useContext';
import { getCourse } from '../../graphql/queries';
import { updateCourse } from '../../graphql/mutations';
import JoditEditor from 'jodit-react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';

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
}

const initialState: CourseDetails = { title: '', courseCode: '', price: '', file: '', about: '', user_id: '', adminID: '', validity: { fromTime: '', toTime: '' }, description: '', leaderBoard: '' };

function UpdateCourse() {
    const navigate = useNavigate();
    const location = useLocation();
    const [InputDetails, setInputDetails] = useState(initialState);
    const [Course, setCourse] = useState(initialState);
    const [CourseDetails, setCourseDetails] = useState<CourseDetails[]>([]);
    const [inputType, setInputType] = useState<'url' | 'file'>('url');
    const [paths, setPaths] = useState<Array<{ name: string; url: string }>>([]);
    const [changedInputDetails, setChangedInputDetails] = useState<CourseDetails>(
        initialState
    );


    async function provInfo() {
        try {
            console.log("get", location.state.id)
            const courseInfo = await API.graphql(graphqlOperation(getCourse, { id: location.state.id })) as any;

            let allCoursesData = courseInfo.data.getCourse;

            setCourse({ ...Course, id: allCoursesData.id, title: allCoursesData.title, courseCode: allCoursesData.courseCode, price: allCoursesData.price, file: allCoursesData.file, about: allCoursesData.about, user_id: allCoursesData.user_id, adminID: allCoursesData.adminID, validity: { fromTime: allCoursesData.validity.fromTime, toTime: allCoursesData.validity.toTime }, description: allCoursesData.description, leaderBoard: allCoursesData.leaderBoard })

            console.log('retrievedCourseINfo',)
            // setCourse(getCourseByID.data.getCourse)
        } catch (err) {
            console.log('error fetching todos');
        }

    }

    useEffect(() => {
        provInfo();
    }, []);


    console.log('CourseInfo', Course)

    let name: any, value: any;

    function CourseInput(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        name = event.target.name;
        value = event.target.value;

        // setInputDetails((prevInputDetails) => ({
        //     ...prevInputDetails,
        //     [name]: value,
        // }));

        setCourse((prevInputDetails) => ({
            ...prevInputDetails,
            [name]: value,
        }));
    }

    function handleJoditChange(value: string) {
        const event: any = {
            target: {
                name: 'description',
                value: value,
            },
        };
        CourseInput(event);
    }

    // function handlevalidityChange(event: ChangeEvent<HTMLInputElement>) {
    //     console.log("value", event.target.value);
    //     const { name, value } = event.target;
    //     setCourse((prevInputDetails) => ({
    //         ...prevInputDetails,
    //         // validity: {
    //         //     ...prevInputDetails.validity,
    //         //     [name]: value,
    //         // },
    //         [name]: value,
    //     }));
    // };

    function handlevalidityChange(event: ChangeEvent<HTMLInputElement>) {
        console.log("value", event.target.value);
        const { name, value } = event.target;
        setCourse((prevInputDetails) => ({
            ...prevInputDetails,
            validity: {
                ...prevInputDetails.validity,
                [name]: value,
            },
        }));
    };
    const ImageUpload = (event: any) => {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                if (reader.result) {
                    // setCourse({
                    //     ...InputDetails,
                    //     file: reader.result as string,
                    // });


                    handleMediaUpload(reader.result as string);
                    // const values: any = {
                    //     target: {
                    //         name: 'file',
                    //         value: reader.result
                    //     }
                    // }
                    // CourseInput(values)
                }
            };
            reader.onerror = (error) => {
                console.log('Error', error);
            };
        }
    };

    const handleMediaUpload = (input: string | File) => {
        console.log("url", input);
        if (typeof input === 'string') {
            // Handle URL input
            // setMediaFiles([...mediaFiles, input]);
            // setInputDetails({
            //     ...InputDetails,
            //     // [inputType]: input,
            //     file: input
            // })

            setCourse((prevInputDetails) => ({
                ...prevInputDetails,                   
                    file: input
              
            }));
        } else if (input instanceof File) {
            setCourse((prevInputDetails) => ({
              ...prevInputDetails,
              file: input.name, // Use the filename for files
            }));
          }
    };

    // const UpdateCourse = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     e.preventDefault();

    //     try {

    //         // const updatedUser = {
    //         //     input: {
    //         //         id: location.state.id,
    //         //         title: InputDetails.title,
    //         //         courseCode: InputDetails.courseCode,
    //         //         price: InputDetails.price,
    //         //         file: InputDetails.file,
    //         //         about: InputDetails.about,
    //         //         user_id: InputDetails.user_id,
    //         //         adminID: InputDetails.adminID,
    //         //         validity: InputDetails.validity,
    //         //         description: InputDetails.description,
    //         //         leaderBoard: InputDetails.leaderBoard,
    //         //     },
    //         // }

    //         const updatedCourse = { id: location.state.id, ...Course, ...InputDetails };

    //         // setCourseDetails([...CourseDetails, updatedCourse]);
    //         // setInputDetails(initialState);

    //         console.log("updatedCourse", updatedCourse)
    //         const response:any = await API.graphql(graphqlOperation(updateCourse,  { input: updatedCourse } ));
    //         console.log('Updated course data:', response);
    //         if (response) {
    //             navigate("/courses");
    //         }
    //     } catch (error) {
    //         console.error('Error updating course data:', error);
    //     }
    // }

    const UpdateCourse = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        console.log("input", InputDetails)

        try {
            // Create a copy of the Course object
            //   const updatedCourse = { id: location.state.id, ...Course };

            const updatedCourse = { ...Course };
            console.log("updatedCourse", updatedCourse)

            // Update only the changed fields from InputDetails
            // for (const key in InputDetails) {
            //     if (InputDetails.hasOwnProperty(key) && updatedCourse.hasOwnProperty(key)) {
            //         //   updatedCourse[key] = InputDetails[key];
            //     }
            // }

            const response: any = await API.graphql(graphqlOperation(updateCourse, { input: updatedCourse }));
            console.log('Updated course data:', response);
            if (response) {
                navigate("/courses");
            }
        } catch (error) {
            console.error('Error updating course data:', error);
        }
    }


    console.log("InputDetails", InputDetails)

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
                    {CourseDetails ? (
                        <h2>Update Course</h2>
                    ) : (
                        <h2>Add Course</h2>
                    )}
                    <form method='post'>
                        <div className='form-group mt-5'>
                            <label>Title:</label>
                            <input
                                type='text'
                                className='inputFiled form-control'
                                placeholder='Enter Title'
                                name='title'
                                onChange={CourseInput}
                                defaultValue={Course ? Course?.title : ''}
                            />
                        </div>

                        <div className='form-group mt-3'>
                            <label>Course Code:</label>
                            <input
                                type='text' className='inputFiled form-control' placeholder='Enter courseCode'
                                name='courseCode'
                                onChange={CourseInput}
                                defaultValue={Course ? Course?.courseCode : ''}
                            />
                        </div>
                        <label className='form-group mt-3' >Course Validity:</label><br />
                        <div>
                            <label>From Date:</label>
                            <input type="date" name="fromTime"
                                onChange={handlevalidityChange}
                                defaultValue={Course ? Course?.validity?.fromTime : ''}
                            /><br /><br />

                            <label>To Date:</label>
                            <input
                                type="date"
                                name="toTime"
                                onChange={handlevalidityChange}
                                defaultValue={Course ? Course?.validity?.toTime : ''}
                            />
                        </div>

                        <div className='form-group mt-3'>
                            <label>Course Description:</label>
                            <JoditEditor
                                value={Course ? Course?.description : ''}
                                onChange={handleJoditChange}

                            />
                        </div>

                        <div className='form-group mt-3'>
                            <label>Enable Leaderboard for this Course:</label><br />
                            <label style={{ marginRight: '10px' }}>
                                <input type="radio" name="leaderBoard" value="Yes"
                                    checked={Course.leaderBoard === "Yes"}
                                    onChange={CourseInput}

                                // defaultValue={Course ? Course.leaderBoard : ''}
                                />
                                Yes
                            </label>
                            <input type="radio" name="leaderBoard" value="No"
                                checked={Course.leaderBoard === "No"}
                                onChange={CourseInput}

                            // defaultValue={Course ? Course.leaderBoard : ''} 
                            />
                            No
                        </div>

                        <div className='form-group mt-3'>
                            <label>Price:</label>
                            <input
                                type='number'
                                className='inputFiled form-control'
                                placeholder='Enter Price'
                                name='price'
                                onChange={CourseInput}
                                defaultValue={Course ? Course?.price : ''}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label>Content:</label>
                            <textarea
                                className='inputFiled form-control'
                                placeholder='Enter Content'
                                name='about'
                                onChange={CourseInput}
                                defaultValue={Course ? Course?.about : ''}
                            />
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
                                    <input type="text" className='inputFiled form-control' placeholder="Paste YouTube video link here" onChange={(e) => handleMediaUpload(e.target.value)} defaultValue={Course ? Course?.file : ''} />
                                </div>
                            ) : (
                                <div>
                                    <input type='file' className='inputFiled form-control' placeholder='Enter File' name='file' onChange={ImageUpload} multiple
                                        accept='image/*' />
                                </div>
                            )}
                        </div>
                        {/* <div className='form-group mt-3'>
              <label>Course Image:</label>
              <input
                type='file'
                className='inputFiled form-control'
                placeholder='Enter File'
                name='file'
                onChange={ImageUpload}
                accept='image/*'
              />
            </div> */}

                        {/* {ImagePath?.getImageMetadata?.path ? (
              <>
                <br />
                <img
                  src="C:/Users/DELL/Desktop/LMS-Functional-Gitlab/typescript-graphql-backend/learning-managment-system/server/public/images/dsaasdsda1692686385292.png"
                  alt='course'
                  style={{ width: '300px', height: '200px' }}
                />
                <p>{ImagePath.getImageMetadata.path}</p>
              </>
            ) : null} */}

                        <div className='row mt-3'>
                            <div className='col-md-4'>
                                <button
                                    type='button'
                                    onClick={UpdateCourse}
                                    className='btn btn-primary'
                                >
                                    Update Course
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateCourse;