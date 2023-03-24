import React from 'react';
import Sidenav from '../navbar/Sidenav';
import './Home.scss';

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" >
          <div className="col-2">
          <Sidenav />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Home;
