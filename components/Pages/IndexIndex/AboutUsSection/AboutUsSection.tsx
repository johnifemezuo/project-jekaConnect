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
      <h1 className="stroke z-10 w-[550px] xl:text-9xl lg:text-7xl font-extrabold absolute left-0 top-0 2xl:mt-[33vh] 2xl:-ml-[10%] pl-4 text-5xl mt-6 lg:pl-0 pt-8 md:text-6xl 2xl:-rotate-90">
        About us
      </h1>

      <img src="/images/hey.png" className="absolute top-0 -mt-[40vh]" />

      <Container>
        <div className="md:flex--between w-full pt-20 lg:w-[1200px] ">
          <div className="">
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold md:space-y-2 lg:space-y-4 flex items-center space-x-2 md:space-x-0 md:grid">
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
            <img
              src="/images/cute.png"
              alt="cube"
              className="xl:w-[600px] md:w-[500px] w-[440px] mx-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutUsSection;
