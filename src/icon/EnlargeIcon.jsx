import React from 'react'

const EnlargeIcon = ({onClick , className, textColor="black"}) => {
  return (
    <>
        <svg onClick={onClick} className={`${className}`} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 20V29H12" stroke={textColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 14L29 3" stroke={textColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 3H29V12" stroke={textColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 18L3 29" stroke={textColor} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    </>
  )
}

export default EnlargeIcon