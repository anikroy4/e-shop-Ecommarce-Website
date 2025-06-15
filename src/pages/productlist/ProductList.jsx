import React from 'react'
import Container from '../../components/layers/Container'

const ProductList = () => {
  return (
    <Container>
        <div className='flex'>
          <div className="w-[355px] h-[200px] bg-[#F4F4F4] rounded-[25px]" >
            <h1>Category</h1>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
          </div>
          <div className="w">right</div>
        </div>
    </Container>
  )
}

export default ProductList
