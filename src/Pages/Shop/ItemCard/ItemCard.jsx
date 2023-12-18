import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const ItemCard = ({ item }) => {
  const { name, recipe, image, category, price ,_id} = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = useCart();
  const handleAddToCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/cart",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cartItem),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added To Cart",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
    } else {
      Swal.fire({
        title: "Please login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    console.log(item);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body flex flex-col items-center justify-center">
        <p className="p-1 absolute right-4 top-4 bg-gray-900 text-white text-base font-semibold font-['Inter']">
          ${price}
        </p>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-4  text-[#BB8506] uppercase bg-[#E8E8E8] border-[#BB8506]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
