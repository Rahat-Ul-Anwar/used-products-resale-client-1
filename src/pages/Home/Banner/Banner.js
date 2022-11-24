import React from 'react';
import watch from '../../../assets/joe-hepburn-moJvG_1AwMU-unsplash.jpg';

const Banner = () => {
    return (
        <div className="hero p-2 mt-5">
        <div className="hero-content flex-col lg:flex-row">
          <img src={watch} className=" lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
          <div className=' ml-5  lg:w-1/2'>
            <h1 className="text-5xl  font-bold">Wanna sell watch?</h1>
            <p className="py-6">There are several different avenues you can use to sell your watch, such as selling or consigning directly to dealers, consigning with auction houses or posting to online classifieds or forums. Not every one will work for every watch.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;