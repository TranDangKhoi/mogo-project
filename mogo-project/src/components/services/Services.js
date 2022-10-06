import React from "react";
import { ServicesData } from "./ServicesData";
import "./services.scss";
import Paragraph from "../paragraph/Paragraph";
import Container from "../container/Container";
const Services = () => {
  return (
    <div className="service">
      <Container>
        <Paragraph
          caption={"We work with"}
          title={"Amazing Services"}
        ></Paragraph>
        <div className="service-list">
          {ServicesData.length > 0 &&
            ServicesData.map((item) => (
              <div className="service-item" key={item.id}>
                <span className="service-item-icon">
                  <i className={`${item.icon}`}></i>
                </span>
                <div className="service-item-info">
                  <h3 className="service-item-title">{item.title}</h3>
                  <p className="service-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
