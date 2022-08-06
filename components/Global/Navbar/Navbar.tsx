import { useAtom } from "jotai";
import React from "react";
import { openNav } from "../../../base/atom/useAtom";
import Container from "../../../Layout/Container";
import MenuIcon from "../Icons/MenuIcon";
import Logo from "../Logo/Logo";
import Button from "../UI/Button/Button";
import NavLinks from "./NavLinks";
import { StyledNavbarWrapper } from "./styles/StyledNavbar";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useAtom(openNav);

  return (
    <div className="w-full bg-white  py-2 z-50 top-0  right-0 left-0">
      <Container>
        <StyledNavbarWrapper>
          <Logo />

          <NavLinks />

          <div className="hidden md:block">
            <Button> Download App</Button>
          </div>

          <div
            style={{ display: openNavbar ? "block" : "none" }}
            onClick={() => setOpenNavbar(false)}
            className={`  bg-[#00000046] w-full h-screen md:hidden fixed inset-0 z-10 `}
          ></div>

          <div
            onClick={() => setOpenNavbar(!openNavbar)}
            className="block lg:hidden flex--items space-x-4 text-[#103441]"
          >
            <MenuIcon />
          </div>
        </StyledNavbarWrapper>
      </Container>
    </div>
  );
}

export default Navbar;
