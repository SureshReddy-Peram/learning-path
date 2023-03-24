import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import './SignUp.css';

const SignUp = () => {
  //implement the validation schema
  const ValidationSchema = Yup.object().shape({
    "firstname":Yup.string().required("firstname can't left blank").min(3,"Minimum 3 characters required").max(10,"Maximum 10 characters required"),
    "lastname":Yup.string().required("lastname can't left blank").min(3,"Minimum 3 characters required").max(10,"Maximum 10 characters required"),
    "email":Yup.string().required("email can't left blank"),
    "password":Yup.string().required("password can't left blank"), 
    // "password" : Yup.string().required( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/),
 });
 
 //supply validationSchema to useForm() hook
const {register,reset,handleSubmit,formState:{errors} } = useForm({resolver : yupResolver(ValidationSchema) });

//Handle the onSubmit event
const onSubmit = (data)=>{ 
    alert(JSON.stringify(data)); 
}

return(
    <>
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>

           {/*  first name */}
          <div className="form-group">
            <label>First Name</label>
            <input type="text" {...register("firstname")} className={`form-control ${errors.firstname? 'is-invalid' : ''} `}></input>
            <div className="invalid-feedback">
                {
              Object.keys(errors).includes("firstname")? errors.firstname.message : ''

                }
            </div>
          </div>

           {/*  last name */}
           <div className="form-group">
            <label>Last Name</label>
            <input type="text" {...register("lastname")} className={`form-control ${errors.lastname? 'is-invalid' : ''} `}></input>
            <div className="invalid-feedback">
                {
              Object.keys(errors).includes("lastname")? errors.lastname.message : ''

                }
            </div>
          </div>

          
           {/*  Email */}
           <div className="form-group">
            <label>Email</label>
            <input type="email" {...register("email")} className={`form-control ${errors.email? 'is-invalid' : ''} `}></input>
            <div className="invalid-feedback">
                {
              Object.keys(errors).includes("email")? errors.email.message : ''

                }

           </div>
          </div>

          {/*  Password */}
        <div className="form-group">
            <label>Password</label>
            <input type="password" {...register("password")} className={`form-control ${errors.password? 'is-invalid' : ''}`}></input>
            <div className="invalid-feedback">
              {
                Object.keys(errors).includes("password")? errors.password.message: ''
              }
            </div>
        </div> 

             {/* Submit & Reset  */}
          <div className="form-group">
            <button type="submit" className="btn-btn-success btn-sm m-5"> Submit </button> 
            <button type="reset" onClick={()=>reset()} className="btn-btn-danger btn-sm m-5"> Reset </button>
          </div>
        </form>
      </div>
    </>
)
}

export default SignUp
