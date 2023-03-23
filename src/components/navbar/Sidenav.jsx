import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import IntroductionToCS from '../../pages/IntroductionToCS';
import './Sidenav.scss';


const Sidenav = () => {
  return (
    <>
      <div className='sidenav'>
      <ul className="nav nav-pills flex-column">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/intro">Introduction to Computer Science</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/java">Java Full Stack Developer</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/python">Python Full Stack Developer</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/mern">MERN Stack Developer</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/mean">MEAN Stack Developer</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/cloud">Cloud Computing</a>
  </li>
</ul>
      </div>

      
    </>         
  )
}

export default Sidenav;
