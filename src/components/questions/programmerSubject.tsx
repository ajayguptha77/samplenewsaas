import React, { useEffect, useState } from 'react';
import { createProgrammerSubject } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import Select from 'react-select';
import { listProgrammerSubjects } from '../../graphql/queries';

export interface Group {
    label: string;
    value: string;
  }

function ProgrammerSubject(props: any) { 

    const [DepartmentName, setDepartName] = useState<Group[]>([]);
    const [DepartInsert, setDepartInsert] = useState(false);
    const [DepartInp, setDepartInp] = useState<Group[]>([]);
    const [Data, setData] = useState<Group | null>(null);

    useEffect(() => {

        async function provInfo(){
        const AllData = await API.graphql(graphqlOperation(listProgrammerSubjects)) as any;
        if(AllData.data.listProgrammerSubjects.items){
          const DepartOptions = AllData.data.listProgrammerSubjects.items.map((department: any) => ({
            label: department.name,
            value: department.id,
          }));
          
          if(props.editValue && DepartOptions){
              let SelectedValue= props.editValue
              const filteredObject: any = DepartOptions.find((obj: any) => obj.value === SelectedValue);
              if(filteredObject){
                props.setprogSub(filteredObject);
                setData(filteredObject)
              }
          }

          setDepartName(DepartOptions);
        }

       

    }
    provInfo()
    },[])

    

    const handleDepartment = (option: any) => {
      console.log("option",option)
        props.setprogSub(option.value);
        setData(option)
        setDepartInsert(false)
    }

    const InsertDepartment = async () => {
        const getDepart: any = await API.graphql(
          graphqlOperation(createProgrammerSubject, { input: {name: DepartInp} })
        );
          DepartmentName.push({ label: getDepart.data.createProgrammerSubject.name, value:  getDepart.data.createProgrammerSubject.id });
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

      console.log("props",props)
 
  return (
   
    <div className='form-group mt-3'>
        <label>Programmer Subject:</label>
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

export default ProgrammerSubject;