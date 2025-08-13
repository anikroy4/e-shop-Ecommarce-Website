import React from 'react'
import Container from '../../components/layers/Container'
import ContactBreadcrumb from '../../components/sections/breadcrumb/ContactBreadcrumb'
import Box from '../../components/Box'
import LocationIcon from '../../icon/footericon/LocationIcon'
import { Link } from 'react-router-dom'
import MailIcon from '../../icon/footericon/MailIcon'
import TelephoneIcon from '../../icon/footericon/TelephoneIcon'

const ContactPage = () => {
  return (
    <Container >
      <div className='w-full mt-8 rounded-[10px] mb-16'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.984440099766!2d-73.83626211063829!3d40.76236696076263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2600feab8eaf3%3A0xf2c8bcc288c78f3!2s123%20Main%20St%2C%20Queens%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sbd!4v1755104677257!5m2!1sen!2sbd" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='w-full flex justify-between gap-x-14'>
          <div className='w-[70%] flex flex-wrap gap-x-[15px] gap-y-12'>
            <div>
              <ContactBreadcrumb/>
              <h2 className='font-["poppins"] text-4xl font-semibold  mb-3 leading-[46px] '>
                Contact Us
              </h2>
              <p className='font-["Montserrat"] text-xl font-normal text-[#303030] mb-6'>
                Have any questions for us? Don’t hesitate to contact us.
              </p>
            </div>
            <div className='w-full'>
              <Box inputName={'Name'} placeholder={'Amelia Robert Watson'}/>
            </div>
            <div className='w-[49%]'>
              <Box inputName={'Phone Number'} placeholder={'+123 456 7890'}/>
            </div>
            <div className='w-[49%]'>
              <Box inputName={'Email Address'} placeholder={'amelia.watson@eshop.com'}/>
            </div>
            <div className='w-full'>
              <Box inputName={'Message'} placeholder={'Enter your message ...'} type={'textarea'}/>
            </div>
          </div>
        
        <div className='mt-[136px] pl-10 py-10 bg-[#F4F4F4] rounded-[25px] w-[30%]'>
          <h4 className='font-["poppins"] text-2xl font-semibold leading-[30px] mb-4'>Let’s Keep in Touch!</h4>
          <p className='font-["Montserrat"] text-base font-normal leading-[30px] text-[#616161] mb-10'>
            We would love to hear from you. Contact us for any inquiries you might have for us.
          </p>
          <div className='w-full'>
            <ul className=' flex flex-col gap-3 font-["Montserrat"]'  >
              <li className='text-base leading-6 font-bold text-[#303030]'>
               <Link to="tel:+1 (555) 123-4567">
               <TelephoneIcon className=' inline-block text-[#646464] mr-3 font-normal'color="#303030" />+1 (555) 123-4567
               </Link> 
              </li>
              <li className='text-base leading-6 text-[#303030] font-bold'>
                <Link to="mailto:information@eshop.com">
                  <MailIcon className=' inline-block text-[#303030] mr-3 font-normal' color="#303030" />information@eshop.com
                </Link>
              </li>
              <li className='text-base  leading-6 text-[#303030] font-bold'> 
                <Link to="https://maps.app.goo.gl/gXf2o4o3fDVQi6mr7" target='_blank' >
                <LocationIcon className=" inline-block text-[#303030] mr-3 font-normal" color="#303030"/><span className='w-'>123 Main Street, Suite 105, Anytown USA</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-["Montserrat"] text-xl font-bold leading-[30px] mt-[56px  ] mb-4 border-b-[4px] border-[#FF624C] inline-block'>
              Opening Hours
            </h4>

            <table>
              <tr>
                <td className='font-["Montserrat"] text-base font-bold leading-6 text-[#303030] mr-[6px]'>MON to FRI:</td>
                <td className='font-["Montserrat"] text-base font-normal leading-[30px] text-[#303030]'>08:00 AM - 04:00 PM</td>      
              </tr>
              <tr>
                <td className='font-["Montserrat"] text-base font-bold leading-6 text-[#303030] mr-[6px]'>
                  SAT to SUN:
                </td>
                <td>
                  09:00 AM - 03:00 PM
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default ContactPage
