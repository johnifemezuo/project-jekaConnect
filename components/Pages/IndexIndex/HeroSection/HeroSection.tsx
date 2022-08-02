import React from "react";
import Container from "../../../../Layout/Container";

function HeroSection() {
  return (
    <section id="heroSection" className=" -mt-[20vh] h-[110vh] text-center bgimg  py-12  w-full">
      <Container>
        <h1 className="text-6xl text-[#0c564ad0]  lg:text-[20vh] mt-[30vh] uppercase">
          6ided
        </h1>
        <h1 className=" text-2xl text-[#0000009e] mt-[20vh] lg:mt-[200px] tracking-wider lg:text-4xl  px-6 lg:px-20 leading-relaxed">
          We create beautiful and functional software experinces for amazing
          brands
        </h1>
      </Container>
    </section>
  );
}

export default HeroSection;
