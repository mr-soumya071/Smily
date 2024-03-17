// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import { Amplify } from 'aws-amplify';
// import { initSentry } from './libs/errorLib';
// initSentry();

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "ap-south-1",
    userPoolId: "ap-south-1_hs8LTB6It",
    identityPoolId: "ap-south-1:723ef131-89a4-428e-9c0e-6daebba7a619",
    userPoolWebClientId: "93v900pr2utdhsgbgqohogrrs"
  },
  // Storage: {
  //   region: "ap-south-1",
  //   bucket: config.s3.BUCKET,
  //   identityPoolId: config.cognito.IDENTITY_POOL_ID
  // },
  API: {
    endpoints: [
      {
        name: "appointment",
        endpoint: "https://aupwxy7qda.execute-api.ap-south-1.amazonaws.com/prod",
        region: "ap-south-1"
      },    
    ]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// const dev = {
//   s3: {
//       REGION: "ap-south-1",
//       BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-k3qq3ch66wa4",
//   },
//   apiGateway: {
//       REGION: "ap-south-1",
//       URL: "https://pjp2kap1n8.execute-api.ap-south-1.amazonaws.com/dev",
//   },
//   cognito: {
//       REGION: "ap-south-1",
//       USER_POOL_ID: "ap-south-1_YoVAFDaJr",
//       APP_CLIENT_ID: "58jum49uluba6lb7l0m9gus95b",
//       IDENTITY_POOL_ID: "ap-south-1:e7d1571d-e73a-42ee-a71c-0eae725c3164",
//   },
//   social: {
//     FB: "651928649757855"
//     }
    
// };