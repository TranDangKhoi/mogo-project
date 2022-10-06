import React from "react";
import Container from "../container/Container";
import Paragraph from "../paragraph/Paragraph";
import WhatWeDoImage from "../../assets/img-wedo.png";
import "./what-we-do.scss";
import Accordion from "../accordion/Accordion";
const WhatWeDo = () => {
  return (
    <div className="wedo">
      <Container>
        <Paragraph caption={"Service"} title={"What we do"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eveniet unde at quasi, cum suscipit fuga voluptates. Cum iusto,
          laboriosam culpa, vel debitis sequi nobis vero repellendus dignissimos
          maxime dicta?
          <div className="wedo-wrapper">
            <img src={WhatWeDoImage} alt="WeDoImage" />
            <div className="wedo-content">
              <Accordion
                title={"Photography"}
                faiconClassName="fa-solid fa-camera-retro"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
              </Accordion>
              <Accordion></Accordion>
            </div>
          </div>
        </Paragraph>
      </Container>
    </div>
  );
};

export default WhatWeDo;
