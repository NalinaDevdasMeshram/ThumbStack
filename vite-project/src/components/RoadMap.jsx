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
        "Apura IaaS is our service allowing customers to develop applications on our secured data ownership focused platform. ",
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
    <section className="">
      <Container>
        <h2 className="flex justify-center text-center font-medium text-3xl">
          Our Road to Creating Data <br />
          Ownership and Security
        </h2>
        <div className="px-8 py-12 flex flex-cols gap-6">
          <div className="">
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

          <div className="bg-[#EBEAE6] rounded-2xl text-center py-16 mt-20">
            <p className="text-2xl font-medium mb-6">
              Become a supporter and help us on our Journey
            </p>
            <button className="px-8 py-4 bg-[#F1FF66] rounded-lg font-medium hover:bg-yellow-300 transition">
              Read more how to →
            </button>
          </div>

          <div className="text-center mt-20 max-w-xl mx-auto space-y-4">
            <h4 className="text-2xl font-semibold">
              Subscribe to our Newsletter
            </h4>

            <p className="text-gray-600">
              If you want to follow our progress on developing what Europeans
              want and need, done by Europeans.
            </p>

            <div className="flex gap-4 mt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border px-4 py-3 rounded-lg"
              />

              <button className="px-6 py-3 bg-black text-white rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <h4>Subscribe to our Newsletter</h4>
        <p>
          If you want to follow our progress on developing what Europeans want
          and need, done by Europeans.
        </p>
        <input type="text" placeholder="Enter Your Email" />
        <button>Subscribe to our newsletter</button>
      </Container>
    </section>
  );
};

export default Roadmap;
