import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={`/`}>
      <img src="/images/logo.png" className="h-20 cursor-pointer" />
    </Link>
  );
}

export default Logo;
