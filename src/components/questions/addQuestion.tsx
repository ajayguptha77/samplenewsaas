import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { SpinningCircles } from 'react-loading-icons'
import Modal from 'react-bootstrap/Modal';
import { API, graphqlOperation } from 'aws-amplify';
import ContextData from '../useContext';
import { listSubTopics, getTopic } from '../../graphql/queries';
import { createQuestions } from '../../graphql/mutations';
import Select, { components } from 'react-select';
import JoditEditor from 'jodit-react';
import ChildComponent from './questionChild';
import SolutionChild from './solutionChild';
import AnswerHintChild from './answerHintChild';
import GroupsComponent from '../groups';
import ThemesComponent from './themes';
import { SendFile } from '../FileUpload';
import CodeEditor from './codeEditor';
import InternalKeywordsComponent from './InternalKeywords';
import ExternalKeywordsComponent from './externalKeywords';
import { FileUpload } from '../FileUpload';
import SampleChild from './sample';
import FillUpChild from './fillUpChild';
import AddLanguages from './addLanguages';
import ProgrammerMatrix from './ProgrammerMatrix';
import SingleLanguageComponent from './singleLanguage';
import FileFormatComponent from './fileFormats';
import TechStackComponent from './techStack';
import InstanceSizeComponent from './InstanceSize';

interface QuestionDetails {
    id?: string;
    questionBankID: string;
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
    wordLimit: number;
    EWSAquestion: string;
    internalKeywords: [string]
    externalKeywords: [string]
    competency: Array<Competency>
    subTopic: string;
    concepts: string;
    directions: string;
    sample: Array<Solution>
    blanksCount?: number;
    caseSensitive?: boolean;
    fillUpanswer?: [Answer];
    QuesDependency: string;
    languages: any,
    inputFormat: string,
    outputFormat: string,
    enableCustomInput?: boolean,
    enableAPITesting?: boolean,
    codeConstraints: string,
    evaluationTime?: boolean,
    timeLimit: string,
    memoryLimit: string,
    outputLimit: string,
    codeSize: string,
    uploadBackground?: boolean,
    initialQuery: string,
    fileCountMandatory?: boolean,
    fileCount?: number,
    enableAutoRecord?: boolean,
    minRecording?: number,
    startTime?: number,
    maxRecording?: number,
    attemptsToRecord?: number,
    autoEvaluation?: boolean,
    cloudProvider: string,
}

interface Answer {
    splitMarksEqually: boolean;
    weightage: number;
    answer: string;
    alternateAns: string[];
}

interface Competency {
    progLevel: string, 
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
    negMarks: number;
}

interface Solution {
    optionNumber: number;
    answer: string | null;
    bestSolution: string;
}

interface Hint {
    hint: string;
}

interface Group {
    label: string;
    value: string;
}

const initialState: QuestionDetails = {
    questionBankID: '', questionType: '', questionSubType: '', subject: '', subTopic: '', codeEditor: '', textEditor: '', media: '', options: [], solution: [], hint: [], concepts: '', groups: [''], difficulty: '', topic: '', wordLimit: 0, internalKeywords: [''], QuesDependency: '', externalKeywords: [''], EWSAquestion:'',directions: '',languages: [''],inputFormat:'', outputFormat: '',codeConstraints: '', timeLimit:'', memoryLimit:'', outputLimit: '', competency: [], codeSize:'', sample: [], initialQuery: '', cloudProvider:''
};

