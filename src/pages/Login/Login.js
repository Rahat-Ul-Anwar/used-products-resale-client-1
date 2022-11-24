
import React from "react";

import { Link } from "react-router-dom";


const Login = () => {


 
  return (
    <div className="hero">
      <div className="hero-content ">
      
        <div className="card shadow-2xl py-20 bg-base-100">
          <h1 className="text-4xl text-center font-bold">Login</h1>
          <form  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
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
