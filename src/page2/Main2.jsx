import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // 👈 Detects if an element is visible

function Counter({ end }) {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <span ref={ref}>{inView ? <CountUp end={end} duration={3} /> : 0}</span>
  );
}

function Main() {
  return (
    <div
      id="about"
      className="bg-[rgba(24,23,23,1)] text-white relative h-screen w-full flex flex-col bg-[url('src/assets/image5.png')]"
    >
      <div className="flex flex-col justify-start mt-11">
        <h1 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-5xl">
          Who are we?
        </h1>
        <p className="font-montserrat font-normal text-lg md:text-xl lg:text-2xl mt-5 px-8">
          We are your trusted partner in cyber services, photography, and
          computer repair! Since our establishment, we have been committed to
          providing fast, reliable, and high-quality services to individuals and
          businesses alike.
        </p>
      </div>

      <div className="flex flex-col mt-11">
        <h1 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-5xl">
          Why Choose us?
        </h1>
        <ul className="font-montserrat font-normal text-lg md:text-xl lg:text-2xl mt-5">
          <li>
            ✅ <Counter end={500} />+ Years of Experience in the industry
          </li>
          <li>
            ✅ <Counter end={1500} />+ Satisfied Customers served and counting!
          </li>
          <li>
            ✅ <Counter end={10000} />+ Documents Printed & Processed
          </li>
          <li>
            ✅ <Counter end={500} />+ Successful Computer Repairs
          </li>
          <li>
            ✅ <Counter end={300} />+ Photography Projects Completed
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
