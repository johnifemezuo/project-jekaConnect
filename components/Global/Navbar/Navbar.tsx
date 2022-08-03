import { useAtom } from "jotai";
import React from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { openNav } from "../../../base/atom/useAtom";
import { RootState } from "../../../base/stores/store";
import Container from "../../../Layout/Container";
import { logUserName } from "../../Pages/authslices/counterSlice";
import MenuIcon from "../Icons/MenuIcon";
import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks";
import { StyledNavbarWrapper } from "./styles/StyledNavbar";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useAtom(openNav);

  return (
    <div className="w-full bg-transparent py-2 z-50 top-0  right-0 left-0">
      <Container>
        <StyledNavbarWrapper>
          <Logo />
          <NavLinks />
          <div
            style={{display: openNavbar ? "block" : "none"}}
            onClick={() => setOpenNavbar(false)}
            className={`  bg-[#00000046] w-full h-screen md:hidden fixed inset-0 z-10 `}
          ></div>
          <div
            onClick={() => setOpenNavbar(!openNavbar)}
            className="block lg:hidden text-white"
          >
            <MenuIcon />
          </div>
        </StyledNavbarWrapper>
      </Container>
    </div>
  );
}

export default Navbar;
