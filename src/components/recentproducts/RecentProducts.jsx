import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Container from '../layers/Container'
import { Link } from 'react-router-dom'
import ProductLayout from '../layers/ProductLayout'

const RecentProducts = () => {
  return (
    <Container className="mt-16 mb-16">
      <div className='flex items-center justify-between mb-12'>
        {/* <h4 className='mb-18 font-["Poppins"] text-3xl font-semibold text-[#303030] leading-[46px] not-italic'>
          Featured Products
        </h4> */}
        <h2 className=' font-["Poppins"] text-4xl font-semibold text-[#303030] leading-[46px] not-italic '>Related Products</h2>
          <Link to="#">
          <p className='flex items-center justify-end gap-x-4 text-[#FF624C] font-bold font-["Montserrat"] text-base leading-6'> 
          View All
         <span className='text-2xl'><HiOutlineArrowNarrowRight /> </span>
        </p>
          </Link>
      </div>
      <div className='flex  mx-auto gap-x-6'>

          <ProductLayout percentTag={false} category="Laptop" title="JPhone 13 High Quality Value Buy Best Cam..." totalRating="50" rating="5" price="999.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          <ProductLayout percentTag={true} discount="50" category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          <ProductLayout percentTag={false} category="Laptop" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="100" rating="5" price="1,199.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          <ProductLayout percentTag={false} category="camera" title="Mini Polaroid Camera for Girls with Flash Li..." totalRating="70" rating="5" price="79.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          <ProductLayout percentTag={true} discount="50" category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          {/* <ProductLayout percentTag={false} category="television" title="AG OLED65CXPUA 4K Smart OLED TV New ..." totalRating="20" rating="4" price="2,799.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/> */}
          {/* <ProductLayout percentTag={false}  category="television" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="20" rating="4" price="2,799.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/> */}
      </div>

     
    </Container>
  )
}

export default RecentProducts