import React from "react";
import Container from "../container/Container";
import Paragraph from "../paragraph/Paragraph";
import DeviceImage from "../../assets/img-devices.png";
import "./device.scss";
const Device = () => {
  return (
    <div className="device">
      <Container>
        <Paragraph
          caption={"For all devices"}
          title={"Unique design"}
        ></Paragraph>
        <img src={DeviceImage} alt="Device" className="device-image" />
      </Container>
    </div>
  );
};

export default Device;
