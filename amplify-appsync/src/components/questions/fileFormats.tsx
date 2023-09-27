import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import Multiselect from 'multiselect-react-dropdown';

export interface Group {
    label: string;
    value: string;
  }

function FileFormatComponent(props: any) {

    const [getGrp, setGrp] = useState<string | undefined>();
    const [GroupData, setGroupData] = useState<Group[] | undefined>();
    const [GroupRes, setGroupRes] = useState(true);
    let transformedOptions: Group[] | undefined = [{label: "CSV", value: "csv"}, {label: "PDF", value: "pdf"}, {label: "PNG", value: "png"}, {label: "DOC", value: "doc"}, {label: "XML", value: "xml"}];
    let getObjects: Group[] | undefined;




      if (transformedOptions && props.editValue) {
        let getEnrollDetails = props.editValue;
        getObjects = transformedOptions.filter((obj1) =>
          getEnrollDetails.some((obj2: any) => obj1.value === obj2)
        );
      }


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
        <label>Select File Formats*:</label>
        
        <div className='row col-md-12'>
          {/* <div className='col-md-10' style={{paddingRight:"0px"}} > */}
          <Multiselect
            style={{ borderRadius:"0px"}}
            isObject={true}
            onRemove={(removed) => { props.setfileFormats(removed); setGrp(undefined); }}
            onSearch={handleSearch}
            onSelect={(add) => { props.setfileFormats(add); setGrp(undefined);}}
            options={transformedOptions}
            displayValue='label'
            showCheckbox
            selectedValues={getObjects}
        />
          {/* </div> */}
          
        </div>
    </div>
  );
}

export default FileFormatComponent;
