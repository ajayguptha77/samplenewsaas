import React, { useState, useEffect } from 'react';
import JoditEditor from 'jodit-react';

interface Option {
  correctAnswer: boolean;
  optionNumber: number;
  answer: string | null;
  isPartialCorrect: boolean;
  weightage: number;
  negMarks: number;
  splitMarksEqually: string;
  fullMarksIfAnyCorrect: string;
  fullMarksOnlyIfAllCorrect: string;
}

function ChildComponent(props: any) {
  const { options: initialOptions, setOptions, questionOptions, InputDetails, setInputDetails } = props;

  // console.log('props', props)

  const [options, setOptionsState] = useState<Option[]>(initialOptions);
  const [newOption, setNewOption] = useState('');
  const [optionArray, setOptionArray] = useState<string[]>([]);
  const [optionContents, setOptionContents] = useState<string[]>([]);
  const [selectedOprionIndex, setSelectedOptionIndex] = useState(-1);

  useEffect(() => {
    const initialContents = props.options.map((option: Option) => option.answer || '');
    setOptionContents(initialContents);
    setOptionsState(initialOptions);

    if (props.questionOptions) {
      setOptionsState(props.questionOptions);
    }

  }, [initialOptions, props.options, props.questionOptions]);


  const addOption = () => {
    const nextOptionNumber = options.length + 1;

    const option: Option = {
      optionNumber: nextOptionNumber,
      answer: newOption,
      isPartialCorrect: false,
      weightage: 0,
      correctAnswer: false,
      negMarks: 0,
      splitMarksEqually: '',
      fullMarksIfAnyCorrect: '',
      fullMarksOnlyIfAllCorrect: ''
    };

    setOptions((prevOptions: any) => [...prevOptions, option]);

    setInputDetails((prevInputDetails: any) => ({
      ...prevInputDetails,
      options: [...prevInputDetails.options, option]
    }));
    setNewOption("");
  };

  const handleRemoveOption = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);

    setOptions(updatedOptions);

    setInputDetails({
      ...InputDetails,
      options: InputDetails.options.filter((_: any, i: number) => i !== index),
    });
  };

  const handleCheckboxChange = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions[index].correctAnswer = !updatedOptions[index].correctAnswer;
    if (InputDetails.questionSubType === "1") {
      if (selectedOprionIndex !== -1 && selectedOprionIndex !== index) {
        // Uncheck the previously selected checkbox
        updatedOptions[selectedOprionIndex].correctAnswer = false;
      }
    }
    setSelectedOptionIndex(index);
    setOptions(updatedOptions);
  };

  const handleIsPartialCorrectChange = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions[index].isPartialCorrect = !updatedOptions[index].isPartialCorrect;
    setOptions(updatedOptions);
  };

  const handleWeightageInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: any = event.target.value;
    const updatedOptions = [...options];
    updatedOptions[index].weightage = newValue !== '' ? Number(newValue) : 0;
    setOptions(updatedOptions);
  };


  const handlesplitmarksEqually = (event: any, index: number) => {
    console.log("event.target.value ", event.target.value)
    const isChecked = event.target.checked;
    const marks = isChecked ? "true" : "false";
    const updatedOptions = [...options];
    updatedOptions[index].splitMarksEqually = marks;
    setOptions(updatedOptions);
  };
  const handlenegmarks = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue: any = event.target.value;
    const updatedOptions = [...options];
    if (options[index].splitMarksEqually === 'true') {
      updatedOptions[index].negMarks = newValue !== '' ? Number(newValue) : 0;
    } else {
      // If splitMarksEqually is unchecked, set negMarks to 0
      updatedOptions[index].negMarks = 0;
    }
    // updatedOptions[index].negMarks = newValue !== '' ? Number(newValue) : 0;
    setOptions(updatedOptions);
  }

  const fullMarksIfAnyCorrect = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const isChecked = event.target.checked;
    const marks = isChecked ? "true" : "false";
    const updatedOptions = [...options];
    updatedOptions[index].fullMarksIfAnyCorrect = marks;
    setOptions(updatedOptions);
  }
  const fullMarksOnlyIfAllCorrect = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const isChecked = event.target.checked;
    const marks = isChecked ? "true" : "false";
    const updatedOptions = [...options];
    updatedOptions[index].fullMarksOnlyIfAllCorrect = marks;
    setOptions(updatedOptions);
  }



  const renderOptions = () => {

    // console.log('questionOptions', questionOptions)

    return options.map((option: Option, index: number) => (

      <div key={option.optionNumber}>
        <div className='row'>
          <div className='col-md-12 mt-3'>
            <div className='row col-md-12'>
              <div className='col-md-2'>
                <label>Option {option.optionNumber}:</label>
              </div>
              <div className='col-md-3'>
              {InputDetails.questionSubType === "1" && (
            // <div className="col-md-12 mt-3">
              <label>
                <input
                  type="checkbox"
                  // checked={option.isPartialCorrect}
                  checked={
                    props?.options && typeof props.options[index]?.isPartialCorrect === 'boolean'
                      ? props.options[index].isPartialCorrect
                      : option.isPartialCorrect
                  }
                  onChange={() => handleIsPartialCorrectChange(index)}
                />
                <span className='mx-2'>Is Partial Correct</span>
              </label>
            // </div>
          )}
              </div>
              <div className='col-md-4'>
              {option.isPartialCorrect && InputDetails.questionSubType === "1" && (
            <div className="row col-md-12">
              <div className="col-md-6">
                <label>Weightage(%):</label>
              </div>
              <div className="col-md-6">
              
                <input
                  type="number"
                  className='inputFiled form-control'
                  value={option.weightage}
                  onChange={(event) => handleWeightageInputChange(index, event)}
                />
              </div>
            </div>
          )}
              </div>
              <div className='col-md-3'>
            <label>
              <input
                type="checkbox"
                // checked={option.correctAnswer}
                checked={
                  props?.options && typeof props.options[index]?.correctAnswer === 'boolean'
                    ? props.options[index].correctAnswer
                    : option.correctAnswer
                }
                onChange={() => handleCheckboxChange(index)}
              />
              <span className='mx-2'>Correct Answer</span>
            </label>
              </div>
            </div>
            
            <JoditEditor
            className='mt-3'
              value={props?.options && props?.options[index]?.answer
                ? props.options[index].answer
                : option.answer}
              onBlur={(event: any) => {
                const updatedContents = [...optionContents];
                updatedContents[index] = event;
                setOptionContents(updatedContents);

                const updatedOptions: Option[] = [...options];
                updatedOptions[index].answer = event;
                setOptions(updatedOptions);

                setInputDetails((prevInputDetails: any) => ({
                  ...prevInputDetails,
                  options: updatedOptions,
                }));
              }}
            />
          </div>

          {/* <div className='col-md-1'>
            <label>
              <input
                type="checkbox"
                // checked={option.correctAnswer}
                checked={
                  props?.options && typeof props.options[index]?.correctAnswer === 'boolean'
                    ? props.options[index].correctAnswer
                    : option.correctAnswer
                }
                onChange={() => handleCheckboxChange(index)}
              />
              <span className='mx-2'>Correct Answer</span>
            </label>
          </div> */}

          {/* {InputDetails.questionSubType === "1" && (
            <div className="col-md-12 mt-3">
              <label>
                <input
                  type="checkbox"
                  // checked={option.isPartialCorrect}
                  checked={
                    props?.options && typeof props.options[index]?.isPartialCorrect === 'boolean'
                      ? props.options[index].isPartialCorrect
                      : option.isPartialCorrect
                  }
                  onChange={() => handleIsPartialCorrectChange(index)}
                />
                <span className='mx-2'>Is Partial Correct</span>
              </label>
            </div>
          )} */}

          {/* {option.isPartialCorrect && InputDetails.questionSubType === "1" && (
            <div className="col-md-12">
              <label>
                Weightage (%):
                <input
                  type="number"
                  value={option.weightage}
                  onChange={(event) => handleWeightageInputChange(index, event)}
                />
              </label>
            </div>
          )} */}
          <br />
          {(InputDetails.questionSubType === "2" || InputDetails.questionSubType === "10") ? (
            <div className="col-md-12 mt-3">
              <label>
                <input
                  type="checkbox"
                  name="splitMarksEqually"
                  checked={
                    props?.options && typeof props.options[index]?.splitMarksEqually === 'string'
                      ? props.options[index].splitMarksEqually
                      : option.splitMarksEqually
                  }
                  // checked={props?.options ? props.options[index].splitMarksEqually : option.splitMarksEqually}
                  onChange={(event) => handlesplitmarksEqually(event, index)}
                />
                <span className='mx-2'>Split Marks Equally</span>
              </label><br />

              <label>
                <input
                  type="checkbox"
                  name="fullMarksIfAnyCorrect"
                  checked={
                    props?.options && typeof props.options[index]?.fullMarksIfAnyCorrect === 'string'
                      ? props.options[index].fullMarksIfAnyCorrect
                      : option.fullMarksIfAnyCorrect
                  }
                  onChange={(event) => fullMarksIfAnyCorrect(event, index)}
                />
                <span className='mx-2'>Full Marks If atleast one Correct option is marked</span></label><br />

              <label>
                <input
                  type="checkbox"
                  name="fullMarksOnlyIfAllCorrect"
                  checked={
                    props?.options && typeof props.options[index]?.fullMarksOnlyIfAllCorrect === 'string'
                      ? props.options[index].fullMarksOnlyIfAllCorrect
                      : option.fullMarksOnlyIfAllCorrect
                  }
                  onChange={(event) => fullMarksOnlyIfAllCorrect(event, index)}
                />
                <span className='mx-2'>Full Marks Only If All Correct</span></label><br />
            </div>
          ) : null }

          {option.splitMarksEqually === "true" && (
            <>
              <label>Marks reduction pecentage for wrong options</label>
              <div className="col-md-12 mt-3">
                <input
                  type="number"
                  name="negmarks"
                  value={option.negMarks}
                  onChange={(event) => handlenegmarks(event, index)}
                />%
              </div>
            </>
          )}

          <div className='col-md-2'>
            <button className='btn btn-light' style={{ marginTop: "20%" }} onClick={() => handleRemoveOption(index)}>
              Remove </button>
          </div>


        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="form-group mt-3">
        <label>Options</label>
        {renderOptions()}<br />
        <button className='btn btn-light' onClick={addOption}>Add Option</button><br />
      </div>
    </>
  )
}

export default ChildComponent;