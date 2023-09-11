import { useEffect, useState } from "react";
import Menu from "../../../Components/Menu";
import SectionTitle from "../../../Components/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((i) => i.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />

      <div className="grid md:grid-cols-2 gap-10 px-10 pb-20">
        {menu.map((i) => (
          <Menu key={i._id} menu={i} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
