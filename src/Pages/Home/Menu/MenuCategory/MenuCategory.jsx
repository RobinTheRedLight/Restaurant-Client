import Menu from "../../../../Components/Menu";
import MenuCover from "../../../Shared/MenuCover/MenuCover";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <section>
      {title && (
        <MenuCover
          title={title}
          img={img}
          description={description}
        ></MenuCover>
      )}
      {items && (
        <div className="grid md:grid-cols-2 gap-10 px-10 pb-20 mt-20">
          {items.map((i) => (
            <Menu key={i._id} menu={i} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MenuCategory;
