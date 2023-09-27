import React, { useEffect, useState } from 'react';
import { createProgrammerLevel } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import Select from 'react-select';
import { listProgrammerLevels } from '../../graphql/queries';

export interface Group {
    label: string;
    value: string;
  }

function ProgrammerLevel(props: any) { 

    const [DepartmentName, setDepartName] = useState<Group[]>([]);
    const [DepartInsert, setDepartInsert] = useState(false);
    const [DepartInp, setDepartInp] = useState<Group[]>([]);
    const [Data, setData] = useState<Group[]>([]);

    useEffect(() => {

        async function provInfo(){
        const AllData = await API.graphql(graphqlOperation(listProgrammerLevels)) as any;
        if(AllData.data.listProgrammerLevels.items){
          const DepartOptions = AllData.data.listProgrammerLevels.items.map((department: any) => ({
            label: department.name,
            value: department.id,
          }));
          
          setDepartName(DepartOptions);
        }
    }
    provInfo()
    },[])

    // console.log("props",props.editValue)

    if(props.editValue && DepartmentName){
      if(!props.progLevel){
        let SelectedValue: any
        if( typeof(props.editValue) === "string" ){
          SelectedValue = props.editValue
        }else{
          SelectedValue = props.editValue[0]
        }
        const filteredObject: any = DepartmentName.find((obj: any) => obj.value === SelectedValue);
        if(filteredObject){
          props.setprogLevel(filteredObject);
          setData(filteredObject)
        }
      }
    }

    const handleDepartment = (option: any) => {
        props.setprogLevel(option.value);
        setData(option)
        setDepartInsert(false)
    }

    const InsertDepartment = async () => {
        const getDepart: any = await API.graphql(
          graphqlOperation(createProgrammerLevel, { input: {name: DepartInp} })
        );
          DepartmentName.push({ label: getDepart.data.createProgrammerLevel.name, value:  getDepart.data.createProgrammerLevel.id });
          setDepartInsert(false)
        };

    const filterDepart = (option: any, inputValue: any) => {

      if(inputValue === "" || inputValue === null){
        setDepartInsert(false)
        return true
      }else{


        const getValues = DepartmentName.some(depart => depart.label.toLowerCase().includes(inputValue.toLowerCase()));
        const getValue = DepartmentName.some(depart => depart.label.toLowerCase() === inputValue.toLowerCase());
        if(getValues === true){
          if(getValue === true){
            setDepartInsert(false)
          }else{
            setDepartInp(inputValue)
            setDepartInsert(true)
          }
          return true
        }else{
          setDepartInp(inputValue)
          setDepartInsert(true)
          return false
        }
      }
        
      }
 
  return (
   
    <div className='form-group mt-3'>
        <label>Programmer Level:</label>
        <div className='row col-md-12'>
            <div className='col-md-10'>
            <Select
            value={Data}
            onChange={(e) => handleDepartment(e) }
            options={DepartmentName}
            isSearchable={true}
            filterOption={(option, inputValue) =>
                filterDepart(option, inputValue) 
            }
        />
            </div>
            <div className='col-md-2'>
            {DepartInsert ? (
            <button className='btn btn-dark btn-md' onClick={InsertDepartment}>
                Add
            </button>
        ) : null}
            </div>
            </div>
        
        
    </div>
  );
}

export default ProgrammerLevel;
