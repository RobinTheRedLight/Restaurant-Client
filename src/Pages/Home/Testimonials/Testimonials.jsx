import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetch("https://restaurant-server-u0o6.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviewsData(data));
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />
      <div className="px-5 md:px-20 ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviewsData.map((d) => (
            <SwiperSlide key={d._id}>
              <div className="flex flex-col items-center ">
                <Rating
                  style={{ maxWidth: 180, paddingBottom: 5 }}
                  value={d.rating}
                  readOnly
                />
                <FontAwesomeIcon icon={faQuoteLeft} size="4x" md:size="6x" />
                <p className="md:px-20 py-2 text-center font-[Inter] md:text-xl">
                  {d.details}
                </p>
                <p className="text-[#CD9003] md:text-3xl pt-2 pb-20 font-medium  font-[Inter]">
                  {d.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
