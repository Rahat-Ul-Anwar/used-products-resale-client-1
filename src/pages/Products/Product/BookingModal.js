import React from "react";

const BookingModal = ({ bookingOptions }) => {
  const { title } = bookingOptions;


   
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">
         {title}
          </h3>
          <form className="mt-5">
          <input type="text" placeholder="user name" className="input input-bordered w-full mb-2" />
          <input type="email" placeholder="Email" className="input input-bordered w-full mb-2" />
          <input type="text" placeholder="Type here" className="input input-bordered w-full mb-2" />
          <input type="text" placeholder="Type here" className="input input-bordered w-full mb-2" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full mb-2" />
            <input type="submit" value="SUBMIT" className="btn btn-primary input-bordered w-full mb-2"/>
   
    
      
         </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;