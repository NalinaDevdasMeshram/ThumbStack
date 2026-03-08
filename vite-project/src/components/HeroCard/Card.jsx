import React from "react";
import Container from "../../layout/Container.jsx";
import StarCircle from "./Startcircle.jsx";
import MapLink from "../../assets/Europan.png";
const Card = () => {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl p-10 m-8">
      <Container className="grid md:grid-cols-2 items-center gap-10">
        {/* left content */}
        <div className="space-y-6">
          <p className="text-white text-sm">About us</p>
          <h5 className="text-4xl md:text-5xl font-semibold text-[#E6FF63] leading-tight">
            By Europeans,
            <br />
            for Europeans
          </h5>
          <p className="text-gray-300 max-w-md text-medium">
            Our vision is to empower governments, <br />
            organizations and individuals with control <br />
            and independence in the online realm.
          </p>
          <button className="px-5 py-3 text-medium font-medium bg-[#F1FF66] rounded-2xl hover:bg-yellow-200 cursor-pointer">
            Read more about us →
          </button>
        </div>
        <div className="relative flex item-center justify-center">
          <img
            src={MapLink}
            alt="Refresh"
            className="flex w-[420px] md:w-[480px]"
          />
          <StarCircle className="absolute w-20 h-15" />
        </div>
      </Container>
    </div>
  );
};

export default Card;
