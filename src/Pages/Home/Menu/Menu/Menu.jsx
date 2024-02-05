import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import MenuImg from "../../../../assets/menu/banner3.jpg";
import dessertImg from "../../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../../Components/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Amici Italiano | Menu</title>
      </Helmet>
      <Cover
        img={MenuImg}
        title="OUR MENU"
        description="Would you like to try a dish?"
      ></Cover>
      <SectionTitle
        subHeading="Don't miss"
        heading="today's offer"
      ></SectionTitle>
      <MenuCategory title="offered" items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title="desserts"
        img={dessertImg}
        description="Indulge in heavenly delights with our exquisite desserts. From decadent cakes to luscious pastries, satisfy your sweet cravings and elevate your dining experience."
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title="pizza"
        img={pizzaImg}
        description="Experience a slice of perfection with our mouthwatering pizzas. Crafted with premium ingredients and baked to perfection, each bite is a savory journey you won't forget."
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title="salads"
        img={saladImg}
        description="Fresh, vibrant, and packed with flavor, our salads are a celebration of crisp greens and tantalizing ingredients. Elevate your palate with our nutritious and delicious salad selections."
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title="soups"
        img={soupImg}
        description="Savor warmth in a bowl with our soul-soothing soups. From hearty classics to exotic blends, each spoonful is a comforting symphony of flavors to nourish and delight your senses."
      ></MenuCategory>
    </div>
  );
};

export default Menu;
