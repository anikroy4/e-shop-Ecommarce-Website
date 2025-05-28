import React from 'react'
import Container from '../../layers/Container'
import { IoMdSearch } from 'react-icons/io'
import CartIcon from '../../../icon/CartIcon'
import UserIcon from '../../../icon/UserIcon'

const HeaderMiddle = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center py-8">
          <div>
            <img src="images/logo.png" alt="Logo" />
          </div>
          <div className='flex items-center'>
            <div className="relative mr-12">
              <input type="text" placeholder="Search Products ..." className="w-83 border border-solid border-[#979797] rounded-[10px] px-6 py-[18px] text-sm font-['Montserrat'] outline-none" />
              <IoMdSearch className='text-3xl absolute top-1/2 -translate-y-1/2 right-6 text-[#303030]'/>
            </div>
            <div className="relative pl-[50px] mr-[90px]">
              <div className="absolute top-[9px] left-0 ">
                <CartIcon/>
              </div>
              <p className='font-["Montserrat"] font-normal text-base leading-6'>Cart</p>
              <span className='font-["Montserrat"] font-bold text-sm leading-5 '>
                $150,00
              </span>
            </div>
            <div className="relative pl-[50px] after:content-[''] after:w-[1px] after:h-[40px] after:bg-[#BFBFBF] after:absolute after:top-[50%] after:left-[-45px] after:-translate-y-1/2">	
              <div className="absolute top-[10px] left-0 ">
                <UserIcon/>
              </div>
              <p className='font-["Montserrat"] font-normal text-base leading-6'>User</p>
              <span className='font-["Montserrat"] font-bold text-sm leading-5 '>
                Account
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HeaderMiddle


