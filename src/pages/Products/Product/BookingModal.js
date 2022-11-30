import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ bookingOptions, setBookingOptions }) => {
  const { title, original_price, resale_price } = bookingOptions;

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    const phone = form.phone.value;

    const booking = {
      itemName: title,
      userName: name,
      email,
      phone,
      location,
      original_price,
      resale_price,
    };

    fetch("https://y-two-iota.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(booking);

        if (data.acknowledged) {
          setBookingOptions(null);
          toast.success("Booking Confirmed");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <form className="mt-5" onSubmit={handleBooking}>
            <input
              type="text"
              name="name"
              placeholder="user name"
              className="input input-bordered w-full mb-2"
              defaultValue={user?.displayName}
              disabled
            />
            <input
              type="email"
              name="email"
              className="input input-bordered w-full mb-2"
              defaultValue={user?.email}
              disabled
            />
            <input
              type="text"
              name="phone"
              placeholder="phone"
              className="input input-bordered w-full mb-2"
            />

            <label className="label">
              <span className="label-text">Original Price</span>
            </label>

            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full mb-2"
              value={original_price}
              readOnly
            />
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
              value={resale_price}
              readOnly
            />
            <select
              name="location"
              className="select input-bordered  w-full mb-2"
            >
              <option disabled selected>
                Your Location
              </option>
              <option>Dhaka</option>
              <option>Chittagong</option>
              <option>Rajshahi</option>
              <option>Khulna</option>
            </select>
            <input
              type="submit"
              value="SUBMIT"
              className="btn btn-primary input-bordered w-full mb-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
