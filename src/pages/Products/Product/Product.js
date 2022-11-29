import React from "react";
// import BookingModal from './BookingModal.js';
 
 
 

const Product = ({ product , setBookingOptions}) => {
    const { img_url, title, years_of_use, seller_name,location,original_price, resale_price } = product;
  return (
    <div className="card bg-base-100 shadow-xl mt-20">
      <div className="p-2 rounded-xl">
        <figure>
          <img src={img_url} className="h-48 w-80" alt="Product" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-start flex-col">
          <div className="badge badge-outline">Seller Name: {seller_name}</div>
          <div className="badge badge-outline">Location: {location}</div>
          <div className="badge badge-outline">
            years of use: {years_of_use}
          </div>
          <h3 className="font-semibold">Original Price: ${original_price}</h3>
          <h3 className="font-semibold">Resale Price: ${resale_price}</h3>

          <div>
         
            <label onClick={()=> setBookingOptions(product)}
              htmlFor="booking-modal"
              className="btn btn-xs btn-primary">Book Now</label>
 
      {/* <BookingModal product={product}></BookingModal> */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
