import React from 'react'
import Container from '../../layers/Container'
import HeaderTopLeft from './headertop/HeaderTopLeft'
import HeaderTopRight from './headertop/HeaderTopRight'

const HeaderTop = () => {
  return (
    <div className='border-b border-[#BFBFBF] border-solid py-[22px]'>
      <Container>
        
        <div className="flex items-center justify-between font-['Montserrat'] font-normal text-sm ">
          <HeaderTopLeft />
          <HeaderTopRight/>
        </div>
      </Container>
    </div>
  )
}

export default HeaderTop
