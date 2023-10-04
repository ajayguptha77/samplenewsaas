import React, { ChangeEvent, useState, useContext, useEffect } from 'react';
import ContextData from '../useContext';
import { API, graphqlOperation } from 'aws-amplify';
import { updateQuestions } from '../../graphql/mutations';
import { getQuestions, getTopic, listSubTopics, getSubTopic } from '../../graphql/queries';
import { useLocation, useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select';
import JoditEditor from 'jodit-react';
import ChildComponent from './questionChild';
import SolutionChild from './solutionChild';
import AnswerHintChild from './answerHintChild';
import GroupsComponent from '../groups';
import { SendFile, updDelFile } from '../FileUpload';
import CodeEditor from './codeEditor';
import FillUpChild from './fillUpChild';
import InternalKeywordsComponent from './InternalKeywords';
import ExternalKeywordsComponent from './externalKeywords';
import SampleChild from './sample';
import { FileUpload } from '../FileUpload';
import ProgrammerMatrix from './ProgrammerMatrix';
import AddLanguages from './addLanguages';
import SingleLanguageComponent from './singleLanguage';
import TechStackComponent from './techStack';
import InstanceSizeComponent from './InstanceSize';
import ThemesComponent from './themes';
import FileFormatComponent from './fileFormats';


interface QuestionDetails {
    uploadBackground?: boolean;
    autoEvaluation?: boolean;
    enableAutoRecord?: boolean;
    attemptsToRecord?: number
    maxRecording?: number
    minRecording?: number
    startTime?: number,
    videoSolution: any;
    sample: any;
    questionName: string;
    directions: string;
    id?: string;
    questionType: string;
    questionSubType: string;
    subject: string;
    difficulty: string;
    topic: string;
    codeEditor: string;
    textEditor: string;
    options: Array<Option>;
    solution: Array<Solution>;
    hint: Array<Hint>;
    groups: any;
    media: string;
    wordLimit?: any;
    internalKeywords: [string]
    externalKeywords: [string]
    competency: Array<Competency>
    subTopic: string;
    concepts: string;
    blanksCount?: number;
    caseSensitive?: boolean;
    fillUpanswer?: [Answer];
    QuesDependency: string;
    languages: any,
    inputFormat: string,
    outputFormat: string,
    codeConstraints: string,
    techStack?: string,
    instanceSize?: string,
    themes?: any,
    ZipFile?: string,
    cloudProvider?:string,
    SingleLanguage: string,
    fileCountMandatory?: boolean, 
    fileCount?: number,
    fileFormats?: [string],
    fileSizes?: [string],
}

interface Competency {
    progLevel: string, // You can initialize these values as needed
    progSub: string,
    progTopic: string,
}

interface SubTopic {
    subject: any;
    id?: string;
    name: string;
    // subtype: string;
    topicID: string;
}

interface Option {
    optionNumber: number;
    correctAnswer: boolean;
    answer: string | null;
    isPartialCorrect: boolean;
    weightage: number;
    negMarks: 0;
    _typename?: string;
}

interface Solution {
    optionNumber: number;
    answer: string | null;
    bestSolution: boolean;
}

interface Hint {
    optionNumber: number;
    hint: string;
}

interface Group {
    label: string;
    value: string;
}

interface Answer {
    splitMarksEqually: boolean;
    weightage: number;
    answer: string;
    alternateAns: string[];
}

const initialState: QuestionDetails = {
    questionType: '', questionSubType: '', subject: '', subTopic: '', codeEditor: '', textEditor: '', media: '', options: [], solution: [], hint: [], concepts: '', groups: [''], difficulty: '', topic: '', wordLimit: 40, QuesDependency: '', internalKeywords: [''], externalKeywords: [''], questionName: '', sample: [], videoSolution: '', languages: [], inputFormat: '', outputFormat: '', codeConstraints: '', competency: [],SingleLanguage: '',directions: '',
};

function UpdateQuestion() {
    const location = useLocation();
    const navigate = useNavigate();
    const [InputDetails, setInputDetails] = useState<QuestionDetails>(initialState);
    const [selectedSubTopic, setSelectedSubTopic] = useState('');
    const [Topics, setTopics] = useState<{ name: string }>({ name: '' });
    const [subTopicsData, setsubTopicsData] = useState<SubTopic[]>([]);
    const [isUploadVisible, setUploadVisible] = useState<boolean>(false);
    const [PrevDirectory, setPrevDirectory] = useState('');
    const [options, setOptions] = useState<Option[]>([]);
    const [hints, setHints] = useState<Hint[]>([]);
    const [fillups, setFillups] = useState<Answer[]>([]);
    const [Groups, setGroups] = useState<Group[]>([]);
    const [InternalKeywords, setInternalKeywords] = useState<any>([]);
    const [ExternalKeywords, setExternalKeywords] = useState<any>([]);
    const [solutions, setSolutions] = useState<Solution[]>([]);
    const [samples, setsamples] = useState<Solution[]>([]);
    const [rows, setRows] = useState<any>([]);
    const [maxSizes, setMaxSizes] = useState(Array(InputDetails?.fileCount || 0).fill(''));
    const [file, setFile] = useState<any>();
    const [VideoFile, setVideoFile] = useState<any>();
    const [ZipFile, setZipFile] = useState<any>();
    const [BackgroundImg, setBackground] = useState<any>();
    const [errMsg, setErrorMsg] = useState('');
    const [directory, setDirectory] = useState('');
    const [Languages, setLanguages] = useState<Group[]>([]);
    const [SingleLanguage, setSingleLanguage] = useState<Group | any>();
    const [TechStack, selectedTechStack] = useState<Group | any>();
    const [InstanceSize, setInstanceSize] = useState<Group | any>();
    const [themes, setThemes] = useState<Group[]>([]);
    const [fileFormats, setFileFormats] = useState<Group[]>([]);

    const [isCodeEditorChecked, setIsCodeEditorChecked] = useState(false);
    const [isTextEditorChecked, setIsTextEditorChecked] = useState(false);


    useEffect(() => {
        async function provInfo() {
            try {
                const getQuestionByID = await API.graphql(graphqlOperation(getQuestions, { id: location.state.id })) as any;
                // let allQuestionData = getQuestionByID.data.getQuestions;

                // setFormData({...formData, id:allQuestionData.id, questionType:allQuestionData.questionType, subtype:allQuestionData.subtype, difficulty:allQuestionData.difficulty, topic:allQuestionData.topic, question:allQuestionData.question, media:allQuestionData.media, wordLimit:allQuestionData.wordLimit, internalKeywords:allQuestionData.internalKeywords, externalKeywords:allQuestionData.externalKeywords,
                //     options:allQuestionData.options, solution:allQuestionData.solution, hint:allQuestionData.hint, groups:allQuestionData.groups, concepts:allQuestionData.concepts, subTopic:allQuestionData.subTopic,
                //     competency:allQuestionData.competency, subTopics:allQuestionData.subTopic});

                getDirectory(getQuestionByID?.data?.getQuestions.media);
                setInputDetails(getQuestionByID?.data?.getQuestions);

                if(getQuestionByID?.data?.getQuestions?.textEditor){
                    setIsTextEditorChecked(true);
                }

                if(getQuestionByID?.data?.getQuestions?.codeEditor){
                    setIsCodeEditorChecked(true);
                }

                if(getQuestionByID?.data?.getQuestions?.media){
                    setUploadVisible(true);
                }

                if(getQuestionByID?.data?.getQuestions?.competency){
                    setRows(getQuestionByID?.data?.getQuestions?.competency);
                }

                
                

                console.log('getQuestionByID', getQuestionByID?.data?.getQuestions);

                const subtopicInfo = await API.graphql(graphqlOperation(getSubTopic, { id: getQuestionByID?.data?.getQuestions?.subTopic })) as any;

                if (subtopicInfo) {
                    const getTopicByID = await API.graphql(graphqlOperation(getTopic, { id: subtopicInfo?.data?.getSubTopic?.topicID })) as any;
                    // console.log('getTopicByID', getTopicByID);
                    setTopics(getTopicByID.data.getTopic)
                }

                setSelectedSubTopic(subtopicInfo?.data?.getSubTopic?.name || 0);

                await handleSubTopic({ id: getQuestionByID?.data?.getQuestions?.subTopic, value: getQuestionByID?.data?.getQuestions?.subTopic, subject: getQuestionByID?.data?.getQuestions?.subject, topicID: getQuestionByID?.data?.getQuestions?.topic });

                const subTopics = await API.graphql(graphqlOperation(listSubTopics)) as any;
                setsubTopicsData(subTopics.data.listSubTopics.items);

            } catch (err) {
                console.log('error fetching todos', err);
            }
        }
        provInfo();
    }, [location.state.id]);

    const handleFileSize = (e: any, index: any) => {
        const newMaxSizes = [...maxSizes];
        newMaxSizes[index] = e.target.value;
        setMaxSizes(newMaxSizes);
    };
        
       
    const FileMaxSize = Array.from({ length: InputDetails?.fileCount || 0 },((fileSize:any, index:number) => (
        <div key={index} className='col-md-6 mt-3'>
            <label>Max size of file- {index + 1} (mb):</label>
            <input
             type='number'
             className='inputFiled form-control'
             name={`maxSize${index}`}
             onChange={(e) => handleFileSize(e, index)}
             defaultValue={InputDetails.fileSizes ? InputDetails.fileSizes[index]: fileSize}
             // defaultValue={InputDetails.fileSizes ? InputDetails.fileSizes[index] : fileSize}
             />
             </div>
             )));

    // console.log("get formData", formData);
    // console.log("subTopicsData", subTopicsData);

    //fetching single topic by iD
    const handleSubTopic = async (e: any) => {
        // console.log("e ", e)
        try {
            setSelectedSubTopic(e.id);

            // console.log("e.topicID ", e.target)

            const selectedSubtopicObject = subTopicsData?.find((subTopic) => subTopic.id === e);

            // console.log("selectedSubtopicObject", selectedSubtopicObject)

            if (selectedSubtopicObject) {
                const getTopicByID = await API.graphql(graphqlOperation(getTopic, { id: selectedSubtopicObject.topicID })) as any;
                // console.log('getTopicByID', getTopicByID);
                setTopics(getTopicByID.data.getTopic)

                setInputDetails({
                    ...InputDetails,
                    subject: selectedSubtopicObject.subject,
                    topic: getTopicByID.data.getTopic.id,
                    subTopic: e.value,
                });
            }

            // setTopics(getTopicByID.data.getTopic)
            // // setsubTopic(getTopicByID)
            // // setGroupRes(true)
            // setFormData({
            //     ...formData,
            //     subtype: e.subject,
            //     subTopic: e.id,
            //     topic: e.topicID
            // });
        } catch (err) {
            console.log('error fetching todos', err);
        }
    }
    // console.log("Topics",Topics) 


    let name: any, value: any;
    function QuestionInput(event: { target: { name: any; value: any; }; }) {
        name = event.target.name;
        value = event.target.value;
        // console.log("value", value);

        // setInputDetails({
        //     ...InputDetails,
        //     [name]: value
        // })

        setInputDetails((prevInputDetails: any) => ({
            ...prevInputDetails,
            [name]: value,
        }));
    }

    const joditChange = (value: string) => {
        // setInputDetails({
        //     ...InputDetails,
        //     question: value
        // });

        setInputDetails((prevInputDetails: any) => ({
            ...prevInputDetails,
            textEditor: value
        }));
    }
    const handleCheckboxChange = (event: any) => {
        setUploadVisible(event.target.checked);
    };
    const JodiInputs = (value: string, getName: string) => {

        setInputDetails({
            ...InputDetails,
            [getName]: value
        });
    }

    const handlecaseSensitive = (event: any) => {
        console.log("event.target.checked", event.target.checked)
        const isChecked = event.target.checked;
        const name = event.target.name;
        setInputDetails({
            ...InputDetails,
            [name]: isChecked
        });

        // const isChecked = event.target.checked;
        // setInputDetails({
        //     ...InputDetails,
        //     caseSensitive: isChecked
        // });
    };

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files && event.target.files[0]) {
    //         const file = event.target.files[0];
    //         // setSelectedFile(file);

    //         setInputDetails((prevInputDetails: any) => ({
    //             ...prevInputDetails,
    //             media: file.name
    //         }));

    //         // setInputDetails({
    //         //     ...InputDetails,
    //         //     media: file.name, // You can set the file name or any other desired value here
    //         // });
    //         //   setSelectedFile(file);
    //     }
    // };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            let fExt = file.name.split('.').pop();

            if (
                fExt === 'pdf' || fExt === 'doc' || fExt === 'docx' || fExt === 'excel' || fExt === 'ppt' || fExt === 'mp3' || fExt === 'wav' || fExt === 'ogg' || fExt === 'mp4' || fExt === 'mov' || fExt === 'avi' || fExt === 'zip'
            ) {
                setFile(file);
                setErrorMsg("")
                if (fExt === 'zip') {
                    setDirectory("zip")
                } else if (fExt === 'pdf' || fExt === 'doc' || fExt === 'docx' || fExt === 'excel' || fExt === 'ppt') {
                    setDirectory("doc")
                } else if (fExt === 'mp3' || fExt === 'wav' || fExt === 'ogg') {
                    setDirectory("audios")
                } else {
                    setDirectory("videos")
                }
            } else {
                setErrorMsg('Please upload a pdf, doc, docx, excel, ppt, mp3, wav, ogg, mp4, mov, avi, zip file.');
            }

        }
    };

    const getDirectory = (sub: any) => {
        let dirType: any;

        if (sub === 'pdf' || sub === 'doc' || sub === 'docx' || sub === 'excel' || sub === 'ppt') {
            dirType = 'doc'
        } else if (sub === 'img' || sub === 'jpg' || sub === 'jpeg' || sub === 'png') {
            dirType = 'images'
        } else if (sub === 'audio') {
            dirType = 'audios'
        } else if (sub === 'video') {
            dirType = 'videos'
        }

        setPrevDirectory(dirType)
    }

    console.log("rows",rows)

    const handleUpdate = async (e: any) => {
        e.preventDefault();
        const GroupIDs: any = Groups.map((obj) => obj.value);
        const themesIDs: any = themes.map((obj: any) => obj.value);

        let fileName;
        if (file) {
            fileName = Date.now() + file.name
            await SendFile(file, fileName, directory);
        }
        let VideoFileName
        if (VideoFile) {
            VideoFileName = Date.now() + VideoFile.name
            await SendFile(VideoFile, VideoFileName, "videos");
        }


        let ZipFileName
        if (ZipFile) {
            ZipFileName = Date.now() + ZipFile.name
            await SendFile(ZipFile, ZipFileName, "zip");
        }


        let background
        if (BackgroundImg) {
            background = Date.now() + BackgroundImg.name
            await SendFile(BackgroundImg, background, "images");
        }
        // InputDetails.competency = rows;

        const optionInput = InputDetails.options.map((option: any) => {
            return {
                optionNumber: option.optionNumber,
                answer: option.answer,
                isPartialCorrect: option.isPartialCorrect,
                weightage: option.weightage,
                correctAnswer: option.correctAnswer,
                negMarks: option.negMarks,
                // _typename: "option"
            }
        })

        const solutionInput = InputDetails.solution.map((solution: any) => {

            return {
                optionNumber: solution.optionNumber,
                answer: solution.answer,
                bestSolution: solution.bestSolution
            }
        })

        const hintInput = InputDetails.hint.map((hint: any) => {

            return {
                optionNumber: hint.optionNumber,
                hint: hint.hint
            }
        })
        
        InputDetails.competency = rows
        const competencyInput = rows.map((competency: any) => {

            return {
                progSub: competency.progSub,
                progTopic: competency.progTopic,
                progLevel: competency.progLevel
            }
        })
 
        console.log("ssdsdfsdf",rows)

        const fillUpanswerInput = InputDetails?.fillUpanswer?.map((fillUpanswer: any) => {
            return {
                answer: fillUpanswer.answer,
                alternateAns: fillUpanswer.alternateAns,
                splitMarksEqually: fillUpanswer.splitMarksEqually,
                weightage: fillUpanswer.weightage
            }
        })

        const sampleInput = InputDetails.sample.map((solution: any) => {

            return {
                optionNumber: solution.optionNumber,
                answer: solution.answer,
                bestSolution: solution.bestSolution
            }
        })

        const formDataDetails = {
            id: location.state.id,
            questionType: InputDetails.questionType,
            subject: InputDetails.subject,
            difficulty: InputDetails.difficulty,
            topic: InputDetails.topic,
            textEditor: InputDetails.textEditor,
            codeEditor: InputDetails.codeEditor,
            options: optionInput,
            solution: solutionInput,
            hint: hintInput,
            groups: Groups.length ? GroupIDs : InputDetails.groups,
            media: fileName ? fileName : InputDetails.media,
            wordLimit: InputDetails.wordLimit,
            internalKeywords: InputDetails.externalKeywords,
            externalKeywords: InputDetails.externalKeywords,
            competency: competencyInput,
            subTopic: InputDetails.subTopic,
            concepts: InputDetails.concepts,
            blanksCount: InputDetails.blanksCount,
            caseSensitive: InputDetails.caseSensitive,
            fillUpanswer: fillUpanswerInput,
            QuesDependency: InputDetails.QuesDependency,
            questionName: InputDetails.questionName,
            directions: InputDetails.directions,
            sample: sampleInput,
            enableAutoRecord: InputDetails.enableAutoRecord,
            minRecording: InputDetails.minRecording,
            startTime: InputDetails.startTime,
            maxRecording: InputDetails.maxRecording,
            attemptsToRecord: InputDetails.attemptsToRecord,
            autoEvaluation: InputDetails.autoEvaluation,
            backgroundImg: background,
            ZipFile: ZipFileName,
            themes: themes.length ? themesIDs : InputDetails.themes,
            cloudProvider: InputDetails.cloudProvider,
            techStack: TechStack ? TechStack?.value : "",
            instanceSize: InstanceSize ? InstanceSize?.value : "",
            SingleLanguage: SingleLanguage?.value,
            fileSizes: maxSizes.length ? maxSizes: InputDetails?.fileSizes,
        }
        // const updatedQuestion = { ...formData };

        console.log("updatedQuestion", formDataDetails)

        try {
            const updateQuestion = await API.graphql(graphqlOperation(updateQuestions, { input: formDataDetails }));

            console.log("updateQuestion", updateQuestion);

            if (updateQuestion) {
                if (InputDetails.media !== fileName) {
                    const getres = await SendFile(file, fileName, directory)
                    if (getres.status === 200) {
                        if (InputDetails?.media) {
                            await updDelFile(InputDetails.media, PrevDirectory)
                        }
                    }
                }
                navigate('/listQuestions', { state: { questionbankid: location.state.questionbankid } });
            }
        }
        catch (err) {
            console.log('error fetching todos', err);
        }
    }
    // console.log('Topics', Topics);

    return (
        <div className='row col-md-12'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='container mt-5'></div>
                <h2>Update Question</h2>

                {InputDetails ?
                    <>
                        <div className="row col-md-12 mt-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Question Type:</label>
                                    <select name="questionType" className="inputFiled form-control" onChange={QuestionInput}>
                                        <option value='single' selected={InputDetails?.questionType === 'single'}>
                                            Single Question
                                        </option>
                                        <option value='group' selected={InputDetails?.questionType === 'group'}>
                                            Group Questions
                                        </option>
                                        <option value='upload' selected={InputDetails?.questionType === 'upload'}>
                                            Question Paper Upload
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Question subType: </label>
                                    <select name="questionSubType" className="inputFiled form-control" onChange={QuestionInput}
                                        defaultValue={InputDetails.questionSubType}>
                                        <option value="single">Select Question Type</option>
                                        {InputDetails.questionType === 'single' ?
                                            <>
                                                <option value="1" selected={InputDetails?.questionSubType === '1'}>MCQ Single Correct</option>
                                                <option value="2" selected={InputDetails?.questionSubType === '2'}>MCQ Multiple Correct</option>
                                                <option value="3" selected={InputDetails?.questionSubType === '3'}>Fill-Ups</option>
                                                <option value="4" selected={InputDetails?.questionSubType === '4'}>English Writing Skills Assessment</option>
                                                <option value="5" selected={InputDetails?.questionSubType === '5'}>HTML / CSS / JS</option>
                                                <option value="6" selected={InputDetails?.questionSubType === '6'}>Frontend Technology</option>
                                                <option value="7" selected={InputDetails?.questionSubType === '7'}>Block programming</option>
                                                <option value="8" selected={InputDetails?.questionSubType === '8'}>Diagram question</option>
                                                <option value="9" selected={InputDetails?.questionSubType === '9'}>Single-file programming questions</option>
                                                <option value="10" selected={InputDetails?.questionSubType === '10'}>Classification</option>
                                                <option value="11" selected={InputDetails?.questionSubType === '11'}>Multi-file programming question</option>
                                                <option value="12" selected={InputDetails?.questionSubType === '12'}>File upload</option>
                                                <option value="13" selected={InputDetails?.questionSubType === '13'}>Video answer/ Speaking: Audio/video questions</option>
                                                <option value="14" selected={InputDetails?.questionSubType === '14'}>Descriptive questions with image</option>
                                                <option value="15" selected={InputDetails?.questionSubType === '15'}>Text-only descriptive questions</option>
                                                <option value="16" selected={InputDetails?.questionSubType === '16'}>Project question</option>
                                                <option value="17" selected={InputDetails?.questionSubType === '17'}>Cloud question</option>
                                            </>
                                            : null}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label style={{ "marginRight": '20px' }}>Manual Difficulty*:</label>
                            <input type="radio" name="difficulty" defaultValue="easy" onChange={QuestionInput} className='mx-1' checked={InputDetails.difficulty === "easy" ? true : false} /> Easy
                            <input type="radio" name="difficulty" defaultValue="medium" onChange={QuestionInput} className='mx-1' checked={InputDetails.difficulty === "medium" ? true : false} /> Medium
                            <input type="radio" name="difficulty" defaultValue="difficult" onChange={QuestionInput} className='mx-1' checked={InputDetails.difficulty === "difficult" ? true : false} /> Hard
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-4">
                                <label>Sub Topic*:</label>
                                {/* <Select
                                    name="subTopic"
                                    // defaultValue={formData.subTopic}
                                    // onChange={(e: any) => handleSubTopic(e)}
                                    // options={subTopicsData ? subTopicsData.map(subtopic => ({ label: subtopic.name, value: subtopic.id, subject: subtopic.subject, topicID: subtopic.topicID, id: subtopic.id, required: true })) : []}
                                    defaultValue={{ label: formData.subtype, value: formData.subTopic }}
                                    onChange={(e: any) => handleSubTopic(e)}
                                    options={subTopicsData ? subTopicsData.map(subtopic => ({ label: subtopic.name, value: subtopic.id })) : []}
                                /> */}

                                <select name="topicID" className="inputFiled form-control" value={selectedSubTopic}

                                    onChange={(e) => handleSubTopic(e.target.value)}
                                // options={subTopicsData ? subTopicsData.map(subtopic => ({ label: subtopic.name, value: subtopic.id, subject: subtopic.subject, topicID: subtopic.topicID, id: subtopic.id, required: true })) : []}
                                >

                                    <option value="">Select subTopic</option>
                                    {subTopicsData.map((topic) => (
                                        <option key={topic.id} value={topic.id}>
                                            {topic.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-group mr-3">Topic:</label>
                                <input
                                    type="text"
                                    className="inputFiled form-control"
                                    placeholder="Enter topic Name"
                                    name="topic"
                                    value={Topics.name}
                                    readOnly
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-group mr-3">Subject:</label>
                                <input
                                    type="text"
                                    className="inputFiled form-control"
                                    placeholder="Enter topic Name"
                                    name="subject"
                                    // value={InputDetails?.subtype ? InputDetails.subtype : formData.subtype}
                                    value={InputDetails.subject}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="row col-md-12 mt-3">
                        <div className='col-md-6'>
                        <label>
                            <input
                                type="checkbox"
                                checked={isCodeEditorChecked}
                                onChange={() => {
                                    setIsCodeEditorChecked(!isCodeEditorChecked);
                                    // setIsTextEditorChecked(false); // Uncheck the Text Editor
                                }}
                            />
                            <span className='mx-3'>Code Editor</span>
                        </label>
                        </div>
                        <div className='col-md-6'>
                        <label>
                            <input
                                type="checkbox"
                                checked={isTextEditorChecked}
                                onChange={() => {
                                    setIsTextEditorChecked(!isTextEditorChecked);
                                    // setIsCodeEditorChecked(false); // Uncheck the Code Editor
                                }}
                            />
                            <span className='mx-3'>Text Editor</span>
                        </label>
                        </div>
                        
                    </div>
                    
                    {isCodeEditorChecked || isTextEditorChecked ? 
                    <label className='mt-3'>Question*</label>
                        : null }
                    { isCodeEditorChecked &&
                    <CodeEditor InputDetails={InputDetails} setInputDetails={setInputDetails} getEditor={InputDetails.codeEditor}/>
                    }

                    { isTextEditorChecked &&
                    <JoditEditor className='mt-3' value={InputDetails ? InputDetails?.textEditor : ''} onChange={joditChange} />
                    }

                        
                        {InputDetails.questionType === 'single' && InputDetails.questionSubType !== "9" && InputDetails.questionSubType !== "11" ?
                            <><div className='form-group mt-3'>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={isUploadVisible}
                                        onChange={handleCheckboxChange} />
                                    <span className='mx-2'>Enable File Upload (pdf, doc, docx, excel, ppt, mp3, wav, ogg, mp4, mov, avi, zip)</span>
                                </label>

                                {isUploadVisible && (
                                    <div className='mt-3'>
                                        <input type="file" className="inputFiled form-control" name="file" onChange={handleFileChange} /><p style={{ color: 'red' }}>{errMsg}</p>
                                        <p><b>Filename: </b>{InputDetails.media}</p>
                                    </div>
                                    
                                )}
                            </div></>
                            : null}
                        

                        {InputDetails.questionType === 'single' && InputDetails.questionSubType === '3' ?
                            <>
                                <div className="col-md-12 mt-3">Dependency</div>
                                <label>
                                    <input
                                        className='mx-1'
                                        type="radio"
                                        name="QuesDependency"
                                        value="Dependent"
                                        checked={InputDetails.QuesDependency === "Dependent"}
                                        onChange={QuestionInput}
                                    />
                                    Dependent
                                </label>
                                <label>
                                    <input
                                        className='mx-1'
                                        type="radio"
                                        name="QuesDependency"
                                        value="Independent"
                                        checked={InputDetails.QuesDependency === "Independent"}
                                        onChange={QuestionInput}
                                    />
                                    Independent
                                </label>

                                <div className="col-md-12 mt-3">
                                    <label>no.of blanks</label>
                                    <input type='number'
                                        className='inputFiled form-control'
                                        name='blanksCount'
                                        defaultValue={InputDetails.blanksCount}
                                        onChange={QuestionInput} />
                                </div>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="caseSensitive"
                                        // checked={
                                        //     props?.options && typeof props.options[index]?.caseSensitive === 'string'
                                        //         ? props.options[index].splitMarksEqually
                                        //         : option.splitMarksEqually
                                        // }
                                        // checked={props?.options ? props.options[index].splitMarksEqually : option.splitMarksEqually}
                                        onChange={(event) => handlecaseSensitive(event)} checked={InputDetails.caseSensitive} />
                                    Enable Case-Sensitive
                                </label>
                                <FillUpChild fillups={fillups} setFillups={setFillups} InputDetails={InputDetails} setInputDetails={setInputDetails} questionFillup={InputDetails.fillUpanswer} />
                            </>
                            : null
                        }

                        {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "4" || InputDetails.questionSubType === "14" || InputDetails.questionSubType === "15") ?
                            <>
                                <div className='form-gropum mt-3'>
                                    <label>Name</label>
                                    <input
                                        type='text'
                                        className='inputFiled form-control'
                                        placeholder='Enter Question'
                                        name='questionName'
                                        defaultValue={InputDetails.questionName}
                                        onChange={QuestionInput}
                                    />
                                </div>
                                <div className='form-gropum mt-3'>
                                    <label>Word Limit</label>
                                    <input
                                        type='number'
                                        className='inputFiled form-control'
                                        name='wordLimit'
                                        placeholder='Enter Word Limit'
                                        defaultValue={InputDetails.wordLimit}
                                        onChange={QuestionInput}
                                    />
                                </div>
                                <div className='form-gropum mt-3'>
                                    <label>Directions</label>
                                    <JoditEditor value={InputDetails ? InputDetails.directions : ''} onChange={(e) => JodiInputs(e, "directions")} />
                                </div>
                            </>
                            : null}

                        {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "14" || InputDetails.questionSubType === "15") ?
                            <div className='form-group mt-3'>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="autoEvaluation"
                                        onChange={(event) => handlecaseSensitive(event)}
                                        checked={InputDetails.autoEvaluation} />
                                    Enable Auto Evaluation
                                </label>
                            </div> : null}

                        {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "4" || InputDetails.questionSubType === "13" || InputDetails.questionSubType === "14" || InputDetails.questionSubType === "15") ?
                            <>
                                <InternalKeywordsComponent InternalKeywords={InternalKeywords} setInternalKeywords={setInternalKeywords} editValue={InputDetails.internalKeywords} />

                                <SampleChild solutions={samples}
                                    setSolutions={setsamples} InputDetails={InputDetails} setInputDetails={setInputDetails}
                                    questionSample={InputDetails.sample} />
                            </>
                            : null}
                        {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "4" || InputDetails.questionSubType === "13") ?
                            <ExternalKeywordsComponent ExternalKeywords={ExternalKeywords} setExternalKeywords={setExternalKeywords} editValue={InputDetails.externalKeywords} />
                            : null}

                        {InputDetails.questionType === 'single' && InputDetails.questionSubType === "13" ?
                            <>
                                <div className='form-group mt-3'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="enableAutoRecord"
                                            onChange={(event) => handlecaseSensitive(event)}
                                            checked={InputDetails.enableAutoRecord} />
                                        Enable Auto Recording
                                    </label>
                                </div>
                                <div className='row col-md-12'>
                                    <div className='col-md-6'>
                                        <div className='form-gropum mt-3'>
                                            <label>Auto Recording Start Time(sec)</label>
                                            <input
                                                type='number'
                                                className='inputFiled form-control'
                                                name='startTime'
                                                defaultValue={InputDetails.startTime}
                                                onChange={QuestionInput}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-gropum mt-3'>
                                            <label>Minimum Recording Time</label>
                                            <input
                                                type='number'
                                                className='inputFiled form-control'
                                                name='minRecording'
                                                defaultValue={InputDetails.minRecording}
                                                onChange={QuestionInput}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-gropum mt-3'>
                                            <label>Maximum Recording Time</label>
                                            <input
                                                type='number'
                                                className='inputFiled form-control'
                                                name='maxRecording'
                                                defaultValue={InputDetails.maxRecording}
                                                onChange={QuestionInput}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-gropum mt-3'>
                                            <label>No of attempt to record a video</label>
                                            <input
                                                type='number'
                                                className='inputFiled form-control'
                                                name='attemptsToRecord'
                                                defaultValue={InputDetails.attemptsToRecord}
                                                onChange={QuestionInput}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </> : null}

                            {InputDetails.questionType === 'single' && InputDetails.questionSubType === "6" ?
                                <div className='form-gropum mt-3'>
                                    {/* <label>Language</label> */}
                                    <SingleLanguageComponent SingleLanguage={SingleLanguage} setSingleLanguage={setSingleLanguage} editValue={InputDetails?.SingleLanguage} />
                                </div>
                                
                                : null }

                        {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "4" || InputDetails.questionSubType === "5" || InputDetails.questionSubType === "6" || InputDetails.questionSubType === "13" || InputDetails.questionSubType === "14" || InputDetails.questionSubType === "15") ?
                            <div className='form-gropum mt-3'>
                                <FileUpload setFile={setVideoFile} label="Upload Video Solution" fileType="videos" />
                            </div>
                            : null}
                        <p><b>VideoName: </b>{InputDetails ? InputDetails.videoSolution : null}</p>

                        {/* {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "4" || InputDetails.questionSubType === "5" || InputDetails.questionSubType === "6") ?
                            <div className='form-gropum mt-3'>
                                <FileUpload setFile={setVideoFile} label="Upload Video Solution" fileType="videos" />
                                filename:{InputDetails ? InputDetails.videoSolution : ''}
                            </div>
                            : null} */}

                        {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "5" || InputDetails.questionSubType === "6" || InputDetails.questionSubType === "9") ?
                            <div className='form-gropum mt-3'>
                                <label>Programmer Compentency Matrix</label>
                                <ProgrammerMatrix setRows={setRows} rows={rows} editValue={InputDetails.competency} />
                            </div>
                            : null}

                        {InputDetails.questionType === 'single' && InputDetails.questionSubType === "9" ?
                            <>
                                <br />
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header">
                                            <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
                                                Question Details
                                            </a>
                                        </div>
                                        <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <>
                                                    <AddLanguages Languages={Languages} setLanguages={setLanguages} />
                                                    <div className='form-gropum mt-3'>
                                                        <label>Input Format</label>
                                                        <JoditEditor value={InputDetails.inputFormat} onChange={(e) => JodiInputs(e, "inputFormat")} />
                                                    </div>
                                                    <div className='form-gropum mt-3'>
                                                        <label>Output Format</label>
                                                        <JoditEditor value={InputDetails.outputFormat} onChange={(e) => JodiInputs(e, "outputFormat")} />
                                                    </div>
                                                    <div className='form-group mt-3'>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                name="enableCustomInput"
                                                                onChange={(event) => handlecaseSensitive(event)} />
                                                            Enable Custom Input
                                                        </label>
                                                    </div>
                                                    <div className='form-group mt-3'>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                name="enableAPITesting"
                                                                onChange={(event) => handlecaseSensitive(event)} />
                                                            Enable API Testing
                                                        </label>
                                                    </div>
                                                    <div className='form-gropum mt-3'>
                                                        <label>Code Constraints</label>
                                                        <JoditEditor value={InputDetails.codeConstraints} onChange={(e) => JodiInputs(e, "codeConstraints")} />
                                                    </div>
                                                    <div className='form-group mt-3'>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                name="evaluationTime"
                                                                onChange={(event) => handlecaseSensitive(event)} />
                                                            Consider Time Limit in Evaluations
                                                        </label>
                                                    </div>
                                                    <div className='form-gropum mt-3'>
                                                        <div className='row col-md-12'>
                                                            <div className='col-md-6'>
                                                                <label>Time Limit(ms)</label>
                                                                <input
                                                                    type='text'
                                                                    className='inputFiled form-control'
                                                                    name='timeLimit'
                                                                    onChange={QuestionInput}
                                                                />
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <label>Memory Limit(kb)</label>
                                                                <input
                                                                    type='text'
                                                                    className='inputFiled form-control'
                                                                    name='memoryLimit'
                                                                    onChange={QuestionInput}
                                                                />
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <label>Output Limit(Chars)</label>
                                                                <input
                                                                    type='text'
                                                                    className='inputFiled form-control'
                                                                    name='outputLimit'
                                                                    onChange={QuestionInput}
                                                                />
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <label>Code Size(kb)</label>
                                                                <input
                                                                    type='text'
                                                                    className='inputFiled form-control'
                                                                    name='codeSize'
                                                                    onChange={QuestionInput}
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                                                Solutions and Testcases
                                            </a>
                                        </div>
                                        <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <SingleLanguageComponent SingleLanguage={SingleLanguage} setSingleLanguage={setSingleLanguage} />
                                                <SolutionChild solutions={solutions} setSolutions={setSolutions} InputDetails={InputDetails} setInputDetails={setInputDetails} />
                                                <FileUpload setFile={setVideoFile} label="Upload Video Solution" fileType="videos" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            : null}

                        {InputDetails.questionType === 'single' && InputDetails.questionSubType === "10" ?
                            <>
                                <div className='form-gropum mt-3'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="uploadBackground"
                                            onChange={(event) => handlecaseSensitive(event)}
                                            checked={InputDetails.uploadBackground} />
                                        <span className='mx-2'>Upload Background Image</span>
                                    </label>
                                </div>
                                {InputDetails.uploadBackground ?
                                    <FileUpload setFile={setBackground} label="Upload Background Image" fileType="images" />
                                    : null}
                                bgImg:{InputDetails ? InputDetails.uploadBackground : null}
                            </>
                            : null}

                        {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "17" || InputDetails.questionSubType === "16") &&

                        <ThemesComponent themes={themes} setThemes={setThemes} editValue={InputDetails.themes} />}

                        {InputDetails.questionType === 'single' && InputDetails.questionSubType === "16" ?
                        <>
                            <TechStackComponent selectedTechStack={selectedTechStack} TechStack={TechStack} editValue={InputDetails.techStack} />
                            <InstanceSizeComponent setInstanceSize={setInstanceSize} InstanceSize={InstanceSize} editValue={InputDetails.instanceSize} />
                        </>
                        : null}

                        {InputDetails.questionType === 'single' && InputDetails.questionSubType === "17" &&
                        <>

                            <div className='form-gropum mt-3'>
                                <label>Cloud Provider</label>
                                <select name="cloudProvider" className="inputFiled form-control" onChange={QuestionInput}>
                                    <option value="">Select Cloud Provider</option>
                                    <option value="aws" selected={InputDetails?.cloudProvider === 'aws'}>Amazon Web Service</option>
                                    <option value="azure" selected={InputDetails?.cloudProvider === 'azure'}>Azure Service</option>
                                    <option value="gcp" selected={InputDetails?.cloudProvider === 'gcp'}>GCP Service</option>
                                </select>
                            </div>
                            <FileUpload setFile={setZipFile} label="Upload Zip File" fileType="zip" />
                            ZipFile:{InputDetails ? InputDetails.ZipFile : null}
                        </>
                        }

