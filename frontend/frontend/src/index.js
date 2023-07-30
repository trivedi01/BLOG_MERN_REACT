import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqZ8vhgH5ylZrZ5cpyKGjkfvDOE_iHucY",
  authDomain: "my-react-blog-589ea.firebaseapp.com",
  projectId: "my-react-blog-589ea",
  storageBucket: "my-react-blog-589ea.appspot.com",
  messagingSenderId: "28134906540",
  appId: "1:28134906540:web:c426c77fc0aeca1311dd09"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
