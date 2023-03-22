import React,{useState, useRef} from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  //1.We will use the useRef hook to get the input element(to accept user input)
  const uemail = useRef('');
  const upwd = useRef('');

  // 7. Store the token in a state variable
  const [token, setToken] = useState('');

  //2.We are comparing the user input(email, password) with the database(email, password) using axios library
  const login = ()=>{

      axios.post(`https://reqres.in/api/login`,{'email': uemail.current.value , 'password': upwd.current.value}).then( (posRes) => {
          console.log(posRes);  // 3.you will get the object or response from the server
          const {data} = posRes;   //4.we are destructuring the data from the response 
          const {token} = data;   //5.we are destructuring the token from the data
          setToken(token);

          //console.log(token); 
      }, (errorRes) => {
          //console.log(errorRes);
          alert("Please Enter your email and password")
      }); 
  }
return (
  <> {/* 6.We write JSX for email, password, button using Form and Bootstrap */}
    <form className='form'>
      
        
           <div className="form-group">                         
              <label htmlFor="email">Email</label>
              <input type={"text"} className="form-control" ref={uemail} placeholder="Enter your email" required/>
              <br/>
            </div>
             
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type={"password"} className="form-control" ref={upwd} placeholder="Enter your password" required/>
              <br/>
            </div>
          
              <button type="button" className="btn btn-primary" onClick={login}>Login</button>

              
              <div className='wrap'>
                <p className='forgot'>Forgot password : <a href='https://reqres.in/api/users?page=2'> Click Here</a></p>
                <p className='register'>New to Website : <a href='/signup'> <button type="button">Register</button></a></p>
              </div>
                  
    </form>
    {/* 8. We are displaying the token on screen */}
    <h1>{token} </h1>
  </>
)
}

export default Login;
