"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./slider.css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Image from "next/image";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/review.json");
      const result = await res.json();
      setReviews(result);
    };

    fetchData();
  }, []);
  return (
    <div className=" py-20 ">
      <div className="container mx-auto lg:flex md:col-span-2 overflow-hidden">
        <div className="lg:w-1/2 w-full h  flex items-center overflow-hidden">
          <div>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="md:text-4xl overflow-hidden text-3xl font-bold md:text-left text-center "
            >
              See What Our Users Are Saying
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
              className=" py-5 overflow-hidden md:text-left text-center  mx-auto"
            >
              Join thousands of satisfied teams who are boosting their
              productivity with Monitorfly
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="400"
          className="lg:w-1/2 w-ful overflow-hidden"
        >
          <Swiper
            watchSlidesProgress={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            loop={true}
            className="mySwiper overflow-hidden"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="p-5 mb-5 h-[450px] md:mx-0 mx-5 border-2 border-blue-600  overflow-hidden rounded-xl bg-white ">
                  <div className="flex justify-end">
                    <Image
                      src={review.img}
                      height={70}
                      width={100}
                      className=" round "
                      alt="img"
                    />
                  </div>

                  <p className="pt-6 pb-10 font-medium">{review.review}</p>
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  <p className="text-sm">{review.status}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
