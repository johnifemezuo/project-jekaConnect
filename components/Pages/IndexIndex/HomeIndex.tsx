import React from "react";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import ActivitiesSection from "./Activities/ActivitiesSection";
import ContactUs from "./ContactUs/ContactUs";
import HeroSection from "./HeroSection/HeroSection";
import LetsDiscuss from "./LetsDiscuss/LetsDiscuss";
import OurSoftwareSection from "./OurSoftwareSection/OurSoftwareSection";

function HomeIndex() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ActivitiesSection />
      <OurSoftwareSection />
      <ContactUs/>
      <LetsDiscuss />
    </div>
  );
}

export default HomeIndex;


