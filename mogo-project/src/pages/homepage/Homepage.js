import React from "react";
import AboutUs from "../../components/aboutus/AboutUs";
import Analytics from "../../components/analytics/Analytics";
import Device from "../../components/device/Device";
import Quote from "../../components/quote/Quote";
import Services from "../../components/services/Services";
import WhatWeDo from "../../components/whatwedo/WhatWeDo";
import Team from "../../components/team/Team";
import Brand from "../../components/brand/Brand";
import BrandLogos from "../../assets/img-logos.png";
import Work from "../../components/work/Work";
import quotePersonImage from "../../assets/img-quote-avatar.png";
import Feedback from "../../components/feedback/Feedback";
const Homepage = () => {
  return (
    <>
      <AboutUs></AboutUs>
      <Analytics></Analytics>
      <Services></Services>
      <Device></Device>
      <WhatWeDo></WhatWeDo>
      <Quote
        faIconClassName={"fa-solid fa-message"}
        quote={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis neque accusantium repellat dolor, voluptates ametquasi iure excepturi natus recusandae facere sint expeditacorrupti, necessitatibus labore non sunt voluptate animi."
        }
        greenBorder={true}
      ></Quote>
      <Team></Team>
      <Brand>{[BrandLogos]}</Brand>
      <Work></Work>
      <Quote
        imgSrc={quotePersonImage}
        quote={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis neque accusantium repellat dolor, voluptates ametquasi iure excepturi natus recusandae facere sint expeditacorrupti, necessitatibus labore non sunt voluptate animi."
        }
        author={"Sal Vulcano"}
      ></Quote>
      <Feedback></Feedback>
    </>
  );
};

export default Homepage;
