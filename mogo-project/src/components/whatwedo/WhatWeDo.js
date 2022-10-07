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
        </Paragraph>
        <div className="wedo-wrapper">
          <img src={WhatWeDoImage} alt="WeDoImage" className="wedo-img" />
          <div className="wedo-content">
            <Accordion
              title={"Photography"}
              faiconClassName="fa-solid fa-camera-retro"
              openedByDefault={true}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea
            </Accordion>
            <Accordion title={"Creativity"} faiconClassName="fa-solid fa-brush">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
            </Accordion>
            <Accordion
              title={"Web Design"}
              faiconClassName="fa-solid fa-palette"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
