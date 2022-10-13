import React from "react";
import Container from "../container/Container";
import Paragraph from "../paragraph/Paragraph";
import "./map.scss";
const Map = () => {
  return (
    <div className="map">
      <Container>
        <Paragraph
          caption={<i className="fa-solid fa-location-dot"></i>}
          title={"Open map"}
          color={"#e98383"}
        ></Paragraph>
      </Container>
    </div>
  );
};

export default Map;
