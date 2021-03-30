import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBG98IOyn8sF-xYcZx6G0flJC39R1MlH1Y",
  authDomain: "pakostanekalendar.firebaseapp.com",
  databaseURL: "https://pakostanekalendar-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pakostanekalendar",
  storageBucket: "pakostanekalendar.appspot.com",
  messagingSenderId: "613864478118",
  appId: "1:613864478118:web:bdda66f1078f14909e6b67",
  measurementId: "G-4KQRVZTPJZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
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
