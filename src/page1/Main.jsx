import React from "react";

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
          <ul className="flex gap-4 font-montserrat font-medium text-xl">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Welcome Section - Takes Remaining Space */}
      <div className="flex flex-col items-center justify-start mt-40 flex-1">
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
