import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { openNav } from "../../../base/atom/useAtom";
import Button from "../UI/Button/Button";
import NavLink from "./NavLink";
import { StyledNavLinks } from "./styles/StyledNavbar";

function NavLinks() {
  const [openNavbar, setOpenNavbar] = useAtom(openNav);

  const router = useRouter();

  function addActiveClass(path: any) {
    return router.pathname === path
      ? "text-primary "
      : "text-textColor";
  }

  return (
    <StyledNavLinks $isOpen={openNavbar}>
      <NavLink activeClass={addActiveClass("/#aboutUs")} navLink="/#aboutUs">
        Company
      </NavLink>
      <NavLink activeClass={addActiveClass("/#activities")} navLink="/#activities">
        Our activities
      </NavLink>
      <NavLink
        activeClass={addActiveClass("/#solution")}
        navLink="/#solution"
      >
        Solution
      </NavLink>
      <NavLink activeClass={addActiveClass("#contact")} navLink="#contact">
        Contact
      </NavLink>

      
    </StyledNavLinks>
  );
}

export default NavLinks;
