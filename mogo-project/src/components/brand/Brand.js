import React from "react";
import Container from "../container/Container";
import "./brand.scss";
const Brand = ({ children }) => {
  return (
    <div className="brand">
      <Container>
        {children.map((item) => (
          <img src={item} alt="" key={item} />
        ))}
      </Container>
    </div>
  );
};

export default Brand;
