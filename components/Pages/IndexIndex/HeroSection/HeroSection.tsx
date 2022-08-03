import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { reviewTopButton } from "../../../../base/atom/useAtom";
import Container from "../../../../Layout/Container";

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

    tl.call(callMe)


  }, []);

  return (
    <section
      ref={target}
      id="heroSection"
      className=" -mt-[20vh] h-[110vh] text-center bgimg  py-12  w-full"
    >
      <Container>
        <h1 className="text-6xl text-[#acd2ccd0]  lg:text-[20vh] mt-[30vh] uppercase">
          6ided
        </h1>
        <h1  className="dec text-2xl text-[#ffffffad] mt-[20vh] lg:mt-[200px] tracking-wider lg:text-[4.3vh]  px-6 lg:px-20 leading-relaxed">
          We create beautiful and functional software experiences for amazing
          brands
        </h1>
      </Container>
    </section>
  );
}

export default HeroSection;