function AddQuestion() {
    const location = useLocation();
    const navigate = useNavigate();
    const { data } = useContext<any>(ContextData);
    const [fillups, setFillups] = useState<Answer[]>([]);
    const [InternalKeywords, setInternalKeywords] = useState<any>([]);
    const [ExternalKeywords, setExternalKeywords] = useState<any>([]);
    const [InputDetails, setInputDetails] = useState<QuestionDetails>(initialState);
    const [subTopicsData, setsubTopicsData] = useState<SubTopic[]>([]);
    const [GroupRes, setGroupRes] = useState(true);
    const [Topics, setTopics] = useState<{ name: string }>({ name: '' });
    const [isUploadVisible, setUploadVisible] = useState<boolean>(false);
    const [options, setOptions] = useState<Option[]>([]);
    const [solutions, setSolutions] = useState<Solution[]>([]);
    const [samples, setsamples] = useState<Solution[]>([]);
    const [hints, setHints] = useState<Hint[]>([]);
    const [SingleLanguage, setSingleLanguage] = useState<Group | any>();
    
    const [TechStack, selectedTechStack] = useState<Group | any>();
    const [InstanceSize, setInstanceSize] = useState<Group | any>();
    const [Groups, setGroups] = useState<Group[]>([]);
    const [themes, setThemes] = useState<Group[]>([]);
    const [fileFormats, setFileFormats] = useState<Group[]>([]);
    const [Languages, setLanguages] = useState<Group[]>([]);
    const [rows, setRows] = useState<any>([]);
    const [file, setFile] = useState<any>();
    const [VideoFile, setVideoFile] = useState<any>();
    const [ZipFile, setZipFile] = useState<any>();
    const [BackgroundImg, setBackground] = useState<any>();
    const [errMsg, setErrorMsg] = useState('');
    const [directory, setDirectory] = useState('');

    const [isCodeEditorChecked, setIsCodeEditorChecked] = useState(false);
    const [isTextEditorChecked, setIsTextEditorChecked] = useState(false);

    let name, value;
    function QuestionInput(event: { target: { name: any; value: any; }; }) {
        name = event.target.name;
        value = event.target.value;

        if (name === 'questionsubType') {
            setInputDetails({
                ...InputDetails,
                questionSubType: value // Update questionsubType
            });
        } else {
            setInputDetails({
                ...InputDetails,
                [name]: value
            });
        }

        // setInputDetails({
        //     ...InputDetails,
        //     [name]: value
        // })
    }

    //fetching subtopics list
    useEffect(() => {
        async function allgroups() {

            try {
                const subTopics = await API.graphql(graphqlOperation(listSubTopics)) as any;
                setsubTopicsData(subTopics.data.listSubTopics.items)
                // setGroupRes(true);
            } catch (err) {
                console.log('error fetching', err);
            }
        }
        allgroups()
    }, [GroupRes]);

    console.log("rows",rows)

    //getting topic name by ID
    const handleSubTopic = async (e: any) => {
        // console.log("e ", e)
        try {
            const getTopicByID = await API.graphql(graphqlOperation(getTopic, { id: e.topicID })) as any;
            setTopics(getTopicByID.data.getTopic)
            setGroupRes(true)
            setInputDetails({
                ...InputDetails,
                subject: e.subject,
                subTopic: e.id,
                topic: e.topicID
            });
        } catch (err) {
            console.log('error fetching', err);
        }
    }


    const joditChange = (value: string) => {

        setInputDetails({
            ...InputDetails,
            textEditor: value
        });
    }

    const JodiInputs = (value: string, getName: string) => {

        setInputDetails({
            ...InputDetails,
            [getName]: value
        });
    }
    const handleCheckboxChange = (event: any) => {
        setUploadVisible(event.target.checked);
    };

    const handlecaseSensitive = (event: any) => {

        const isChecked = event.target.checked;
        const name = event.target.name;
        setInputDetails({
            ...InputDetails,
            [name]: isChecked
        });
    };

    const [maxSizes, setMaxSizes] = useState(Array(InputDetails?.fileCount || 0).fill(''));

    const handleFileSize = (e: any, index: any) => {
        const newMaxSizes = [...maxSizes];
        newMaxSizes[index] = e.target.value;
        setMaxSizes(newMaxSizes);
    };

    const FileMaxSize = Array.from({ length: InputDetails?.fileCount || 0 }, (v, i) => (
          <div key={i} className='col-md-6 mt-3'>
            <label>Max size of file- {i+1} (mb):</label>
            <input
              type='number'
              className='inputFiled form-control'
              name={`maxSize${i}`} 
              onChange={(e) => handleFileSize(e, i)}
            />
          </div>
      ));

    //inserting file
    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files && event.target.files[0]) {
    //         const file = event.target.files[0];
    //         // setSelectedFile(file);
    //         setInputDetails({
    //             ...InputDetails,
    //             media: file.name, // You can set the file name or any other desired value here
    //         });
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


    const QuestionInsert = async (e: { preventDefault: () => void; }) => {
        
        e.preventDefault();

        // InputDetails.topic = subTopicsData[0].topicID;
        // console.log("InputDetails.topic  ", InputDetails.topic);

        const GroupIDs: any = Groups.map((obj) => obj.value);
        const selectedFormats: any = fileFormats.map((obj) => obj.value);
        const LanguagesID: any = Languages.map((obj) => obj.value);
        const keywordsInternal: any = InternalKeywords.map((obj: any) => obj.value);
        const keywordsExternal: any = ExternalKeywords.map((obj: any) => obj.value);
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
        console.log("hiiii")
        
        // const TopicIDs : any = subTopicsData.map((obj) => obj.topicID);
        InputDetails.competency = rows
        const inputDetails = {
            questionBankID: location.state.questionbankid,
            questionType: InputDetails.questionType,
            questionSubType: InputDetails.questionSubType,
            subject: InputDetails.subject,
            difficulty: InputDetails.difficulty,
            topic: InputDetails.topic,
            textEditor: InputDetails.textEditor,
            codeEditor: InputDetails.codeEditor,
            options: InputDetails.options,
            solution: InputDetails.solution,
            hint: InputDetails.hint,
            groups: GroupIDs,
            media: fileName ? fileName : "",
            wordLimit: InputDetails.wordLimit,
            internalKeywords: keywordsInternal,
            externalKeywords: keywordsExternal,
            competency: InputDetails.competency,
            subTopic: InputDetails.subTopic,
            concepts: InputDetails.concepts,
            adminID: data?.details?.role === "admin" ? data?.details?.id : data?.details?.adminID,
            userID: data?.details?.id,
            videoSolution: VideoFileName,
            questionName: InputDetails.EWSAquestion,
            blanksCount: InputDetails.blanksCount,
            caseSensitive: InputDetails.caseSensitive,
            fillUpanswer: InputDetails.fillUpanswer,
            QuesDependency: InputDetails.QuesDependency,
            directions: InputDetails.directions,
            // language: InputDetails.language,
            languages: LanguagesID,
            inputFormat: InputDetails.inputFormat,
            outputFormat: InputDetails.outputFormat,
            enableCustomInput: InputDetails.enableCustomInput,
            enableAPITesting: false,
            codeConstraints: InputDetails.codeConstraints,
            evaluationTime: InputDetails.evaluationTime,
            timeLimit: InputDetails.timeLimit,
            memoryLimit: InputDetails.memoryLimit,
            outputLimit: InputDetails.outputLimit,
            codeSize: InputDetails.codeSize,
            SingleLanguage: SingleLanguage?.value,
            sample: InputDetails.sample,
            backgroundImg: background,
            initialQuery: InputDetails.initialQuery,
            fileCount: InputDetails.fileCount,
            fileCountMandatory: InputDetails.fileCountMandatory,
            fileFormats: selectedFormats,
            enableAutoRecord: InputDetails.enableAutoRecord,
            minRecording: InputDetails.minRecording,
            startTime: InputDetails.startTime,
            maxRecording: InputDetails.maxRecording,
            attemptsToRecord: InputDetails.attemptsToRecord,
            autoEvaluation: InputDetails.autoEvaluation,
            cloudProvider: InputDetails.cloudProvider,
            themes: themesIDs,
            ZipFile: ZipFileName,
            fileSizes: maxSizes,
            techStack: TechStack ? TechStack?.value : "", 
            instanceSize: InstanceSize ? InstanceSize?.value : ""
        }

        console.log("inputDetails ", inputDetails)
        
        try {
            const getResponse: any = await API.graphql(graphqlOperation(createQuestions, { input: inputDetails }));
            if (getResponse) {
                console.log("getResponse",getResponse)
                navigate('/listQuestions', { state: { questionbankid: location.state.questionbankid } });
            }
        }
        catch (err) {
            console.log('error fetching', err);
        }
    };


    return (
        <div className='row col-md-12'>

            <div className='col-md-1'></div>
            <div className='col-md-10'>
                <div className='container mt-5'>
                    <h2>Add Question</h2>
                    <div className="row col-md-12 mt-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Question Type:</label>
                                <select name="questionType" className="inputFiled form-control" onChange={QuestionInput}>
                                    <option value="">Select Question Type</option>
                                    <option value="single">Single Question</option>
                                    <option value="group">Group Questions</option>
                                    <option value="upload">Question Paper Upload</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Question SubType:</label>
                                <select name="questionSubType" className="inputFiled form-control" onChange={QuestionInput}>
                                    <option value="">Select Question Type</option>
                                    {InputDetails.questionType === 'single' ?
                                        <>
                                            <option value="1">MCQ Single Correct</option>
                                            <option value="2">MCQ Multiple Correct</option>
                                            <option value="3">Fill-Ups</option>
                                            <option value="4">English Writing Skills Assessment</option>
                                            <option value="5">HTML / CSS / JS</option>
                                            <option value="6">Frontend Technology</option>
                                            <option value="7">Block programming</option>
                                            <option value="8">Diagram question</option>
                                            <option value="9">Single-file programming questions</option>
                                            <option value="10">Classification</option>
                                            <option value="11">Multi-file programming question</option>
                                            <option value="12">File upload</option>
                                            <option value="13">Video answer/ Speaking: Audio/video questions</option>
                                            <option value="14">Descriptive questions with image</option>
                                            <option value="15">Text-only descriptive questions</option>
                                            <option value="16">Project question</option>
                                            <option value="17">Cloud question</option>
                                        </>
                                        : null}
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="form-group mt-3">
                        <label style={{ "marginRight": '20px' }}>Manual Difficulty*:</label>
                        <input type="radio" name="difficulty" value="easy" onChange={QuestionInput} className='difficulty' /> Easy
                        <input type="radio" name="difficulty" value="medium" onChange={QuestionInput} className='difficulty' /> Medium
                        <input type="radio" name="difficulty" value="difficult" onChange={QuestionInput} className='difficulty' /> Hard
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4">
                            <label>Sub Topic*:</label>
                            <Select
                                name="subtype"
                                // onChange={(e: any) => { setInputDetails({ ...InputDetails, subject: e.value }) }}
                                onChange={(e: any) => handleSubTopic(e)}
                                // options={subTopicsData ? subTopicsData.map(group => ({ label: group.name, value: group.subject, required: true })) : []}
                                options={subTopicsData ? subTopicsData.map(subtopic => ({ label: subtopic.name, value: subtopic.id, subject: subtopic.subject, topicID: subtopic.topicID, id: subtopic.id, required: true })) : []}
                            />
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
                    <CodeEditor InputDetails={InputDetails} setInputDetails={setInputDetails} />
                    }

                    { isTextEditorChecked &&
                    <JoditEditor className='mt-3' value={InputDetails.textEditor} onChange={joditChange} />
                    }


                    {InputDetails.questionType === 'single' && InputDetails.questionSubType === '3' ?
                        <>
                            <div className="col-md-12 mt-3">Dependency</div>
                            <label>
                                <input
                                    type="radio"
                                    name="QuesDependency"
                                    value="Dependent"
                                    onChange={QuestionInput}
                                />
                                Dependent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="QuesDependency"
                                    value="Independent"
                                    onChange={QuestionInput}
                                />
                                Independent
                            </label>

                            <div className="col-md-12 mt-3">
                                <label>no.of blanks</label>
                                <input type='number'
                                    className='inputFiled form-control'
                                    name='blanksCount'
                                    onChange={QuestionInput} />
                            </div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="caseSensitive"
                                    onChange={(event) => handlecaseSensitive(event)} />
                                <span className='mx-2'>Enable Case-Sensitive</span>
                            </label>
                        </>
                        : null
                    }
                    {
                        InputDetails.questionType === 'single' && InputDetails.questionSubType === '3' && InputDetails.caseSensitive === true ?
                            <div className="col-md-12">
                                <FillUpChild fillups={fillups} setFillups={setFillups} InputDetails={InputDetails} setInputDetails={setInputDetails}
                                />
                            </div> :
                            null
                    }

                    {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "4" || InputDetails.questionSubType === "14" || InputDetails.questionSubType === "15") ?
                    <>
                    <div className='form-gropum mt-3'>
                        <label>Name</label>
                        <input
                            type='text'
                            className='inputFiled form-control'
                            placeholder='Enter Question'
                            name='EWSAquestion'
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
                            onChange={QuestionInput}
                        />
                    </div>
                    <div className='form-gropum mt-3'>
                        <label>Directions</label>
                        <JoditEditor value={InputDetails.directions} onChange={(e) => JodiInputs(e, "directions")} />
                    </div>
                    </>
                     : null }

                    {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "14" || InputDetails.questionSubType === "15" ) ?
                            <div className='form-group mt-3'>
                                <label>
                                <input
                                    type="checkbox"
                                    name="autoEvaluation"
                                    onChange={(event) => handlecaseSensitive(event)} />
                                    <span className='mx-2'>Enable Auto Evaluation</span>
                                </label>
                            </div> : null }

                    {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "4" || InputDetails.questionSubType === "13" || InputDetails.questionSubType === "14" || InputDetails.questionSubType === "15" ) ?
                    
                    <>
                    <SampleChild solutions={samples}
                        setSolutions={setsamples} InputDetails={InputDetails} setInputDetails={setInputDetails} />
                   <InternalKeywordsComponent InternalKeywords={InternalKeywords} setInternalKeywords={setInternalKeywords} />
                   </>
                     : null }
                    {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "4" || InputDetails.questionSubType === "13" ) ?
                    
                    <ExternalKeywordsComponent ExternalKeywords={ExternalKeywords} setExternalKeywords={setExternalKeywords} />
                    
                    : null }

                    {InputDetails.questionType === 'single' && InputDetails.questionSubType === "13" ?
                    <>
                    <div className='form-group mt-3'>
                            <label>
                            <input
                                type="checkbox"
                                name="enableAutoRecord"
                                onChange={(event) => handlecaseSensitive(event)} />
                                <span className='mx-2'>Enable Auto Recording</span>
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
                            onChange={QuestionInput}
                            />
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='form-gropum mt-3'>
                            <label>Minimum Recording Time(sec)</label>
                            <input
                            type='number'
                            className='inputFiled form-control'
                            name='minRecording'
                            onChange={QuestionInput}
                            />
                        </div>
                        </div>
                        <div className='col-md-6'>
                        <div className='form-gropum mt-3'>
                            <label>Maximum Recording Time(sec)</label>
                            <input
                            type='number'
                            className='inputFiled form-control'
                            name='maxRecording'
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
                            onChange={QuestionInput}
                            />
                        </div>
                        </div>
                    </div>                         
                    </> : null }
                    
                    {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "4" || InputDetails.questionSubType === "5" || InputDetails.questionSubType === "6" || InputDetails.questionSubType === "13" || InputDetails.questionSubType === "14" || InputDetails.questionSubType === "15" ) ?
                    <div className='form-gropum mt-3'>
                        <FileUpload setFile={setVideoFile} label="Upload Video Solution" fileType="videos" />
                    </div> : null }
                     

                     {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "5" || InputDetails.questionSubType === "6" || InputDetails.questionSubType === "9") ?
                        <div className='form-gropum mt-3'>
                            <label>Programmer Compentency Matrix</label>
                            <ProgrammerMatrix setRows={setRows} rows={rows} />
                        </div>
                     : null }



                    {InputDetails.questionType === 'single' && ( InputDetails.questionSubType === "9" || InputDetails.questionSubType === "11" ) ?
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
                                    <span className='mx-2'>Enable Custom Input</span>
                                </label>
                            </div>
                            <div className='form-group mt-3'>
                                <label>
                                <input
                                    type="checkbox"
                                    name="enableAPITesting"
                                    onChange={(event) => handlecaseSensitive(event)} />
                                    <span className='mx-2'>Enable API Testing</span>
                                </label>
                            </div>

                            {InputDetails.questionSubType === "11" ?
                                <div className='form-gropum mt-3'>
                                    <label>Initial Query</label>
                                    <JoditEditor value={InputDetails.initialQuery} onChange={(e) => JodiInputs(e, "initialQuery")} />
                                </div>
                            : null }

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
                                    <span className='mx-2'>Consider Time Limit in Evaluations</span>
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
                            <SingleLanguageComponent SingleLanguage={SingleLanguage} setSingleLanguage={setSingleLanguage}  />
                            <SolutionChild solutions={solutions} setSolutions={setSolutions} InputDetails={InputDetails} setInputDetails={setInputDetails} />
                            <FileUpload setFile={setVideoFile} label="Upload Video Solution" fileType="videos" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </>     
                    : null }

                    {InputDetails.questionType === 'single' && InputDetails.questionSubType === "10" ?
                    <>
                        <div className='form-gropum mt-3'>
                        <label>
                                <input
                                    type="checkbox"
                                    name="uploadBackground"
                                    onChange={(event) => handlecaseSensitive(event)} />
                                <span className='mx-2'>Upload Background Image</span>
                            </label>
                        </div>
                        { InputDetails.uploadBackground ? 
                        <FileUpload setFile={setBackground} label="Upload Background Image" fileType="images" />
                            : null }
                        </>
                    : null } 

                    {InputDetails.questionType === 'single' && InputDetails.questionSubType === "6" ?
                    <div className='form-gropum mt-3'>
                        {/* <label>Language</label> */}
                        <SingleLanguageComponent SingleLanguage={SingleLanguage} setSingleLanguage={setSingleLanguage}  />
                    </div>
                    
                     : null }

                    {InputDetails.questionType === 'single' && (InputDetails.questionSubType === "17" || InputDetails.questionSubType === "16") &&
                    
                        <ThemesComponent themes={themes} setThemes={setThemes} /> }
                    
                    {InputDetails.questionType === 'single' && InputDetails.questionSubType === "16" ?
                    <>
                        <TechStackComponent selectedTechStack = {selectedTechStack} TechStack={TechStack}/>
                        <InstanceSizeComponent setInstanceSize = {setInstanceSize} InstanceSize={InstanceSize}/>
                    </>
                    : null }


                    {InputDetails.questionType === 'single' && InputDetails.questionSubType === "17" &&
                    <>
                        
                        <div className='form-gropum mt-3'>
                            <label>Cloud Provider</label>
                            <select name="cloudProvider" className="inputFiled form-control" onChange={QuestionInput}>
                                <option value="">Select Cloud Provider</option>
                                <option value="aws">Amazon Web Service</option>
                                <option value="azure">Azure Service</option>
                                <option value="gcp">GCP Service</option>
                            </select>
                        </div>
                        <FileUpload setFile={setZipFile} label="Upload Zip File" fileType="zip" />
                        

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
                            />
                        </div>
                        <div className='form-gropum mt-3'>
                        <label>
                                <input
                                    type="checkbox"
                                    name="fileCountMandatory"
                                    onChange={(event) => handlecaseSensitive(event)} />
                                <span className='mx-2'>File Count Mandatory</span>
                            </label>
                        </div>
                        <FileFormatComponent setfileFormats={setFileFormats} />
                        {
                            InputDetails.fileCount ? 
                            <div className='row col-md-12'>
                                {FileMaxSize}
                            </div> : null
                        }
                        </>
                     : null }

                    {InputDetails.questionType === 'single' && InputDetails.questionSubType !== "11" ?

                    <div className='form-group mt-3'>
                        <label>
                            <input
                                type="checkbox"
                                onChange={handleCheckboxChange}
                            />
                            <span className='mx-2'>Enable File Upload (pdf, doc, docx, excel, ppt, mp3, wav, ogg, mp4, mov, avi, zip)</span>
                        </label>

                        {isUploadVisible && (
                            <div>
                                {/* <input
                                    type="file"
                                    accept="image" // You can specify the allowed file types here
                                    onChange={handleFileChange}
                                /> */}
                                <input type="file" className="inputFiled form-control" name="file" onChange={handleFileChange}
                                /><p style={{ color: 'red' }}>{errMsg}</p>
                            </div>

                        )}
                    </div>

                    : null }
                    {/* <CodeEditor InputDetails={InputDetails} setInputDetails={setInputDetails} /> */}
                    
                    {InputDetails.questionType === 'single' && InputDetails.questionSubType !== "4" && InputDetails.questionSubType !== "5" && InputDetails.questionSubType !== "6" && InputDetails.questionSubType !== "9" && InputDetails.questionSubType !== "11" && InputDetails.questionSubType !== "12" && InputDetails.questionSubType !== "13" && InputDetails.questionSubType !== "14" && InputDetails.questionSubType !== "15" ?
                    
                    <ChildComponent options={options}
                        setOptions={setOptions} InputDetails={InputDetails} setInputDetails={setInputDetails} edit />
                    : null }
                    {InputDetails.questionType === 'single' && InputDetails.questionSubType !== "4" && InputDetails.questionSubType !== "9" && InputDetails.questionSubType !== "11" && InputDetails.questionSubType !== "12" && InputDetails.questionSubType !== "13" && InputDetails.questionSubType !== "14" && InputDetails.questionSubType !== "15" ?
                    
                    <SolutionChild solutions={solutions}
                        setSolutions={setSolutions} InputDetails={InputDetails} setInputDetails={setInputDetails} />
                        : null }
                    {InputDetails.questionType === 'single' && InputDetails.questionSubType !== "4" ?
                    <AnswerHintChild hints={hints} setHints={setHints} InputDetails={InputDetails} setInputDetails={setInputDetails} />
                    : null   }

                    <div className='form-gropum mt-3'>
                        <label>Linked Concepts</label>
                        <input
                            type='text'
                            className='inputFiled form-control'
                            placeholder='Enter Linked Concepts'
                            name='concepts'
                            onChange={QuestionInput}
                        />
                    </div>

                    <GroupsComponent Groups={Groups} setGroups={setGroups} />

                    <div className="row mt-3">
                        <div className="col-md-4">
                            <button type="submit" onClick={QuestionInsert} className="btn btn-primary"> Register</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default AddQuestion;