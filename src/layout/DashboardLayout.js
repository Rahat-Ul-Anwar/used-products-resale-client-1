import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile mt-5">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-2">
          <Outlet></Outlet>
          
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-300 text-base-content">
            <li>
              <Link to="/myorders">My Orders</Link>
            </li>
            <li>
              <Link>Add Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
