import React from 'react'
import Container from '../../layers/Container'
import Button from '../../layers/Button'

const FooterTop = () => {
  return (
    <Container className='bg-[linear-gradient(90deg,rgba(244,244,244,1)_29%,rgba(217,217,217,1)_43%)] px-25 py-28.5 rounded-[25px] '>
      <h3 className='font-["Poppins"] font-semibold text-4xl leading-[46px] text-[#303030]'>
        Get Our Updates
      </h3>
      <p className=' max-w-[475px] font-["Montserrat"] font-normal text-xl leading-[30px] mt-4 mb-5' >Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>
      <input type="text" placeholder='Enter your email address ...' className='inline-block py-6 pl-6 w-[494px] leading-6 font-["Montserrat"] font-normal text-base border border-solid border-[#929292] !outline-none rounded-[10px]' />
      <br/>
      <Button text="Subscribe" className="mt-4 "/>
    </Container>
  )
}

export default FooterTop
