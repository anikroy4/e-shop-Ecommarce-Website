import React, { useEffect, useRef, useState } from 'react'
import Container from '../layers/Container'
import ProductLayout from '../layers/ProductLayout'
import Button from '../layers/Button'
import { IoIosArrowDown } from 'react-icons/io'



const NewProduct = () => {


  const categories=[
    { name: "All Categories", category: "All" },
    { name: "Watch", category: "Watch" },
    { name: "Tablet", category: "Tablet" },
    { name: "Audio", category: "Audio" },
    { name: "Laptop", category: "Laptop" },
    { name: "Camera", category: "Camera" }
  ]

    let [isDropDownOpen,setIsDropDownOpen] = useState(false)
    let [isSelected, setIsSelected]= useState(false);
    let categoryRef=useRef();


    useEffect(()=>{

      let handleCategoryDown=(e)=>{
        if(categoryRef.current && ! categoryRef.current.contains(e.target)){
          setIsDropDownOpen(false)
        }
      }

      document.addEventListener('click', handleCategoryDown)

      return()=>{
         
      document.removeEventListener('click', handleCategoryDown)
      }
    },[])

    let handleIsSelected=(item)=>{
      // console.log(isSelected);
      setIsSelected(item);
      setIsDropDownOpen(false)
      
    }




  return (
    <Container>
      <div className='flex items-center justify-between mb-24 mt-20'>
        
        <h4 className=' font-["Poppins"] text-4xl font-semibold text-[#303030] leading-[46px] not-italic '>New Products</h4>
          <div className='flex items-center gap-4'>
                <span className='font-["Montserrat"] text-base font-normal leading-6 text-[#303030]'>Sort by</span>
               
                <div className=' flex items-center relative ' 
                onClick={()=>{setIsDropDownOpen(!isDropDownOpen)}}
                ref={categoryRef}>
                
                {isSelected

                ?
                    <div className='flex items-center gap-x-25 cursor-pointer text-[#FF624C] font-["montserrat"] text-base font-bold leading-6'>
                   <span>{isSelected}</span> 
                    <IoIosArrowDown className={`${isDropDownOpen&& `rotate-180`} text-black h-4 w-4`}/>
                  </div>
                  :
                  <div className='flex items-center gap-x-25 cursor-pointer text-[#FF624C] font-["montserrat"] text-base font-bold leading-6'>
                    <p>All Categories</p> <span className={`${isDropDownOpen && `rotate-180`}  text-black h-4 w-4`}><IoIosArrowDown/></span>
                  </div>
              }

                 {isDropDownOpen &&(
                   <ul className='bg-[#fff] text-sm  text-[#303030] right-0 font-["Montserrat"] font-semibold w-[200px] z-999 absolute top-10 shadow-lg rounded-lg '>

                    {categories.map((item, index)=>{
                      return <li onClick={()=> handleIsSelected(item.category)} className={` py-2 px-3 border-b border-[#CBCBCB] cursor-pointer  last:border-b-transparent hover:bg-[#ddd]`}
                       key={index}> {item.name}</li>
                    })}
                    {/* <li>product 1</li>
                    <li>product 2</li>
                    <li>product 3</li>
                    <li>product 4</li>
                    <li>product 5</li> */}
                  </ul>
                 )}

                </div>
         
          </div>
      </div>

       <div className='flex gap-2'>
            <ProductLayout percentTag={false}  category="Laptop" title="JPhone 13 High Quality Value Buy Best Cam..." totalRating="50" rating="5" price="999.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
            <ProductLayout percentTag={true} discount="50" category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
            <ProductLayout percentTag={false}  category="Laptop" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="100" rating="5" price="1,199.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
            <ProductLayout percentTag={false}  category="camera" title="Mini Polaroid Camera for Girls with Flash Li..." totalRating="70" rating="5" price="79.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
            <ProductLayout percentTag={true}  discount="50" category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>

       </div>
       <div className='flex justify-center mt-16 mb-36'>

        <Button paddingY="14px "className="font-bold text-xl leading-[30px]" text="Load More" bg="transparent" border='1px solid #FF624C' color="#FF624C" />
       </div>


     
    </Container>
  )
}

export default NewProduct
