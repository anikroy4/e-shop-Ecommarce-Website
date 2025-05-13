import React from 'react'
import Container from '../../layers/Container'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import ProductDropDownIcon from '../../../icon/ProductDropDownIcon'
// import { RiArrowDropDownLine } from 'react-icons/ri'
const HeaderBottom = () => {
  return (
    <div className='bg-[#FF624C]'>
      <Container>
        <div className="flex py-6 justify-between items-center">
          <div>
            <ul className='flex items-center gap-x-20 font-["Montserrat"] text-base font-bold leading-6 text-white'>
              <li>
                <Link to="" className='flex items-center gap-x-4'> <FaBars /> All Categories</Link>
              </li>
              <li className='flex items-center gap-x-4'>
                <Link to="/products-list " className='flex items-center gap-x-4'>
                  Products
                  <ProductDropDownIcon/>
                {/* <RiArrowDropDownLine className='text-3xl' />  */}
                </Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className='flex items-center gap-x-20 font-["Montserrat"] text-base font-bold leading-6 text-white'>
              <li>
                <Link to="#" className='flex items-center gap-x-4'>Limited Sale 👋🏻</Link>
              </li>
              <li className='flex items-center gap-x-4'>
                <Link to="#" className='flex items-center gap-x-4'>
                  Best Seller
                </Link>
              </li>
              <li>
                <Link to="#">New Arrival</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeaderBottom
