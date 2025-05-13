import React, { useState } from 'react'

const HeaderTopRight = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const [isOpen, setIsOpen] = useState(true);
    // Sample country data  
    const countries = [
        { name: 'United States', value: 'US', flag: 'https://flagcdn.com/16x12/us.png' },
        { name: 'Canada', value: 'CA', flag: 'https://flagcdn.com/16x12/ca.png' },
        { name: 'United Kingdom', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' },
        { name: 'Australia', value: 'AU', flag: 'https://flagcdn.com/16x12/au.png' },
        { name: 'Germany', value: 'DE', flag: 'https://flagcdn.com/16x12/de.png' },
        { name: 'France', code: 'FR', flag: 'https://flagcdn.com/16x12/fr.png' },
    ]



  return (
    <div className='flex items-center justify-end gap-x-[50px]'>
       <div className="">
        USD
       </div>
       <div className="relative after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-25px] after:top-[50%] after:-translate-y-[50%] before:absolute before:w-[1px] before:h-[32px] before:bg-[#BFBFBF] before:left-[110px] before:top-[50%] before:-translate-y-[50%]">
        <select name="country"
        className='w-[112px] hidden'
            value={selectedCountry?.value}
            onChange={(e)=>{
            const country = countries.find((c) => c.value === e.target.value)
            setSelectedCountry(country)
        }}>
            {countries.map((country, index) => (
                <option value={country.value}>{country.name}</option>
            ))}
           
        </select>

        {/* custom dropdown */}

        <div className='border border-red-500 p-2 cursor-pointer flex items-center'>
            {selectedCountry ? (
                <>
                    <img src={selectedCountry.flag} alt={selectedCountry.name} className='w-4 h-4 mr-2' />
                    {selectedCountry.name}
                </>
            ) : (
                <span>Language</span>
            )}
        </div>

        {isOpen && (
            <ul className='absolute w-full border-gray-300 bg-white shadow-lg z-10 mt-1'>
                {countries.map((country) => (
                <li>
                    <img src={country?.flag} alt={country?.name} />
                    {country?.value}
                </li>
            ))}

            </ul>)}

        </div>


       <div>
        Social Media
       </div>
    </div>
  )
}

export default HeaderTopRight
