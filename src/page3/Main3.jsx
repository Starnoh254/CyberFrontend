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
  };
  let laptopServices = {
    title: "Laptop Repair",
    services: ["Software Repair", "Hardware Repair", "SSD", "HHD Repair"],
  };
  let photographyServices = {
    title: "Photography",
    services: ["Editing", "Personal Use", "Events", "Business"],
  };
  return (
    <div className="h-screen bg-[rgba(24,23,23,1)] bg-[url('src/assets/lapi.png')] flex flex-col py-10">
      <h1 className="font-montserrat font-bold text-6xl mt-11 text-white">
        Services
      </h1>

      <div className="flex justify-center gap-10 mt-10">
        <Card title={cyberServices.title} services={cyberServices.services} />
        <Card title={laptopServices.title} services={laptopServices.services} />
        <Card
          title={photographyServices.title}
          services={photographyServices.services}
        />
      </div>
    </div>
  );
}

export default Main3;
