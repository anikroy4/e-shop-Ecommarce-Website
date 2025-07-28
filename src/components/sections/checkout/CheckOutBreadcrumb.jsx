import React from 'react'

const CheckOutBreadcrumb = () => {
  return (
    <>
      <div className='flex gap-[39px] leading-6 font-["Montserrat"] font-normal text-[16px] text-[#303030] mb-12 mt-16'>
        <span className='relative after:w-[2px] after:h-full after:bg-[#303030] after:content-[""] after:absolute after:top-0 after:right-[-34%]'>Home</span>
        <span className='relative after:w-[2px] after:h-full after:bg-[#303030] after:content-[""] after:absolute after:top-0 after:right-[-56%]'>Cart</span>
        <span className='font-bold '>Checkout</span>
      </div>
    </>
  )
}

export default CheckOutBreadcrumb