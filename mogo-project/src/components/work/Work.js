import React from "react";
import Container from "../container/Container";
import Paragraph from "../paragraph/Paragraph";
import { WorkData } from "./WorkData";
import "./work.scss";
const Work = () => {
  return (
    <div className="work">
      <Container>
        <Paragraph caption={"What we do"} title={"Some of our work"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et labore
          vitae ducimus voluptatibus adipisci tempora explicabo nulla unde,
          impedit in accusamus facere! Autem rem, error magni ducimus neque
          exercitationem ipsa.
        </Paragraph>
      </Container>
      <ul className="work-list">
        {WorkData.length > 0 &&
          WorkData.map((item) => (
            <li className="work-item">
              <img src={item.src} alt="" className="work-img" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Work;
