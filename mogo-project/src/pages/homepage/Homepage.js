import React from "react";
import AboutUs from "../../components/aboutus/AboutUs";
import Analytics from "../../components/analytics/Analytics";
import Container from "../../components/container/Container";
import Paragraph from "../../components/paragraph/Paragraph";

const Homepage = () => {
  return (
    <>
      <Container>
        <Paragraph caption={"What we do"} title={"Story about us"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          blanditiis cupiditate beatae ullam a perferendis asperiores tempora
          libero quaerat amet! Aspernatur, doloribus. Minus placeat itaque,
          obcaecati corrupti maxime accusantium autem!
        </Paragraph>
        <AboutUs></AboutUs>
      </Container>
      <Analytics></Analytics>
    </>
  );
};

export default Homepage;
