import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../../../Layout/Container";

function Footer() {
  return (
    <div className=" pt-12 py-12  border-t  border-[#2e5f71] bg-[#103441]">
      <Container>
        <div className="space-y-12 lg:space-y-0 lg:flex--between ">
          <div className="flex  items-center space-x-12  ">
            <Link href={`/`}>
              <a className="text-white lg:text-xl">Features</a>
            </Link>

            <Link href={`/`}>
              <a className="text-white lg:text-xl">About us</a>
            </Link>

            <Link href={`/`}>
              <a className="text-white lg:text-xl">Partner</a>
            </Link>
          </div>

          <div className="flex space-x-6 text-center  ">
            <a
              href="/"
              className=" md:p-4 hover:text-primary transition-all inline-block text-white"
            >
              <Image
                src="/images/twitter.svg"
                alt="twitter"
                width={30}
                height={30}
              />
            </a>
            <a
              href="/"
              className=" md:p-4 hover:text-primary transition-all inline-block text-white"
            >
              <Image
                src="/images/instagram.svg"
                alt="instagram"
                width={30}
                height={30}
              />
            </a>
            <a
              href="/"
              className=" md:p-4 hover:text-primary transition-all inline-block text-white"
            >
              <Image
                src="/images/youtube.svg"
                alt="youtube"
                width={30}
                height={30}
              />
            </a>
            <a
              href="/"
              className=" md:p-4 hover:text-primary transition-all inline-block text-white"
            >
              <Image
                src="/images/whatsapp.svg"
                alt="whatsapp"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
