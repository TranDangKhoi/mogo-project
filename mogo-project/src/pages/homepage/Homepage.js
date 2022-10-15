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
import Story from "../../components/story/Story";
import Map from "../../components/map/Map";
import Footer from "../../components/footer/Footer";
const Homepage = () => {
  return (
    <>
      <AboutUs></AboutUs>
      <Analytics></Analytics>
      <Services></Services>
      <Device></Device>
      <WhatWeDo></WhatWeDo>
      <Quote></Quote>
      <Team></Team>
      <Brand>{[BrandLogos]}</Brand>
      <Work></Work>
      <Quote saidByPerson={true}></Quote>
      <Feedback></Feedback>
      <Story></Story>
      <Map></Map>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
