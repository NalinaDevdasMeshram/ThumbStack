import { TfiStar } from "react-icons/tfi";
import React from "react";
const StarCircle = ({ count = 12, radius = 120 }) => {
  return (
    <div className="relative w-[300px] h-[300px]">
      {[...Array(count)].map((_, i) => {
        const angle = (360 / count) * i;

        return (
          <TfiStar
            key={i}
            className="absolute text-black text-white right-[300px] bottom-[100px] pointer-events-none md:grid grid-cols-1 hidden"
            style={{
              top: "-20%",
              right: "-250%",
              transform: `
                rotate(${angle}deg)
                translate(${radius}px)
                rotate(-${angle}deg)
              `,
              transformOrigin: "0 0",
            }}
          />
        );
      })}
    </div>
  );
};

export default StarCircle;
