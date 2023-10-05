import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyB-5z81dzB0FmO9mrFmIucGAtpz59eByFo",
  authDomain: "react-chat-f689a.firebaseapp.com",
  projectId: "react-chat-f689a",
  storageBucket: "react-chat-f689a.appspot.com",
  messagingSenderId: "281412795435",
  appId: "1:281412795435:web:436c1b53425aea1e5a7e6e",
  measurementId: "G-1W2WC5W4BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <App />
  </Router>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
