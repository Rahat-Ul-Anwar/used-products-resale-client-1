
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";


const Login = () => {

  const googleProvider = new GoogleAuthProvider();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { logIn, googleSignIn } = useContext(AuthContext);

  const [logInError, setLogInError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';



  const handleLogin = (data) => {
    console.log(data);
    setLogInError('');
    logIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      }).catch(error => {
        console.log(error.message);
        setLogInError(error.message)
      });
  }


  const signInWithGoogle = () => {
    googleSignIn(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    }).catch(error => console.log(error));
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
                 onClick={signInWithGoogle}
                className="btn btn-secondary"
                type="submit"
                value="Continue with Google"
              />
          </div>
          <div>
            {
              logInError && <p className="text-error">{logInError}</p>
            }
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
