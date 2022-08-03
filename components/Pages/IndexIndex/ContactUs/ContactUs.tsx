import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Idata } from "../../../../utils/interface/contactForm";
import { formValidatorSchema } from "./formValidator";

const formUrl = process.env.NEXT_PUBLIC_FORM_URL;

function ContactUs() {
  const [loading, setLoading] = useState<boolean>(false)
  const [websiteS, setWebsiteS] = useState<boolean>(false);
  const [apps, setapps] = useState<boolean>(false);
  const [development, setDevelopment] = useState<boolean>(false);
  const [design, setDesign] = useState<boolean>(false);
  const [branding, setBranding] = useState<boolean>(false);
  const [maintainance, setMaintainance] = useState<boolean>(false);

  const getUserInterest = () => {
    const INTEREST = [];

    if (websiteS) {
      INTEREST.push("website");
    }
    if (apps) {
      INTEREST.push("Apps");
    }
    if (development) {
      INTEREST.push("Development");
    }
    if (design) {
      INTEREST.push("Design");
    }
    if (branding) {
      INTEREST.push("Branding");
    }
    if (maintainance) {
      INTEREST.push("App Maintaince");
    }

    return INTEREST;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formValidatorSchema) });



  const submitForm = (data: Idata | any) => {
    const interests = getUserInterest();

    const payload: any = {
      ...data,
      interests,
    };

    setLoading(true)

    // send form request
    axios
      .post(`${formUrl}`, payload)
      .then(function (res) {
        toast.success("Request Successfully sent!");
        setLoading(false)
        setTimeout(() => window.location.reload(), 2000);
      })
      .catch(function (error) {
        toast.error(error.message && "Sorry something is wrong!");
        console.log(error);
        console.log(payload);
        setLoading(false);

      });
  };

  return (
    <div
      className="bg-[#0288FA] px-4 lg:px-0 py-12 lg:py-20  relative h-[1100px] lg:h-[1200px]"
      id="contact"
    >
      <div>
        <div className="">
          <div className="absolute hidden lg:block left-0 top-0 bottom-0 z-0">
            <img
              src="/images/doted.png"
              alt="contact us img"
              className="lg:w-[800px] lg:mt-20"
            />
          </div>

          <div className="lg:w-[600px] mt-12 float-right lg:mr-[16vw] relative">
            <div>
              <h1 className="text-3xl lg:text-5xl text-white font-bold ">
                We commit all our resources into supporting your company
              </h1>

              <form
                //   ref={form}
                onSubmit={handleSubmit<FieldValues>(submitForm)}
                className="relative grid max-w-xl mx-auto my-10 space-y-4 md:space-y-8"
              >
                <div>
                  <p className=" text-white ">Your`re interested in</p>
                  <div>
                    {/* interest zone */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div
                        onClick={() => setWebsiteS(!websiteS)}
                        className={`border inline-block mt-2 px-6 py-3 text-white ${
                          websiteS ? "bg-white text-black" : "bg-transparent"
                        }`}
                      >
                        Website from scratch
                      </div>

                      <div
                        onClick={() => setapps(!apps)}
                        className={`border inline-block mt-2 px-6 py-3 text-white ${
                          apps ? "bg-white text-black" : "bg-transparent"
                        }`}
                      >
                        Apps from scratch
                      </div>

                      <div
                        onClick={() => setDevelopment(!development)}
                        className={`border inline-block mt-2 px-6 py-3 text-white ${
                          development ? "bg-white text-black" : "bg-transparent"
                        }`}
                      >
                        Development
                      </div>

                      <div
                        onClick={() => setDesign(!design)}
                        className={`border inline-block mt-2 px-6 py-3 text-white ${
                          design ? "bg-white text-black" : "bg-transparent"
                        }`}
                      >
                        UI/UX Design
                      </div>
                      <div
                        onClick={() => setBranding(!branding)}
                        className={`border inline-block mt-2 px-6 py-3 text-white ${
                          branding ? "bg-white text-black" : "bg-transparent"
                        }`}
                      >
                        Branding
                      </div>
                      <div
                        onClick={() => setMaintainance(!maintainance)}
                        className={`border inline-block mt-2 px-6 py-3 text-white ${
                          maintainance
                            ? "bg-white text-black"
                            : "bg-transparent"
                        }`}
                      >
                        Web/App Maintaince
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-red-500 text-sm md:text-lg text-left mb-2">
                    {errors.fullName?.message}
                  </p>
                  <input
                    {...register("name", {
                      required: "Please add a name",
                      minLength: 4,
                    })}
                    name="name"
                    className=" outline-none w-full bg-transparent placeholder:text-input-color text-white placeholder:text-white text-sm placeholder:letter-spacing-5 placeholder:text-sm md:placeholder:text-base text-input-color border-b  border-input-color md:text-xl    py-3 md:py-4"
                    placeholder={"Full name"}
                  />
                </div>

                <div>
                  <p className="text-red-500 text-sm md:text-lg text-left mb-2">
                    {errors.email?.message}
                  </p>
                  <input
                    {...register("email", {
                      required: "email is required, Thank you",
                    })}
                    className="  outline-none w-full bg-transparent placeholder:text-input-color text-white placeholder:text-white text-sm placeholder:letter-spacing-5 placeholder:text-sm md:placeholder:text-base text-input-color border-b  border-input-color md:text-xl    py-3 md:py-4"
                    placeholder={"Your Email"}
                    name="email"
                  />
                </div>

                <div>
                  <p className="text-red-500 text-sm md:text-lg text-left mb-2">
                    {errors.phone?.message}
                  </p>
                  <input
                    {...register("phone", {
                      required: "phone number is required",
                    })}
                    className="  outline-none w-full bg-transparent placeholder:text-input-color text-white placeholder:text-white text-sm placeholder:letter-spacing-5 placeholder:text-sm md:placeholder:text-base text-input-color border-b  border-input-color md:text-xl    py-3 md:py-4"
                    placeholder={"Your phone number"}
                    name="phone"
                    type="number"
                  />
                </div>

                <div>
                  <p className="text-red-500 text-sm md:text-lg text-left mb-2">
                    {errors.message?.message}
                  </p>
                  <textarea
                    {...register("message", {
                      required: "Leave a message, Thank you",
                    })}
                    name="message"
                    placeholder={"Tell us about your project"}
                    className="outline-none w-full bg-transparent placeholder:text-input-color text-white placeholder:text-white text-sm placeholder:letter-spacing-5 placeholder:text-sm md:placeholder:text-base text-input-color border-b  border-input-color md:text-xl    py-3 md:py-4"
                  ></textarea>
                </div>
                <div>
                  <button
                    className={`text-center  mx-auto font-semibold md:text-xl w-[180px] md:w-[240px] py-6  transition bg-[#02DCC2] `}
                  >
                    Send{loading && "ing"} Request{loading && "..."}
                  </button>
                </div>

                <p className="text-sm text-white">
                  This site is protected by reCAPTCHA and the Gooogle{" "}
                  <a href="/" className="underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/" className="underline">
                    Terms and Condition
                  </a>{" "}
                  apply
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
