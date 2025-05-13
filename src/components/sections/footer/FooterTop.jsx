import React from 'react'
import Container from '../../layers/Container'

const FooterTop = () => {
  return (
    <Container className='bg-[linear-gradient(90deg,rgba(244,244,244,1)_29%,rgba(217,217,217,1)_43%)] h-40 rounded-[25px] '>
      <h3 className='font-["Poppins"] font-semibold text-4xl '>
        Get Our Updates
      </h3>
      <p className=' max-w-[475px] font-["Montserrat"] font-normal text-xl leading-[30px] mt-4 mb-5' >Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>
      <input type="text" placeholder='Enter your email address ...' className='block' />
      <button>Subscribe</button>
    </Container>
  )
}

export default FooterTop
