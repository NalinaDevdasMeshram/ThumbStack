import React from "react";
import Navbar from "./Navbar.jsx";
import Join from "./join.jsx";
import Products from "./Products.jsx";
import Card from "./Card.jsx";
import Roadmap from "./RoadMap.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Join />
      <Products />
      <Card />
      <Roadmap />
    </div>
  );
};

export default Home;
