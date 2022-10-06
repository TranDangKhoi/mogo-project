import React from "react";
import AboutUs from "../../components/aboutus/AboutUs";
import Analytics from "../../components/analytics/Analytics";
import Container from "../../components/container/Container";
import Device from "../../components/device/Device";
import Services from "../../components/services/Services";
import WhatWeDo from "../../components/whatwedo/WhatWeDo";

const Homepage = () => {
  return (
    <>
      <AboutUs></AboutUs>
      <Analytics></Analytics>
      <Services></Services>
      <Device></Device>
      <WhatWeDo></WhatWeDo>
    </>
  );
};

export default Homepage;
