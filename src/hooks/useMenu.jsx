import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(
        "https://restaurant-server-u0o6.onrender.com/menu"
      );
      return res.json();
    },
  });

  return [menu, loading, refetch];
};
export default useMenu;
