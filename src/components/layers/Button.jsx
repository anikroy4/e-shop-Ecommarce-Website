import React from 'react'

const Button = ({text,className, bg="#FF624C", fontName="Montserrat", fontWeight="bold", size="xl", color="white", paddingY="16px", paddingX="40px",radius="10px", border="none" }) => {
  return (
    <button className={`bg-[${bg}] font-${fontName} font-${fontWeight}  text-${color} ${className}`}
    style={{
    padding:`${paddingY} ${paddingX} `,
    fontSize:`${size}`,
    borderRadius: `${radius}`,
    border:`${border}`,
    }}
    > 
      {text}
    </button>
  )
}

export default Button
