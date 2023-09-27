import React, { useEffect, useState } from 'react';
import { createLanguage } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import Select from 'react-select';
import { listLanguages } from '../../graphql/queries';

export interface Group {
    label: string;
    value: string;
  }

function SingleLanguage(props: any) { 

    const [DepartmentName, setDepartName] = useState<Group[]>([]);
    const [DepartInsert, setDepartInsert] = useState(false);
    const [DepartInp, setDepartInp] = useState<Group[]>([]);

    useEffect(() => {

        async function provInfo(){
        const AllData = await API.graphql(graphqlOperation(listLanguages)) as any;
        if(AllData.data.listLanguages.items){
          const DepartOptions = AllData.data.listLanguages.items.map((department: any) => ({
            label: department.name,
            value: department.id,
          }));
          
          setDepartName(DepartOptions);
        }
    }
    provInfo()
    },[])

    console.log("props",props.editValue)

    if(props.editValue && DepartmentName){
      if(!props.SingleLanguage){
        let SelectedValue: any
        if( typeof(props.editValue) === "string" ){
          SelectedValue = props.editValue
        }else{
          SelectedValue = props.editValue[0]
        }
        const filteredObject = DepartmentName.find((obj: any) => obj.value === SelectedValue);
        if(filteredObject){
          props.setSingleLanguage(filteredObject);
        }
      }
    }

    const handleDepartment = (option: any) => {
      console.log("option",option)
        props.setSingleLanguage(option);
        setDepartInsert(false)
    }

    const InsertDepartment = async () => {
        const getDepart: any = await API.graphql(
          graphqlOperation(createLanguage, { input: {name: DepartInp} })
        );
          DepartmentName.push({ label: getDepart.data.createLanguage.name, value:  getDepart.data.createLanguage.id });
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
        <label>Select Language:</label>
        <div className='row col-md-12'>
            <div className='col-md-10'>
            <Select
            value={props.SingleLanguage}
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

export default SingleLanguage;
