import tw from "tailwind-styled-components/dist";

interface NavbarProps {
  $isOpen: boolean;
}

export const StyledNavbarWrapper = tw.div`
    w-full flex--between 
    md:mt-4   
`;

export const StyledNavLinks = tw.div`

md:relative md:hidden flex items-center md:space-x-20 font-medium fixed md:block bg-[#ffff] left-0 top-0  md:bg-transparent w-1/2 md:w-full h-screen md:h-auto z-40 p- md:p-0 flex flex-col space-y-12 pr-6 md:pr-0 text-lg md:gap-0  pt-5 md:pt-0 transition-transform duration-500 text-center

${(p: any) =>
  p.$isOpen
    ? " translate-x-0 drop-shadow-2xl"
    : "-translate-x-full md:translate-x-0"}


`;

export const StyledNavLink = tw.a`
   text-base text-textColor hover:text-primary transition-all ml-6 md:ml-0    
`;
