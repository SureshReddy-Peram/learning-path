import React,{useState, useRef} from 'react';

const Login = () => {
  const uname = useRef(` `);
    const upwd = useRef(` `);

    const [result, setResult] = useState(``);

    const my_func = () => {
        if( uname.current.value === "admin" && upwd.current.value === "admin@123"){
            //console.log("Login successful");   //Note: First we check with console.log after that we go for useState
            setResult(`Login Successful`);
        }else{
            //console.log("Login failed");
            setResult("Login Failed");
        }
    } 
  return (
    <>
      <div className="container mt-5">
        <div className="row m-5">
            <div className="col-6">
               <div className="form-group">
               <label>User Name </label>
                <input type={`text`} className="form-control" ref={uname} />
               </div>
            </div>         
        </div>

        <div className="row m-5">
        <div className="col-6">
               <div className="form-group">
               <label>Password </label>
                <input type={`password`} className="form-control" ref={upwd} />
               </div>
            </div>
        </div>

        <div className='row m-5'>
            <div className='col-9'>
                <button className="btn btn-success btn-lg" onClick={()=>my_func()}>Login</button>
                {/* Note: Please keep my_func in arrow function otherwise you may get error.
                Error: Too many re-renders. React limits the number of renders to prevent an infinite loop. */}
            </div>
        </div>

        <h1 className="text text-primary">{result} </h1>
      </div>
    </>
  )
}

export default Login
