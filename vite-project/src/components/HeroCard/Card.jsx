import React from "react";
import Container from "../../layout/Container.jsx";
import StarCircle from "./Startcircle.jsx";
import MapLink from "../../assets/Europan.png";
const Card = () => {
  return (
    <section className="px-6 py-16">
      <div className="bg-[#1f1f1f] rounded-3xl py-16 relative overflow-hidden">
        <Container className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* left content */}
          <div className="space-y-6 max-w-lg z-10">
            <p className="text-white">About us</p>
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
          <div className="absolute right-[150px] bottom-[300px] opacity-20 pointer-events-none">
            <img
              src={MapLink}
              alt="Refresh"
              className="w-[600px] opacity-20 mix-blend-lighten md:grid grid-cols-1 hidden"
            />
          </div>
          <div>
            <StarCircle />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Card;
