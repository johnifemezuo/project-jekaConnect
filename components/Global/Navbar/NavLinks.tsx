import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import { openNav } from "../../../base/atom/useAtom";
import Logo from "../Logo/Logo";
import NavLink from "./NavLink";
import { StyledNavLinks } from "./styles/StyledNavbar";

function NavLinks() {
  const [openNavbar, setOpenNavbar] = useAtom(openNav);

  const router = useRouter();

  function addActiveClass(path: any) {
    return router.pathname === path ? "text-primary " : "text-[#103441]";
  }

  return (
    <StyledNavLinks $isOpen={openNavbar} onClick={() => setOpenNavbar(false)}>
      <div className="w-full md:hidden ml-8">
        <Logo />
      </div>
      <NavLink activeClass={addActiveClass("/#aboutUs")} navLink="/#aboutUs">
        About
      </NavLink>
      <NavLink activeClass={addActiveClass("/#features")} navLink="/#features">
        Features
      </NavLink>
    </StyledNavLinks>
  );
}

export default NavLinks;
