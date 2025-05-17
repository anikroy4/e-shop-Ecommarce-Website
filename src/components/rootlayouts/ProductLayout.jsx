import React from 'react'
import { RiStarSFill } from 'react-icons/ri'
import ProductCartIcon from "../../icon/producticon/ProductCartIcon"
import ShareIcon from "../../icon/producticon/ShareIcon"
import HeartIcon from '../../icon/producticon/HeartIcon'

const ProductLayout = () => {
  return (
    <div className=' border-2  border-transparent hover:border-[#C3C3C3] p-6 group duration-300 rounded-[10px]' >
      <div>
        <img src="images/productimage.png" alt="productImage" />

        <div className='flex '>
          <div className='w-[50px] h-[50px] group rounded-full hover:text-[#FF624C] border border-solid border-[#FF624C] items-center flex justify-center '>
            <ProductCartIcon className="group-hover:bg-[#FF624C] "/>
          </div>




          <div>
            <HeartIcon/>

          </div>
          <div>

            <ShareIcon />
          </div>
        </div>
      </div>
      
      <div>
        <p className='font-["Montserrat"]  text-sm text-[#606060] leading-5 font-normal tracking-[4px] uppercase mt-[46px] mb-4'>
          Laptop
        </p>
        <h3 className='font-["Poppins"] text-xl font-semibold leading-[30px] group-hover:text-[#FF624C] group-hover:underline ' >
          S21 Laptop Ultra HD LED Screen Feature 2023 ...
        </h3>
        <div className='flex items-center gap-2 text-[#FED550] mt-2 mb-6'>
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <span className='text-[#303030] font-["Montserrat"] font-normal text-base'>( 100 )</span>
        </div>
        <p className='font-["Poppins"] text-2xl font-semibold leading-[30px] '> $1,199.00</p>
      </div>
  

    </div>
  )
}

export default ProductLayout
