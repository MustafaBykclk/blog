import React from 'react';
import ReactDOM from 'react-dom/client';

// Router
import {BrowserRouter} from 'react-router-dom'


import './index.css';
// import App from './App';
// import ClassCompontentsTutorials from './Compontents/ClassCompontentsTutorials';
import reportWebVitals from './reportWebVitals';
//import FunctionCompontentsTutorials from './Compontents/FunctionCompontentsTutorials';
import RouterBlog from './RouterBlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RouterBlog/>
    </BrowserRouter>
    {/* <FunctionCompontentsTutorials/> */}
    {/* <ClassCompontentsTutorials /> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
