"use client";
import Lottie from "lottie-react";
import animation from "../../public/create_account.json";
import Link from "next/link";
const Create_Account = () => {
  return (
    <div className="bg-[#f100580a] md:px-0 px-4 py-5 text-center">
      <div className="container mx-auto  md:flex  justify-between">
        <div className="md:w-1/2 flex items-center">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="section-title"
            >
              Get Started with Monitorfly Today
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="py-5 text-lg font-medium text-[#172C56]"
            >
              Join thousands of teams who are transforming their workflow and
              achieving more.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="py-5   text-[#172C56]"
            >
              Sign up now to streamline your team&apos;s workflow and boost
              productivity. Join Monitorfly in just a few clicks to access
              powerful task management tools, real-time tracking, and seamless
              collaboration features. Start optimizing your workday today!
            </p>
            <Link
              href={"/signup"}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="btn-secondary mt-5"
            >
              Create Account
            </Link>
          </div>
        </div>
        <div className=" w-96">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Create_Account;
