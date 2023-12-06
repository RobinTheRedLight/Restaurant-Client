import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import MenuImg from "../../../../assets/menu/banner3.jpg";
import PopularMenu from "../../PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        title="our menu"
        img={MenuImg}
        description="Would you like to try a dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        title="our menu"
        img={MenuImg}
        description="Would you like to try a dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        title="our menu"
        img={MenuImg}
        description="Would you like to try a dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
