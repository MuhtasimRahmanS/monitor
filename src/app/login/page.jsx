"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    setLoginError("");
    setSuccess("");
    console.log(data);
  };
  return (
    <div className="min-h-[75vh]">
      <div>
        <div className="md:py-20 py-10">
          <div className="md:py-6 py-3 sm:mx-3 rounded-xl max-w-xl md:mx-auto border">
            <h1 className="text-3xl font-bold text-center ">
              Log into Monitorfly
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body  mx-auto"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "You must fill the email input",
                    },
                  })}
                  placeholder="email"
                  name="email"
                  className="input border-2 border-[#167BF4]"
                />
                <div>
                  {errors.email && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.email.message}
                    </p>
                  )}{" "}
                </div>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative form-control">
                  <input
                    type={showPass ? "text" : "password"}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "You must fill the password input",
                      },
                    })}
                    placeholder="password"
                    name="password"
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
                  {errors.password && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.password.message}
                    </p>
                  )}{" "}
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn-secondary">Login</button>
              </div>
            </form>
            {loginError && (
              <p className="text-red-600 text-sm font-medium text-center">
                {loginError}
              </p>
            )}
            {success && (
              <p className="text-green-600 text-sm font-medium text-center">
                {success}
              </p>
            )}
            <p className="text-center">
              Do not have an account,{" "}
              <Link
                href={"/signup"}
                className="text-blue-600 text-lg font-medium"
              >
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
