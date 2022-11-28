import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, img, name } = category;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="h-48 w-80" alt="Watch" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="card-actions justify-center">
          <button className="btn btn-primary">
            
           <Link to={`/watchCategories/${id}`}> See More</Link>
          
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
