import React from 'react'
import Container from '../../layers/Container'

const FooterBottom = () => {
  return (
    <>
    <div className=''>
      <Container>
        <div className="flex">
          <div className='mr-[182px]'>
            <img src="images/logo.png" alt="Logo" />
            <ul className='mt-[158px] flex flex-col gap-3'  >
              <li>
                +1 (555) 123-4567
              </li>
              <li>
                information@eshop.com
              </li>
              <li>
                123 Main Street, Suite 105, Anytown USA
              </li>
            </ul>

          </div>

          <div className='mr-27.5'>
            <h4 className='font-["poopins"] font-semibold text-xl '>
              Links
            </h4>
            <ul className='mt-6 flex flex-col gap-3'  >
              <li>
                Products List
              </li>
              <li>
                Order Tracking
              </li>
              <li>
                Products Guide
              </li>
              <li>
               Shopping Cart
              </li>
              <li>
                Tech Blog
              </li>
            </ul>
          </div>

          <div className='mr-27.5'>
            <h4 className='font-["poopins"] font-semibold text-xl '>
              Supports
            </h4>
            <ul className='mt-6 flex flex-col gap-3'  >
              <li>
                About Us
              </li>
              <li>
                Privacy Policy
              </li>
              <li>
                Return Policy
              </li>
              <li>
               Help Centre
              </li>
              <li>
                Store Location
              </li>
              <li>
                Careers
              </li>
            </ul>
          </div>

          <div  className='mr-24'>
            <h4 className='font-["poopins"] font-semibold text-xl '>
              Categories
            </h4>
            <ul className='mt-6 flex flex-col gap-3'  >
              <li>
                Computers & Tablets
              </li>
              <li>
                Mobile Phones & Accessories
              </li>
              <li>
                TV & Home Theater
              </li>
              <li>
               Audio & Headphones
              </li>
              <li>
                Cameras & Camcorders
              </li>
              <li>
                Gaming Equipment
              </li>
              <li>
                Home Appliances
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h4 className='font-["poopins"] font-semibold text-xl mb-6'>Payments</h4>
              <img src="images/payment.png" alt="payment" />

              <h4 className='font-["poopins"] font-semibold text-xl mt-[73px]' >Follow US</h4>
              <ul className='mt-6 flex flex-col gap-3'  >
               <li>
                  Twitter
               </li>
                <li>
                  Instagram
                </li>
                <li>
                  Facebook
               </li>
              </ul>
            </div>
          
          </div>
        </div>
      </Container>
    </div>
      
    </>
  )
}

export default FooterBottom
