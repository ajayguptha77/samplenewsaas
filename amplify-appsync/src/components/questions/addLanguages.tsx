import React, { useEffect, useState } from 'react';
import { createLanguage } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { listLanguages } from '../../graphql/queries';
import Multiselect from 'multiselect-react-dropdown';

export interface Group {
    label: string;
    value: string;
  }

function AddLanguages(props: any) {

    const [getGrp, setGrp] = useState<string | undefined>();
    const [GroupData, setGroupData] = useState<Group[] | undefined>();
    const [GroupRes, setGroupRes] = useState(true);
    let transformedOptions: Group[] | undefined;
    let getObjects: Group[] | undefined;

    useEffect(() => {
        async function groups() {
    
          try {
            const AllGroups = await API.graphql(graphqlOperation(listLanguages)) as any;
            setGroupData(AllGroups.data.listLanguages.items)
            setGroupRes(true);
          } catch (err) {
            console.log('error fetching todos',err);
          }
        }
        groups();
      }, [GroupRes]);

    if (GroupData) {
        transformedOptions = GroupData.map((option: any) => ({
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

    const InsertGroup = async () => {
        if (getGrp) {
          const getGroup: any = await API.graphql(
            graphqlOperation(createLanguage, { input: {name: getGrp} })
          );
          props.Languages.push({ label: getGroup.data.createLanguage.name, value:  getGroup.data.createLanguage.id });
            setGroupRes(false);
            setGrp(undefined);
        }
      };

      const handleSearch = async (e: string) => {
        let Group = await transformedOptions?.find(function (element) {
          return element.label === e;
        });
        if (Group) {
          setGrp(undefined);
        } else {
          setGrp(e);
        }
      };

 
  return (
   
    <div className='form-group mt-3'>
        <label>Select Language*:</label>
        
        <div className='row col-md-12'>
          <div className='col-md-10' style={{paddingRight:"0px"}} >
          <Multiselect
            style={{ borderRadius:"0px"}}
            isObject={true}
            onRemove={(removed) => { props.setLanguages(removed); setGrp(undefined); }}
            onSearch={handleSearch}
            onSelect={(add) => { props.setLanguages(add); setGrp(undefined);}}
            options={transformedOptions}
            displayValue='label'
            showCheckbox
            selectedValues={getObjects}
        />
          </div>
          <div className='col-md-2 px-0'>
          {getGrp ? (
            <button className='btn btn-dark btn-md' onClick={InsertGroup}>
                Add
            </button>
        ) : null}
          </div>
        </div>
    </div>
  );
}

export default AddLanguages;
