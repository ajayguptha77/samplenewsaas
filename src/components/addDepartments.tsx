import React, { useEffect, useState } from 'react';
import { createDepartment, createGroup } from '../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { listDepartments, listGroups } from '../graphql/queries';
import Multiselect from 'multiselect-react-dropdown';

export interface Group {
    label: string;
    value: string;
  }

function DepartmentComponent(props: any) {

    const [getDepart, setDepart] = useState<string | undefined>();
    const [DepartmentData, setDepartmentData] = useState<Group[] | undefined>();
    const [DepartmentRes, setDepartmentRes] = useState(true);
    let transformedOptions: Group[] | undefined;
    let getObjects: Group[] | undefined;

    useEffect(() => {
        async function Departments() {
    
          try {
            const AllDEparts = await API.graphql(graphqlOperation(listDepartments)) as any;
            setDepartmentData(AllDEparts.data.listDepartments.items)
            setDepartmentRes(true);
          } catch (err) {
            console.log('error fetching',err);
          }
        }
        Departments();
      }, [DepartmentRes]);

    if (DepartmentData) {
        transformedOptions = DepartmentData.map((option: any) => ({
          label: option.name,
          value: option.id,
        }));
      }

      if (transformedOptions && props.editValue) {
        let getEnrollDetails = props.editValue;
        getObjects = transformedOptions.filter((obj1) =>
          getEnrollDetails.some((obj2: any) => obj1.value === obj2)
        );
      }

    const InsertDepartment = async () => {
        if (getDepart) {
          const getGroup: any = await API.graphql(
            graphqlOperation(createDepartment, { input: {name: getDepart} })
          );
          props.Departments.push({ label: getGroup.data.createDepartment.name, value:  getGroup.data.createDepartment.id });
            setDepartmentRes(false);
            setDepart(undefined);
        }
      };

      const handleSearch = async (e: string) => {
        let Group = await transformedOptions?.find(function (element) {
          return element.label === e;
        });
        if (Group) {
          setDepart(undefined);
        } else {
          setDepart(e);
        }
      };

 
  return (
   
    <div className='form-group mt-3'>
        <label>Select Department*:</label>
        
        <div className='row col-md-12'>
          <div className='col-md-10'>
          <Multiselect
            isObject={true}
            onRemove={(removed) => { props.setDepartments(removed); setDepart(undefined); }}
            onSearch={handleSearch}
            onSelect={(add) => { props.setDepartments(add); setDepart(undefined);}}
            options={transformedOptions}
            displayValue='label'
            showCheckbox
            selectedValues={getObjects}
        />
          </div>
          <div className='col-md-2'>
          {getDepart ? (
            <button className='btn btn-dark btn-md' onClick={InsertDepartment}>
                Add
            </button>
        ) : null}
          </div>
        </div>
        
    </div>
  );
}

export default DepartmentComponent;
