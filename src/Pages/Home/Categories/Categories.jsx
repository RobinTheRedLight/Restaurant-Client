import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../Components/SectionTitle";

const Categories = () => {
  return (
    <section>
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        heading="ORDER ONLINE"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper lg:h-[460px] mb-6"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="-mt-14 text-center text-2xl text-white font-serif">
            SALADS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="-mt-14 text-center text-2xl text-white font-serif">
            PIZZAS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="-mt-14 text-center text-2xl text-white font-serif">
            SOUPS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="-mt-14 text-center text-2xl text-white font-serif">
            DESSERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="-mt-14 text-center text-2xl text-white font-serif">
            SALADS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="-mt-14 text-center text-2xl text-white font-serif">
            PIZZAS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="-mt-14 text-center text-2xl text-white font-serif">
            SOUPS
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="-mt-14 text-center text-2xl text-white font-serif">
            DESSERTS
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