{InputDetails.questionType === 'single' && InputDetails.questionSubType === "12" ?
                            <>
                                <div className='form-gropum mt-3'>
                                    <label>File Count</label>
                                    <input
                                        type='number'
                                        className='inputFiled form-control'
                                        name='fileCount'
                                        onChange={QuestionInput}
                                        defaultValue={InputDetails.fileCount}
                                    />
                                </div>
                                <div className='form-gropum mt-3'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="fileCountMandatory"
                                            onChange={(event) => handlecaseSensitive(event)}
                                            checked={InputDetails.fileCountMandatory} />
                                        <span className='mx-2'>File Count Mandatory</span>
                                    </label>
                                </div>
                                <FileFormatComponent setfileFormats={setFileFormats} editValue={InputDetails.fileFormats} />
                                {
                                    InputDetails.fileCount ?
                                        <div className='row col-md-12'>
                                            {FileMaxSize}
                                        </div> : null
                                }
                            </>
                            : null}

                        {InputDetails.questionType === 'single' && InputDetails.questionSubType !== "4" && InputDetails.questionSubType !== "5" && InputDetails.questionSubType !== "6" && InputDetails.questionSubType !== "9" && InputDetails.questionSubType !== "11" && InputDetails.questionSubType !== "12" && InputDetails.questionSubType !== "13" && InputDetails.questionSubType !== "14" && InputDetails.questionSubType !== "15" ?
                            <ChildComponent options={options}
                                setOptions={setOptions} InputDetails={InputDetails} setInputDetails={setInputDetails}
                                questionOptions={InputDetails.options} />
                            :
                            null}
                        {InputDetails.questionType === 'single' && InputDetails.questionSubType !== "4" && InputDetails.questionSubType !== "9" && InputDetails.questionSubType !== "11" && InputDetails.questionSubType !== "12" && InputDetails.questionSubType !== "13" && InputDetails.questionSubType !== "14" && InputDetails.questionSubType !== "15" ?
                            <>
                                <SolutionChild solutions={solutions}
                                    setSolutions={setSolutions} InputDetails={InputDetails} setInputDetails={setInputDetails}
                                    questionSolution={InputDetails.solution} />
                            </>
                            : null}
                        {InputDetails.questionType === 'single' && InputDetails.questionSubType !== "4" ?
                            <AnswerHintChild hints={hints} setHints={setHints} InputDetails={InputDetails}
                                setInputDetails={setInputDetails} questionHint={InputDetails.hint} />
                            :
                            null
                        }

                        <div className='form-gropum mt-3'>
                            <label>Linked Concepts</label>
                            <input
                                type='text'
                                className='inputFiled form-control'
                                placeholder='Enter Linked Concepts'
                                name='concepts'
                                onChange={QuestionInput}
                                defaultValue={InputDetails.concepts}
                            />
                        </div>
                        <GroupsComponent Groups={Groups} setGroups={setGroups} editValue={InputDetails.groups} />

                    </> : null}

                <div className='row mt-3'>
                    <div className='col-md-4'>
                        <button type='submit' onClick={handleUpdate} className='btn btn-primary'>
                            Update
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default UpdateQuestion;