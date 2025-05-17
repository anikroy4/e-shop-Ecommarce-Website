import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { RiShareLine, RiStarSFill } from 'react-icons/ri'


const ProductLayout = () => {
  return (
    <div className='border border-transparent hover:border-[#C3C3C3] duration-300 p-6 group rounded-lg mb-20'>
        <div className='relative'>
            <img src="images/productimage.png" alt="productimage" />
            <div className='bg-[#FF624C] py-[7px] px-5 absolute top-[-8px] right-[-9px] rounded-md font-["Montserrat"] font-bold text-base text-white'>
                50%
            </div>
            <div className='flex items-center absolute bottom-[6px] left-[47%] translate-x-[-50%] gap-5 scale-0 group-hover:scale-100 duration-400'>
                <div className='w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-400 cursor-pointer'>
                    <IoCartOutline />
                </div>
                <div className='w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-400 cursor-pointer'>
                    <FaRegHeart />
                </div>
                <div className='w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-400 cursor-pointer'>
                    <RiShareLine />
                </div>
            </div>
        </div>
        <div>
            <p className='font-["Montserrat"] font-normal text-sm leading-5 uppercase tracking-[5px] mt-[46px] mb-4'>phone</p>
            <h3 className='font-["Poppins"] font-semibold text-xl leading-[30px] group-hover:text-[#FF624C] group-hover:underline duration-400'>S21 Laptop Ultra HD LED Screen Feature 2023...</h3>
            <div className='flex items-center gap-2 text-[#FED550] mt-1 mb-6'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <span className='text-[#303030] font-["Montserrat"] font-normal text-base'> ( 100 ) </span>
            </div>
            <p className='font-["Poppins"] font-semibold text-2xl leading-[30px]'>$1,199.00</p>
        </div>
    </div>
  )
}

export default ProductLayout