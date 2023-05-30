import React, { Component, useEffect } from "react";
import useTitle from "./UseTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";
import animationRain from "../assets/img/Animated-Bunny-In-Rain.gif";

const HomePage = () => {
  useTitle("صفحه اصلی");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="HomePage">
      <div
        className="HomePageTitle"
        data-aos="fade-right"
        data-aos-offset="10"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <h1>وب اپلیکیشن هواشناسی</h1>
      </div>
      <div>
        <img src={animationRain} alt="Weather App photo" />
      </div>
    </div>
  );
};

export default HomePage;
