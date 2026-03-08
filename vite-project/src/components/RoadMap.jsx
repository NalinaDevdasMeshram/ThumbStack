import React from "react";
import Container from "../layout/Container";

const Roadmap = () => {
  const DataStage = [
    {
      stage: "Stage 1",
      title: "Cloud Infrastructure",
      description: "",
      buttonText: "Book a demo →",
    },
    {
      stage: "Stage 2",
      title: "Collaboration",
      description: "EU alternative to GoogleWorkspace Teams, Meet a.o.",
      buttonText: "Try it →",
      highlight: true,
      tag: "In Pilot",
      background: "bg-[#F1FF66]",
    },
    {
      stage: "Stage 3",
      title: "Communication",
      description:
        "Apura IaaS is our service allowing customers to develop applications on our secured data ownership focused platform.",
      buttonText: "coming soon",
    },
    {
      stage: "Stage 4",
      title: "connectivity",
      description: "EU alternative to LinkedIn, Instagram",
      buttonText: "coming soon",
    },
    {
      stage: "Stage 5",
      title: "Entertainment",
      description: "EU alternative to Spotify, Netflix",
      buttonText: "coming soon",
    },
  ];
  return (
    <section>
      <Container>
        <h2 className="flex justify-center text-center font-medium text-3xl">
          Our Road to Creating Data <br />
          Ownership and Security
        </h2>
        <div className="px-8 py-12 flex flex-cols gap-6">
          <div>
            {DataStage.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-12 items-center gap-6 px-4 py-2 rounded-2xl border-b
                     ${item.highlight ? "bg-[#F1FF66] border-none" : "border-gray-300"}`}
              >
                {/* Stage */}
                <div className="col-span-2 text-gray-500 font-medium">
                  {item.stage}
                  {item.tag && <p className="text-xs mt-1">{item.tag}</p>}
                </div>
                {/* Title */}
                <div className="col-span-3 font-semibold text-lg">
                  {item.title}
                </div>
                {/* Description */}
                <div className="col-span-4 text-sm text-gray-600">
                  {item.description}
                </div>
                {/* Action */}
                <div className="col-span-3 flex justify-end items-center gap-4">
                  {item.buttonText && (
                    <button className="border px-4 py-2 rounded-md text-sm hover:bg-black hover:text-white transition">
                      {item.buttonText}
                    </button>
                  )}
                  {item.status && (
                    <span className="text-sm text-gray-400">{item.status}</span>
                  )}
                  <span className="text-xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[#242424] bg-[#EBEAE6] px-10 py-16 text-center text-xl font-bold">
          <p>Become a supporter and help us on our Journey</p>
          <button className="border border-black-300 rounded-md cursor-pointer hover:bg-[#eaebda] px-10 py-4 m-10 text-sm">
            Read more about how to →
          </button>
        </div>
        <div className="flex justify-between items-center bg-[#F1FF66] px-8 py-4">
          <div>
            <h4 className="font-medium text-2xl">
              Subscribe to our Newsletter
            </h4>
            <p className="py-4">
              If you want to follow our progress on developing what Europeans
              <br />
              want and need, done by Europeans.
            </p>
          </div>
          <div className="p-8">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border border-e-black px-12 py-4 rounded-l focus:inline"
            />
            <button className="border border-e-black p-4 rounded-md cursor-pointer bg-white">
              Subscribe to our Newsletter
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;
