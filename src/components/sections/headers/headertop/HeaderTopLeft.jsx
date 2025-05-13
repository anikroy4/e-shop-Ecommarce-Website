import React from 'react'

import { Link } from 'react-router-dom'
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'

const HeaderTopLeft = () => {
  return (
    <div className='flex items-center gap-[50px] relative after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[62%] after:top-[50%] after:-translate-y-[50%]' >
        <Link to="https://maps.app.goo.gl/u3vTWBD9QqNRyhzs9" target='_blank' className='flex items-center gap-2'>
              <CiLocationOn /> 
              123 Main Street, Anytown USA
        </Link>
        <Link to="tel:+1 (555) 123-4567" className='flex items-center gap-2'>
            <BsTelephone />
              +1 (555) 123-4567
        </Link>
    </div>

  )
}

export default HeaderTopLeft
