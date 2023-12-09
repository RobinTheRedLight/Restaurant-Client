import { Link } from "react-router-dom";
import Menu from "../../../../Components/Menu";
import MenuCover from "../../../Shared/MenuCover/MenuCover";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <section>
      {img && (
        <MenuCover
          title={title}
          img={img}
          description={description}
        ></MenuCover>
      )}
      {items && (
        <div className="grid md:grid-cols-2 gap-10 px-10 pb-10 mt-20">
          {items.map((i) => (
            <Menu key={i._id} menu={i} />
          ))}
        </div>
      )}
      <div className="flex flex-col justify-center items-center pb-10">
        <Link to={`/shop/${title}`}>
          <button className="btn btn-outline border-t-0 border-l-0 border-r-0 border-b-4  text-black uppercase">
            order your favorite food
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;
