//import logo from './logo.svg';
import {Routes, Route, Link, Switch, Router } from 'react-router-dom';
import Courses from './components/courses/Courses';
import Home from './components/home/Home';
import Training from './components/training/Training';
import Blog from './components/blog/Blog';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import IntroductionToCS from './pages/IntroductionToCS';
import JavaFullStackDeveloper from './pages/JavaFullStackDeveloper';
import PythonFullStackDeveloper from './pages/PythonFullStackDeveloper';
import MernStackDeveloper from './pages/MernStackDeveloper';
import MeanStackDeveloper from './pages/MeanStackDeveloper';
import CloudComputing from './pages/MeanStackDeveloper';
import Sidenav from './components/navbar/Sidenav';
function App() {
  return (
    <div className="App">
    
      
      <main>
      <Navbar  />   
      <div className='App__main-page-content'>
        <Routes>
          <Route index path= "/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      </main>
      <div className='App__sidenav'>
        <Routes>
          <Route path="/intro" element={<IntroductionToCS />} />
          <Route path="/java" element={<JavaFullStackDeveloper />} />
          <Route path="/python" element={<PythonFullStackDeveloper />} />
          <Route path="/mern" element={<MernStackDeveloper />} />
          <Route path="/mean" element={<MeanStackDeveloper />} />
          <Route path="/cloud" element={<CloudComputing />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
