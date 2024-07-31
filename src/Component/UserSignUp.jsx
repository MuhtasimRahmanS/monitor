import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxios from "@/hook/useAxios";
import toast from "react-hot-toast";

const UserSignUp = ({ router }) => {
  const [showPass, setShowPass] = useState(false);
  const axios = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitUser = async (data) => {
    const { UserName, UserEmail, UserPassword } = data;
    const user = {
      UserName,
      UserEmail,
      UserPassword,
    };
    const userRes = await axios.post("/create-users", user);
    console.log(userRes.data);
    if (userRes.data.userId) {
      toast.success("Account Created Successfully");
      router.push("/download_login");
    }
  };
  return (
    <div>
      <div className=" md:py-20 py-10">
        <div className="md:py-6 py-3 sm:mx-3 rounded-xl max-w-xl md:mx-auto border">
          <h1 className="text-3xl font-bold text-center ">
            Create User Account
          </h1>
          <form
            onSubmit={handleSubmit(onSubmitUser)}
            className="card-body  mx-auto"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("UserName", {
                  required: {
                    value: true,
                    message: "You must fill the name input",
                  },
                })}
                placeholder="Name"
                className="input border-2 border-[#167BF4]"
              />
              <div>
                {errors.UserName && (
                  <p className="text-red-600 text-sm font-medium mt-2">
                    {errors.UserName.message}
                  </p>
                )}{" "}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("UserEmail", {
                  required: {
                    value: true,
                    message: "You must fill the email input",
                  },
                })}
                placeholder="Email"
                className="input border-2 border-[#167BF4]"
              />
              <div>
                {errors.UserEmail && (
                  <p className="text-red-600 text-sm font-medium mt-2">
                    {errors.UserEmail.message}
                  </p>
                )}{" "}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative form-control">
                <input
                  type={showPass ? "text" : "password"}
                  {...register("UserPassword", {
                    required: {
                      value: true,
                      message: "You must fill the password input",
                    },
                    minLength: {
                      value: 6,
                      message: "Length must be at least 6 character",
                    },
                  })}
                  placeholder="Password"
                  className="input border-2 border-[#167BF4]"
                />
                <span
                  className="absolute right-4 top-1/3"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div>
                {errors.UserPassword && (
                  <p className="text-red-600 text-sm font-medium mt-2">
                    {errors.UserPassword.message}
                  </p>
                )}{" "}
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn-secondary">Register</button>
            </div>
          </form>
          <div className="text-center">
            <p>
              Already have an account,{" "}
              <Link
                href={"/login"}
                className="text-blue-600 text-lg font-medium"
              >
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
