import React, { Component } from "react";

import "./NotFound.css";

import error from "../assets/img/404.gif";

const NotFound = () => {
  return (
    <div className="NotFoundContainer">
      <h1>ارور 404 صفحه پیدا نشد</h1>
      <img src={error} alt="404 gif" />
    </div>
  );
};

export default NotFound;
