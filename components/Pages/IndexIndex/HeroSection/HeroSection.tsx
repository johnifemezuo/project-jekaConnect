import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useAtom } from "jotai";
import Image from "next/image";
import React, { useEffect } from "react";
import { reviewTopButton } from "../../../../base/atom/useAtom";
import Container from "../../../../Layout/Container";
import Header from "../../../Global/Elements/Header";
import { Para } from "../../../Global/Elements/Para";
import StoresButton from "../../../Global/StoresButton/StoresButton";

function HeroSection() {
  const [, setUseRevealButton] = useAtom(reviewTopButton);

  gsap.registerPlugin(ScrollTrigger);

  let target: any;
  useEffect(() => {
    target = document.querySelector(".dec");

    // ANIMATION

    const callMe = () => setUseRevealButton(true);
    const callMeOff = () => setUseRevealButton(false);

    const tl = gsap.timeline({
      defaults: { opacity: 0, duration: 0.8, ease: "Power3.easeInOut" },
      scrollTrigger: {
        trigger: target,
        scrub: 0.5,
        onLeaveBack: callMeOff,
      },
    });

    tl.call(callMe);
  }, []);

  return (
    <section
      ref={target}
      id="heroSection"
      className=" h-auto bg-white  py-12  w-full"
    >
      <Container>
        <div className="pt-12 lg:pt-26">
          <Header isDark={true}>Hang out with friends and see what`s happening around</Header>
          <Para>
            We create beautiful and functional software experiences for amazing
            brands
          </Para>

          <div className="mt-12 lg:flex space-y-6 lg:space-y-0 md:space-x-12  mx-auto text-center grid place-content-center w-full lg:w-[500px]">
            <StoresButton img="images/playstore.svg">Google Play</StoresButton>
            <StoresButton img="images/applestore.svg">Apple Store</StoresButton>
          </div>

          <div className="mt-20 lg:mt-44">
            <Image src={"/images/hero3xl.png"} width={1300} height={1000} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
