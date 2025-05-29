import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const AccordianItem = ({title, content,onToggle, isOpen , className}) => {
  return (
    <div className={`w-full bg-white  text-left py-8 px-12 rounded-[25px] font-['Poppins'] text-[#303030]  font-semibold leading-[30px] relative pl-[112px] ${className}`} onClick={onToggle} >
        <button>
            <div className={`w-[32px] h-[32px] ${isOpen?"bg-transparent border borer-[#FF624C] text-[#FF624C] rotate-90":"bg-[#FF624C] text-white"} rounded-full bg-[#FF624C] flex items-center   absolute justify-center top-[32px] left-[48px] duration-500`}>
                <FaAngleRight/>

            </div>
            {title}
        </button>
       { isOpen &&
        <div className='w-[755px] pt-[16px] pb-9 font-["Montserrat"] font-normal text-xl leading-[30px] text-[#646464]'>
            {content}
        </div>
       
       }

    </div>
  )
}

export default AccordianItem