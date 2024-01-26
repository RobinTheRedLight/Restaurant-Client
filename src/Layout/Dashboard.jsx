import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaHome,
  FaCalendar,
  FaWallet,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  console.log("isAdmin", isAdmin);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <TfiMenuAlt />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="mycart">
                  <FaBook></FaBook>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="allusers">
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaCalendar></FaCalendar>Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaWallet></FaWallet>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <IoMenu />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaShoppingCart></FaShoppingCart>Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
