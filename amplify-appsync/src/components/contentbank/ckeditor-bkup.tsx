import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SendFile } from '../FileUpload';
import imagePlugin from '@ckeditor/ckeditor5-image/src/image';

interface CKEditorComponentProps {
  data: string;
  onDataChange: (newContent: string) => void;
}

function CKEditorComponent({ data, onDataChange }: CKEditorComponentProps) {
  
  const [imagePath, setImagePath] = useState('');
  const API_URL = process.env.REACT_APP_API_MID_URL;
  const handleEditorChange = (event: any, editor: any) => {
    const newContent = editor.getData();
    onDataChange(newContent);
    console.log("newContent",newContent)
  };

  const MyUploadAdapterPlugin = (editor: any) => {
    console.log("editor",editor)
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
        return uploadAdapter(loader);
    };
};

function uploadAdapter(loader: any) {
    return {
        upload: async () => {
            return await loader.file.then((file: any) => {
                console.log('File :', file);

                return new Promise((resolve, reject) => {
                    const formData = new FormData();
                    formData.append("uploadImg", file);
                    const fileName = Date.now() + file.name

                    //console.log("userform data", file)
                    uploadImage(formData, file, fileName).then(async (res) => {
                        const imageUrl = `https://lms-dev-bucket.s3.ap-south-1.amazonaws.com/images/${fileName}`;
                        setImagePath(imageUrl)
                        resolve({ default: imageUrl });
                    })
                        .catch((err: any) => console.log(err));
                });
            });
        }
    };
}

const uploadImage = async (formData: FormData, file: any, fileName: any) => {

  const getResp = await SendFile(file, fileName, "Images")
  console.log("getREsp", getResp)

  //  console.log("formData", FormData)

  try {

      const response = await fetch(`${API_URL}/Blog/Blog`, {
          method: 'POST',
          body: formData
      });
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
  }
};

  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      config={{
        extraPlugins: [imagePlugin],
      }}
      // config={{
      //   ckfinder: {
      //     uploadUrl: imagePath, 
      //   }, 
      // }}
      onReady={(editor) => {  
        // Editor is ready and initialized, perform additional customization here if needed
        MyUploadAdapterPlugin(editor);
      }}
      onChange={handleEditorChange} 
    />
  );
}

export default CKEditorComponent;


// import React, {useState} from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { SendFile } from '../FileUpload';
// // import imagePlugin from '@ckeditor/ckeditor5-image/src/image';

// interface CKEditorComponentProps {
//   data: string;
//   onDataChange: (newContent: string) => void;
// }

// function CKEditorComponent({ data, onDataChange }: CKEditorComponentProps) {
  
//   const [imagePath, setImagePath] = useState('');
//   const [content, setContent] = useState('');
//   const API_URL = process.env.REACT_APP_API_MID_URL;
//   const handleEditorChange = (event: any, editor: any) => {
//     const data = editor.getData();
//     console.log( { event, editor, data } );
//     setContent((prev)=>{return{...prev, }})
// } 


  


//   return (
//     <CKEditor
//     editor={ ClassicEditor }
//     data="<p>Hello from CKEditor&nbsp;5!</p>"
//     onReady={ editor => {
//         // You can store the "editor" and use when it is needed.
//         console.log( 'Editor is ready to use!', editor );
//     } }
//     onChange={ ( event, editor ) => handleEditorChange( event, editor )}
//     onBlur={ ( event, editor ) => {
//         console.log( 'Blur.', editor );
//     } }
//     onFocus={ ( event, editor ) => {
//         console.log( 'Focus.', editor );
//     } }
// />
//   );
// }

// export default CKEditorComponent;