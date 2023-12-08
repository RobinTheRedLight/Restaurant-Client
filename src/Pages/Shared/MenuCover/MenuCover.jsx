import { Parallax } from "react-parallax";

const MenuCover = ({ img, title, description }) => {
  return (
    <Parallax bgImage={img} bgImageAlt="image" strength={100}>
      <div className="hero h-[500px]">
        <div className="hero-content text-center text-neutral-content w-[1024px] h-[400px] bg-neutral-900 bg-opacity-60">
          <div className="max-w-md">
            <h1 className="mb-5 font-semibold uppercase text-white text-[45px] font-['Cinzel']">
              {title}
            </h1>
            <p className="text-center text-white font-semibold font-['Inter'] mb-5  text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default MenuCover;
