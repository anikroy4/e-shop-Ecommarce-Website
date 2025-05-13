import React from 'react'

const ProductDropDownIcon = ({width="16",height="16" , color="white"}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.99997 11C8.12784 11 8.25584 10.9511 8.35347 10.8535L13.3535 5.8535C13.5488 5.65813 13.5488 5.34175 13.3535 5.1465C13.1581 4.95125 12.8417 4.95113 12.6465 5.1465L7.99997 9.793L3.35347 5.1465C3.15809 4.95113 2.84172 4.95113 2.64647 5.1465C2.45122 5.34188 2.45109 5.65825 2.64647 5.8535L7.64647 10.8535C7.74409 10.9511 7.87209 11 7.99997 11Z" fill={color}/>
    </svg>
  )
}

export default ProductDropDownIcon
