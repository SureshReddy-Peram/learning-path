import React from 'react';
import {Routes,Route,NavLink} from 'react-router-dom';
import IntroductionToCS from '../../pages/IntroductionToCS';
import JavaFullStackDeveloper from '../../pages/JavaFullStackDeveloper';
import PythonFullStackDeveloper from '../../pages/PythonFullStackDeveloper';
import MernStackDeveloper from '../../pages/MernStackDeveloper';
import MeanStackDeveloper from '../../pages/MeanStackDeveloper';
import CloudComputing from '../../pages/CloudComputing';

const Courses = () => {
  return (
    <>
      
      <div class="container-fluid">
        <div class="row" >
          <div class="col-2">
      <ul class="nav nav-pills flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/intro">Introduction to Computer Science</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/java">Java FullStack Developer</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/python">Python FullStack Developer</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/mern">MERN Stack Developer</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/mean">MEAN Stack Developer</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/cloud">Cloud Computing</a>
  </li>
</ul>
</div>
</div>
</div>
      
      
      <div className='App-sidenav'>
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
export default Courses
