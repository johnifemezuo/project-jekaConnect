import Link from "next/link";
import React from "react";

interface IButton {
  children: any;
  onClick?: () => void;
  link?: string;
  customeStyle?: string,
}

function Button({ children, onClick, link, customeStyle }: IButton) {
  return (
    <Link href={`${link}`}>
      <button
        className={`text-center  mx-auto font-semibold md:text-xl w-[180px] md:w-[240px] py-6  transition ${customeStyle} `}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
