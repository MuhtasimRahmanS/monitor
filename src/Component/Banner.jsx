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
          delay: 3200,
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
            className="bg-cover bg-center"
            style={{
              backgroundImage: "url(/banner-img1.png)",
            }}
          >
            <div className="bg-black/20 py-10">
              <div className="md:flex container mx-auto  justify-between  px-4 sm:px-4 lg:px-8 ">
                <div className="md:w-1/2 flex items-center">
                  <div>
                    <h1 className="md:text-4xl text-2xl text-[#167BF4] font-bold">
                      Unlock your team&apos;s full potential <br /> with
                      Monitorfly
                    </h1>

                    <p className="md:py-10 py-4 font-medium md:text-lg text-[#167af4ab]">
                      Track, Manage, and Optimize Workflow Effortlessly with
                      Monitor Fly
                    </p>
                    <Link href={"/signup"} className=" btn-primary">
                      Create Account
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 md:block hidden ">
                  <div className="flex justify-end">
                    <Image
                      height={400}
                      width={400}
                      objectFit="cover"
                      alt="banner"
                      src="/banner-c.png"
                      className="  h-[400px] rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: "url(/banner-img2.png)",
            }}
          >
            <div className="bg-black/20 py-10">
              <div className="md:flex container mx-auto  justify-between  px-4 sm:px-4 lg:px-8 ">
                <div className="md:w-1/2 flex items-center">
                  <div>
                    <h1 className="md:text-4xl text-2xl text-[#2b2829] font-bold">
                      Unlock your team&apos;s full potential <br /> with
                      Monitorfly
                    </h1>

                    <p className="md:py-10 py-4 font-medium md:text-lg text-[#2b2829b6]">
                      Track, Manage, and Optimize Workflow Effortlessly with
                      Monitor Fly
                    </p>
                    <Link href={"/signup"} className=" btn-primary">
                      Create Account
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 md:block hidden ">
                  <div className="flex justify-end">
                    <Image
                      height={400}
                      width={400}
                      objectFit="cover"
                      alt="banner"
                      src="/banner-c2.png"
                      className="  h-[400px] rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: "url(/banner-img3.png)",
            }}
          >
            <div className="bg-black/20 py-10">
              <div className="md:flex container mx-auto  justify-between  px-4 sm:px-4 lg:px-8 ">
                <div className="md:w-1/2 flex items-center">
                  <div>
                    <h1 className="md:text-4xl text-2xl text-[#141314] font-bold">
                      Unlock your team&apos;s full potential <br /> with
                      Monitorfly
                    </h1>

                    <p className="md:py-10 py-4 font-medium md:text-lg text-[#131212b6]">
                      Track, Manage, and Optimize Workflow Effortlessly with
                      Monitor Fly
                    </p>
                    <Link href={"/signup"} className=" btn-primary">
                      Create Account
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 md:block hidden ">
                  <div className="flex justify-end">
                    <Image
                      height={400}
                      width={400}
                      objectFit="cover"
                      alt="banner"
                      src="/banner-c3.png"
                      className="  h-[400px] rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: "url(/banner-img4.png)",
            }}
          >
            <div className="bg-black/20 py-10">
              <div className="md:flex container mx-auto  justify-between  px-4 sm:px-4 lg:px-8 ">
                <div className="md:w-1/2 flex items-center">
                  <div>
                    <h1 className="md:text-4xl text-2xl text-[#167BF4] font-bold">
                      Unlock your team&apos;s full potential <br /> with
                      Monitorfly
                    </h1>

                    <p className="md:py-10 py-4 font-medium md:text-lg text-[#167af4ab]">
                      Track, Manage, and Optimize Workflow Effortlessly with
                      Monitor Fly
                    </p>
                    <Link href={"/signup"} className=" btn-primary">
                      Create Account
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 md:block hidden ">
                  <div className="flex justify-end">
                    <Image
                      height={400}
                      width={400}
                      objectFit="cover"
                      alt="banner"
                      src="/banner-c4.png"
                      className="  h-[400px] rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: "url(/banner-img5.png)",
            }}
          >
            <div className="bg-black/20 py-10">
              <div className="md:flex container mx-auto  justify-between  px-4 sm:px-4 lg:px-8 ">
                <div className="md:w-1/2 flex items-center">
                  <div>
                    <h1 className="md:text-4xl text-2xl text-[#141314] font-bold">
                      Unlock your team&apos;s full potential <br /> with
                      Monitorfly
                    </h1>

                    <p className="md:py-10 py-4 font-medium md:text-lg text-[#131212b6]">
                      Track, Manage, and Optimize Workflow Effortlessly with
                      Monitor Fly
                    </p>
                    <Link href={"/signup"} className=" btn-primary">
                      Create Account
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 md:block hidden ">
                  <div className="flex justify-end">
                    <Image
                      height={400}
                      width={400}
                      objectFit="cover"
                      alt="banner"
                      src="/banner-c5.png"
                      className="  h-[400px] rounded-lg "
                    />
                  </div>
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
