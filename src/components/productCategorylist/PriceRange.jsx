import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const PriceRange = () => {
    
    const [isDropDownOpen3, setIsDropDownOpen3] = useState(false);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10000);
    const updateSlider = (type, value) => {
        if (type === "min") {
        const newMin = Math.min(parseInt(value), maxValue);
        setMinValue(newMin);
        } else {
        const newMax = Math.max(parseInt(value), minValue);
        setMaxValue(newMax);
        }
    } 
    let handleInputMin = (value)=>{
        if (value === "") {
            setMinValue(0)
            }
            else {
            if (value >= 0 && value <= maxValue) {
                setMinValue(value)
            }
        }
    }
    let handleInputMax = (value)=>{
        if (value === "") {
            setMaxValue(10000)
        }
        else{
            if (value >= minValue && value <= 10000) {
            setMaxValue(value)
        }
        }
    }
    const minParcet = (minValue / 10000) * 100;
    const maxParcet = (maxValue / 10000) * 100;



  return (
    <>
        <div>
                  <div onClick={()=> setIsDropDownOpen3(!isDropDownOpen3)} className=' mb-5 flex items-center justify-between'>
                      <h4 className=' cursor-pointer font-montserrat text-xl text-[#303030] font-bold  leading-7.5'>Price</h4>
                      <IoIosArrowDown   className={`${isDropDownOpen3 && `rotate-180`} cursor-pointer transition-all text-black h-4 w-4 `}/>
                  </div>

                  {isDropDownOpen3 && 
                    <div>
                        <div className=' flex gap-x-[11px]'>
                        <input onChange={(e)=> handleInputMin(e.target.value)} className='h-[74px] w-[124px] px-5 text-center font-montserrat text-base font-normal leading-6 text-[#303030] border border-[#929292] rounded-[10px] bg-[#F4F4F4]' type="number" value={minValue} max={10000} min={0}/>
                        <input onChange={(e)=> handleInputMax(e.target.value)} className='h-[74px] w-[124px] px-5 text-center font-montserrat text-base font-normal leading-6 text-[#303030] border border-[#929292] rounded-[10px] bg-[#F4F4F4]' type="number" value={maxValue} max={10000} min={0} />
                        </div>

                        <div className=' mt-7.5'>
                        <div className=' relative w-full h-0.5 bg-[#C3C3C3] rounded'>
                            <div 
                            className={` absolute bg-[#FF624C] rounded h-full`}
                            style={{left: `${minParcet}%`, width: `${(maxParcet - minParcet)>100? 100 : maxParcet - minParcet }%`}}
                            ></div>

                            <input 
                            type="range"
                            min={0}
                            max={10000}
                            step={10}
                            value={minValue}
                            onChange={(e)=> updateSlider("min",e.target.value)}
                            className='w-full h-0.5 bg-transparent pointer-events-none  absolute top-0 appearance-none'
                            style={{zIndex:2}}
                            />

                            <input 
                            type="range"
                            min={0}
                            max={10000}
                            step={10}
                            value={maxValue}
                            onChange={(e)=> updateSlider("max",e.target.value)}
                            className='w-full h-0.5 bg-transparent pointer-events-none absolute top-0 appearance-none'
                            style={{zIndex:2}}
                            />
                        </div>
                        </div>
                    </div>

                  }
              </div>
    
    </>
  )
}

export default PriceRange