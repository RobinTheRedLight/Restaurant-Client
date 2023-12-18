import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../Components/SectionTitle";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="text-center mt-20 mb-12 md:w-4/12 mx-auto">
        <p className="text-[#D99904] text-xl italic font-['Inter'] pb-2">
          ---My cart---
        </p>
        <h1 className="text-3xl font-normal uppercase font-['Inter'] border-y-4 p-5 flex justify-center items-center">
          <p className="pr-2">WANNA</p>
          <p className="pr-2">ADD</p>
          <p>MORE?</p>
        </h1>
      </div>
      <div className="flex items-center">
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
    </div>
  );
};

export default MyCart;
