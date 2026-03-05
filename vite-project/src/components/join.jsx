import React from "react";

const join = () => {
  return (
    <div className="m-10 text-[#242424]">
      <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto">
        <p className="text-[30px]">Join the future of data sovereignty </p>
        <input
          type="text"
          placeholder="Enter your Email"
          className=" abosulate border border-none bg-[#EBEAE6] rounded-md px-4 py-1 focus:outline-none"
        />
        <button className="relative rounded-full hover:bg-blue-600">
          join
        </button>
      </div>
      <hr className="w-full border-gray-300 mt-10" />
      <p className="text-[#242424] text-[35px] font-medium text-gray-700 mt-5 loading-[0.5] px-12">
        APURA is an ecosystem <br />
        dedicated to the privacy and <br />
        security of their users; <br />
        completely build from scratch.
      </p>
      <hr className="w-full border-gray-300 mt-10" />
    </div>
  );
};

export default join;
