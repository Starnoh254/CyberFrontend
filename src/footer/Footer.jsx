import React from "react";

function Footer() {
  return (
    <div className="bg-[url('src/assets/pexels2.png')] bg-[rgba(24,23,23,1)] text-white">
      <div className="py-5 text-center">
        <h1 className="font-bold text-4xl">Contact Us</h1>
        <div className="flex justify-center gap-4 mt-4">
          <img src="src/assets/facebook.png" className="w-6 h-6" />
          <img src="src/assets/instagram.png" className="w-6 h-6" />
          <img src="src/assets/x.png" className="w-6 h-6" />
          <img src="src/assets/tiktok.png" className="w-6 h-6" />
        </div>

        <p className="font-bold text-xl mt-5">Designed by Starnoh John</p>
        <p className=" text-xl mt-3">+254 714 296 170</p>
      </div>
    </div>
  );
}

export default Footer;
