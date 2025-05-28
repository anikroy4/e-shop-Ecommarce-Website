import React from 'react'
import Container from '../components/layers/Container'
import ProductLayout from '../components/layers/ProductLayout'
import Button from '../components/layers/Button'



const NewProduct = () => {

  return (
    <Container>
      <div className='flex items-center justify-between mb-24 mt-20'>
        
        <h4 className=' font-["Poppins"] text-4xl font-semibold text-[#303030] leading-[46px] not-italic '>New Products</h4>
          <div className='flex items-center justify-end gap-2  text-[#FF624C] ' >
           <p className=' font-["Montserrat"] text-base font-b leading-6 text-[#303030]'> 
            Sort By</p>
            <select name="" id="" className='font-["Montserrat"] text-base leading-6 ml-20'>
                <option value="" >All Categories </option>
                <option value="">Laptop</option>
                <option value="">Camera</option>
                <option value="">Audio</option>
                <option value="">Television</option>
            </select>
            
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

        <Button className="font-bold text-xl leading-[30px]" text="Load More" bg="transparent" border='1px solid #FF624C' color="#FF624C" />
       </div>


     
    </Container>
  )
}

export default NewProduct
