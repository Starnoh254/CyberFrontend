import React from "react";

function Footer() {
  return (
    <div
      id="contact"
      className="bg-[url('src/assets/pexels2.png')] bg-[rgba(24,23,23,1)] text-white"
    >
      <div className="py-5 text-center">
        <h1 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl">
          Contact Us
        </h1>
        <div className="flex justify-center gap-4 mt-4">
          <img
            src="src/assets/facebook.png"
            className="lg:w-6 lg:h-6 w-4 h-4 "
          />
          <img
            src="src/assets/instagram.png"
            className="lg:w-6 lg:h-6 w-4 h-4"
          />
          <img src="src/assets/x.png" className="lg:w-6 lg:h-6 w-4 h-4" />
          <img src="src/assets/tiktok.png" className="lg:w-6 lg:h-6 w-4 h-4" />
        </div>

        <p className="font-montserrat font-bold text-base md:text-lg lg:text-xl mt-5">
          Designed by Starnoh John
        </p>
        <p className=" font-montserrat font-bold text-base md:text-lg lg:text-xl mt-3">
          +254 714 296 170
        </p>
      </div>
    </div>
  );
}

export default Footer;
