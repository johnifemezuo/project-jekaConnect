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
    <div className=" pt-12 pb-12 md:pb-28  bg-[#0288FA]">
      <Container>
        <div className="space-y-12 lg:space-y-0 lg:flex--between">
          <div>
            <Logo />
          </div>

          <div className="flex  items-center space-x-12  ">
            <Link href={`/`}>
              <a className="text-white lg:text-xl">Team</a>
            </Link>

            <Link href={`/`}>
              <a className="text-white lg:text-xl">Case Studies</a>
            </Link>

            <Link href={`/`}>
              <a className="text-white lg:text-xl">Publick</a>
            </Link>
          </div>

          <div className="flex space-x-6 ">
            <a href="/" className="rounded-full border p-3 md:p-4 inline-block text-white">
              <Linkedin />
            </a>
            <a href="/" className="rounded-full border p-3 md:p-4 inline-block text-white">
              <FacebookIcon />
            </a>
            <a href="/" className="rounded-full border p-3 md:p-4 inline-block text-white">
              <Instagram />
            </a>
            <a href="/" className="rounded-full border p-3 md:p-4 inline-block text-white">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
