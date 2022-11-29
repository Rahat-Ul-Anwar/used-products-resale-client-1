
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Link, useNavigate,  } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";



const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const navigate = useNavigate();


  const handleLogin = (data) => {
    console.log(data);
    setSignUpError('');
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast('user created successfully');
        const userInfo = { displayName: data.name };
        updateUser(userInfo)
          .then(() => {
            navigate('/');
          })
          .catch(error => console.log(error));


      }).catch(error => {
        console.log(error);
        setSignUpError(error.message);
      });
  }

return (
    <div className="hero">
      <div className="hero-content ">
      
        <div className="card flex-shrink-0 w-full shadow-2xl py-10 bg-base-100">
          <h1 className="text-4xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
            <input type="text" placeholder="name" className="input input-bordered"
              {...register("name", {
                required: 'Name address is required'
              
              })} 
                
            />
            {errors?.name && <p className="text-error">{errors.name?.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
            <input type="text" placeholder="email" className="input input-bordered"
              {...register("email", {
                required: 'Email address is required'
              
              })} 
                
            />
            {errors?.email && <p className="text-error">{errors.email?.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
            <input type="password" placeholder="password" className="input input-bordered"
              {...register("password", {
                required: 'password is required',
                minLength: { value: 6, message: 'password must be 6 characters longer' },
                pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/ ,message:'password must be strong'}
              })}
               
            />
                    {errors?.password && <p className="text-error">{errors.password?.message}</p>}
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
            <div className="form-control mt-6">
              <input
             
                className="btn btn-secondary"
                type="submit"
                value="Continue with Google"
              />
          </div>
          <div>
            {
              signUpError && <p className="text-error">{signUpError}</p>
            }
          </div>
          </form>
          <p className="text-center">
          All ready have an account?
            <Link className="text-orange-600 font-semibold" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
