import React from "react";
import Navbar from "./Navbar.jsx";
import Join from "./join.jsx";
import Products from "./Products.jsx";
import Card from "./HeroCard/Card.jsx";
import Roadmap from "./RoadMap.jsx";
import Footer from "./Footer.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Join />
      <Products />
      <Card />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Home;
