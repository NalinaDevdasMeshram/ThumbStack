import React from "react";
import Container from "../layout/Container.jsx";

const Feature = () => {
  const data = [
    {
      title: "No interference",
      desc: "No third-party interference",
    },
    {
      title: "1st cloud platform",
      desc: "To allow data control and ownership",
    },
    {
      title: "1st cloud infrastructure",
      desc: "Transparency of data over your data streams",
    },
    {
      title: "Dynamic infrastructure",
      desc: "Cloud, hybrid, or on-prem form",
    },
  ];
  return (
    <section className="mt-[90px] md:mt-[250px] lg:mt-[300px] pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data.map((item, index) => (
            <div key={index}>
              <div className="border-t border-black w-20 md:w-24 lg:w-32 mb-4"></div>

              <h4 className="font-semibold text-xs md:text-sm">{item.title}</h4>

              <p className="text-[11px] md:text-xs text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Feature;
