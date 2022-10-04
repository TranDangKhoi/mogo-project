import React from "react";
import "./AboutUsData";
import { AboutUsData } from "./AboutUsData";
import "./about-us.scss";
const AboutUs = () => {
  return (
    <div className="about-list">
      {AboutUsData.length > 0 &&
        AboutUsData.map((item) => (
          <div className="about-item" key={item.id}>
            <img src={item.src} alt="" className="about-img" />
            <div className="about-content">
              <i className="fa-solid fa-users about-icon"></i>
              <span className="about-title">{item.content}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AboutUs;
