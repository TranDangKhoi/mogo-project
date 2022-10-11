import React from "react";
import Container from "../container/Container";
import Paragraph from "../paragraph/Paragraph";
import "./feedback.scss";
import { FeedbackData } from "./FeedbackData";
const Feedback = () => {
  return (
    <div className="feedback">
      <Container>
        <Paragraph
          caption={"Happy Clients"}
          title={"What people say"}
        ></Paragraph>
        <div className="feedback-list">
          {FeedbackData.map((item) => (
            <div className="feedback-item" key={item.id}>
              <img src={item.avatar} alt="" className="feedback-img" />
              <div className="feedback-info">
                <span className="feedback-name">{item.name}</span>
                <span className="feedback-job">{item.job}</span>
                <span className="feedback-feedback">{item.feedback}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
