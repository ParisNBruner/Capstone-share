import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDFUH2LbvaEq6Eo_wb_DzpwGlAbPfPAsm0",
    authDomain: "capstone-7b005.firebaseapp.com",
    databaseURL: "https://capstone-7b005-default-rtdb.firebaseio.com",
    projectId: "capstone-7b005",
    storageBucket: "capstone-7b005.appspot.com",
    messagingSenderId: "294065836600",
    appId: "1:294065836600:web:12d5e624d97c506e454ccd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
