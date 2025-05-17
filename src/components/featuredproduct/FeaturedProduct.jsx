import React from 'react'
import Container from '../layers/Container'
import ProductLayout from '../rootlayouts/ProductLayout'

const FeaturedProduct = () => {
  return (
    <Container>
      <div className='flex gap-1  '>
      <ProductLayout/>
      <ProductLayout/>
      <ProductLayout/>
      <ProductLayout/>
      <ProductLayout/>  
      </div>
    </Container>
  )
}

export default FeaturedProduct
