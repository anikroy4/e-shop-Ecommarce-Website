import React, { useState } from 'react'
import { FaAngleDown  } from 'react-icons/fa';
import FaceBookIcon from "../../../../icon/socialmediaicons/FaceBookIcon"
import TwitterIcon from "../../../../icon/socialmediaicons/TwitterIcon"
import InstagramIcon from "../../../../icon/socialmediaicons/InstagramIcon"

import { Link } from 'react-router-dom';

const HeaderTopRight = () => {
    const [selectedCountry, setSelectedCountry] = useState( { name: 'United Kingdom', language:'English', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' }, );
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    }
    
    // Sample country data  
    const countries = [
        {name: 'United Kingdom', language:'en', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' },
        {name: 'Bangladesh', language:'bd', value: 'BD', flag: 'https://flagcdn.com/16x12/bd.png' },
        { name: 'Germany', language:'de', value: 'DE', flag: 'https://flagcdn.com/16x12/de.png' },
        { name: 'France', language:'fr', value: 'FR', flag: 'https://flagcdn.com/16x12/fr.png' },
    ]
    
    const currency = [
        { value: 'USD', name: 'United States Dollar', symbol: '$' },
        { value: 'CAD', name: 'Canadian Dollar', symbol: '$' },
        { value: 'GBP', name: 'British Pound Sterling', symbol: '£' },
        { value: 'AUD', name: 'Australian Dollar', symbol: '$' },
        { value: 'EUR', name: 'Euro', symbol: '€' },
    ];


  return (
    <div className='flex items-center justify-end gap-x-[50px]'>
       <div className="">
            <select name="currency "
                className='w-[70px] border-none'
                value={selectedCurrency?.value}
                onChange={(e)=>{
                const currency = currency.find((c) => c.value === e.target.value)
                setSelectedCurrency(currency)
                }}>
                {currency.map((currency, index) => (
                <option value={currency.value}>{currency.symbol} {currency.value}</option>
                ))}
           
            </select>

       </div>
       <div className="relative after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-23px] after:top-[50%] after:-translate-y-[50%] before:absolute before:w-[1px] before:h-[32px] before:bg-[#BFBFBF] before:left-[135px] before:top-[50%] before:-translate-y-[50%]">
        <select name="country"
        className='w-[112px] hidden'
            value={selectedCountry?.value}
            onChange={(e)=>{
            const country = countries.find((c) => c.value === e.target.value)
            setSelectedCountry(country)
        }}>
            {countries.map((country, index) => (
                <option value={country.value}>{country.language}</option>
            ))}
           
        </select>

        {/* custom dropdown */}

        <div className='w-[120px] p-2 cursor-pointer flex items-center '
        onClick={() => setIsOpen(!isOpen)}
        >
            {selectedCountry ? (
                <>
                    <img src={selectedCountry.flag} alt={selectedCountry.language} className='w-4 h-4 mr-4' />
                   <span className='mr-2'>
                     {selectedCountry.language}
                    </span>
                    <FaAngleDown />
                </>
            ) : (
                <span className='mr-2'>Language<FaAngleDown /></span>
            )}
        </div>

        {isOpen && (
            <ul className='absolute w-full border-gray-300 bg-white shadow-lg z-10 mt-1'>
                {countries.map((country) => (
                <li
                key={country.value} 
                 className='flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-200'
                onClick={() =>handleSelect(country)}
                 >

                    <img src={country?.flag} alt={country?.name} />
                    {country?.language}
                </li>
            ))}

            </ul>)}

        </div>


       <div className='flex items-center gap-4'>
        <Link to="https://www.facebook.com/login">
            <FaceBookIcon/>
        </Link>
        <Link to="https://x.com/login">
            <TwitterIcon/>
        </Link>
        <Link to="https://www.instagram.com/accounts/login/">
            <InstagramIcon/>
        </Link>


       </div>
    </div>
  )
}

export default HeaderTopRight
