import React from "react";
import { ServicesData } from "./ServicesData";

const Services = () => {
  return (
    <div className="service-list">
      {ServicesData.length > 0 &&
        ServicesData.map((item) => (
          <div className="service-item" key={item.id}>
            <i className={`${item.icon} service-icon`}></i>
            <div className="service-item-info">
              <h3 className="service-item-title">{item.title}</h3>
              <p className="service-item-desc">{item.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Services;
