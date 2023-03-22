import React, {useState} from 'react';
import Failure from './Failure';
import Success from './Success';


const Dashboard = () => {
    const [bool, setBool] =useState(false);
    const func_one = ()=>{
        setBool( bool =>!bool);
    }
  return (
    <>
      {
        bool? <Success></Success> : <Failure></Failure>
      }
      <button onClick={func_one}>Login</button>
    </>
  )
}

export default Dashboard
