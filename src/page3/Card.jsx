import React from "react";

function Card({ title, services }) {
  return (
    <div className="bg-white px-4 py-11 rounded-lg">
      <h1 className="font-montserrat font-extrabold text-4xl m-2">
        {title}
      </h1>
      <ul>
        <li>
            {services.map((service) => {
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
    </div>
  );
}

export default Card;
