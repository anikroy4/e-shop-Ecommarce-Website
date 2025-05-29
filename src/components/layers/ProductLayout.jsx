import React, { useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { RiShareLine, RiStarSFill } from 'react-icons/ri'
import HeartIcon from '../../icon/HeartIcon'


const ProductLayout = ({percentTag, category, title, totalRating, rating, price, border, bg, stock, stockAmount, isCircle, discount, className, changePadding="24px"}) => {
    let [ratingValue, setRatingValue]=useState(new Array(+rating).fill(rating))
    // console.log(ratingValue);
  return (
    <div style={{background:bg, padding:changePadding}} className={`border border-transparent hover:border-[#C3C3C3] duration-300  group rounded-lg ${className}`}>
        <div className='relative  '>
            <img className="w-full" src="images/productimage.png" alt="productimage" />
            { percentTag &&
                 <div className={`bg-[#FF624C] flex items-center justify-center  absolute  font-["Montserrat"] font-bold text-base text-white 
                     ${isCircle ? 'w-[70px] h-[70px] rounded-full top-0 right-0': 'px-5 py-[7px] top-[-8px] right-[-9px]'}
                 `}>
                {discount}%
                </div>
            }
            <div className='flex items-center absolute bottom-[6px] left-[47%] translate-x-[-50%] gap-5 scale-0 group-hover:scale-100 duration-400'>
                <div className='w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-400 cursor-pointer'>
                    <IoCartOutline />
                </div>
                <div className='w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:text-white duration-400 cursor-pointer'>
                    <HeartIcon />
                </div>
                {/* <div className='w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C]  duration-400 cursor-pointer'>
                    <HeartIcon insideColor='hover:white'/> */}
                    {/* <img src="../../../public/images/heartIcon.svg" alt="hearticon" className='hover:text-white' /> */}
                {/* </div> */}
                <div className='w-[50px] h-[50px] rounded-full bg-white border border-[#FF624C] flex items-center justify-center text-[25px] text-[#FF624C] hover:bg-[#FF624C] hover:!text-white duration-400 cursor-pointer'>
                    <RiShareLine />
                </div>
            </div>
        </div>
        <div>
            <p className='font-["Montserrat"] font-normal text-sm leading-5 uppercase tracking-[5px] mt-[46px] mb-4'>{category}</p>
            <h3 className='font-["Poppins"] font-semibold text-xl leading-[30px] group-hover:text-[#FF624C] group-hover:underline duration-400'>{title}</h3>
            <div className='flex items-center gap-2 text-[#FED550] mt-1 mb-6'>
                {ratingValue.map((item, index)=>(

                <RiStarSFill key={index} />
                ))}
               
                <span className='text-[#303030] font-["Montserrat"] font-normal text-base'>( {totalRating} )</span>
            </div>
            <p className='font-["Poppins"] font-semibold text-2xl leading-[30px] group-hover:text-[#FF624C] '>${price}</p>

            {stock && 
                <div className='relative w-full h-[30px] bg-[#ddd] rounded-[25px] mt-8'>
                <div className='w-1/2 h-[30px] bg-[#333] rounded-[25px] '></div>
                    <p className='absolute top-[50%] left-[47%] -translate-y-[50%] -translate-x-[48%] text-white font-["Montserrat"] font-bold text-sm uppercase'>
                    {stockAmount} available</p>
            </div>
            }
        </div>
    </div>
  )
}

export default ProductLayout