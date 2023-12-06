import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Categories />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
