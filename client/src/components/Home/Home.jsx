import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";
import HeroCard from "../HeroCard/HeroCard.jsx";

import BgVideo from "../../assets/videofront.mp4";
import wave from "../../assets/wave Gif.gif";
import Rapidscat from "../RapidScat/Rapidscat.jsx";
import Satelite from "../Satellite/Satellite.jsx";
import Footer from "../Footer/Footer.jsx";
import Footer5 from "../Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../Card/Card.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      navigate("/HeroCard"); // Redirect to dashboard or home
    } else {
      navigate("/home"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <div className="overflow-x-hidden">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <Card />
      <Carousel />
      {/* <HeroCard /> */}
      <Rapidscat />
      <Satelite />
      {/* <Footer /> */}
      <Footer5 />
    </div>
  );
};

export default Home;
