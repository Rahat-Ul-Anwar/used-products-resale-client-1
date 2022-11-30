import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Header from "../pages/shared/Header/Header";

const DashboardLayout = () => {

  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
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
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            {
              isAdmin &&
              <li>
              <Link to="/dashboard/users">All Users</Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
