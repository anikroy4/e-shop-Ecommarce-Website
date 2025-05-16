import React from 'react'
import Container from '../../layers/Container'
import HeadphoneIcon from"../../../icon/facilityicon/HeadphoneIcon"
import DeliveryIcon from"../../../icon/facilityicon/DeliveryIcon"
import SecurityIcon from"../../../icon/facilityicon/SecurityIcon"
import ReturnIcon from"../../../icon/facilityicon/ReturnIcon"


const Facility = () => {
  return (
    <Container className="flex justify-between items-center mb-20">
      <div className='flex justify-between  items-center gap-x-6'>
        <div>
          <HeadphoneIcon/>
        </div>
        <div className='font-["Montserrat"] text-[#303030]'>
          <h4 className=' text-base font-bold leading-6'>Responsive</h4>
          <p className='text-base font-normal leading-6'>Customer service available 24/7</p>
        </div>
      </div>
      <div className='flex justify-between items-center gap-x-6'>
        <div>
          <SecurityIcon/>
        </div>
        <div className='font-["Montserrat"] text-[#303030]'>
          <h4 className=' text-base font-bold leading-6'>Secure</h4>
          <p className='text-base font-normal leading-6'>Certified marketplace since 2017</p>
        </div>
        
      </div>
      <div className='flex justify-between items-center gap-x-6 '>
        <div>
          <DeliveryIcon/>
        </div>
        <div className='font-["Montserrat"] text-[#303030]'>
          <h4 className=' text-base font-bold leading-6'>Shipping</h4>
          <p className='text-base font-normal leading-6'>Free, fast, and reliable worldwide</p>
        </div>
      </div>
      <div className='flex justify-betweenitems-center gap-x-6 '>
        <div>
          <ReturnIcon/>
        </div>
        <div className='font-["Montserrat"] text-[#303030]'>
          <h4 className=' text-base font-bold leading-6'>Transparent</h4>
          <p className='text-base font-normal leading-6 '>Hassle-free return policy</p>
        </div>
      </div>


    </Container>
  )
}

export default Facility
