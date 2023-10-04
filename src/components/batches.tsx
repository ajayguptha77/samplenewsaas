import React, { useEffect, useState } from 'react';
import { createBatch } from '../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import Select from 'react-select';
import { listBatches } from '../graphql/queries';

interface Group {
    label: string;
    value: string;
  }

function Batches(props: any) {
    const [BatchInsert, setBatchInsert] = useState(false);
    const [batchName, setBatchName] = useState<Group[]>([]);
    const [BatchInp, setBatchInp] = useState<Group[]>([]);

    useEffect(() => {

        async function provInfo(){
            const AllBatches = await API.graphql(graphqlOperation(listBatches)) as any;
            if(AllBatches.data.listBatches.items){
            const batchOptions = AllBatches.data.listBatches.items.map((batch: any) => ({
                label: batch.name,
                value: batch.id,
            }));
            
            setBatchName(batchOptions);
            }

        }
    
    provInfo()
    
    },[])

    if(props.editValue && batchName){
      if(!props.selectedOption){
        const filteredObject = batchName.find((obj: any) => obj.value === props.editValue);
        if(filteredObject){
          props.setSelectedOption(filteredObject);
        }
      }
    }

    const handleBatch = (option : any) => {
        props.setSelectedOption(option);
        setBatchInsert(false)
      };

 const filterBatch = (option: any, inputValue: any) => {
  if(inputValue === "" || inputValue === null){
    setBatchInsert(false)
    return true
  }else{
  
    const getValues = batchName.some(batch => batch.label.toLowerCase().includes(inputValue.toLowerCase()));
    const getValue = batchName.some(batch => batch.label.toLowerCase() === inputValue.toLowerCase());
    if(getValues === true){
      if(getValue === true){
        setBatchInsert(false)
      }else{
        setBatchInp(inputValue)
        setBatchInsert(true)
      }
      return true
    }else{
      setBatchInp(inputValue)
      setBatchInsert(true)
      return false
    }
  }
    
  }


      const InsertBatch = async () => {
        const getBatch: any = await API.graphql(
          graphqlOperation(createBatch, { input: {name: BatchInp} })
        );
          batchName.push({ label: getBatch.data.createBatch.name, value:  getBatch.data.createBatch.id });
          setBatchInsert(false)
        };
  

 
  return (
   
    <div className='form-group mt-3'>
            <label>Select Batch*:</label>
            <div className='row col-md-12'>
            <div className='col-md-10'>
            <Select
                value={props.selectedOption}
                onChange={(e) => handleBatch(e)}
                options={batchName}
                isSearchable={true}
                filterOption={(option, inputValue) =>
                  filterBatch(option, inputValue) 
                }
            />
            </div>
            <div className='col-md-2'>
            {BatchInsert ? (
              <button className='btn btn-dark btn-md' onClick={InsertBatch}>
                Add
              </button>
            ) : null}
           
            </div>
            </div>
            
          </div>
  );
}

export default Batches;
