import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={`/`}>
      <img src="/images/logo.svg" className="h-20 cursor-pointer w-[200px]" />
    </Link>
  );
}

export default Logo;
