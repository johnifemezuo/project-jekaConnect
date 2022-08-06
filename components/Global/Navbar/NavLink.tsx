import Link from "next/link";
import React from "react";

function NavLink({ children, navLink, activeClass }: any) {
  return (
    <>
      <Link href={navLink}>
        <a
          className={`
   ${activeClass} text-base lg:text-lg hover:text-primary transition-all ml-6 md:ml-0    
`}
        >
          {children}
        </a>
      </Link>
    </>
  );
}

export default NavLink;
