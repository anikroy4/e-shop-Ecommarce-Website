import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const AccordianItem = ({title, content,onToggle, isOpen }) => {
  return (
    <div className="mb-6 w-full p-3 bg-white  text-left py-8 px-12 rounded-[25px] font-['Poppins'] text-[#303030]  font-semibold leading-[30px] relative pl-[112px]" onClick={onToggle} >
        <button>
            <div className={`w-[32px] h-[32px] ${isOpen?"bg-transparent border borer-[#FF624C] text-[#FF624C] rotate-90":"bg-[#FF624C] text-white"} rounded-full bg-[#FF624C] flex items-center  mr-4 absolute justify-center top-[32px] left-[48px] duration-500`}>
                <FaAngleRight/>

            </div>
            {title}
        </button>
       { isOpen &&
        <div className='pt-[16px] pb-9 font-["Montserrat"] font-normal text-xl leading-[30px] text-[#646464]'>
            {content}
        </div>
       
       }

    </div>
  )
}

export default AccordianItem