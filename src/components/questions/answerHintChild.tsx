import React, { useState, useContext, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';

interface Hint {
    optionNumber: number;
    hint: string | null;
    // hint: string;
}



function AnswerHintChild(props: any) {
    const { hints:initialHints, setHints, questionHint, InputDetails, setInputDetails } = props;
    const [hintstate, setHintState] = useState<Hint[]>(initialHints);
    const editor = useRef(null);
    const [newOption, setNewOption] = useState('');
    const [optionArray, setOptionArray] = useState<string[]>([]);
    const [getHint, setHint] = useState('');
    const [hintContents, setHitContents] = useState<string[]>([]);

    useEffect(() => {
        const initialContents = props.hints.map((hint: Hint) => hint.hint || '');
        setHitContents(initialContents);

        setHintState(initialHints);
        
    if(questionHint){
        setHintState(questionHint);
    }
    }, [initialHints, props.hints, props.hintstate, questionHint]);

    
    // console.log("newOption",newOption)
    // console.log("hintContents",hintContents)
    const addOption = () => {
        const nextOptionNumber = hintstate.length + 1;

        const newHint: Hint = {
            optionNumber: nextOptionNumber,
            hint: newOption,
        };
        setHints((prevOptions: any) => [...prevOptions, newHint]);
        // setHints([...hints, newHint]);

        setInputDetails((prevInputDetails: any) => ({
            ...prevInputDetails,
            hint: ([...prevInputDetails.hint, newHint])
        }));

        // setInputDetails({
        //     ...InputDetails,
        //     hint: [...InputDetails.hint, newHint], // Add the new option to the InputDetails
        // });

        setNewOption("");
        setHint(''); // Clear weightage input value
        // setShowOptionModal(false);
    };
    const handleRemoveOption = (index: number) => {
        const updatedHints = [...hintstate];
        updatedHints.splice(index, 1);

        setHints(updatedHints);

        setInputDetails({
            ...InputDetails,
            hint: InputDetails.hint.filter((_: any, i: number) => i !== index),
        });
    };

    const renderOptions = () => {
        return hintstate.map((option: Hint, index: number) => (
            <div key={option.optionNumber}>
                <div className='row'>
                    <div className='col-md-10'>
                        <label>Hints {option.optionNumber}:</label><br />
                        <JoditEditor
                            ref={editor}
                            // tabIndex={1}
                            value={props?.hintstate && props?.hintstate[index]?.hint
                                ? props.hintstate[index].hint
                                : option.hint}

                            onBlur={(event) => {
                                const updatedContents = [...hintContents];
                                updatedContents[index] = event;
                                setHitContents(updatedContents);

                                const updatedHints:any = [...hintstate];
                                updatedHints[index].hint = event;
                                // setHints(updatedHints);
                                // setOptionArray([...optionArray, event]);

                                setInputDetails((prevInputDetails: any) => ({
                                    ...prevInputDetails,
                                    hint: updatedHints,
                                }));
                            }}
                        />
                    </div>

                    <div className='col-md-2'>
                        {/* {hints.length > 1 ? */}
                        <button className='btn btn-light' style={{ marginTop: "40%" }} onClick={() => handleRemoveOption(index)}> Remove </button>

                        {/* // : null} */}
                    </div>
                </div>
            </div>
        ));
    };



    return (
        <>
            <div className="form-group mt-3">
                <label>Hints</label>
                {renderOptions()}<br />
                <button className='btn btn-light' onClick={addOption}>Add Hint</button><br />
            </div>
        </>
    )
}
export default AnswerHintChild;