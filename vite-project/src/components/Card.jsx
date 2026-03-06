import React from "react";
import Container from "../layout/Container.jsx";
import { TfiStar } from "react-icons/tfi";
const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#242424] rounded-2xl p-8 gap-6 m-8">
      <Container className="flex justify-between gap-6">
        <div>
          <p className="text-white">About us</p>
          <h5 className="text-[#F1FF66]">
            By Europeans,
            <br />
            for Europeans
          </h5>
          <p className="max-w-xl mx-auto text-sm text-white">
            Our vision is to empower governments, organizations and individuals
            with control and independence in the online realm.
          </p>
          <button className="px-2 py-2 bg-[#F1FF66] cursor-pointer rounded-md hover:bg-amber-200">
            Read more about us →
          </button>
        </div>
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg">
          <TfiStar className="text-black text-2xl" />
        </div>
      </Container>
    </div>
  );
};

export default Card;
