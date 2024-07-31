"use client";
import { useState } from "react";
import logo from "../../public/Monitorfly copy.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  const pathname = usePathname();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Feature",
      path: "/feature",
    },
    {
      title: "Review",
      path: "/review",
    },
    {
      title: "FAQ",
      path: "/faq",
    },
    ,
    {
      title: "Download",
      path: "/download",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      <nav className="text-[#675885]">
        <div className="container mx-auto py-2 px-4 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-12 md:h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <a href="/" className=" font-bold text-3xl">
                  <Image height={50} width={200} src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-5 ">
                {links?.map((link) => (
                  <Link
                    className={`${
                      pathname === link.path
                        ? " font-medium text-[#F10058]"
                        : "  font-medium text-[#147CF7]"
                    }`}
                    key={link.path}
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link className="btn-secondary" href={"/login"}>
                  Login
                </Link>
                <Link className="btn-primary" href={"/signup"}>
                  Sign Up
                </Link>
              </div>
            </div>
            <div className=" md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-[#675885] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#675885]"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden container ">
            <div className="px-2  pb-3 space-y-1 sm:px-3">
              {links?.map((link) => (
                <Link
                  className={`${
                    pathname === link.path
                      ? " block  font-medium text-[#F10058]"
                      : "block  font-medium text-[#147CF7]"
                  }`}
                  key={link.path}
                  href={link.path}
                >
                  {link.title}
                </Link>
              ))}
              <Link className="btn-secondary block" href={"/login"}>
                Login
              </Link>
              <Link className="btn-primary block" href={"/signup"}>
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
