import React from 'react'
import HeaderFunction from './Compontents/HeaderFunction'
import FooterFunction from './Compontents/FooterFunction'
import MainFunction from "./Compontents/MainFunciton";

// Router
import {Navigate, Route, Routes} from "react-router-dom";
import MainFunciton from './Compontents/MainFunciton';

 function RouterBlog() {
  return (
    <React.Fragment> 


      <HeaderFunction name="Mustafa Büyükçolak" />

      

      <div className='container'>

        <Routes>

          <Route path={"/"} elementName={<MainFunction />} />
          <Route path={"/index"} elementName={<MainFunction />} />
          <Route path={"*"} elementName={<Navigate to={"/"} />} />
        </Routes>


      </div>

      
      <MainFunciton/>

      <FooterFunction/>


    </React.Fragment>
  )
}

export default RouterBlog
