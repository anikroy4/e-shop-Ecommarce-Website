import React, { useState } from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import CheckIcon from '../../icon/CheckIcon'
import PriceRange from '../../components/productCategorylist/PriceRange';

    let CategoriesList = [
    { id: 1, Name: 'Computers & Tablets' },
        { id: 2, Name: 'Mobile & Accessories' },
        { id: 3, Name: 'TV & Home Theater' },
        { id: 4, Name: 'Audio & Headphones' },
        { id: 5, Name: 'Cameras & Camcorders' },
        { id: 6, Name: 'Gaming Equipment' },
        { id: 7, Name: 'Home Appliances' },
    ];

    let BrandsList = [
        { id: 1, name: 'Apple' , available : "( 565 )" },
        { id: 2, name: 'Samsung' , available : "( 428 )" },
        { id: 3, name: 'ASUS' , available : "( 323 )" },
        { id: 4, name: 'Dell' , available : "( 298 )" },
        { id: 5, name: 'Lenovo' , available : "( 180 )" },
        { id: 6, name: 'HP' , available : "( 98 )" },
        { id: 7, name: 'Panasonic' , available : "( 17 )" }
    ];

const ProductListCategory = () => {

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDownOpen2, setIsDropDownOpen2] = useState(false);
  const [index, setIndex] = useState([]);
  const [index2, setIndex2] = useState([]);

  let handleSelect = (selectedIndex) => {
    if (index.includes(selectedIndex)) {
      setIndex((prev) => prev.filter((i) => i !== selectedIndex));
    }
    else {
      setIndex((prev) => [...prev, selectedIndex]);
    }
  }

  let handleSelect2 = (selectedIndex) => {
    if (index2.includes(selectedIndex)) {
      setIndex2((prev) => prev.filter((i) => i !== selectedIndex));
    }
    else {
      setIndex2((prev) => [...prev, selectedIndex]);
    }
  }



  return (
    <>
        <div className='w-[355px] max-h-[1057px] box-border p-12 bg-[#F4F4F4] rounded-[25px]'>

            <div className='w-full'> 
                <div>
                <div onClick={()=> setIsDropDownOpen(!isDropDownOpen)} className=' mb-5 flex items-center justify-between'>
                    <h4 className=' cursor-pointer font-montserrat text-xl text-[#303030] font-bold  leading-7.5'>Categories</h4>
                    <IoIosArrowDown  className={`${isDropDownOpen && `rotate-180`} cursor-pointer transition-all text-black h-4 w-4 `}/>
                </div>

                {isDropDownOpen &&        
                  <ul className={ `overflow-hidden transition-all`}> 
                      {CategoriesList.map((category, selectedIndex) => (
                        <li onClick={()=> handleSelect(selectedIndex)} key={category.id}  className={`${index === index && `click`}  flex cursor-pointer gap-x-2 items-center mt-3`}>
                          <CheckIcon isChecked={index.includes(selectedIndex)}/>
                          <span className={ ` text-[#303030] text-base font-montserrat transition-all leading-6 ${index.includes(selectedIndex) ? "font-bold" : "font-normal"}`}>{category.Name}</span>
                        </li>
                      ))}
                  </ul>
                }   
                </div>

                <hr className=' text-[#C3C3C3] w-full my-10'/>
                
                <div>
                    <div onClick={()=> setIsDropDownOpen2(!isDropDownOpen2)} className=' mb-5 flex items-center justify-between'>
                      <h4 className=' cursor-pointer font-montserrat text-xl text-[#303030] font-bold  leading-7.5'>Brands</h4>
                      <IoIosArrowDown   className={`${isDropDownOpen2 && `rotate-180`} cursor-pointer transition-all text-black h-4 w-4 `}/>
                    </div>

                  {isDropDownOpen2 &&        
                    <ul className={ ` overflow-hidden transition-all`}> 
                        {BrandsList.map((category,selectedIndex) => (
                          <li onClick={()=> handleSelect2(selectedIndex)} key={category.id}  className={`${index === index && `click`}  flex cursor-pointer justify-between items-center mt-3`}>
                            <span className=' gap-x-2 flex items-center'>
                            <CheckIcon isChecked={index2.includes(selectedIndex)}/>
                            <span className={ ` text-[#303030] text-base font-montserrat transition-all leading-6 ${index2.includes(selectedIndex) ? "font-bold" : "font-normal"}`}>{category.name}</span>
                            </span>
                            <span className='text-[#303030] font-montserrat text-base font-normal leading-6'> {category.available} </span>
                          </li>
                        ))}
                        <a href='#' className=' inline-block text-[#303030] text-base font-montserrat font-bold leading-6 mt-5 underline underline-offset-5'>More Brands</a>
                    </ul>
                  }   
                </div>

                <hr className=' text-[#C3C3C3] w-full my-10'/>

              <PriceRange />

            </div>

          </div>
    
    </>
  )
}

export default ProductListCategory