import React from 'react'
import Container from '../../layers/Container'
import { FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { TbMailOpened } from 'react-icons/tb'
import { IoLocationOutline } from 'react-icons/io5'

const FooterBottom = () => {
  return (
    <>
    <div className='mt-25 mb-20 '>
      <Container>
        <div className="flex">
          <div className='mr-[142px]'>
            <img src="images/logo.png" alt="Logo" />
            <ul className='mt-[158px] flex flex-col gap-3 font-["Montserrat"]'  >
              <li className='relative pl-6 text-base leading-6 text-[#303030]'>
               <Link to="tel:+1 (555) 123-4567">
               <FiPhone className='absolute top-[12%] left-0 text-[#646464]' /> +1 (555) 123-4567
               </Link> 
              </li>
              <li className='relative pl-6 text-base leading-6 text-[#303030]'>
                <Link to="mailto:information@eshop.com">
                  <TbMailOpened className='absolute top-[12%] left-0 text-[#646464] w-4'/> information@eshop.com
                </Link>
              </li>
              <li className='relative pl-6 text-base leading-6 text-[#303030]'> 
                <Link to="https://maps.app.goo.gl/gXf2o4o3fDVQi6mr7" target='_blank' >
                  <IoLocationOutline className='absolute top-[12%] left-0 text-[#646464] w-4'/> 123 Main Street, Suite 105, Anytown USA
                </Link>
                
              </li>
            </ul>

          </div>

          <div className='mr-27.5 text-[#303030]'>
            <h4 className='font-["poopins"] font-semibold text-xl text-[#303030]'>
              Links
            </h4>
            <ul className='mt-6 flex flex-col gap-3 font-["Montserrat"] '  >
              <li>
                <Link to="/product-list">
                  Products List
                </Link> 
              </li>
              <li className=' text-base leading-6'>
                Order Tracking
              </li>
              <li className=' text-base leading-6'>
                Products Guide
              </li>
              <li className=' text-base leading-6'>
               Shopping Cart
              </li>
              <li className=' text-base leading-6'>
                Tech Blog
              </li>
            </ul>
          </div>

          <div className='mr-27.5 text-[#303030]'>
            <h4 className='font-["poopins"] font-semibold text-xl '>
              Supports
            </h4>
            <ul className='mt-6 flex flex-col gap-3 font-["Montserrat"]'  >
              <li className=' text-base leading-6'>
                About Us
              </li>
              <li className=' text-base leading-6'>
                Privacy Policy
              </li>
              <li className=' text-base leading-6'>
                Return Policy
              </li>
              <li className=' text-base leading-6'>
               Help Centre
              </li>
              <li className=' text-base leading-6'>
                Store Location
              </li>
              <li className=' text-base leading-6'>
                Careers
              </li>
            </ul>
          </div>

          <div  className='mr-24 text-[#303030]'>
            <h4 className='font-["poopins"] font-semibold text-xl '>
              Categories
            </h4>
            <ul className='mt-6 flex flex-col gap-3 font-["Montserrat"] '  >
              <li className=' text-base leading-6 '>
                Computers & Tablets
              </li>
              <li className=' text-base leading-6'>
                Mobile Phones & Accessories
              </li>
              <li className=' text-base leading-6'>
                TV & Home Theater
              </li>
              <li className=' text-base leading-6'>
               Audio & Headphones
              </li>
              <li className=' text-base leading-6'>
                Cameras & Camcorders
              </li>
              <li className=' text-base leading-6'>
                Gaming Equipment
              </li>
              <li className=' text-base leading-6'>
                Home Appliances
              </li>
            </ul>
          </div>
          <div>
            <div className='text-[#303030] '>
              <h4 className='font-["poopins"] font-semibold text-xl mb-6 text-[#303030] leading-[30px]' >Payments</h4>
              <img src="images/payment.png" alt="payment" />

              <h4 className='font-["poopins"] font-semibold text-xl mt-[73px] leading-[30px] text-[#303030]' >Follow US</h4>
              <ul className='mt-6 flex flex-col gap-3 font-["Montserrat"]'  >
               <li className=' text-base leading-6'>
                  <Link>
                    Twitter
                  </Link>
               </li>
                <li className=' text-base leading-6'>
                  <Link>
                    Instagram
                  </Link>
                </li>
                <li className=' text-base leading-6'>
                  <Link> 
                    Facebook
                  </Link>
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
