import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
        const res = await fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('access token')}`
          }
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-5">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Item Name</th>
              <th> Resale Price</th>
              <th> Location</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{booking?.userName}</td>
                <td className="hover">{booking.itemName}</td>
                <td>{booking.resale_price}</td>
                <td>{booking.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
