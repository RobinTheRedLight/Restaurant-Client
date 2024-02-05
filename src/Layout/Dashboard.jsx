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
  const [isAdmin] = useAdmin();
  console.log("isAdmin", isAdmin);

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-2");
    if (drawerCheckbox.checked) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="flex btn btn-outline mt-5 drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white ">
          {isAdmin ? (
            <>
              <li>
                <NavLink onClick={closeDrawer} to="/dashboard/adminhome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDrawer} to="/dashboard/addItem">
                  <FaUtensils /> Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDrawer} to="/dashboard/manageitems">
                  <TfiMenuAlt />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDrawer} to="mycart">
                  <FaBook></FaBook>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDrawer} to="allusers">
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink onClick={closeDrawer} to="/dashboard/userhome">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDrawer} to="/">
                  <FaCalendar></FaCalendar>Reservations
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDrawer} to="/">
                  <FaWallet></FaWallet>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDrawer} to="mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink onClick={closeDrawer} to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeDrawer} to="/menu">
              <IoMenu />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeDrawer} to="/shop/salads">
              <FaShoppingCart></FaShoppingCart>Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
