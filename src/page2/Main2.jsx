import React from "react";

function Main() {
  return (
    <div className="bg-[rgba(24,23,23,1)] text-white h-screen flex flex-col">
      <div className="flex flex-col justify-start mt-11">
        <h1 className="font-montserrat font-bold text-6xl">Who are we ?</h1>
        <p className="font-montserrat font-normal text-3xl mt-5">
          We are your trusted partner in cyber services, photography, and
          computer repair! Since our establishment, we have been committed to
          providing fast, reliable, and high-quality services to individuals and
          businesses alike.
        </p>
      </div>

      <div className="flex flex-col mt-11">
        <h1 className="font-montserrat font-bold text-6xl">Why Choose us ?</h1>
        <ul className="font-montserrat font-normal text-3xl mt-5">
          <li>✅ 5+ Years of Experience in the industry</li>
          <li>✅ 1,500+ Satisfied Customers served and counting!</li>
          <li>✅ 10,000+ Documents Printed & Processed</li>
          <li>✅ 500+ Successful Computer Repairs</li>
          <li>✅ 300+ Photography Projects Completed</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
