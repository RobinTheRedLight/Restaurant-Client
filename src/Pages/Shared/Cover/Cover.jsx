import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax bgImage={img} bgImageAlt="image" strength={100}>
      <div className="hero h-[600px]">
        <div className="hero-content text-center text-neutral-content w-[1024px] h-[350px] bg-neutral-900 bg-opacity-60">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase text-white text-[68px] font-['Cinzel']">
              {title}
            </h1>
            <p className="text-center text-white text-xl font-semibold font-['Cinzel'] mb-5">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
