import React from "react";
import Container from "../../../../Layout/Container";

function OurSoftwareSection() {
  return (
    <section
      className="relative bg-[#f4f4f4] py-20 lg:py-[12vh] overflow-hidden  grid place-content-center"
      id="solution"
    >
      <h1 className="stroke z-10 xl:w-[900px] xl:text-9xl lg:text-7xl font-extrabold absolute left-0 top-0 2xl:mt-[70vh] 2xl:-ml-[20%] pl-4 text-4xl mt-6 lg:pl-0 pt-8 md:text-6xl 2xl:-rotate-90">
        Our Softwares
      </h1>

      <img
        src="/images/eli2.png"
        className="absolute bottom-0 left-0 -mb-[40vh] lg:-ml-[40vh]"
      />

      <Container>
        <div className="lg:flex mt-28 items-center justify-between lg:w-[1300px] gap-20 lg:mt-[30vh] ">
          <div className="mb-6 lg:mb-0">
            <div className="text-2xl lg:text-5xl font-bold space-y-2 md:space-y-4">
              <h1>Our Remarkable</h1>
              <h1>Admin Solution</h1>
            </div>

            <p className="text-lg mt-6 md:mt-12 lingH12 md:text-xl md:max-w-[450px] text-black font-light">
              Our Purpose is to redefine SIMPLICITY, keep the world developing
              and driving forward with our EXCITING and PURPOSEFUL
              ideas,services and products.
            </p>
          </div>

          <div>
            <img src="/images/pres1.png" alt="cube" className="lg:w-[650px] " />
          </div>
        </div>

        <div className="lg:mt-[20vh] mt-20 lg:mb-[20vh] lg:flex items-center justify-between gap-20  ">
          <div className="mb-6 lg:mb-0">
            <div className="text-2xl lg:text-5xl font-bold space-y-2 md:space-y-4">
              <h1>Our Remarkable</h1>
              <h1>Admin Solution</h1>
            </div>

            <p className="text-lg mt-6 md:mt-12 lingH12 md:text-xl md:max-w-[450px] text-black font-light">
              Our Purpose is to redefine SIMPLICITY, keep the world developing
              and driving forward with our EXCITING and PURPOSEFUL
              ideas,services and products.
            </p>
          </div>

          <div>
            <img src="/images/pres2.png" alt="cube" className="lg:w-[650px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OurSoftwareSection;
