import React from 'react';
import watch from '../../../assets/joe-hepburn-moJvG_1AwMU-unsplash.jpg';

const Banner = () => {
    return (
        <div className="hero p-2">
        <div className="hero-content flex-col lg:flex-row">
          <img src={watch} className=" lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
          <div className='lg:w-1/2'>
            <h1 className="text-5xl font-bold">Buy Now</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;