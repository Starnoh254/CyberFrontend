import React from "react";

function Card({ jobInfo }) {
  return (
    <div className="bg-white flex-1 px-1 md:px-3 lg:px-4 lg:py-11 md:py-8 rounded-lg">
      <h1 className="font-montserrat font-extrabold text-base md:text-2xl lg:text-4xl m-2">
        {jobInfo.title}
      </h1>
      <ul>
        <li>
          {jobInfo.services.map((service) => {
            return (
              <div className="flex mt-10">
                <img
                  src="src/assets/check.png"
                  alt=""
                  className=" w-0 lg:w-4 h-4 mt-1"
                />
                <span className="font-montserrat font-normal text-sm md:text-lg lg:text-xl ml-1 md:ml-3 lg:ml-4">
                  {service}
                </span>
              </div>
            );
          })}
        </li>
      </ul>
      <div className="flex mt-10">
        <img src="src/assets/whatsapp.png" alt="" className="w-0 lg:w-auto h-auto mt-2 " />
        <span className="font-montserrat font-bold text-xs md:text-lg lg:text-xl ml-1 md:ml-2 lg:ml-3 mt-4 text-myGreen">
          {jobInfo.phone}
        </span>
      </div>
    </div>
  );
}

export default Card;
