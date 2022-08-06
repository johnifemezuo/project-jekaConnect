import Link from "next/link";
import React from "react";
import Container from "../../../Layout/Container";
import FacebookIcon from "../Icons/FacebookIcon";
import Instagram from "../Icons/Instagram";
import Linkedin from "../Icons/Linkedin";
import MenuIcon from "../Icons/MenuIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import Logo from "../Logo/Logo";

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
            <a href="/" className=" md:p-4 hover:text-primary transition-all inline-block text-white">
              <Linkedin />
            </a>
            <a href="/" className=" md:p-4 hover:text-primary transition-all inline-block text-white">
              <FacebookIcon />
            </a>
            <a href="/" className=" md:p-4 hover:text-primary transition-all inline-block text-white">
              <Instagram />
            </a>
            <a href="/" className=" md:p-4 hover:text-primary transition-all inline-block text-white">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
