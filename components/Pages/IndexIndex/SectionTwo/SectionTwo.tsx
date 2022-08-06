import Image from "next/image";
import React from "react";
import Container from "../../../../Layout/Container";
import Header from "../../../Global/Elements/Header";
import { Para } from "../../../Global/Elements/Para";

function SectionTwo() {
  return (
    <section
      id="heroSection"
      className=" text-center h-auto bg-white  py-12  w-full"
    >
      <Container>
        <div className="pt-20 lg:pt-36">
          <Header isDark={true}>Create and share content based on interests</Header>
          <Para>
            Engage, create, post and share your content with your tribe members
            based on interest
          </Para>

          <div className="mt-20 lg:mt-44">
            <Image src={"/images/boobles3xl.png"} width={1400} height={400} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionTwo;
