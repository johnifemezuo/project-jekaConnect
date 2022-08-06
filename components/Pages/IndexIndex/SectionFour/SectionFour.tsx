import Image from "next/image";
import React from "react";
import Container from "../../../../Layout/Container";
import Header from "../../../Global/Elements/Header";
import { Para } from "../../../Global/Elements/Para";

function SectionFour() {
  return (
    <section
      id="heroSection"
      className=" text-center h-[90vh] bg-[#103441] relative pt-12  -mt-12 w-full"
    >
      <Container>
        <div className="pt-20 lg:pt-36">
          <Header>Stay updated</Header>
          <Para isDark={true}>
            We will keep you updated on latest news offers, events and periodic
            updates on Jekaconnect
          </Para>

          <div className="mt-20 lg:mt-20 space-y-12 text-center">
            <Image src={"/images/goodicon.png"} width={50} height={50} />
            <Para isDark={true}>Awesome! We will keep you posted</Para>
            <Image src={"/images/girl.png"} width={100} height={180} />
          </div>

        </div>
      </Container>
          <div className="w-full z-10 bg-[#103441] lg:h-[700px] -mt-[65vh]">
            <span className="rounded-full p-4 lg:ml-44 inline-block absolute left-0 mt-20 md:top-12 -ml-3 md:ml-0 bg-[#FFC6FB]"></span>
            <span className="rounded-full p-2 md:p-4 m-20 lg:ml-[20vw] inline-block absolute right-0 top-44 mr-[20vw] bg-[#FFF4C6]"></span>
            <span className="rounded-full p-6 md:p-12  inline-block absolute -left-5 md:-left-10 mr-[14vw] bottom-12 bg-[#FF6A6A]"></span>
          </div>
    </section>
  );
}

export default SectionFour;
