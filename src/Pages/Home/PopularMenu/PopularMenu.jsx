import Menu from "../../../Components/Menu";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />

      <div className="grid md:grid-cols-2 gap-10 px-10 pb-20">
        {popular.map((i) => (
          <Menu key={i._id} menu={i} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
