import React from 'react'
import Container from '../layers/Container'
import ProductLayout from '../rootlayouts/ProductLayout'

const FeaturedProduct = () => {
  return (
    <Container>
      <h4 className='mb-18 font-["Poppins"] text-3xl font-semibold text-[#303030] leading-[46px] not-italic'>
        Featured Products
      </h4>
      <div className='flex gap-1  '>
      <ProductLayout percentTag={false} category="Laptop" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="50" rating="5" price="999.00" border={true} bg="transparent" stock="" stockAmount=""/>
      <ProductLayout percentTag={true}   category="Audio" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock="" stockAmount=""/>
      <ProductLayout percentTag={false}  category="Laptop" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="100" rating="5" price="1,199.00" border={true} bg="transparent" stock="" stockAmount=""/>
      <ProductLayout percentTag={false}  category="camera" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="70" rating="5" price="79.00" border={true} bg="transparent" stock="" stockAmount=""/>
      <ProductLayout percentTag={false}  category="television" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="20" rating="4" price="2,799.00" border={true} bg="transparent" stock="" stockAmount=""/>


      </div>
    </Container>
  )
}

export default FeaturedProduct
