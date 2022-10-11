import React from "react";
import BlogCard from "../blog-card/BlogCard";
import Container from "../container/Container";
import Paragraph from "../paragraph/Paragraph";
import { StoryData } from "./StoryData";
import "./story.scss";
const Story = () => {
  return (
    <div className="story">
      <Container>
        <Paragraph caption={"Our stories"} title={"Latest Blog"}></Paragraph>
        <div className="story-list">
          {StoryData.map((item) => (
            <BlogCard item={item}></BlogCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Story;
