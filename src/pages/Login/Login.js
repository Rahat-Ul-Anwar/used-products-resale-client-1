
import React from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";


const Login = () => {

  const { register, handleSubmit,formState: { errors } } = useForm();


  const handleLogin = (data) => {
    console.log(data);
  }

return (
    <div className="hero">
      <div className="hero-content ">
      
        <div className="card flex-shrink-0 w-full shadow-2xl py-10 bg-base-100">
          <h1 className="text-4xl text-center font-bold">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
                minLength: {value:6, message: 'password must be 6 characters longer'}
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
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <div className="form-control mt-6">
              <input
             
                className="btn btn-secondary"
                type="submit"
                value="Continue with Google"
              />
            </div>
          </form>
          <p className="text-center">
            New to account?
            <Link className="text-orange-600 font-semibold" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
