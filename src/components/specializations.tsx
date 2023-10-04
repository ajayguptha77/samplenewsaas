import React, { useEffect, useState } from 'react';
import { createSpecialization } from '../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import Select from 'react-select';
import { listSpecializations } from '../graphql/queries';

interface Group {
    label: string;
    value: string;
  }

function Specilizations(props: any) {

    const [SpecialInp, setSpecialInp] = useState<Group[]>([]);
    const [SpecializationName, setSpecializationName] = useState<Group[]>([]);
    const [SpecialInsert, setSpecialInsert] = useState(false);

    useEffect(() => {

        async function provInfo(){
            const AllSpecial = await API.graphql(graphqlOperation(listSpecializations)) as any;
            if(AllSpecial.data.listSpecializations.items){
              const DepartOptions = AllSpecial.data.listSpecializations.items.map((specialization: any) => ({
                label: specialization.name,
                value: specialization.id,
              }));
            
              setSpecializationName(DepartOptions);
            }
        }
    
    provInfo()
    
    },[])

    if(props.editValue && SpecializationName){
      if(!props.selectedSpecialization){
        const filteredObject = SpecializationName.find((obj: any) => obj.value === props.editValue);
        if(filteredObject){
          props.setselectedSpecialization(filteredObject);
        }
      }
    }

    const handleSpecialization = (option: any) => {
        props.setselectedSpecialization(option);
        setSpecialInsert(false)
      }

      const filterSpecialization = (option: any, inputValue: any) => {
        if(inputValue === "" || inputValue === null){
          setSpecialInsert(false)
          return true
        }else{
        const getValues = SpecializationName.some(special => special.label.toLowerCase().includes(inputValue.toLowerCase()));
        const getValue = SpecializationName.some(special => special.label.toLowerCase() === inputValue.toLowerCase());
        if(getValues === true){
          if(getValue === true){
            setSpecialInsert(false)
          }else{
            setSpecialInp(inputValue)
            setSpecialInsert(true)
          }
          return true
        }else{
          setSpecialInp(inputValue)
          setSpecialInsert(true)
          return false
        }
      }
      }

    const InsertSpecialization = async () => {
        const getSpecial: any = await API.graphql(
          graphqlOperation(createSpecialization, { input: {name: SpecialInp} })
        );
          SpecializationName.push({ label: getSpecial.data.createSpecialization.name, value:  getSpecial.data.createSpecialization.id });
          setSpecialInsert(false)
        };

 
  return (
   
    <div className='form-group mt-3'>
            <label>Select Specialization*:</label>
            <div className='row col-md-12'>
            <div className='col-md-10'>
            <Select
                value={props.selectedSpecialization}
                onChange={(e) =>handleSpecialization(e)}
                options={SpecializationName}
                isSearchable={true}
                filterOption={(option, inputValue) =>
                  filterSpecialization(option, inputValue) 
                }
            />
            </div>
            <div className='col-md-2'>
            {SpecialInsert ? (
              <button className='btn btn-dark btn-md' onClick={InsertSpecialization}>
                Add
              </button>
            ) : null}
            </div>
            </div>
            
            
          </div>
  );
}

export default Specilizations;
