import SectionTitle from "../../../Components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featureSection bg-fixed text-white p-10">
      <SectionTitle subHeading={"Check it out"} heading={"Featured Items"} />
      <div className="flex justify-center items-center  px-20">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="ml-12">
          <h3 className="font-[Inter] text-2xl text-white">March 20,2023</h3>
          <h3 className="font-[Inter] text-2xl text-white uppercase">
            WHERE CAN I GET SOME?
          </h3>
          <p className="font-[Inter] text-xl text-white">
            Satisfy your cravings at our renowned dining establishments. Explore
            a world of culinary delights, and discover where you can savor the
            flavors that tantalize your taste buds.
          </p>
          <button className="mt-5 btn btn-outline border-t-0 border-l-0 border-r-0 border-b-4  text-white">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
