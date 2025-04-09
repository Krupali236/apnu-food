import React from "react";
import Hero from "../components/Hero/Hero";
import Benefits from "../components/Benefits/Benefits";
import Download from "../components/Download/Download";
import Product from "../components/Product/Product";
import Process from "../components/Process/Process";
import Feedback from "../components/Feedback/Feedback";
import Order from "../components/Order/Order";
import Questions from "../components/Questions/Questions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <Download />
      <Product />
      <Process />
      <Feedback />
      <Questions />
      <Order />     
    </div>
  );
};

export default Home;
