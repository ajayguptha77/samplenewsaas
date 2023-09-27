import React, { useEffect, useState } from 'react';
import { createTechStack } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import Select from 'react-select';
import { listTechStacks } from '../../graphql/queries';

export interface Group {
    label: string;
    value: string;
  }

function TechStack(props: any) { 

    const [DepartmentName, setDepartName] = useState<Group[]>([]);
    const [DepartInsert, setDepartInsert] = useState(false);
    const [DepartInp, setDepartInp] = useState<Group[]>([]);

    useEffect(() => {

        async function provInfo(){
        const AllData = await API.graphql(graphqlOperation(listTechStacks)) as any;
        if(AllData.data.listTechStacks.items){
          const DepartOptions = AllData.data.listTechStacks.items.map((department: any) => ({
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
      if(!props.TechStack){
        let SelectedValue: any
        if( typeof(props.editValue) === "string" ){
          SelectedValue = props.editValue
        }else{
          SelectedValue = props.editValue[0]
        }
        const filteredObject = DepartmentName.find((obj: any) => obj.value === SelectedValue);
        if(filteredObject){
          props.selectedTechStack(filteredObject);
        }
      }
    }

    const handleDepartment = (option: any) => {
      console.log("option",option)
        props.selectedTechStack(option);
        setDepartInsert(false)
    }

    const InsertDepartment = async () => {
        const getDepart: any = await API.graphql(
          graphqlOperation(createTechStack, { input: {name: DepartInp} })
        );
          DepartmentName.push({ label: getDepart.data.createTechStack.name, value:  getDepart.data.createTechStack.id });
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
        <label>Select Tech Stack*:</label>
        <div className='row col-md-12'>
            <div className='col-md-10'>
            <Select
            value={props.TechStack}
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

export default TechStack;
