import React, { useState } from 'react';
import ProgrammerLevel from './programmerLevel';
import ProgrammerSubject from './programmerSubject';
import ProgrammerTopic from './programmerTopic';

function ProgrammerMatrix(props: any) {
//   const [rows, setRows] = useState<any>([]);

  // Function to add a new row
  const addRow = () => {
    const newRow = {
      progLevel: '', // You can initialize these values as needed
      progSub: '',
      progTopic: '',
    };
    props.setRows([...props.rows, newRow]);
  };

  // Function to delete a row by its index
  const deleteRow = (index: any) => {
    const updatedRows = [...props.rows];
    updatedRows.splice(index, 1);
    props.setRows(updatedRows);
  };

  console.log("props.rows",props.rows)

  return (
    <div>
      {props.rows.map((row: any, index: any) => (
        <div className='row col-md-12' key={index}>
          <div className='col-md-6'>
            <ProgrammerSubject
              progSub={row.progSub}
              setprogSub={(value: any) => {
                // Update the corresponding row's progSub value
                const updatedRows = [...props.rows];
                updatedRows[index].progSub = value;
                props.setRows(updatedRows);
              }}
            />
          </div>
          <div className='col-md-6'>
            <ProgrammerTopic
              progTopic={row.progTopic}
              setprogTopic={(value: any) => {
                // Update the corresponding row's progTopic value
                const updatedRows = [...props.rows];
                updatedRows[index].progTopic = value;
                props.setRows(updatedRows);
              }}
            />
          </div>
          <div className='col-md-6'>
            <ProgrammerLevel
              progLevel={row.progLevel}
              setprogLevel={(value:any) => {
                // Update the corresponding row's progLevel value
                const updatedRows = [...props.rows];
                updatedRows[index].progLevel = value;
                props.setRows(updatedRows);
              }}
            />
          </div>
          <div className='col-md-6 mt-4'>
          <button className='btn btn-danger' onClick={() => deleteRow(index)}>Delete</button>
          </div>
        </div>
      ))}

      <button className='btn btn-primary' onClick={addRow}>Add </button>
    </div>
  );
}

export default ProgrammerMatrix;
