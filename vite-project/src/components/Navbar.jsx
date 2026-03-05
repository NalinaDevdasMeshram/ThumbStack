import React from "react";
import { useState } from "react";
import Container from "../layout/Container.jsx";
import HeroSection from "./HeroSection";
import { IoMdMenu } from "react-icons/io";
import Feature from "./Feature.jsx";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-[#F1FF66]">
      <Container>
        <div className="flex justify-between items-center py-6">
          <h2 className="font-bold text-xl">APURA</h2>
          <ul className="hidden md:flex gap-8 font-medium cursor-pointer">
            <li className="hover:underline">Products</li>
            <li className="hover:underline">Road map</li>
            <li className="hover:underline">Our mission</li>
            <li className="hover:underline">For devs</li>
            <li className="hover:underline">Contact Us</li>
          </ul>

          {/* humburger */}
          <div
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMdMenu />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-12">
            <ul className="gap-4 font-medium cursor-pointer">
              <li>Products</li>
              <li>Road map</li>
              <li>Our mission</li>
              <li>For devs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        )}
      </Container>
      <HeroSection />
      <Feature />
    </header>
  );
};

export default Navbar;
