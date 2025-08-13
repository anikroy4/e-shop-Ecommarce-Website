import React, { useState } from 'react'
import Container from '../../components/layers/Container'
import CheckOutBreadcrumb from '../../components/sections/checkout/CheckOutBreadcrumb'
import Box from '../../components/Box'
import { FaAngleDown } from 'react-icons/fa'
import { BsTextarea } from 'react-icons/bs'
import ChargeIcon from '../../icon/chargeicon'

const CheckOutPage = () => {
 let [active, setActive] = useState("Information")
  let [isOpen, setIsOpen] = useState(false)
  let [isOpenState, setIsOpenState] = useState(false)
  let [selectedCountry, setSelectedCountry] = useState({ name: 'United Kingdom', language:'English', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png' });
  let [selectedState, setselectedState] = useState('United Kingdom');

  let [selectedCity, setSelectedCity] = useState('London');
  let [isOpenCity, setIsOpenCity] = useState(false);

    const countries = [
        {name: 'United Kingdom', language:'en', value: 'GB', flag: 'https://flagcdn.com/16x12/gb.png',
          states: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
          cities: ['London', 'Edinburgh', 'Cardiff', 'Belfast', 'Manchester', 'Birmingham', 'Glasgow', 'Liverpool', 'Leeds', 'Sheffield', 'Bristol', 'Newcastle upon Tyne', 'Nottingham', 'Southampton', 'Leicester', 'Coventry', 'Bradford', 'Brighton and Hove', 'Hull', 'Plymouth', 'Stoke-on-Trent', 'Derby', 'Swansea', 'Aberdeen', 'Dundee', 'Portsmouth', 'Wolverhampton', 'Luton', 'Reading', 'Blackpool', 'Bolton', 'Stockport', 'Walsall', 'Bournemouth', 'Southend-on-Sea', 'Swindon', 'Middlesbrough', 'Oxford', 'York', 'Cambridge', 'Milton Keynes', 'Peterborough', 'Norwich', 'Exeter', 'Cheltenham', 'Gloucester', 'Worcester', 'Hereford', 'Shrewsbury', 'Telford', 'St Albans', 'Watford', 'Basingstoke', 'Guildford', 'Crawley', 'Eastbourne'],
        },
        {name: 'Bangladesh', language:'bd', value: 'BD', flag: 'https://flagcdn.com/16x12/bd.png' ,
          states: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet'],
          cities: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barisal', 'Rangpur', 'Mymensingh', 'Comilla', 'Narayanganj', 'Gazipur', 'Tangail', 'Bogra', 'Jessore', 'Noakhali', 'Pabna', 'Narsingdi', 'Cox\'s Bazar', 'Satkhira', 'Brahmanbaria', 'Kishoreganj', 'Manikganj', 'Patuakhali', 'Jhalokati', 'Bhola', 'Lalmonirhat', 'Dinajpur', 'Thakurgaon', 'Panchagarh', 'Nilphamari', 'Kurigram', 'Gaibandha', 'Joypurhat', 'Sherpur', 'Netrakona', 'Moulvibazar', 'Habiganj', 'Sunamganj', 'Sylhet Sadar', 'Rangamati', 'Bandarban', 'Khagrachari', 'Cox\'s Bazar Sadar', 'Feni', 'Lakshmipur', 
          ],
        },
        { name: 'United States', language:'en', value: 'US', flag: 'https://flagcdn.com/16x12/us.png',
          states: ['California', 'Texas', 'Florida', 'New York'],
          cities: ['Los Angeles', 'Houston', 'Miami', 'New York City', 'Chicago', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington D.C.', 'Boston', 'El Paso', 'Nashville', 'Detroit', 'Oklahoma City', 'Portland', 'Las Vegas', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Long Beach', 'Kansas City', 'Mesa', 'Virginia Beach', 'Atlanta', 'Colorado Springs', 'Omaha', 'Raleigh', 'Miami Gardens', 'Cleveland', 'Tulsa', 'Oakland', 'Minneapolis', 'Wichita', 'New Orleans', 'Arlington', 'Bakersfield', 'Tampa', 'Honolulu', 'Anaheim', 'Aurora', 'Santa Ana', 'St. Louis', 'Pittsburgh', 'Corpus Christi', 'Riverside', 'Cincinnati', 'Lexington', 'Anchorage', 'Stockton', 'Toledo', 'Saint Paul', 'Newark', 'Greensboro', 'Plano', 'Henderson', 'Lincoln', 'Buffalo', 'Fort Wayne', 'Jersey City', 'Chula Vista', 'Orlando', 'St. Petersburg', 'Chandler', 'Laredo', 'Madison', 'Durham', 'Lubbock', 'Garland', 'Glendale', 'Reno', 'Hialeah', 'Chesapeake', 'Scottsdale', 'North Las Vegas', 'Irving',
          ],
        },
        { name: 'Canada', language:'en', value: 'CA', flag: 'https://flagcdn.com/16x12/ca.png',
          states: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
          cities: ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener', 'London', 'Halifax', 'Victoria', 'Oshawa', 'Windsor', 'Saskatoon', 'Regina', 'St. John\'s', 'Barrie', 'Kelowna', 'Abbotsford', 'Sudbury', 'Sherbrooke', 'Guelph', 'Kingston', 'Moncton', 'Thunder Bay', 'Chicoutimi–Jonquière', 'Saint John', 'Nanaimo', 'Lethbridge', 'Kamloops', 'Peterborough', 'Sarnia', 'Brantford', 'Red Deer', 'Medicine Hat', 'Grande Prairie', 'Sault Ste. Marie', 'Prince George', 'Drummondville', 'Saint-Hyacinthe', 'Chatham-Kent', 'Fredericton', 'Cornwall', 'Belleville', 'Stratford', 'Moose Jaw', 'Lloydminster', 'Fort McMurray', 'Whitehorse', 'Yellowknife', 'Iqaluit', 'Corner Brook', 'Port Hawkesbury']
        },
        { name: 'Germany', language:'de', value: 'DE', flag: 'https://flagcdn.com/16x12/de.png',
          states: ['Bavaria', 'Berlin', 'Hamburg', 'North Rhine-Westphalia'],
          cities: ['Munich', 'Berlin', 'Hamburg', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hannover', 'Nuremberg', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Mannheim', 'Bonn', 'Karlsruhe', 'Münster', 'Gelsenkirchen', 'Augsburg', 'Mönchengladbach', 'Braunschweig', 'Chemnitz', 'Kiel', 'Aachen', 'Magdeburg', 'Freiburg im Breisgau', 'Krefeld', 'Lübeck', 'Oberhausen', 'Erfurt', 'Mainz', 'Rostock', 'Hagen', 'Saarbrücken', 'Hamm', 'Mülheim an der Ruhr', 'Herne', 'Solingen', 'Osnabrück', 'Ludwigshafen am Rhein', 'Leverkusen', 'Oldenburg', 'Heidelberg', 'Potsdam'],
        },
        { name: 'Australia', language:'en', value: 'AU', flag: 'https://flagcdn.com/16x12/au.png' ,
          states: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'],
          cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle', 'Wollongong', 'Hobart', 'Geelong', 'Cairns', 'Townsville', 'Darwin', 'Toowoomba', 'Ballarat', 'Bendigo', 'Mackay', 'Coffs Harbour', 'Launceston', 'Albury-Wodonga', 'Wagga Wagga', 'Shepparton-Mooroopna', 'Sunshine Coast', 'Central Coast', 'Bunbury', 'Coffs Harbour', 'Mildura', 'Port Macquarie', 'Rockhampton', 'Tamworth', 'Bundaberg', 'Geraldton', 'Kalgoorlie-Boulder', 'Mount Gambier', 'Whyalla', 'Lismore', 'Orange', 'Dubbo', 'Bathurst', 'Coffs Harbour', 'Mildura', 'Bairnsdale', 'Wangaratta', 'Murray Bridge', 'Goulburn', 'Coffs Harbour', 'Port Lincoln', 'Burnie-Devonport', 'Launceston', 'Alice Springs', 'Broome', 'Karratha', 'Port Hedland', 'Geraldton', 'Kalgoorlie-Boulder', 'Mount Isa', 'Mackay', 'Rockhampton', 'Bundaberg', 'Hervey Bay', 'Maryborough', 'Gympie', 'Noosa Heads', 'Sunshine Coast'],
        },
        { name: 'India', language:'hi', value: 'IN', flag: 'https://flagcdn.com/16x12/in.png' ,
          states: ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'West Bengal'],
          cities: ['Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Ahmedabad', 'Pune', 'Surat', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad', 'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 'Gwalior', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 'Kota', 'Chandigarh', 'Solapur', 'Bareilly', 'Moradabad', 'Mysore', 'Guwahati', 'Jalandhar', 'Thiruvananthapuram', 'Bhubaneswar', 'Salem', 'Warangal', 'Tiruchirappalli', 'Aligarh', 'Jammu', 'Guntur', 'Udaipur', 'Siliguri', 'Jhansi', 'Ulhasnagar', 'Nellore', 'Jamshedpur', 'Bikaner', 'Bellary'],
        },
        { name: 'France', language:'fr', value: 'FR', flag: 'https://flagcdn.com/16x12/fr.png',
          states: ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes', 'Nouvelle-Aquitaine'],
          cities: ['Paris', 'Marseille', 'Lyon', 'Bordeaux', 'Nice', 'Toulouse', 'Nantes', 'Strasbourg', 'Montpellier', 'Rennes', 'Lille', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Grenoble', 'Dijon', 'Angers', 'Villeurbanne', 'Nîmes', 'Clermont-Ferrand', 'Aix-en-Provence', 'Brest', 'Limoges', 'Tours', 'Amiens', 'Metz', 'Perpignan', 'Besançon', 'Orléans', 'Boulogne-Billancourt', 'Mulhouse', 'Rouen', 'Caen', 'Nancy', 'Saint-Denis', 'Argenteuil', 'Montreuil', 'Avignon', 'Asnières-sur-Seine', 'Colombes', 'Aubervilliers', 'Rueil-Malmaison', 'Le Tampon', 'Saint-Paul', 'Saint-Pierre', 'Fort-de-France', 'Pointe-à-Pitre', 'Saint-Denis', 'Le Port', 'Saint-André', 'Saint-Louis', 'Sainte-Marie', 'Sainte-Suzanne', 'Le Lamentin', 'La Rochelle', 'Saint-Nazaire', 'Chambéry', 'Annecy', 'Agen', 'Alès', 'Albi', 'Aubenas'],
         },
    ]

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    }
    const handleSelectState = (state) => {
        setselectedState(state);
        setIsOpenState(false);
    }
    
    const handleSelectCity = (city) => {
        setSelectedCity(city);
        setIsOpenCity(false);
        
    } 

  return (
    <Container>
     <CheckOutBreadcrumb />

      <div className='text-center'>
        <h2 className='text-[#303030] text-[56px] font-bold font-["Poppins"] leading-[68px] '>
        Checkout
        </h2>
        <div className='flex gap-[63px] justify-center leading-[30px] font-["Poppins"] font-semibold text-[16px] text-[#303030] mb-12 mt-16'>
          <div className='flex items-center gap-[10px] cursor-pointer' onClick={() => setActive("Information")}>
            {active === "Information"&&
              <div className='w-[50px] h-[50px] bg-[#FF624C] rounded-full  flex items-center justify-center text-[#ffff] font-["Montserrat"] font-bold text-base leading-6'>
              01
              </div>
            }
           <p className={`border-b-4 border-solid  ${active === "Information" ? 'border-[#FF624C] text-[#303030] ' : 'border-transparent text-[#CDCDCD]'}`}>
            Information
            </p>
            
          </div>

          <div className='flex items-center gap-[10px] cursor-pointer' onClick={() => setActive("Shipping")}>
            { active === "Shipping" &&
            <div className='w-[50px] h-[50px] bg-[#FF624C] rounded-full  flex items-center justify-center text-[#ffff] font-["Montserrat"] font-bold text-base leading-6' >
              02
            </div> 
            }
            <p className={`border-b-4 border-solid  ${active === "Shipping" ? 'border-[#FF624C] text-[#303030] ' : 'border-transparent text-[#CDCDCD]'}`}>
              Shipping
            </p>
          </div>
          <div className='flex items-center gap-[10px] cursor-pointer' onClick={() => setActive("Payment")}>
            { active === "Payment" &&
              <div className='w-[50px] h-[50px] bg-[#FF624C] rounded-full  flex items-center justify-center text-[#ffff] font-["Montserrat"] font-bold text-base leading-6'>
              03
            </div>
            }
            <p className={`border-b-4 border-solid  ${active === "Payment" ? 'border-[#FF624C] text-[#303030] ' : 'border-transparent text-[#CDCDCD]'}`}>
              Payment
            </p>
          </div>
        </div>
      </div>
        <div className='flex justify-between'>
          <div className='w-[66%]'>
            <h4 className='font-["Poppins"] font-bold text-4xl leading-9 mb-10'>Billing Details</h4>
            <div className=' flex flex-wrap gap-x-4 gap-y-8 justify-between'>
              <div className='w-[49%]'>
                <Box inputName={"First Name"} placeholder={"Enter Your First Name"}/>
              </div>
              <div className='w-[49%]'>
                <Box inputName={"Last Name"} placeholder={"Enter Your Last Name"}/>
              </div>
              <div className='w-[49%]'>
                <Box inputName={"Phone Number"} placeholder={"Enter Your Phone Number"}/>
              </div>
              <div className='w-[49%]'>
                <Box inputName={"Email Address"} placeholder={"Enter Your Email Address"}/>
              </div>
              <div className='w-full'>
                <Box inputName={"Address"} placeholder={"Enter Your Address"}/>
              </div>
              <div className='w-[49%]'>
                    <h4 className='font-["Poppins"] text-xl font-bold text-[#303030] leading-[30px] mb-3'>Country <span className='text-red-600'>*</span></h4>
                  <div className='w-full px-[30px] py-[25px] border border-solid border-[#CBCBCB] rounded-[10px] cursor-pointer flex items-center  '
                    onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedCountry ? (
                            <>
                                
                               <span className='w-[241px] flex items-center gap-2 text-[#646464]'>
                                 {selectedCountry.name}
                                </span>
                                <FaAngleDown className='ml-[241px] text-[#646464]'/>
                            </>
                        ) : (
                            <span className='mr-2 '>Country<FaAngleDown /></span>
                        )}
                    </div>
            
                    {isOpen && (
                        <ul className='absolute w-[520px] border-gray-300 bg-white shadow-lg z-10 mt-1'>
                            {countries.map((country) => (
                            <li
                            key={country.value} 
                             className='flex items-center gap-2 px-7 cursor-pointer  text-[#646464] py-3 hover:bg-gray-200'
                            onClick={() =>handleSelectCountry(country)}
                             >
                                {country?.name}
                            </li>
                        ))}
            
                        </ul>)}
              </div>
              <div className='w-[49%]'>
                    <h4 className='font-["Poppins"] text-xl font-bold text-[#303030] leading-[30px] mb-3'>State <span className='text-red-600'>*</span></h4>
                  <div className='w-full px-[30px] py-[25px] border border-solid border-[#CBCBCB] rounded-[10px] cursor-pointer flex items-center  '
                    onClick={() => setIsOpenState(!isOpenState)}
                    >
                        {selectedState ? (
                            <>
                                
                               <span className='w-[241px] flex items-center gap-2 text-[#646464]'>
                                 {selectedState}
                                </span>
                                <FaAngleDown className='ml-[241px] text-[#646464]'/>
                            </>
                        ) : (
                            <span className='mr-2 '>Select State<FaAngleDown /></span>
                        )}
                    </div>
            
                    {isOpenState  && selectedCountry&& (
                        <ul className='absolute w-[520px] border-gray-300 bg-white shadow-lg z-10 mt-1'>
                            {selectedCountry.states.map((state, index) => (
                            <li
                            key={state} 
                             className='flex items-center gap-2 px-7 cursor-pointer  text-[#646464] py-3 hover:bg-gray-200'
                            onClick={() =>handleSelectState(state)}
                             >
                                {state}
                            </li>
                        ))}
            
                        </ul>)}
              </div>
              <div className='w-[49%]'>
                <h4 className='font-["Poppins"] text-xl font-bold text-[#303030] leading-[30px] mb-3'>City <span className='text-red-600'>*</span></h4>
                <div className='w-full px-[30px] py-[25px] border border-solid border-[#CBCBCB] rounded-[10px] cursor-pointer flex items-center  '
                onClick={() => setIsOpenCity(!isOpenCity)}
                > 
                  {selectedCity ? (
                    <>
                                  
                      <span className='w-[241px] flex items-center gap-2 text-[#646464]'>
                        {selectedCity}
                      </span>
                      <FaAngleDown className='ml-[241px] text-[#646464]'/>
                    </>
                  ) : (
                    <span className='mr-2 '>Select City<FaAngleDown /></span>
                  )}
                </div>
            
                {isOpenCity && selectedState && selectedCountry && Array.isArray(selectedCountry.cities) && (
                  <ul className='absolute w-[520px] border-gray-300 bg-white shadow-lg z-10 mt-1'>
                    {selectedCountry.cities.map((city) => (
                      <li
                      key={city}
                      className='flex items-center gap-2 px-7 cursor-pointer text-[#646464] py-3 hover:bg-gray-200'
                      onClick={() => {handleSelectCity(city)}}
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className='w-[49%]'>
                <Box inputName={"ZIP Code"} placeholder={"555"}/>
              </div>            


              <div className='w-full'>
                <Box inputName={"Order Notes"} placeholder={"Enter your order notes ..."} type={'textarea'}/>
              </div>
            </div>
                  
          </div>
          <div className='w-[32%]'>
            <div className='bg-[#F4F4F4] rounded-[25px] pt-10 pb-12 px-10'>
              <h4 className='font-["Poppins"] font-semibold text-2xl leading-[30px] mb-12'>Order Summary</h4>
              <div className='flex justify-between border-b border-solid border-[#C3C3C3] pb-6'>
                <div className='w-[250px] font-["Montserrat"] text-xl font-normal leading-[30px]'>2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD</div>
                <div className='font-["Montserrat"] text-xl font-bold leading-[30px]'>1</div>
                <div className='font-["Poppins"] text-xl font-semibold leading-[30px]'>$1,659.00</div>
              </div>
              <div className='flex justify-between border-b border-solid border-[#C3C3C3] pb-5 pt-5'>
                <div className='w-[250px] font-["Montserrat"] text-xl font-normal leading-[30px]'>Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band</div>
                <div className='font-["Montserrat"] text-xl font-bold leading-[30px]'>1</div>
                <div className='font-["Poppins"] text-xl font-semibold leading-[30px]'>$999.00</div>
              </div>
              <div className='flex justify-between border-b border-solid border-[#C3C3C3] pb-5 pt-5'>
                <div className='w-[250px] font-["Montserrat"] text-xl font-normal leading-[30px]'>Console Game Stick HD Wireless Bluetooth Connect</div>
                <div className='font-["Montserrat"] text-xl font-bold leading-[30px]'>2</div>
                <div className='font-["Poppins"] text-xl font-semibold leading-[30px]'>$4,598.00</div>
              </div>
              <div className='flex justify-between border-b border-solid border-[#C3C3C3] pb-5 pt-5'>
                <div className='w-[250px] font-["Montserrat"] text-xl font-normal leading-[30px]'>Console Game Stick HD Wireless Bluetooth Connect</div>
                <div className='font-["Montserrat"] text-xl font-bold leading-[30px]'>2</div>
                <div className='font-["Poppins"] text-xl font-semibold leading-[30px]'>$218.00</div>
              </div>
              <div className='flex justify-between border-b border-solid border-[#C3C3C3] pb-5 pt-5'>
                <div className='w-[250px] font-["Montserrat"] text-xl font-normal leading-[30px]'>Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28</div>
                <div className='font-["Montserrat"] text-xl font-bold leading-[30px]'>1</div>
                <div className='font-["Poppins"] text-xl font-semibold leading-[30px]'>$259.00</div>
              </div>
              <div className='flex justify-between pb-5 pt-5'>
                <div className='flex'>
                  <p className=' relative font-["Montserrat"] text-xl font-normal leading-[30px] mr-[6px]'>Shipping Fee</p>
                  <ChargeIcon className='absolute inline-block ' />
                </div>
                
                <div className='font-["Poppins"] text-xl font-semibold leading-[30px]'>$10.00</div>
              </div>
              <div className=' bg-white rounded-[10px] py-[24px] px-[16px] mt-6'>
                  <div className='flex justify-between mb-3 '>
                    <p className='font-["Montserrat"] text-base font-bold leading-6'>Total</p>
                    <p className='font-["Montserrat"] text-xl font-bold leading-[30px]'>$4,999.00</p>
                  </div>
                  <button className= 'flex font-["Montserrat"] py-6 px-[132px] bg-[#FF624C] text-white text-xl font-normal rounded-[10px] cursor-pointer'>Order Now</button>
              </div>
            </div>
          </div>

        </div>
       
    </Container>
  )
}

export default CheckOutPage
