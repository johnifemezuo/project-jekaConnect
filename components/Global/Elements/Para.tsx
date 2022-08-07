import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isDark?: boolean;
}

export const Para = ({ children, isDark }: Props) => {
  return (
    <div
      className={` lg:text-xl ${
        isDark ? "text-white" : "text-[#7D8C91]"
      } tracking-wider  
lg:w-[800px] text-center m-auto text-sm  `}
    >
      {children}
    </div>
  );
};
