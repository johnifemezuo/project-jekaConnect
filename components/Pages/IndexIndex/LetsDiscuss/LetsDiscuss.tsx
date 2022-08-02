import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useAtom } from "jotai";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { openHomeVideo } from "../../../../base/atom/useAtom";
import Container from "../../../../Layout/Container";
import Button from "../../../Global/UI/Button/Button";

function LetsDiscuss() {



  return (
    <section className=" relative bgimgMap py-32 lg:py-0 lg:h-screen grid place-content-center">
      <Container>
        <div className="w-full  text-center ">
          <div className="space-y-12 md:space-y-16">
            <h1 className="text-[#0288FA] text-4xl lg:text-[8vh] font-bold">
              Want to discuss first?
            </h1>

            <h1 className="font-semibold text-black lg:text-[5vh]">
              Call us 08044333332
            </h1>

            <Link href="#contactUs">
              <div>
                <span className="lg:text-4xl mr-4">Or</span>
                <Button customeStyle="text-black bg-[#02DCC2] hover:bg-white">
                  {" "}
                  Message us
                </Button>
              </div>
            </Link>

            <p className="max-w-3xl leading-loose lg:text-[3vh] ">
              1023, Robin Benson Street, Lekki Phase 1 2022 6sided Technology
              limited
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LetsDiscuss;
