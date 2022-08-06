import Link from "next/link";
import React from "react";

interface IButton {
  children: any;
  onClick?: () => void;
  link?: string;
}

function Button({ children, onClick, link }: IButton) {
  return (
    <Link href={`${link}`}>
      <button
        className={`text-center rounded-2xl md:rounded-3xl relative bg-primary hover:bg-[#ffcea4] text-white mx-auto font-medium cursor-pointer md:text-xl w-[160px] md:w-[210px] md:py-5 py-4 px-5 transition  `}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
