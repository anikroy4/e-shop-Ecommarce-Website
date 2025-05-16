import React, { useEffect, useRef, useState } from 'react'
import Container from '../../layers/Container'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
// import ProductDropDownIcon from '../../../icon/ProductDropDownIcon'
import { RiArrowDropDownLine } from 'react-icons/ri'
const HeaderBottom = () => {
  const [isDropdownOpen,setIsDropdownOpen ]=useState(false);
  const [isCategoryOpen,setIsCategoryOpen ]=useState(false);
  const dropdownref=useRef(null);
  const categoryref=useRef(null);

  useEffect(() => {
    
    const handleClickOutSide = (event) => {

      if(dropdownref.current && !dropdownref.current.contains(event.target)){
          setIsDropdownOpen(false)
        }
        if(categoryref.current && !categoryref.current.contains(event.target)){
            setIsCategoryOpen(false)
        }
        }
          
          
          

        document.addEventListener('mousedown', handleClickOutSide)
        return () => {
          document.removeEventListener('mousedown', handleClickOutSide)
        }
      },[])


  const handleDropDown=()=>{
    setIsDropdownOpen (!isDropdownOpen);

  }

  const handleCategory=()=>{
    setIsCategoryOpen(!isCategoryOpen);
  }

  return (
    <div className='bg-[#FF624C]'>
      <Container>
        <div className="flex py-6 justify-between items-center">
          <div>
            <ul className='flex items-center gap-x-20 font-["Montserrat"] text-base font-bold leading-6 text-white'>
              <li ref={categoryref} className='relative ' >
                <button onClick={handleCategory} className=' flex items-center gap-x-4'>
                  <FaBars onClick={handleCategory} className={`cursor-pointer ${isCategoryOpen && "rotate-90"}`} /> 
                  All Categories
                </button>
              </li>

                {isCategoryOpen && (
                  <div className=" absolute z-10 mt-2 bottom-2 w-36 bg-white rounded shadow-lg">
                      <ul className="py-2 font-['Montserrat'] font-normal text-base leading-6 text-[#606060]">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 1</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 2</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 3</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-300">product 4</li>
                      </ul>
                  </div>
                )}
                


              <li ref={dropdownref} className='relative flex items-center gap-x-4'>
                <button onClick={handleDropDown} className='flex items-center gap-x-4'>
                  Products  
                  <RiArrowDropDownLine onClick={handleDropDown} className={`text-3xl cursor-pointer ${isDropdownOpen && "rotate-180"}`}/>
                {/* <RiArrowDropDownLine className='text-3xl' />  */}
                </button>
                {isDropdownOpen &&(
                  <div className=" absolute z-10 w-32 top-4 mt-2 bg-white rounded shadow-lg">
                    <ul className="py-2 font-['Montserrat'] font-normal text-base leading-6 text-[#606060]">
                        <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer duration-300">product 1</li>
                        <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer duration-300">product 2</li>
                        <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer duration-300">product 3</li>
                        <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer duration-300">product 4</li>
                      </ul>
                  </div>
                    
                )}
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
