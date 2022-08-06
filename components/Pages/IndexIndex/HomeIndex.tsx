import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import SectionFour from "./SectionFour/SectionFour";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";

function HomeIndex() {
  return (
    <div>
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default HomeIndex;
