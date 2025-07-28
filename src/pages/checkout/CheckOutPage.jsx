import React, { useState } from 'react'
import Container from '../../components/layers/Container'
import CheckOutBreadcrumb from '../../components/sections/checkout/CheckOutBreadcrumb'
import Box from '../../components/Box'
import { FaAngleDown } from 'react-icons/fa'

const CheckOutPage = () => {
 let [active, setActive] = useState("Information")
  let [isOpen, setIsOpen] = useState(false)
  let [selectedCountry, setSelectedCountry] = useState({ name: 'United Kingdom', language:'English', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' });

    const countries = [
        {name: 'United Kingdom', language:'en', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' },
        {name: 'Bangladesh', language:'bd', value: 'BD', flag: 'https://flagcdn.com/16x12/bd.png' },
        { name: 'Germany', language:'de', value: 'DE', flag: 'https://flagcdn.com/16x12/de.png' },
        { name: 'France', language:'fr', value: 'FR', flag: 'https://flagcdn.com/16x12/fr.png' },
    ]

    const handleSelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    }
    

  return (
    <Container>
     <CheckOutBreadcrumb />

      <div className='text-center'>
        <h2 className='text-[#303030] text-[56px] font-bold font-["Poppins"] leading-[68px] '>
        Checkout
        </h2>
        <div className='flex gap-[63px] justify-center leading-[30px] font-["Poppins"] font-semibold text-[16px] text-[#303030] mb-12 mt-16'>
          <div className='flex items-center gap-[10px] cursor-pointer' onClick={() => setActive("Information")}>
            {active === "Information"&&
              <div className='w-[50px] h-[50px] bg-[#FF624C] rounded-full  flex items-center justify-center text-[#ffff] font-["Montserrat"] font-bold text-base leading-6'>
              01
              </div>
            }
           <p className={`border-b-4 border-solid  ${active === "Information" ? 'border-[#FF624C] text-[#303030] ' : 'border-transparent text-[#CDCDCD]'}`}>
            Information
            </p>
            
          </div>

          <div className='flex items-center gap-[10px] cursor-pointer' onClick={() => setActive("Shipping")}>
            { active === "Shipping" &&
            <div className='w-[50px] h-[50px] bg-[#FF624C] rounded-full  flex items-center justify-center text-[#ffff] font-["Montserrat"] font-bold text-base leading-6' >
              02
            </div> 
            }
            <p className={`border-b-4 border-solid  ${active === "Shipping" ? 'border-[#FF624C] text-[#303030] ' : 'border-transparent text-[#CDCDCD]'}`}>
              Shipping
            </p>
          </div>
          <div className='flex items-center gap-[10px] cursor-pointer' onClick={() => setActive("Payment")}>
            { active === "Payment" &&
              <div className='w-[50px] h-[50px] bg-[#FF624C] rounded-full  flex items-center justify-center text-[#ffff] font-["Montserrat"] font-bold text-base leading-6'>
              03
            </div>
            }
            <p className={`border-b-4 border-solid  ${active === "Payment" ? 'border-[#FF624C] text-[#303030] ' : 'border-transparent text-[#CDCDCD]'}`}>
              Payment
            </p>
          </div>
        </div>
      </div>
        <div className='flex'>
          <div className='w-[70%]'>
            <h4 className='font-["Poppins"] font-bold text-4xl leading-9 mb-10'>Billing Details</h4>
            <div className=' flex flex-wrap gap-x-4 gap-y-8 justify-between'>
              <div className='w-[49%]'>
                <Box inputName={"First Name"} placeholder={"Enter Your First Name"}/>
              </div>
              <div className='w-[49%]'>
                <Box inputName={"Last Name"} placeholder={"Enter Your Last Name"}/>
              </div>
              <div className='w-[49%]'>
                <Box inputName={"Phone Number"} placeholder={"Enter Your Phone Number"}/>
              </div>
              <div className='w-[49%]'>
                <Box inputName={"Email Address"} placeholder={"Enter Your Email Address"}/>
              </div>
              <div className='w-full'>
                <Box inputName={"Address"} placeholder={"Enter Your Address"}/>
              </div>
              <div className='w-[49%]'>
                    <h4 className='font-["Poppins"] text-xl font-bold text-[#303030] leading-[30px] mb-3'>Country <span className='text-red-600'>*</span></h4>
                  <div className='w-full p-2 cursor-pointer flex items-center '
                    onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedCountry ? (
                            <>
                                <img src={selectedCountry.flag} alt={selectedCountry.name} className='w-4 h-4 mr-4' />
                               <span className='mr-2'>
                                 {selectedCountry.name}
                                </span>
                                <FaAngleDown />
                            </>
                        ) : (
                            <span className='mr-2'>Country<FaAngleDown /></span>
                        )}
                    </div>
            
                    {isOpen && (
                        <ul className='absolute w-full border-gray-300 bg-white shadow-lg z-10 mt-1'>
                            {countries.map((country) => (
                            <li
                            key={country.value} 
                             className='flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200'
                            onClick={() =>handleSelect(country)}
                             >
            
                                <img src={country?.flag} alt={country?.name} />
                                {country?.name}
                            </li>
                        ))}
            
                        </ul>)}
              </div>
            
            </div>
                  
          </div>
          <div className='w-[30%] bg-[#F5F5F5] rounded-[10px] h-10'>
            hlw
          </div>

        </div>
       
    </Container>
  )
}

export default CheckOutPage
