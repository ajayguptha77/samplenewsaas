// import React, { useEffect, useState } from 'react';
// import {CKEditor} from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// function MyEditor() {
//   const [editorData, setEditorData] = useState('');

//   // This function will be called when the editor content changes
//   const handleEditorChange = (event: any, editor: any) => {
//     const data = editor.getData();
//     setEditorData(data);
//   };

//   useEffect(() => {
//     // Set initial data (if any)
//     setEditorData('<p>This is some initial content.</p>');
//   }, []);

//   return (
//     <div>
//       <h2>CKEditor Example</h2>
//       <CKEditor
//         editor={ClassicEditor}
//         data={editorData}
//         onChange={handleEditorChange}
//       />
//       <div>
//         <h3>Preview:</h3>
//         <div dangerouslySetInnerHTML={{ __html: editorData }} />
//       </div>
//     </div>
//   );
// }

// export default MyEditor;




import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SendFile, updDelFile } from '../FileUpload';
// import imagePlugin from '@ckeditor/ckeditor5-image/src/image';

interface CKEditorComponentProps {
  data: string;
  onDataChange: (newContent: string) => void;
}

function CKEditorComponent({ data, onDataChange }: CKEditorComponentProps) {
  
  const [imagePath, setImagePath] = useState('');
  const [content, setContent] = useState('');
  const API_URL = process.env.REACT_APP_API_MID_URL;
  const handleEditorChange = (event: any, editor: any) => {
      

    editor.keystrokes.set('Delete', (data: any, cancel: any) => {

      // const selection = editor.model.document.selection;      
      const selectedElement = editor.model.document.selection.getSelectedElement(); 
     
      // if (selectedElement && selectedElement.is('element', 'imageBlock')) {
      //   console.log('delete')
      //     const imageId = selectedElement.getAttribute('src'); 
      //     let fileName = imageId.split('/').pop();
      //     updDelFile(fileName, "images")
         
      // }

      if ( selectedElement ) {

        const imgID = selectedElement.getAttribute('src');
  
        if (imgID) {
  
          let fileName = imgID.split('/').pop();
          updDelFile(fileName, "images")
  
        }     
  
      }

     

      

  });

  editor.keystrokes.set('Backspace', (data: any, cancel: any) => {

    const selectedElement = editor.model.document.selection.getSelectedElement();
    
    
    if ( selectedElement ) {

      const imgID = selectedElement.getAttribute('src');

      if (imgID) {

        let fileName = imgID.split('/').pop();
        updDelFile(fileName, "images")

      }     

    }

      // if (selectedElement && selectedElement.is('element', 'imageBlock')) {
      //     const imageId = selectedElement.getAttribute('src'); 
      //     let fileName = imageId.split('/').pop();
      //     updDelFile(fileName, "images")
         
      // }
  });

  const newContent = editor.getData();
    onDataChange(newContent);
    setContent(data);


    // console.log("newContent",newContent)
  };

  const MyUploadAdapterPlugin = (editor: any) => {
    // console.log("editor",editor)
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
        return uploadAdapter(loader);
    };
};

function uploadAdapter(loader: any) {
  // console.log("uploadAdapter hiii")
    return {
        upload: async () => {
            return await loader.file.then((file: any) => {
                // console.log('File :', file);

                return new Promise((resolve, reject) => {
                    const formData = new FormData();
                    formData.append("uploadImg", file);
                    const fileName = Date.now() + file.name

                    //console.log("userform data", file)
                    uploadImage(formData, file, fileName).then(async (res) => {
                        const imageUrl = `https://lms-dev-bucket.s3.ap-south-1.amazonaws.com/images/${fileName}`;                       
                        // setImagePath(imageUrl) 


                        const newContent = `${content}<img src="${imageUrl}" alt="Uploaded Image"/>`;
                        setContent(newContent);        
                                   
                        // console.log("newcontent",newContent) 
                        resolve({ default: imageUrl });
                    })
                        .catch((err: any) => console.log(err));
                });
            });
        }
    };
}

// console.log("content",content)     

const uploadImage = async (formData: FormData, file: any, fileName: any) => {
 
  const getResp = await SendFile(file, fileName, "images") 
  
};

  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      // config={{
      //   extraPlugins: [imagePlugin],
      // }}
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
