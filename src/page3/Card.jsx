import React from "react";

function Card({ jobInfo }) {
  return (
    <div className="bg-white px-4 py-11 rounded-lg">
      <h1 className="font-montserrat font-extrabold text-4xl m-2">
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
                  className="w-4 h-4 mt-1"
                />
                <span className="font-montserrat font-normal text-xl ml-4">
                  {service}
                </span>
              </div>
            );
          })}
        </li>
      </ul>
      <div className="flex mt-10">
        <img src="src/assets/whatsapp.png" alt="" className="mt-2" />
        <span className="font-montserrat font-bold text-xl ml-3 mt-4 text-myGreen">
          {jobInfo.phone}
        </span>
      </div>
    </div>
  );
}

export default Card;
