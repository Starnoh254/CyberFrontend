import React from "react";
import Card from "./Card";

function Main3() {
  let cyberServices = {
    title: "Cyber Services",
    services: [
      "Ecitizen Services",
      "NTSA Services",
      "Passport Application Services",
      "KRA Returns Filing",
    ],
    phone : "+254 714 296 170"
  };
  let laptopServices = {
    title: "Laptop Repair",
    services: ["Software Repair", "Hardware Repair", "SSD", "HHD Repair"],
    phone: "+254 703 158 386",
  };
  let photographyServices = {
    title: "Photography",
    services: ["Editing", "Personal Use", "Events", "Business"],
    phone: "+254 792 020 358",
  };
  return (
    <div className="h-screen bg-[rgba(24,23,23,1)] bg-[url('src/assets/lapi.png')] flex flex-col py-10">
      <h1 className="font-montserrat font-bold text-6xl mt-11 text-white">
        Services
      </h1>

      <div id="services" className="flex justify-center gap-10 mt-10">
        <Card jobInfo={cyberServices} />
        <Card jobInfo={laptopServices} />
        <Card jobInfo={photographyServices} />
      </div>
    </div>
  );
}

export default Main3;
