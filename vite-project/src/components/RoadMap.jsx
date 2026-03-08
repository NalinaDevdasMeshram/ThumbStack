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
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Container>
        <h2 className="text-3xl text-center font-bold">
          Our Road to Creating Data Ownership and Security
        </h2>

        <div className="space-y-6">
          <div className="flex flex-col gap-6">
            {DataStage.map((item, index) => (
              <div key={index} className="flex">
                <p>{item.stage}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button>{item.buttonText}</button>
              </div>
            ))}
          </div>
          <div>
            <p>Become a supporter and help us on our Journey </p>
            <button>Read more how to →</button>
          </div>
          <div>
            <h4>Subscribe to our Newsletter</h4>
            <p>
              If you want to follow our progress on developing what Europeans
              want and need, done by Europeans.
            </p>
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe to our newsletter</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;
