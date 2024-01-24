import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    logOut();
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-center min-w-full min-h-full bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-red-500">
          Session Expired
        </h1>
        <p className="text-gray-600 mb-4">Log in Again</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};
export default ErrorPage;
