"use client";
import Image from "next/image";
import img1 from "../../public/img1.webp";
import img2 from "../../public/img2.webp";
import img3 from "../../public/img3.svg";
import img4 from "../../public/img4.webp";
import img5 from "../../public/img5.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Feature = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="p-4 lg:p-8 ">
        <div className="container mx-auto space-y-12">
          <div className="md:flex  overflow-hidden justify-between lg:flex-row">
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="md:w-1/2"
            >
              <Image src={img1} alt="" />
            </div>
            <div className="flex md:w-1/2  flex-col justify-center  p-6 ">
              <h3
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="feature-title"
              >
                Real-Time Tracking
              </h3>
              <h4
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="feature-sub"
              >
                Real-Time Tracking
              </h4>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="my-6 "
              >
                Monitor your team&apos;s progress with live updates. See who is
                working on what, track task completion, and ensure everyone is
                on the same page.
              </p>
            </div>
          </div>
          <div className="md:flex justify-between overflow-hidden  lg:flex-row-reverse">
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="md:w-1/2 flex justify-center"
            >
              <Image src={img2} alt="" />
            </div>
            <div className="flex md:w-1/2 flex-col justify-center  p-6 ">
              <h3
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="feature-title"
              >
                Were not reinventing the wheel
              </h3>
              <h4
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="feature-sub"
              >
                Efficient Task Management
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="my-6 "
              >
                Organize tasks, set priorities, and assign duties effortlessly.
                Our intuitive task management system helps you streamline
                workflows and boost productivity.
              </p>
            </div>
          </div>
          <div className="md:flex overflow-hidden justify-between lg:flex-row">
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="md:w-1/2"
            >
              <Image src={img3} alt="" />
            </div>
            <div className="flex md:w-1/2 flex-col justify-center  p-6 ">
              <h3
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="feature-title"
              >
                Automated Screenshots
              </h3>
              <h4
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="feature-sub"
              >
                Capture Screenshots Every 5 Minutes
              </h4>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="my-6 dark:text-gray-600"
              >
                Ensure accountability and transparency with our automated
                screenshot feature. Monitorfly captures screenshots every 5
                minutes, providing you with a visual record of your team&apos;s
                activities. This feature helps you track productivity, verify
                task progress, and ensure that work is being done efficiently.
              </p>
            </div>
          </div>
          <div className="md:flex overflow-hidden justify-between  lg:flex-row-reverse">
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="md:w-1/2"
            >
              <Image src={img4} alt="" />
            </div>
            <div className="flex md:w-1/2 flex-col justify-center  p-6 ">
              <h3
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="feature-title"
              >
                Visualize Employee Productivity
              </h3>
              <h4
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="feature-sub"
              >
                Get a Clear View of Your Team&apos;s Progress
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="my-6 "
              >
                With Monitorfly, you can easily visualize employee productivity
                on a daily timeline. This powerful feature allows you to track
                each team member&apos;s activities throughout the day, providing
                you with an in-depth understanding of how time is spent and
                where improvements can be made.
              </p>
            </div>
          </div>
          <div className="md:flex overflow-hidden justify-between  lg:flex-row">
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="md:w-1/2"
            >
              <Image src={img5} alt="" />
            </div>
            <div className="flex md:w-1/2 flex-col justify-center p-6">
              <h3
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="feature-title"
              >
                Reporting and Analytics
              </h3>
              <h4
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="feature-sub"
              >
                Insightful Reports and Analytics
              </h4>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="my-6 "
              >
                Generate detailed reports and analytics to evaluate performance.
                Use data-driven insights to make informed decisions and improve
                project outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
