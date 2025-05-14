import React from 'react'

const Button = ({text, bg="#FF624C", fontName="Montserrat", fontWeight="bold", size="20px", color="white", paddingY="4", paddingX="10", radius="10" }) => {
  return (
    <button className={`bg-[${bg}] font-${fontName} font-${fontWeight}  text-${color} rounded-[${radius}px]`}
    style={{
        fontSize:size,
        padding:(paddingX)+"px"+"" +(paddingY)+"px",
        
    }}
    > 
      {text}
    </button>
  )
}

export default Button
