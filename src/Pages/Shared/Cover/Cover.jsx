import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax bgImage={img} bgImageAlt="image" strength={100}>
      <div className="hero h-[300px] md:h-[600px]">
        <div className="hero-content text-center text-neutral-content h-[150px] w-[400px] md:w-[1024px] md:h-[350px] bg-neutral-900 bg-opacity-60">
          <div className="max-w-md">
            <h1 className="mb-5 md:text-5xl text-2xl font-bold uppercase text-white md:text-[68px] font-['Cinzel']">
              {title}
            </h1>
            <p className="text-center text-white  text-xl md:font-semibold font-['Cinzel'] mb-5">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
