import React, { useEffect, useState } from 'react';
import JoditEditor from 'jodit-react';
import CKEditorComponent from '../contentbank/CKEditorComponent';

interface Answer {
    splitMarksEqually: boolean;
    weightage: number;
    answer: string;
    alternateAns: string[];
}

function FillUpChild(props: any) {
    const { fillups:initialFillups, setFillups, InputDetails, setInputDetails, questionFillup } = props;
    const [answers, setAnswers] = useState<Answer[]>([]);

    useEffect(() => {
        setAnswers(initialFillups)
        if(props.questionFillup){
            setAnswers(props.questionFillup);
        }
    })

    const handleAddAnswer = () => {
        const nextAnswerNumber = answers.length + 1;
        // Create a new answer object with default values
        const newAnswer: Answer = {
            splitMarksEqually: false,
            weightage: 0,
            answer: '',
            alternateAns: [],
        };

        // Add the new answer to the list
        setFillups([...answers, newAnswer]);
        setInputDetails((prevInputDetails: any) => ({
            ...prevInputDetails,
            fillUpanswer: [...prevInputDetails.options, newAnswer]
        }));
    };

    const handleRemoveOption = (index: number) => {
        const updatedAnswers = [...answers];
        updatedAnswers.splice(index, 1);

        setFillups(updatedAnswers);

        setInputDetails({
            ...InputDetails,
            fillUpanswer: InputDetails.fillUpanswer.filter((_: any, i: number) => i !== index),
        });
    };

    const handleSplitMarksEquallyChange = (index: number, checked: boolean) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index].splitMarksEqually = checked;

        if (!checked) {
            // If splitMarksEqually is false, enable weightage
            updatedAnswers[index].weightage = 0;
        }

        setAnswers(updatedAnswers);
    };

    const handleWeightageChange = (index: number, value: number) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index].weightage = value;
        setFillups(updatedAnswers);

        // setInputDetails((prevInputDetails: any) => ({
        //   ...prevInputDetails,
        //   answers: updatedAnswers
        // }))
    };

    const handleAddAlternateAnswer = (index: number) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index].alternateAns.push('');
        setFillups(updatedAnswers);
    };

    const handleAlternateAnswerChange = (index: number, altIndex: number, value: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index].alternateAns[altIndex] = value;
        setFillups(updatedAnswers);
    };
const renderAnswers = () => {
    return (
        <div>
            
            {answers.map((answer, index) => (
                console.log("answer ", answer),
                <div key={index}>
                    <label>
                        <input
                            type="checkbox"
                            // checked={answer.splitMarksEqually}
                            checked={
                                props?.questionFillup && typeof props.questionFillup[index]?.splitMarksEqually === 'boolean'
                                  ? props.questionFillup[index].splitMarksEqually
                                  : answer.splitMarksEqually
                              }
                            onChange={(e) => handleSplitMarksEquallyChange(index, e.target.checked)}
                        />
                        Split Marks Equally
                    </label><br />
                    <label className="col-md-12 mt-3">Weightage</label>
                    {!answer.splitMarksEqually && (
                        <input
                            type="number"
                            // value={answer.weightage}
                            checked={
                                props?.questionFillup &&  props.questionFillup[index]?.weightage
                                  ? props.questionFillup[index].weightage
                                  : answer.weightage
                              }
                            onChange={(e) => handleWeightageChange(index, parseFloat(e.target.value))}
                        />
                    )}
                    <label>Answer {answers.length}:</label><br />
                    <JoditEditor 
                    // value={answer.answer}
                     value={props?.questionFillup && props?.questionFillup[index]?.answer
                                ? props.questionFillup[index].answer
                                : answer.answer}
                        onBlur={(event: any) => {
                            const updatedAnswers = [...answers];
                            updatedAnswers[index].answer = event;
                            setFillups(updatedAnswers);
                            setInputDetails((prevInputDetails: any) => ({
                                ...prevInputDetails,
                                fillUpanswer: updatedAnswers
                            }))
                        }}
                    />

                    {/* <input
            type="text"
            value={answer.answer}
            onChange={(e) => {
              const updatedAnswers = [...answers];
              updatedAnswers[index].answer = e.target.value;
              setAnswers(updatedAnswers);
            }}
          /> */}

                    <button className='mt-3' onClick={() => handleAddAlternateAnswer(index)}>Add Alternate Answer</button><br />

                    {answer.alternateAns.map((altAnswer, altIndex) => (
                        <JoditEditor
                            key={altIndex}
                            // value={altAnswer}
                            value={props?.questionFillup && props?.questionFillup[index]?.altAnswer
                                ? props.questionFillup[index].altAnswer
                                : altAnswer}
                            onBlur={(event: any) => {
                                const updatedAnswers = [...answers];
                                updatedAnswers[index].alternateAns[altIndex] = event;
                                setFillups(updatedAnswers);

                                setInputDetails((prevInputDetails: any) => ({
                                    ...prevInputDetails,
                                    answers: updatedAnswers
                                }))
                            }}
                        />
                        // <input
                        //   key={altIndex}
                        //   type="text"
                        //   value={altAnswer}
                        //   onChange={(e) => handleAlternateAnswerChange(index, altIndex, e.target.value)}
                        // />
                    ))}
                    <div className='col-md-2'>
                        <button className='btn btn-light' style={{ marginTop: "20%" }} onClick={() => handleRemoveOption(index)}>
                            Remove </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
    
return(
    <div className="form-group mt-3">
        {renderAnswers()}<br />
        <button  className="btn btn-primary" onClick={handleAddAnswer}>Add Answer</button>
      </div>
)
}

export default FillUpChild;