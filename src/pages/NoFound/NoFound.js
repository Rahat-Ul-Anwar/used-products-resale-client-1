import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/404-error-template-3.webp';

const NoFound = () => {
    return (
        <div>
            <img src={img} alt="404page" className='w-[620px] mx-auto'/>
            <h3 className='text-2xl font-bold text-center'><Link to='/'>Go to the Home page</Link></h3>
        </div>
    );
};

export default NoFound;