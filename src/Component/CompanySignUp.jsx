import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxios from "@/hook/useAxios";
import toast from "react-hot-toast";

const CompanySignUp = ({ router }) => {
  const [showPass, setShowPass] = useState(false);
  const axios = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitCompany = async (data) => {
    const {
      CompanyName,
      CompanyEmail,
      Address,
      PhoneNumber,
      Website,
      TotalEmployees,
      FoundedYear,
      Industry,
      Revenue,
      Description,
      Password,
    } = data;

    const company = {
      CompanyName,
      CompanyEmail,
      Address,
      PhoneNumber,
      Website,
      Description,
      TotalEmployees,
      FoundedYear,
      Industry,
      Revenue,
      Password,
    };
    console.log(company);
    const companyRes = await axios.post("/register-company", company);
    console.log(companyRes.data);
    if (companyRes.data.companyId) {
      toast.success("Account Created Successfully");
      router.push("/download_login");
    }
  };

  return (
    <div>
      <div className=" md:py-20 py-10">
        <div className="md:py-6 py-3 sm:mx-3 rounded-xl max-w-5xl md:mx-auto border">
          <h1 className="text-3xl font-bold text-center ">
            Create Company Account
          </h1>
          <form
            onSubmit={handleSubmit(onSubmitCompany)}
            className="card-body  mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  {...register("CompanyName", {
                    required: {
                      value: true,
                      message: "You must fill the Company Name input",
                    },
                  })}
                  placeholder="Company Name"
                  className="input border-2 border-[#167BF4]"
                />
                <div>
                  {errors.CompanyName && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.CompanyName.message}
                    </p>
                  )}{" "}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Email</span>
                </label>
                <input
                  type="email"
                  {...register("CompanyEmail", {
                    required: {
                      value: true,
                      message: "You must fill the email input",
                    },
                    validate: (value) =>
                      value.includes(".") ||
                      "Email address must contain a dot (.)",
                  })}
                  placeholder="Company Email"
                  className="input border-2 border-[#167BF4]"
                />
                <div>
                  {errors.CompanyEmail && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.CompanyEmail.message}
                    </p>
                  )}{" "}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  {...register("Address", {
                    required: {
                      value: true,
                      message: "You must fill the address input",
                    },
                  })}
                  placeholder="Address"
                  className="input border-2 border-[#167BF4]"
                />
                <div>
                  {errors.Address && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.Address.message}
                    </p>
                  )}{" "}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  {...register("PhoneNumber", {
                    required: {
                      value: true,
                      message: "You must fill the phone number input",
                    },
                  })}
                  placeholder="Phone Number"
                  className="input border-2 border-[#167BF4]"
                />
                <div>
                  {errors.PhoneNumber && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.PhoneNumber.message}
                    </p>
                  )}{" "}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Website</span>
                </label>
                <input
                  type="text"
                  {...register("Website", {
                    required: {
                      value: true,
                      message: "You must fill the website input",
                    },
                    validate: (value) =>
                      value.includes(".") ||
                      "Website name must contain a dot (.)",
                  })}
                  placeholder="Website"
                  className="input border-2 border-[#167BF4]"
                />
                <div>
                  {errors.Website && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.Website.message}
                    </p>
                  )}{" "}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Employees</span>
                </label>
                <input
                  type="number"
                  {...register("TotalEmployees", {
                    required: {
                      value: true,
                      message: "You must fill the total employees input",
                    },
                  })}
                  placeholder="Total Employees"
                  className="input border-2 border-[#167BF4]"
                />
                <div>
                  {errors.TotalEmployees && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.TotalEmployees.message}
                    </p>
                  )}{" "}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Established in</span>
                </label>
                <input
                  type="number"
                  {...register("FoundedYear", {
                    required: {
                      value: true,
                      message: "You must fill the established in input",
                    },
                  })}
                  placeholder="Established in"
                  className="input border-2 border-[#167BF4]"
                />
                <div>
                  {errors.FoundedYear && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.FoundedYear.message}
                    </p>
                  )}{" "}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Industry Type</span>
                </label>
                <input
                  type="text"
                  {...register("Industry", {
                    required: {
                      value: true,
                      message: "You must fill the industry type input",
                    },
                  })}
                  placeholder="Industry Type"
                  className="input border-2 border-[#167BF4]"
                />
                <div>
                  {errors.Industry && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.Industry.message}
                    </p>
                  )}{" "}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Revenue Per Year</span>
                </label>
                <input
                  type="number"
                  {...register("Revenue", {
                    required: {
                      value: true,
                      message: "You must fill the established in input",
                    },
                  })}
                  placeholder="Revenue Per Year"
                  className="input border-2 border-[#167BF4]"
                />
                <div>
                  {errors.Revenue && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.Revenue.message}
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
                    {...register("Password", {
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
                  {errors.Password && (
                    <p className="text-red-600 text-sm font-medium mt-2">
                      {errors.Password.message}
                    </p>
                  )}{" "}
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">About Company</span>
              </label>
              <textarea
                type="text"
                {...register("Description", {
                  required: {
                    value: true,
                    message: "You must fill the about company input",
                  },
                })}
                placeholder="About Company"
                className="textarea h-24 border-2 border-[#167BF4]"
              />
              <div>
                {errors.Description && (
                  <p className="text-red-600 text-sm font-medium mt-2">
                    {errors.Description.message}
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

export default CompanySignUp;
