import React from "react";
import Container from "../layout/Container.jsx";
const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center text-center mt-[200px]">
          <h1 className="text-start text-[36px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1]">
            By Europeans, for Europeans
          </h1>
          <p className="max-w-[640px] mx-auto mt-6 text-[18px] font-normal">
            Privacy and security that Europeans need, demand and expect. Without
            giving other nations control over our data.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
