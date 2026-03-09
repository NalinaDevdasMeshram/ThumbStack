import React from "react";
import Maplink from "../assets/Europan.png";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import StarCircle from "./HeroCard/Startcircle";

const Footer = () => {
  const iconStyle =
    "bg-[#F1FF66] text-black p-2 y-8 text-3xl rounded-full cursor-pointer hover:scale-110 transition";
  return (
    <footer className="relative bg-[#242424]  text-white py-20 overflow-hidden">
      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Title */}
        <h4 className="text-lg font-semibold tracking-wide mb-10">
          APURA CLOUD
        </h4>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 cursor-pointer">
          <ul className="space-y-2">
            <li className="text-gray-400 mb-3">Products</li>
            <li className="hover:text-[#F1FF66] transition">Apura IaaS</li>
            <li className="hover:text-[#F1FF66] transition">Apura Workspace</li>
            <li className="hover:text-[#F1FF66] transition">Apura Socials</li>
          </ul>

          <ul className="space-y-2">
            <li className="text-gray-400 mb-3">Roadmap</li>
            <li className="hover:text-[#F1FF66] transition">Stage 1</li>
            <li className="hover:text-[#F1FF66] transition">Stage 2</li>
            <li className="hover:text-[#F1FF66] transition">Stage 3</li>
            <li className="hover:text-[#F1FF66] transition">Stage 4</li>
            <li className="hover:text-[#F1FF66] transition">Stage 5</li>
          </ul>

          <ul className="space-y-2">
            <li className="hover:text-[#F1FF66] transition">
              Help us on our journey
            </li>
            <li className="hover:text-[#F1FF66] transition">
              Terms & Conditions
            </li>
            <li className="hover:text-[#F1FF66] transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-10">
          <RiFacebookFill className={iconStyle} />
          <IoLogoInstagram className={iconStyle} />
          <CiTwitter className={iconStyle} />
          <CiYoutube className={iconStyle} />
        </div>

        {/* Copyright */}
        <p className="text-sm mt-6 text-gray-400">
          © 2025 APURA Cloud. All rights reserved.
        </p>
      </div>

      {/* Background Map */}
      <div className="absolute right-0 bottom-0 opacity-40 pointer-events-none md:grid grid-cols-1 hidden">
        <img src={Maplink} alt="Europe Map" className="w-[600px]" />
      </div>

      {/* Stars */}
      <div className="absolute right-[200px] bottom-[120px] opacity-80 pointer-events-none  md:grid  grid-cols-1 hidden">
        <StarCircle />
      </div>
    </footer>
  );
};

export default Footer;
