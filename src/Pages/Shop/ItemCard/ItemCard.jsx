const ItemCard = ({ item }) => {
  const { name, recipe, image, category, price } = item;
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
          <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-4  text-[#BB8506] uppercase bg-[#E8E8E8] border-[#BB8506]">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
