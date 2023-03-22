import React from 'react';
import {Routes,Route,NavLink,Outlet} from 'react-router-dom';
import IntroductionToCS from '../../pages/IntroductionToCS';
import JavaFullStackDeveloper from '../../pages/JavaFullStackDeveloper';
import PythonFullStackDeveloper from '../../pages/PythonFullStackDeveloper';
import MernStackDeveloper from '../../pages/MernStackDeveloper';
import MeanStackDeveloper from '../../pages/MeanStackDeveloper';
import CloudComputing from '../../pages/CloudComputing';
import './Courses.scss';
import Sidenav from '../navbar/Sidenav';

const Courses = () => {
  return (
    <>
      
      <div className="container-fluid">
        <div className="row" >
          <div className="col-2">
            <Sidenav />
          </div>
          <div className="col-9">
            <NavLink to="/intro" > IntroductionToCS </NavLink>
            <NavLink to="/java" > JavaFullStackDeveloper </NavLink>
            <NavLink to="/python" > PythonFullStackDeveloper </NavLink>
            <NavLink to="/mern" > MernStackDeveloper </NavLink>
            <NavLink to="/mean" > MeanStackDeveloper </NavLink>
            <NavLink to="/cloud" > CloudComputing </NavLink>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      
      
      
      <div className='sidenav'>
        <Routes>
          <Route path="/intro" element={<IntroductionToCS/>} />
          <Route path="/java" element={<JavaFullStackDeveloper />} />
          <Route path="/python" element={<PythonFullStackDeveloper />} />
          <Route path="/mern" element={<MernStackDeveloper />} />
          <Route path="/mean" element={<MeanStackDeveloper />} />
          <Route path="/cloud" element={<CloudComputing />} />
        </Routes>
      </div>
    </>
  )
}
export default Courses;
