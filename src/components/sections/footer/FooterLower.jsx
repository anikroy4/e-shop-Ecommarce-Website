import React from 'react'
import Container from '../../layers/Container'
import { Link } from 'react-router-dom'

const FooterLower = () => {
  return (
    <div className='border  border-[#CBCBCB]'>
      <Container className="flex justify-between mt-2 mb-20 text-[#646464] text-sm font-['Montserrat'] font-normal leading-5">
      <div className=''>
        Copyright © 2023 E-Shop. All Rights Reserved.
      </div>
      <div className='flex items-center justify-end'>
        <div className='mr-7
        '>
          Privacy Policy
        </div>
        <div className='relative after:absolute after:w-[1px] after:h-4 after:bg-[#BFBFBF] after:left-[-16px] after:top-[50%] after:-translate-y-[50%] before:absolute before:w-[1px] before:h-4 before:bg-[#BFBFBF] before:left-[143px] before:top-[10%] before:-translate-y-[50%]">'>
          Terms & Condition
        </div>
        <div className='ml-7'>
          <Link>
            Sitemap
          </Link>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default FooterLower
