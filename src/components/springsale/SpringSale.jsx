import React from 'react'
import Container from '../layers/Container'
import ProductLayout from '../layers/ProductLayout'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Button from '../layers/Button'
import SpringsaleImageicon from '../../icon/SpringsaleImageicon'




const SpringSale = () => {

  return (
    <Container className='bg-[#F4F4F4]' >
        <div className='flex justify-between mb-16 mt-16'>
            <div className='relative '>
                <h1 className='pt-[171px] font-["Poppins"] text-[64px] font-bold leading-16'>Spring Sale</h1>
                <img className='pt-10' src="/images/countDowntimer.png" alt="countDowntimer.png" />
                <Button className="mt-[72px]" text="Shop Now"/>
                <div className='absolute left-0 bottom-0'>
                    <SpringsaleImageicon/>
                </div>
            </div>
            
       
       
            <div className=' max-w-[902px]'>

                <div className='flex gap-5 flex-wrap' >
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={false}  category="Laptop" title="JPhone 13 High Quality Value Buy Best Cam..." totalRating="50" rating="5" price="999.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
                    </div>
                    <div  className='max-w-[285px]'>
                        <ProductLayout percentTag={true} discount="30"  category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={false} discount="" category="Laptop" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="100" rating="5" price="1,199.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={false} discount="" category="camera" title="Mini Polaroid Camera for Girls with Flash Li..." totalRating="70" rating="5" price="79.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={false} discount=""  category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
                    </div>
                    <div className='max-w-[285px]'>
                        <ProductLayout percentTag={true} discount="10"  category="television" title="AG OLED65CXPUA 4K Smart OLED TV New ..." totalRating="20" rating="4" price="2,799.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
                    </div>
                </div>
            </div>
     

        </div>
    </Container>
  )
}

export default SpringSale
