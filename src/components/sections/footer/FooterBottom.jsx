import React from 'react'
import Container from '../../layers/Container'
import TelephoneIcon from '../../../icon/footericon/TelephoneIcon'
import { Link } from 'react-router-dom'
import { TbMailOpened } from 'react-icons/tb'
import { IoLocationOutline } from 'react-icons/io5'
import MailIcon from '../../../icon/footericon/MailIcon'
import LocationIcon from '../../../icon/footericon/LocationIcon'

const FooterBottom = () => {
  return (
    <>
    <div className='mt-25 mb-20 '>
      <Container>
        <div className="flex">
          <div className='mr-[134px]'>
            <img src="images/logo.png" alt="Logo" />
            <ul className='mt-[158px] flex flex-col gap-3 font-["Montserrat"]'  >
              <li className='text-base leading-6 text-[#303030]'>
               <Link to="tel:+1 (555) 123-4567">
               <TelephoneIcon className=' inline-block text-[#646464] mr-3 font-normal'color="#646464" />+1 (555) 123-4567
               </Link> 
              </li>
              <li className='text-base leading-6 text-[#303030]'>
                <Link to="mailto:information@eshop.com">
                  <MailIcon className=' inline-block text-[#646464] mr-3 font-normal' color="#646464" />information@eshop.com
                </Link>
              </li>
              <li className='text-base  leading-6 text-[#303030]'> 
                <Link to="https://maps.app.goo.gl/gXf2o4o3fDVQi6mr7" target='_blank' >
                  <LocationIcon className=" inline-block text-[#646464] mr-3 font-normal" color="#646464"/>123 Main Street, Suite 105, Anytown USA
                </Link>
                
              </li>
            </ul>

          </div>

          <div className='mr-27.5 text-[#303030]'>
            <h4 className='font-["poopins"] font-semibold text-xl text-[#303030]'>
              Links
            </h4>
            <ul className='mt-6 flex flex-col gap-3 font-["Montserrat"] '  >
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link to="/product-list">
                  Products List
                </Link> 
              </li>
              
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Order Tracking
                </Link>
              </li>
              
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Products Guide
                </Link>
              </li>
             
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Shopping Cart
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Tech Blog
                </Link>  
              </li>
            </ul>
          </div>

          <div className='mr-27.5 text-[#303030]'>
            <h4 className='font-["poopins"] font-semibold text-xl '>
              Supports
            </h4>
            <ul className='mt-6 flex flex-col gap-3 font-["Montserrat"]'  >
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  About Us
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Privacy Policy
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Return Policy
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Help Centre
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Store Location
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div  className='mr-24 text-[#303030]'>
            <h4 className='font-["poopins"] font-semibold text-xl '>
              Categories
            </h4>
            <ul className='mt-6 flex flex-col gap-3 font-["Montserrat"] '  >
              <li className=' text-base leading-6 hover:text-[#FF624C] '>
                <Link>
                  Computers & Tablets
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Mobile Phones & Accessories
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  TV & Home Theater
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Audio & Headphones
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Cameras & Camcorders
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Gaming Equipment
                </Link>
              </li>
              <li className=' text-base leading-6 hover:text-[#FF624C]'>
                <Link>
                  Home Appliances
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className='text-[#303030] '>
              <h4 className='font-["poopins"] font-semibold text-xl mb-6 text-[#303030] leading-[30px]' >Payments</h4>
              <img src="images/payment.png" alt="payment" />

              <h4 className='font-["poopins"] font-semibold text-xl mt-[73px] leading-[30px] text-[#303030]' >Follow US</h4>
              <ul className='mt-6 flex flex-col gap-3 font-["Montserrat"]'  >
               <li className=' text-base leading-6 hover:text-[#FF624C]'>
                  <Link>
                    Twitter
                  </Link>
               </li>
                <li className=' text-base leading-6 hover:text-[#FF624C]'>
                  <Link>
                    Instagram
                  </Link>
                </li>
                <li className=' text-base leading-6 hover:text-[#FF624C]'>
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
