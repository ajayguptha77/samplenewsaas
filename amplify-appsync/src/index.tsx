import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Amplify, Storage } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const s3 = Storage;
s3.configure( {bucket: 'kushalms', region: 'ap-south-1', aws_access_key_id: 'AKIAQOFXANKKTMXJ2IB4', aws_secret_access_key: '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' })


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
