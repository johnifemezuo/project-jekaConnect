import React, { ReactNode } from 'react'

const StoresButton = ({children, img}:{children: ReactNode, img:string}) => {
  return (
    <div className="bg-[#FFF9EE] cursor-pointer rounded-3xl text-[#103441] w-[200px] md:w-[250px]   py-5 px-5 flex">
      <img src={img} alt="play store" className='w-[25px] h-auto md:w-[30px]'/>
      <div className="ml-6 text-left">
        <p className='text-sm'>Get it on</p>
        <h3 className='font-semibold'>{children}</h3>
      </div>
    </div>
  );
}

export default StoresButton