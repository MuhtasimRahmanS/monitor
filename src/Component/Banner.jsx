"use client";

import React from "react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";
import Link from "next/link";
const Banner = () => {
  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-cover  bg-center "
            style={{
              backgroundImage: "url(/banner4.jpg)",
            }}
          >
            <div className=" bg-black/20  py-10">
              <div className="md:flex justify-between  container  mx-auto py-20 px-4 sm:px-4 lg:px-8">
                <div className="md:w-1/2">
                  <h1 className="text-4xl  font-bold text-black">
                    Unlock your team&apos;s full potential <br /> with
                    Monitorfly
                  </h1>

                  <p className="py-10 text-lg font-medium text-black">
                    Track, Manage, and Optimize Workflow Effortlessly with
                    Monitor Fly
                  </p>
                  <Link href={"/signup"} className=" btn-primary">
                    Create Account
                  </Link>
                </div>
                <div className="md:w-1/2 flex justify-end">
                  <Image
                    height={400}
                    width={400}
                    objectFit="cover"
                    alt="banner"
                    src="/banner2.jpg"
                    className=" h-[400px] rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: "url(/banner7.jpg)",
            }}
          >
            <div className="bg-black/20 py-10">
              <div className="md:flex container mx-auto  justify-between py-20 px-4 sm:px-4 lg:px-8 ">
                <div className="md:w-1/2">
                  <h1 className="text-4xl text-black font-bold">
                    Unlock your team&apos;s full potential <br /> with
                    Monitorfly
                  </h1>

                  <p className="py-10 font-medium text-lg text-black">
                    Track, Manage, and Optimize Workflow Effortlessly with
                    Monitor Fly
                  </p>
                  <Link href={"/signup"} className=" btn-primary">
                    Create Account
                  </Link>
                </div>
                <div className="md:w-1/2 flex justify-end">
                  <Image
                    height={400}
                    width={400}
                    objectFit="cover"
                    alt="banner"
                    src="/banner2.jpg"
                    className="  h-[400px] rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
