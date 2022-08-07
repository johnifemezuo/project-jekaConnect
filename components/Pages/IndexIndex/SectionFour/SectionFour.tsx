import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Container from "../../../../Layout/Container";
import { Idata } from "../../../../utils/interface/contactForm";
import Header from "../../../Global/Elements/Header";
import { Para } from "../../../Global/Elements/Para";
import { formValidatorSchema } from "../ContactUs/formValidator";

const formUrl = process.env.NEXT_PUBLIC_FORM_URL;

function SectionFour() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(formValidatorSchema) });

  const submitForm = (data: Idata | any) => {
    setLoading(true);
console.log(data);

    // send form request
    axios
      .post(`${formUrl}`, data)
      .then(function () {
        toast.success("Request Successfully sent!");
        setLoading(false);
        setIsSuccess(true);
        setTimeout(() => window.location.reload(), 2000);
      })
      .catch(function (error) {
        toast.error(error.message);
        console.log(data);
        setLoading(false);
        setIsSuccess(false);
      });
  };

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

          <div className="mt-20 lg:mt-20  space-y-12 text-center">
            {isSuccess ? (
              <div className="space-y-8">
                <Image src={"/images/goodicon.png"} width={50} height={50} />
                <Para isDark={true}>Awesome! We will keep you posted</Para>
              </div>
            ) : (
              <div>
                <form onSubmit={handleSubmit<FieldValues>(submitForm)}>
                  <div className="bg-[#294955] rounded-3xl max-w-2xl md:space-x-6 mx-auto md:flex space-y-8 md:space-y-0 items-center justify-between py-3 px-3">
                    <input
                      {...register("emailId", {
                        required: "Please add a email",
                      })}
                      name="emailId"
                      type="email"
                      className="mt-3 md:mt-0 outline-none w-full bg-[#294955] px-3 active:bg-[#294955] focus:bg-[#000000] md:text-xl  text-white  md:py-4 md:mx-3 "
                      placeholder={"Enter your email address"}
                    />

                    <button
                      className={`text-center rounded-2xl md:rounded-3xl i relative bg-primary hover:bg-[#ffcea4] text-white mx-auto font-medium cursor-pointer md:text-xl w-full md:w-[220px] md:py-5 py-4 px-5 transition  `}
                    >
                      Subscribe{loading && "..."}
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="mt-12">
              <Image src={"/images/girl.png"} width={100} height={180} />
            </div>
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
