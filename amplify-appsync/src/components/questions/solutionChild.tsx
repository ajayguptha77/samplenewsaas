import React, { useState, useContext, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';


interface Solution {
    optionNumber: number;
    answer: string | null;
    bestSolution: boolean;
}

function SolutionChild(props: any) {
    const { solutions:initialSolutions, setSolutions, questionSolution, InputDetails, setInputDetails } = props;
    const [solutionsstate, setSolutionState] = useState<[]>(initialSolutions);
    const editor = useRef(null);
    const [newOption, setNewOption] = useState('');
    const [optionArray, setOptionArray] = useState<string[]>([]);
    const [solution, setSolution] = useState(false); // Added state for weightage input
    const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(-1);
    const [solutionContents, setSolutionContents] = useState<string[]>([]);


    

      useEffect(() => {
        const initialContents = props.solutions.map((solution: Solution) => solution.answer || '');
        setSolutionContents(initialContents);

        setSolutionState(initialSolutions);
        if(props.questionSolution){
            setSolutionState(props.questionSolution);
          }
    }, [initialSolutions, props.questionSolution, props.solutions]);
    const addOption = () => {
        const nextOptionNumber = solutionsstate.length + 1;

        const newSolution: Solution = {
            optionNumber: nextOptionNumber,
            answer: newOption,
            bestSolution: solution
        };

        setSolutions((prevOptions: any) => [...prevOptions, newSolution]);
        // setSolutions([...solutions, newSolution]);

        setInputDetails((prevInputDetails: any) => ({
            ...prevInputDetails,
            solution: ([...prevInputDetails.solution, newSolution])
        }));

        // setInputDetails({
        //     ...InputDetails,
        //     solution: [...InputDetails.solution, newSolution], // Add the new option to the InputDetails
        // });

        setNewOption("");
        setSolution(false); // Clear weightage input value
        // setShowOptionModal(false);
    };

    // console.log("solution props ", props);

    const handleRemoveOption = (index: number) => {
        const updatedSolutions = [...solutionsstate];
        updatedSolutions.splice(index, 1);

        setSolutions(updatedSolutions);

        setInputDetails({
            ...InputDetails,
            solution: InputDetails.solution.filter((_: any, i: number) => i === index),
        });
    };



      
    
    // const handleBlur = (event: any, index: number) => {
    //     console.log("vfregreg", event)
    //     // const updatedContents = [...solutionContents];
    //     // updatedContents[index] = event;
    //     // setSolutionContents(updatedContents);

    //     const updatedSolutions:any = [...solutionsstate];
    //     updatedSolutions[index].answer = event;
    //     setSolutions(updatedSolutions);

    //     setOptionArray([...optionArray, event]);

    //     setInputDetails((prevInputDetails: any) => ({
    //         ...prevInputDetails,
    //         solutions: updatedSolutions,
    //     }));
    // };


    const handleBestSolutionChange = (index: number) => {

        const updatedSolutions:any = [...solutionsstate];

        updatedSolutions[index].bestSolution = !updatedSolutions[index].bestSolution;
        if (selectedSolutionIndex !== -1 && selectedSolutionIndex !== index) {
            // Uncheck the previously selected checkbox
            updatedSolutions[selectedSolutionIndex].bestSolution = false;
        }

        setSelectedSolutionIndex(index);
        setSolutions(updatedSolutions);
    }
    const renderOptions = () => {
        return solutionsstate.map((option: Solution, index: number) => (
            <div key={option.optionNumber}>
                <div className='row'>
                    <div className='col-md-12 mt-3'>
                        <div className='row col-md-12'>
                            <div className='col-md-6'>
                            <label>Solution {option.optionNumber}:</label>
                            </div>
                            <div className='col-md-6'>
                            {/* <div className="col-md-12 mt-3"> */}
                        <label>
                            <input
                                type="checkbox"
                                // checked={typeof option.bestSolution === 'boolean' ? option.bestSolution : false}
                                checked={
                                    props?.solutionsstate && typeof props.solutionsstate[index]?.bestSolution === 'boolean'
                                        ? props.solutionsstate[index].bestSolution
                                        : option.bestSolution
                                }
                                onChange={() => handleBestSolutionChange(index)}
                            // value={props?.editValue[index]?.bestSolution}

                            // checked={typeof option.bestSolution === 'boolean' ? option.bestSolution : false}
                            // onChange={() => {
                            //     const updatedSolutions = solutions.map((sol:any, i:number) => {
                            //         return {
                            //             ...sol,
                            //             bestSolution: i === index, // Set the clicked checkbox to true and others to false
                            //         };
                            //     });
                            //     setSolutions(updatedSolutions);
                            // }}
                            />
                            <span className='mx-2'>Best Solution</span>
                        </label>
                    {/* </div> */}
                            </div>
                        </div>
                        
                        <JoditEditor
                        className='mt-3'
                            ref={editor}
                            value={props?.solutionsstate && props?.solutionsstate[index]?.answer
                                ? props.solutionsstate[index].answer
                                : option.answer}
                            // onBlur={(event) => handleBlur(event, index)}
                            onBlur={(event) => {
                                const updatedContents = [...solutionContents];
                                updatedContents[index] = event;
                                setSolutionContents(updatedContents);

                                const updatedSolutions:any = [...solutionsstate];
                                updatedSolutions[index].answer = event;
                                setSolutions(updatedSolutions);
                                setOptionArray([...optionArray, event]);

                                setInputDetails((prevInputDetails: any) => ({
                                    ...prevInputDetails,
                                    solution: updatedSolutions,
                                }));
                            }}
                            
                        // onBlur={(value: string) => {
                        //     const updatedOptions = [...solutions];
                        //     updatedOptions[index].optionText = value;
                        //     setSolutions(updatedOptions);
                        //     // setOptionArray([...optionArray, event]);
                        // }} 
                        />

                    </div>

                    <div className='col-md-2 mt-3'>
                        {/* {solutions.length > 1 ? */}
                        <button className='btn btn-light' onClick={() => handleRemoveOption(index)}> Remove </button>
                        {/* : null} */}
                    </div>

                    {/* <div className="col-md-12 mt-3">
                        <label>
                            <input
                                type="checkbox"
                                // checked={typeof option.bestSolution === 'boolean' ? option.bestSolution : false}
                                checked={
                                    props?.solutionsstate && typeof props.solutionsstate[index]?.bestSolution === 'boolean'
                                        ? props.solutionsstate[index].bestSolution
                                        : option.bestSolution
                                }
                                onChange={() => handleBestSolutionChange(index)}
                            // value={props?.editValue[index]?.bestSolution}

                            // checked={typeof option.bestSolution === 'boolean' ? option.bestSolution : false}
                            // onChange={() => {
                            //     const updatedSolutions = solutions.map((sol:any, i:number) => {
                            //         return {
                            //             ...sol,
                            //             bestSolution: i === index, // Set the clicked checkbox to true and others to false
                            //         };
                            //     });
                            //     setSolutions(updatedSolutions);
                            // }}
                            />
                            Best Solution
                        </label>
                    </div> */}
                </div>
            </div>
        ));
    };



    return (
        <>
            <div className="form-group mt-3">
                <label>Solutions</label>
                {renderOptions()}<br />
                <button className='btn btn-light' onClick={addOption}>Add Solution</button><br />
            </div>
        </>
    )
}
export default SolutionChild;