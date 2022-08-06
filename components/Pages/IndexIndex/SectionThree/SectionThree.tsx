import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../../../../Layout/Container";
import Header from "../../../Global/Elements/Header";
import { Para } from "../../../Global/Elements/Para";
import StoresButton from "../../../Global/StoresButton/StoresButton";

function SectionThree() {
  return (
    <section className="relative text-center bg-white  py-12  w-full">
      <Container>
        <div className="pt-20 lg:pt-26">
          <Header isDark={true}>
            Earn badges and increase your ranking on the global leaderboard
          </Header>
          <Para>
            As you gain experience points, your ranking increases and you can
            also convert these points to a crypto asset
          </Para>

          <div className="mt-12 lg:flex space-y-6 lg:space-y-0 md:space-x-12  mx-auto text-center grid place-content-center w-full lg:w-[500px]">
            <Link href="/">
              <StoresButton img="images/playstore.svg">
                Google Play
              </StoresButton>
            </Link>
            <Link href="/">

            <StoresButton img="images/applestore.svg">Apple Store</StoresButton>
            </Link>
          </div>
        </div>
      </Container>

      <div className="mt-20 lg:mt-44">
        <div className="relative z-30">
          <Image src={"/images/phoneimg3xl.png"} width={1300} height={1100} />
        </div>
        <div className="w-full relative z-10 bg-[#103441] lg:h-[700px] lg:-mt-[65vh]">
          <span className="rounded-full p-2 lg:ml-44 inline-block absolute left-0 top-12 bg-[#CBF1FF]"></span>
          <span className="rounded-full p-2 md:p-4 ml-4 lg:ml-[20vw] inline-block absolute left-0 top-44 bg-[#FFEBC4]"></span>
          <span className="rounded-full p-2 lg:ml-44 inline-block absolute right-0 mr-[14vw] top-12 bg-[#CBF1FF]"></span>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
