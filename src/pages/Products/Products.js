import { useLoaderData } from "react-router-dom";
import Product from "./Product/Product";
import BookingModal from "./Product/BookingModal";
import React, { useState } from "react";

const Products = () => {
  const products = useLoaderData();

  const [bookingOptions, setBookingOptions] = useState(null);

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            setBookingOptions={setBookingOptions}
          ></Product>
        ))}
      </div>

      {bookingOptions && (
        <BookingModal bookingOptions={bookingOptions}></BookingModal>
      )}
    </div>
  );
};

export default Products;
