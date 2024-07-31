"use client";
import React from "react";
import Lottie from "lottie-react";
import contactPic from "../../public/contact.json";

const Contact = () => {
  const handelContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const contact = {
      name,
      email,
      message,
    };
    console.log(contact);
  };
  return (
    <div>
      <div className="grid container items-center grid-cols-1 gap-8 px-4 py-16 mx-auto md:grid-cols-2 ">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="section-title"
            >
              Contact Us
            </h2>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Welcome to Monitorfly! We&apos;re here to help. Whether you have a
              question about features, trials, pricing, or anything else, our
              team is ready to answer all your questions.
            </div>
          </div>
          <Lottie
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
            animationData={contactPic}
            loop={true}
          />
        </div>
        <form
          onSubmit={handelContact}
          data-aos="flip-right"
          data-aos-duration="1200"
          data-aos-delay="500"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded-xl border-2 border-[#167AF2]"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="w-full p-3 rounded-xl border-2 border-[#167AF2] "
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="3"
              className="w-full p-3 rounded-xl border-2 border-[#167AF2]"
            ></textarea>
          </div>
          <button type="submit" className="btn-secondary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
