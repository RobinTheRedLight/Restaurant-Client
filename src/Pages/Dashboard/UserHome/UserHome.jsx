import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [cart] = useCart();
  if (!Array.isArray(cart)) {
    console.error("cart is not an array");
    return <ErrorPage />;
  }
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div className="pt-5">
      <div className="text-center">
        <div className="stats shadow">
          <div className="stat w-[330px] md:w-[700px]">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
            <div className="stat-value">Welcome</div>
            <div className="stat-title">{user.displayName}</div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="stats shadow md:p-10 w-[330px] md:w-[700px]">
          <div className="stat ">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Items</div>
            <div className="stat-value">{cart.length}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">To Pay</div>
            <div className="stat-value">${total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
