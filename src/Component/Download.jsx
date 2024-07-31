"use client";
import icon from "../../public/download.png";
import Lottie from "lottie-react";
import animation from "../../public/download_animation.json";
import Image from "next/image";
const Download = () => {
  return (
    <div className="bg-[#f100580a] py-20 md:px-0 px-4 text-center">
      <div className="container mx-auto md:flex items-center justify-between">
        <div className="md:w-1/2 flex items-center">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="section-title "
            >
              Download Monitorfly
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="py-5 text-lg font-medium text-[#172C56]"
            >
              Get started with the ultimate work monitoring solution
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="py-5 mx-auto font-medium text-[#172C56]"
            >
              Transform your workflow and boost productivity with Monitorfly.
              Download now and join thousands of teams who trust our software
              for seamless project management and collaboration
            </p>

            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className=" px-2 py-2 mt-6 rounded-full bg-[#167AF2]"
            >
              <Image src={icon} alt="icon" />
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="w-96"
        >
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Download;
