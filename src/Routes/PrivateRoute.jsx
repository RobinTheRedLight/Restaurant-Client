import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loadingPrivateRoute } = useContext(AuthContext);
  const location = useLocation();

  if (loadingPrivateRoute) {
    console.log("Loading from Private Route");
    return <h1 className="text-center text-2xl">Loading...</h1>;
  }

  if (user) {
    return children;
  }
  console.log("Navigate from Private Route");
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default PrivateRoute;
