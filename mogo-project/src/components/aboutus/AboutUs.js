import React from "react";
import "./AboutUsData";
import { AboutUsData } from "./AboutUsData";
import "./about-us.scss";
import Paragraph from "../paragraph/Paragraph";
import Container from "../container/Container";
const AboutUs = () => {
  return (
    <div className="about">
      <Container>
        <Paragraph caption={"What we do"} title={"Story about us"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          blanditiis cupiditate beatae ullam a perferendis asperiores tempora
          libero quaerat amet! Aspernatur, doloribus. Minus placeat itaque,
          obcaecati corrupti maxime accusantium autem!
        </Paragraph>
        <div className="about-list">
          {AboutUsData.length > 0 &&
            AboutUsData.map((item) => (
              <div className="about-item" key={item.id}>
                <img src={item.src} alt="Images" className="about-img" />
                <div className="about-content">
                  <i className={`${item.icon} about-icon`}></i>
                  <span className="about-title">{item.content}</span>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
