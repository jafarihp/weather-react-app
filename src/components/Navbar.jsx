import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

// images
import wave from "../assets/img/wave.png";
import HomeIcon from "../assets/img/icon/Home.svg";
import SearchIcon from "../assets/img/icon/Search.svg";
import InfoIcon from "../assets/img/icon/Info.svg";

const Navbar = () => {
  return (
    <div>
      <div className="FixedShape">
        <img src={wave} alt="wave shape" />
      </div>
      <div className="NavbarContainer">
        <div>
          <img src={InfoIcon} alt="Info Icon" />
          <Link className="text-navbar" to="/Contact">
            تماس با من
          </Link>
        </div>
        <div>
          <img src={SearchIcon} alt="Search Icon" />
          <Link className="text-navbar" to="/Search">
            جست و جو
          </Link>
        </div>
        <div>
          <img src={HomeIcon} alt="Home Icon" />
          <Link className="text-navbar" to="/">
            صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
