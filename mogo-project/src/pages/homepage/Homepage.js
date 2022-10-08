import React from "react";
import AboutUs from "../../components/aboutus/AboutUs";
import Analytics from "../../components/analytics/Analytics";
import Container from "../../components/container/Container";
import Device from "../../components/device/Device";
import Quote from "../../components/quote/Quote";
import Services from "../../components/services/Services";
import WhatWeDo from "../../components/whatwedo/WhatWeDo";
import quoteImage from "../../assets/img-quote.png";
const Homepage = () => {
  return (
    <>
      <AboutUs></AboutUs>
      <Analytics></Analytics>
      <Services></Services>
      <Device></Device>
      <WhatWeDo></WhatWeDo>
      <Quote
        imgSrc={quoteImage}
        quote={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis neque accusantium repellat dolor, voluptates ametquasi iure excepturi natus recusandae facere sint expeditacorrupti, necessitatibus labore non sunt voluptate animi."
        }
      ></Quote>
    </>
  );
};

export default Homepage;
