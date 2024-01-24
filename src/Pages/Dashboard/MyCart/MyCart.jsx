import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import ErrorPage from "../../ErrorPage/ErrorPage";

const MyCart = () => {
  const [cart, refetch] = useCart();
  if (!Array.isArray(cart)) {
    console.error("cart is not an array");
    return <ErrorPage />;
  }
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted", "Item has been deleted.", "success");
            }
          });
      }
    });
  };
  console.log(cart);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="text-center mt-5 mb-8 md:w-4/12 mx-auto">
        <p className="text-[#D99904] text-xl italic font-['Inter'] pb-2">
          ---My cart---
        </p>
        <h1 className="text-3xl font-normal uppercase font-['Inter'] border-y-4 p-5 flex justify-center items-center">
          <p className="pr-2">WANNA</p>
          <p className="pr-2">ADD</p>
          <p>MORE?</p>
        </h1>
      </div>
      <div className="flex items-center mb-5">
        <h3 className="text-3xl pr-16 font-bold font-['Cinzel']">
          Total Items: {cart.length}
        </h3>
        <h3 className="text-3xl pr-16 font-bold font-['Cinzel']">
          Total Price: ${total}
        </h3>
        <button className="btn font-bold font-['Cinzel'] text-white bg-[#D1A054]">
          Pay
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>FOOD</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-white btn bg-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
