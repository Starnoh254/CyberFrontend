import React from "react";
import { Link } from "react-scroll";

function Main() {
  return (
    <div className="flex flex-col bg-[rgba(24,23,23,1)] h-screen bg-[url('src/assets/pexels.png')] text-white">
      {/* Navbar */}
      <div className="flex ml-28 mt-24">
        <div>
          <h1 className="font-montserrat font-bold text-2xl">
            Ali Cyber Services
          </h1>
        </div>

        <div className="flex flex-1 justify-center">
          <ul className="flex gap-5 font-montserrat font-medium text-xl">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="relative text-white font-semibold cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="relative text-white font-semibold cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="relative text-white font-semibold cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Welcome Section - Takes Remaining Space */}
      <div className="flex flex-col items-center justify-start mt-40 flex-1 px-7">
        <p className="font-montserrat font-bold text-6xl">
          WELCOME TO ALI CYBER SERVICES
        </p>
        <p className="font-montserrat font-bold text-5xl">
          YOUR ONE-STOP CYBER SOLUTIONS HUB!
        </p>
        <p className="font-montserrat font-normal text-2xl mt-6">
          At Ali CYBER Services, we provide top-notch cyber services to make
          your life easier and more productive. Whether you need professional
          photography, reliable computer repair, or essential cyber café
          services, we've got you covered!
        </p>
      </div>
    </div>
  );
}

export default Main;
