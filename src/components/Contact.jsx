import React, { useEffect } from "react";

import UseTitle from "./UseTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import Communication from "../assets/img/communication.png";

const Contact = () => {
  UseTitle("تماس با ما");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="ContactContainer">
      <div>
        <img src={Communication} alt="Weather App" />
      </div>
      <div
        className="ContactTitle"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <h1>تماس با من</h1>
        <p>
          جهت دانلود سورس کد این پروژه در گیت هاب{" "}
          <a href="https://github.com/MohMeri73/weather-react-app">اینجا</a>{" "}
          کلیک کنید
        </p>
        <a href="https://www.linkedin.com/in/mohmeri/">
          <button>لینکدین</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
