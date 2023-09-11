const Menu = ({ menu }) => {
  const { name, recipe, image, category, price } = menu;

  return (
    <section className="flex">
      <div className="flex">
        <div className="pr-5">
          <img
            className="w-[118px]  rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px] shadow border border-black"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-[#151515] text-xl font-normal font-['Cinzel']">
            {name} ------------------
          </h3>
          <p className="text-[#737373] text-base font-normal font-['Inter']">
            {recipe}
          </p>
        </div>
      </div>
      <div className="text-yellow-600 text-xl font-normal font-[Inter]">
        ${price}
      </div>
    </section>
  );
};

export default Menu;
