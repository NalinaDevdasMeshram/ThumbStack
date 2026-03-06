import React from "react";
import Container from "../layout/Container.jsx";
const Products = () => {
  const products = [
    {
      title: "Runs safely.",
      subtitle: "Apura IaaS.",
      description:
        "Apura IaaS is our service allowing customers to develop applications on our secured data ownership focused platform. ",
      buttonText: "Read More →",
      buttonTextdemo: "Book a demo",
    },
    {
      title: "Work privately.",
      subtitle: "Apura Workspace.",
      description:
        "Apura Workspace is our alternative for Google workspace or Microsoft Teams. Giving the tools to effectively communicate with your organization without compromising on security and privacy.",
      buttonText: "Read More →",
    },
    {
      title: "share confidently.",
      subtitle: "Apura Socials.",
      description:
        "Apura Workspace is our alternative for Google workspace or Microsoft Teams. Giving the tools to effectively communicate with your organization without compromising on security and privacy. ",
      buttonText: "Read More →",
    },
  ];
  return (
    <section className="py-20">
      <p className="px-8 font-medium mb-10">Our products</p>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${index === 0 ? "bg-[#F1FF66]" : "bg-[#F5F5F5]"}  rounded-2xl p-4 py-10 flex flex-col justify-between 
              min-h-[380px] cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="space-y-4 px-2">
                <p className="text-gray-500 font-medium text-2xl">
                  {product.title}
                </p>
                <h3 className="text-2xl font-semibold">{product.subtitle}</h3>
                <p className="text-black-500 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-8">
                <button
                  className={`${index === 0 ? "bg-white" : "bg-gray-200"} border border-gray-300 px-5 py-2 rounded-lg cursor-pointer hover:bg-black hover:text-white transition`}
                >
                  {product.buttonText}
                </button>
                {product.buttonTextdemo && (
                  <button className="bg-black text-white border border-gray-300 px-5 py-2 rounded-lg cursor-pointer hover:bg-black hover:text-white transition">
                    {product.buttonTextdemo}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
