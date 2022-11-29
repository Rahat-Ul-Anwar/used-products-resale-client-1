import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      
        fetch('http://localhost:5000/watchCategories')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])
    return (
        <div>
            <h2 className='text-4xl font-semibold text-center my-12'>Our Services</h2>
       
         
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {


         categories.map(category => <Category key={category.id} category={category}></Category>)           
                    
                    
                }
            </div>
            
        </div>
    );
};

export default Categories;