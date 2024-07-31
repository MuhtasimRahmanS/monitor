import Link from "next/link";
import logo from "../../public/Monitorfly copy.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer className="py-6 bg-cyan-950 text-white">
        <div className="container px-6 mx-auto space-y-6  md:space-y-12 ">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex justify-center space-x-3 md:justify-start"
              >
                <Image height={180} width={200} src={logo} alt="" />
              </a>
              <p className="text-lg font-medium py-5 md:text-left text-center">
                {" "}
                Ensuring your team meets achieves their goals.
              </p>
              <div className="w-full flex">
                <button className="btn-primary">
                  Start Your Free Trial Today
                </button>
              </div>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <ul className="space-y-3 font-medium">
                <li>
                  <Link href={"/"}> Home</Link>
                </li>
                <li>
                  <Link href={"/"}> Pricing</Link>
                </li>
                <li>
                  <Link href={"/"}> Download</Link>
                </li>
                <li>
                  <Link href={"/"}> About Us</Link>
                </li>
                <li>
                  <Link href={"/"}> Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-6 text-center  md:text-left md:col-span-3">
              <ul className="space-y-3 font-medium">
                <li>
                  <Link href={"/"}> Blog</Link>
                </li>
                <li>
                  <Link href={"/"}> Terms of service</Link>
                </li>
                <li>
                  <Link href={"/"}> Support</Link>
                </li>
                <li>
                  <Link href={"/"}> Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"/"}> Link</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer bg-cyan-950 text-white text-center font-medium footer-center  p-4">
            <aside>
              <p>
                Copyright © ${new Date().getFullYear()} - All right reserved by
                Monitorfly
              </p>
            </aside>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
