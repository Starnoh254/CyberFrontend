import React from "react";
import { Link } from "react-scroll";

function Main() {
  return (
    <div className="flex flex-col bg-[rgba(24,23,23,1)] h-screen container mx-auto px-4 bg-[url('src/assets/pexels.png')] w-full max-w-[100vw] text-white ">
      {/* Navbar */}
      <div className="flex gap-4 ml-2 flex-2 mt-12 md:ml-20 md:mt-18 lg:ml-28 lg:mt-24">
        <div>
          <h1 className="font-montserrat font-bold text-base md:text-xl lg:text-2xl">
            Ali Cyber Services
          </h1>
        </div>

        <div className="flex flex-1 px-1 justify-center">
          <ul className="flex gap-5 font-montserrat font-medium text-base md:text-lg lg:text-xl">
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
      <div
        className="flex flex-col items-center justify-start 
  mt-20 sm:mt-32 md:mt-40 lg:mt-48 xl:mt-56 
  flex-1 
  px-5 sm:px-7 md:px-10 lg:px-16 xl:px-24"
      >
        <p className="font-montserrat font-bold text-2xl md:text-3xl lg:text-5xl">
          WELCOME TO ALI CYBER SERVICES
        </p>
        <p className="font-montserrat font-bold text-xl md:text-2xl lg:text-4xl">
          YOUR ONE-STOP CYBER SOLUTIONS HUB!
        </p>
        <p className="font-montserrat font-normal text-lg md:text-xl lg:text-2xl mt-6">
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
