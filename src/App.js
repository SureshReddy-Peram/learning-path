//import logo from './logo.svg';
import {Routes, Route, Link } from 'react-router-dom';
import Courses from './components/courses/Courses';
import Training from './components/training/Training';
import Blog from './components/blog/Blog';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import './App.scss';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar  /> 
      
      <main></main>
      
      <div className='App__main-page-content'>
        <Routes>
          <Route index path= "/" element={<Courses />} />
          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
