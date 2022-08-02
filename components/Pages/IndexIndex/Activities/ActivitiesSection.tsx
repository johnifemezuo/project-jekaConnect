import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";
import Container from "../../../../Layout/Container";
import Button from "../../../Global/UI/Button/Button";

gsap.registerPlugin(ScrollTrigger);
function ActivitiesSection() {
  return (
    <section id="activities" className="overflow-hidden relative py-20 lg:py-[20vh] bg-[#02DCC2]">
      <h1 className="stroke-white z-10 lg:text-9xl w-[850px] font-extrabold absolute left-0 top-0 lg:mt-[50vh] lg:-ml-[24vh] pl-4 mt-6 lg:pl-0 pt-8 text-3xl lg:-rotate-90">
        Our Activities
      </h1>

      <Container>
        <div className="lg:max-w-6xl ">
          <h2 className="text-white mt-12 leading-relaxed text-xl lg:mt-20 font-light lg:text-[4vh] ">
            Technical and Software Development Consultants across all
            Organizations not Limited to Private and Government Organization
          </h2>

          <div className="lg:mt-20 my-12 lg:mb-[16vh] flex items-center space-x-12">
            <div className="">
              <h2 className="activitesBT">
                To carry on The Business Of Software And Technology Application
              </h2>
              <h2 className="activitesBT">
                Consultancy and Advise in Designing Developing, Installing
              </h2>
              <h2 className="activitesBT">
                Implementing and Operating all Kinds of Software/technology
              </h2>
              <h2 className="activitesBT">
                Applications Projects and Rendering Technoical Services,
                Business
              </h2>
              <h2 className="activitesBT">
                Transformation Projects and Assistance For Start-Up
              </h2>
              <h2 className="activitesBT">
                Commencement and Expansion Programme
              </h2>
            </div>

            <img
              src="/images/glow.png"
              className="hidden lg:block lg:w-[40%] h-[600px]"
            />
          </div>

          <div className="mx-auto w-[200px]">
            <Button customeStyle="hover:bg-gray-100 bg-white" link="#contactUs">
              Submit a Request
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ActivitiesSection;
