import React, { useEffect, useState } from 'react';
import { createDepartment } from '../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import Select from 'react-select';
import { listDepartments } from '../graphql/queries';

export interface Group {
    label: string;
    value: string;
  }

function Departments(props: any) { 

    const [DepartmentName, setDepartName] = useState<Group[]>([]);
    const [DepartInsert, setDepartInsert] = useState(false);
    const [DepartInp, setDepartInp] = useState<Group[]>([]);

    useEffect(() => {

        async function provInfo(){
        const AllData = await API.graphql(graphqlOperation(listDepartments)) as any;
        if(AllData.data.listDepartments.items){
          const DepartOptions = AllData.data.listDepartments.items.map((department: any) => ({
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
      if(!props.selectedDepart){
        let SelectedValue: any
        if( typeof(props.editValue) === "string" ){
          SelectedValue = props.editValue
        }else{
          SelectedValue = props.editValue[0]
        }
        const filteredObject = DepartmentName.find((obj: any) => obj.value === SelectedValue);
        if(filteredObject){
          props.setselectedDepart(filteredObject);
        }
      }
    }

    const handleDepartment = (option: any) => {
      console.log("option",option)
        props.setselectedDepart(option);
        setDepartInsert(false)
    }

    const InsertDepartment = async () => {
        const getDepart: any = await API.graphql(
          graphqlOperation(createDepartment, { input: {name: DepartInp} })
        );
          DepartmentName.push({ label: getDepart.data.createDepartment.name, value:  getDepart.data.createDepartment.id });
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
        <label>Select Department*:</label>
        <div className='row col-md-12'>
            <div className='col-md-10'>
            <Select
            value={props.selectedDepart}
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

export default Departments;
