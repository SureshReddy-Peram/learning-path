import React from 'react';
import {Routes,Route,NavLink,Link,Outlet} from 'react-router-dom';
import './Courses.scss';
import Sidenav from '../navbar/Sidenav';
import IntroductionToCS from "../../pages/IntroductionToCS";
import JavaFullStackDeveloper from '../../pages/JavaFullStackDeveloper';
import PythonFullStackDeveloper from '../../pages/PythonFullStackDeveloper';
import MernStackDeveloper from '../../pages/MernStackDeveloper';
import MeanStackDeveloper from '../../pages/MeanStackDeveloper';
import CloudComputing from '../../pages/CloudComputing';

const Courses = () => {
  return (
    <> 
      {<IntroductionToCS />}
    </>
  )
}
export default Courses;
