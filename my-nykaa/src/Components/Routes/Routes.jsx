import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Home/Home';
import Signin from '../Signin';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Signin/>}/>
    </Routes>
  )
}

export default AllRoutes;