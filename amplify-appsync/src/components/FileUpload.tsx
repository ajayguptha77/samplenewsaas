import React, { useState } from 'react';
import AWS from 'aws-sdk';

interface FileUploadProps {
  setFile: (file: any) => void;
  label: string;
  fileType: string;
}

export function FileUpload(props: FileUploadProps): React.ReactElement {
  const [errMsg, setErrorMsg] = useState('');


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("file",file)

    if (file) {
      let fExt = file.name.split('.').pop();

      if (props.fileType === 'doc') {
        if (
          fExt === 'pdf' ||
          fExt === 'doc' ||
          fExt === 'docx' ||
          fExt === 'excel' ||
          fExt === 'ppt'
        ) {
          props.setFile(file);
          setErrorMsg("")
        } else {
          setErrorMsg('Please upload a pdf, doc, docx, excel, or ppt file.');
        }
      } else if (props.fileType === 'images') {
        if (fExt === 'jpg' || fExt === 'jpeg' || fExt === 'png' || fExt === 'gif') {
          props.setFile(file);
          setErrorMsg("")
        } else {
          setErrorMsg('Please upload a jpg, jpeg, gif, or png file.');
        }
      } else if (props.fileType === 'audios') {
        if (fExt === 'mp3' || fExt === 'wav' || fExt === 'ogg') {
          props.setFile(file);
          setErrorMsg("")
        } else {
          setErrorMsg('Please upload an mp3, wav, or ogg file.');
        }
      } else if (props.fileType === 'videos') {
        if (fExt === 'mp4' || fExt === 'mov' || fExt === 'avi') {
          props.setFile(file);
          setErrorMsg("")
        } else {
          setErrorMsg('Please upload an mp4, mov, or avi file.');
        }
      }else if (props.fileType === 'zip') {
        if (fExt === 'zip') {
          props.setFile(file);
          setErrorMsg("")
        } else {
          setErrorMsg('Please upload an zip file.');
        }
      }
    }
  };



  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];

  //   if (!file) {
  //     return; // No file selected
  //   }

  //   const allowedExtensions: Record<string, string[]> = {
  //     doc: ['pdf', 'doc', 'docx', 'excel', 'ppt'],
  //     img: ['jpg', 'jpeg', 'png', 'gif'],
  //     audio: ['mp3', 'wav', 'ogg'],
  //     video: ['mp4', 'mov', 'avi'],
  //   };

  //   const fileType = props.fileType;
  //   const fExt = file.name.split('.').pop() || '';

  //   if (allowedExtensions[fileType]?.includes(fExt)) {
  //     props.setFile(file);
  //   } else {
  //     setErrorMsg(`Please upload a ${allowedExtensions[fileType]?.join(', ')} file.`);
  //   }
  // };


  return (
    <>
      <div className="form-group mt-3">
        <label>{props.label}:</label>
        <input type="file" className="inputFiled form-control" name="resume" onChange={handleFileChange}
        />
        <p style={{ color: 'red' }}>{errMsg}</p>
      </div>
    </>
  );
}

export async function SendFile(file: any, fileName: any, folderName: any) {
  const S3_BUCKET = 'lms-dev-bucket';
  const REGION = 'ap-south-1';

  AWS.config.update({
    accessKeyId: "AKIAQOFXANKKTMXJ2IB4",
    secretAccessKey: "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"
  });

  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const params = {
    Bucket: S3_BUCKET,
    Key: `${folderName}/${fileName}`,
    Body: file,
  };

  try {
    const data = await s3.putObject(params).promise();
    console.log('File uploaded successfully.', data);
    return { status: 200, msg: 'Uploaded successfully' };
  } catch (err) {
    console.error('Error uploading file:', err);
    return { status: 500, msg: 'Upload failed' };
  }
}

export async function updDelFile(fileName: any, folderName: any) {
  const S3_BUCKET = 'lms-dev-bucket';
  const REGION = 'ap-south-1';

  AWS.config.update({
    accessKeyId: "AKIAQOFXANKKTMXJ2IB4",
    secretAccessKey: "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",
  });

  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const params = {
    Bucket: S3_BUCKET,
    Key: `${folderName}/${fileName}`,
  };

  try {
    const data = await s3.deleteObject(params).promise();
    console.log('File deleted successfully.', data);
    return { status: 200, msg: 'Deleted successfully' };
  } catch (err) {
    console.error('Error deleting file:', err);
    return { status: 500, msg: 'Deletion failed' };
  }
}