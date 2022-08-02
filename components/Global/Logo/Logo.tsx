import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { StyledLogo } from './style/StyledLogo';


function Logo() {
  return (
      <Link href={`/`}>
        <img src="/images/logo.png" className='h-20' />
      </Link>
  );
}

export default Logo