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
      <div className="px-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="-mt-14 text-center md:text-2xl text-white font-serif">
              SALADS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="-mt-14 text-center md:text-2xl text-white font-serif">
              PIZZAS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="-mt-14 text-center md:text-2xl text-white font-serif">
              SOUPS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="-mt-14 text-center md:text-2xl text-white font-serif">
              DESSERTS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="-mt-14 text-center md:text-2xl text-white font-serif">
              SALADS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="-mt-14 text-center md:text-2xl text-white font-serif">
              PIZZAS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="-mt-14 text-center md:text-2xl text-white font-serif">
              SOUPS
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="-mt-14 text-center md:text-2xl text-white font-serif">
              DESSERTS
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
