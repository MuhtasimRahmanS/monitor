import React from "react";

const page = () => {
  return (
    <div className="container mx-auto md:py-32 py-6  text-center">
      <h1 className="md:text-4xl text-2xl px-5 font-bold pb-8 text-[#22B600]">
        Account Created Successfully
      </h1>
      <p className="md:text-xl text-lg px-5 font-medium ">
        Your account has been created successfully. You can now log in to your
        account using our desktop application.
      </p>

      <p className="py-10 px-5 md:text-4xl text-2xl font-bold">
        If you don&apos;t have the desktop application, download it here
      </p>
      <a
        href=""
        class="px-5 py-3 mt-6 rounded-full text-white font-semibold text-lg bg-[#167AF2]"
      >
        Download Monitorfly Desktop
      </a>
    </div>
  );
};

export default page;
