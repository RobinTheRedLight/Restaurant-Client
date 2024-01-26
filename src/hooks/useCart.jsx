import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  console.log("user from usecart", user?.email);
  const token = localStorage.getItem("access-token");
  console.log("token from usecart", token);
  const {
    isLoading,
    refetch,
    data: cart = [],
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/cart?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
    enabled: !!token,
  });
  return [cart, refetch, isLoading];
};
export default useCart;
