import React from 'react'

const Box = ({inputName, placeholder, type}) => {
  return (
    <>
        <label className='font-["Poppins"] text-xl font-bold text-[#303030] leading-[30px] '>{inputName}<span className='text-red-600'>*</span></label>
        { type=="textarea" ? 
         <textarea className='w-full leading-[30px] border border-solid border-[#CBCBCB] rounded-[10px] px-8 py-[25px] outline-none font-["Montserrat"] font-normal  mt-3' placeholder={placeholder} />
         :
        <input type="text" className='w-full leading-[30px] border border-solid border-[#CBCBCB] rounded-[10px] px-8 py-[25px] outline-none font-["Montserrat"] font-normal mt-3 ' placeholder={placeholder} />
        }
        
        
    </>
  )
}

export default Box 