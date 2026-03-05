import React from "react";
import Container from "../layout/Container.jsx";
const Products = () => {
  return (
    <section>
      <p className="px-8 font-medium">Our products</p>
      <Container>
        <div className="grid grid-1 md:grid-2 lg:grid-4 py-20">
          <div className="w-auto h-[460px] bg-[#F5F5F5] rounded-[20px] p-8 flex flex-col justify-center items-start gap-4">
            <h1 className="text-gray-500 font-medium">Runs safely.</h1>
            <h4>Apura Iaas</h4>
            <p>
              Apura IaaS is our service allowing customers to develop
              applications on our secured data ownership focused platform. 
            </p>
            <div className="flex flex-col items-center">
              <button className="mt-[50px]">Read More → </button>
              <button className="">Book a demo</button>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
