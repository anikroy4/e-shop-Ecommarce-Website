import React from 'react'

const Box = ({inputName, placeholder}) => {
  return (
    <>
        <label className='font-["Poppins"] text-xl font-bold text-[#303030] leading-[30px] mb-3'>{inputName}<span className='text-red-600'>*</span>
        <input type="text" className='w-full leading-[30px] border border-solid border-[#CBCBCB] rounded-[10px] px-8 py-[25px] outline-none font-["Montserrat"] font-normal ' placeholder={placeholder} />
        </label>
    </>
  )
}

export default Box