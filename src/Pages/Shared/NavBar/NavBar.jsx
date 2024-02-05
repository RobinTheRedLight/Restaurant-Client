import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart, isLoading] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link className="font-semibold font-['Inter'] uppercase" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold font-['Inter'] uppercase" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link
          className="font-semibold font-['Inter'] uppercase"
          to="/shop/salads"
        >
          Our Shop
        </Link>
      </li>
      {isAdmin ? (
        <li>
          <Link
            className="font-semibold font-['Inter'] uppercase"
            to="/dashboard/adminhome"
          >
            Dashboard
          </Link>
        </li>
      ) : (
        <li>
          <Link
            className="font-semibold font-['Inter'] uppercase"
            to="/dashboard/userhome"
          >
            Dashboard
          </Link>
        </li>
      )}

      <li>
        <Link
          to="/dashboard/mycart"
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {console.log(cart)}
              {cart?.length || 0}
            </span>
          </div>
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link
              className="font-semibold font-['Inter'] uppercase"
              onClick={handleLogOut}
            >
              Log Out
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              className="font-semibold font-['Inter'] uppercase"
              to="/login"
            >
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost font-['Cinzel'] normal-case text-xl"
          >
            Amici Italiano
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
