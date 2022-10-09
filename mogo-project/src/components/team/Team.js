import React from "react";
import Container from "../container/Container";
import Paragraph from "../paragraph/Paragraph";
import "./team.scss";
import { TeamData } from "./TeamData";
const Team = () => {
  return (
    <div className="team">
      <Container>
        <Paragraph caption={"What we are"} title={"Meet our team"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt et,
          cupiditate dicta animi suscipit facilis ipsa ex. Natus assumenda in
          incidunt aut quo tempore, nesciunt, alias sed error impedit
          recusandae?
        </Paragraph>
        <div className="team-list">
          {TeamData.length > 0 &&
            TeamData.map((item) => (
              <div className="team-item" key={item.id}>
                <div className="team-main">
                  <img src={item.avatar} alt="Avatar" />
                  <div className="team-social">
                    <ul className="team-social-list">
                      <li className="team-social-item">
                        <i className="fa-brands fa-facebook-f"></i>
                      </li>
                      <li className="team-social-item">
                        <i className="fa-brands fa-twitter"></i>
                      </li>
                      <li className="team-social-item">
                        <i className="fa-brands fa-pinterest-p"></i>
                      </li>
                      <li className="team-social-item">
                        <i className="fa-brands fa-instagram"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info">
                  <span className="team-name">{item.name}</span>
                  <span className="team-job">{item.job}</span>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Team;
