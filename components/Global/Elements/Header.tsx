import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isDark?: boolean;
}

const Header = ({ children, isDark }: Props) => (
  <div
    className={`text-2xl  text-center  lg:text-[5vh] md:px-36 mb-5  leading-snug  font-bold ${isDark ? "text-[#103441]" : "text-white"}`}
  >
    {children}
  </div>
);

export default Header;
