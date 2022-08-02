import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";
import Container from "../../../../Layout/Container";

gsap.registerPlugin(ScrollTrigger);

function AboutUsSection() {
  return (
    <section
      className="relative bg-[#f4f4f4]  overflow-hidden h-screen grid place-content-center"
      id="aboutUs"
    >
      <h1 className="stroke z-10 lg:text-9xl font-extrabold absolute left-0 top-0 lg:mt-[33vh] lg:-ml-[12vh] pl-4 text-3xl mt-6 lg:pl-0 pt-8  lg:-rotate-90">
        About us
      </h1>

      <img src="/images/hey.png" className="absolute top-0 -mt-[40vh]" />

      <Container>
        <div className="md:flex--between w-full  lg:w-[1200px] ">
          <div>
            <div className="text-2xl lg:text-5xl font-bold space-y-2 lg:space-y-4">
              <h1>6ided</h1>
              <h1>Technology</h1>
              <h1>Limited</h1>
            </div>

            <p className="text-base mt-6 lg:mt-12 lingH12 md:text-xl md:max-w-[450px] text-black font-light">
              Our core operations are mainly embeded in information and
              communications Technology solutions, providing services to
              businesses across allverticals. We invest our time, intimate
              knowledge, wide connnections and team approach to every project we
              take on.
            </p>
          </div>

          <div>
            <img src="/images/cute.png" alt="cube" className="lg:w-[600px]"/>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutUsSection;
