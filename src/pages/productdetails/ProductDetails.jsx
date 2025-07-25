import { use, useEffect, useRef, useState } from 'react'
import Container from '../../components/layers/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EnlargeIcon from '../../icon/EnlargeIcon';
import { MdCloseFullscreen } from 'react-icons/md';
import { RiStarSFill } from 'react-icons/ri';
import ReturnIcon from '../../icon/facilityicon/ReturnIcon';
import DeliveryIcon from '../../icon/facilityicon/DeliveryIcon';
import SecurityIcon from '../../icon/facilityicon/SecurityIcon';
import MinusIcon from '../../icon/productdetailSection/MinusIcon';
import PlusIcon from '../../icon/productdetailSection/PlusIcon';
import CartIcon from '../../icon/productdetailSection/CartIcon';

const ProductDetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isactive, setActive] = useState(false);
  
  const [isImage, setImage] = useState(" ");
  let [quantity, setQuantity]= useState(0);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const [desActive, setDesActive] = useState(true);
  const [reviewActive, setReviewActive] = useState(false);
  const [SpecificActive, setSpecificActive] = useState(false);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

   var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; 

   var settingsAnother = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };


  let handleClick = (url) => {
    setActive(!isactive);
    setImage(url);
  }



  let quantityHandleClick=(type)=>{
    if(type=="minus"){
     if(quantity>0){
       quantity--;
      setQuantity(quantity)
      }
    }else{
      quantity++;
      setQuantity(quantity)
    }
  }


  let handleDescription = () => {
    setDesActive(true);
    setReviewActive(false);
    setSpecificActive(false);
  }

  let handleReview = () => {
    setDesActive(false);
    setReviewActive(true);
    setSpecificActive(false);
  }

  let handleSpecification = () => {
    setDesActive(false);
    setReviewActive(false);
    setSpecificActive(true);
  }



  return (
    <>
      <Container>
        <div className='flex gap-[39px] leading-6 font-["Montserrat"] font-normal text-[16px] text-[#303030] mb-12 mt-16'>
          <span className='relative after:w-[2px] after:h-full after:bg-[#303030] after:content-[""] after:absolute after:top-0 after:right-[-50%]'>Home</span>
          <span className='relative after:w-[2px] after:h-full after:bg-[#303030] after:content-[""] after:absolute after:top-0 after:right-[-15%]'>Computers & Tablets</span>
          <span className='relative after:w-[2px] after:h-full after:bg-[#303030] after:content-[""] after:absolute after:top-0 after:right-[-50%]'>Laptop</span>
          <span className=' font-bold'>NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro</span>
        </div>

        <div className='flex justify-between gap-x-14'>
          <div className='w-[50%]  '>
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...settings} >
              <div>
                <div className='relative'>
                  <img src="images/banner.png" alt="banner.png" />
                  <EnlargeIcon onClick={()=>handleClick("images/banner.png")} className="absolute top-[4%] right-[2%] " textColor='white'/>
                </div>
              </div>
              <div>
                <div className='relative'>
                  <img src="images/banner.png" alt="banner.png" />
                   <EnlargeIcon onClick={()=>handleClick("images/banner.png")} className="absolute top-[4%] right-[2%] " textColor='white'/>
                </div>
              </div>
              <div>
                <div className='relative'>
                  <img src="images/banner.png" alt="banner.png"  />
                   <EnlargeIcon onClick={()=>handleClick("images/banner.png")} className="absolute top-[4%] right-[2%] " textColor='white'/>
                </div>
              </div>
              <div>
                <div className='relative'>
                  <img src="images/banner.png" alt="banner.png"  />
                   <EnlargeIcon onClick={()=>handleClick("images/banner.png")} className="absolute top-[4%] right-[2%] " textColor='white'/>
                </div>
              </div>
              <div>
                <div className='relative'>
                  <img src="images/banner.png" alt="banner.png"  />
                   <EnlargeIcon onClick={()=>handleClick("images/banner.png")} className="absolute top-[4%] right-[2%] " textColor='white'/>
                </div>
              </div>
              <div>
                <div className='relative'>
                  <img src="images/banner.png" alt="banner.png"  />
                   <EnlargeIcon onClick={()=>handleClick("images/banner.png")} className="absolute top-[4%] right-[2%] " textColor='white'/>
                </div>
              </div>
             
            </Slider>

            <Slider asNavFor={nav1} ref={slider => (sliderRef2 = slider)} {...settingsAnother} className='mt-8 mb-[63px]' >
              <div>
                <div className='mx-[5px]'>
                  <img src="images/banner.png" alt="banner.png" />
                </div>
              </div>
              <div>
                <div className='mx-[5px]'>
                  <img src="images/banner.png" alt="banner.png" />
                </div>
              </div>
              <div>
                <div className='mx-[5px]'>
                  <img src="images/banner.png" alt="banner.png" />
                </div>
              </div>
              <div>
                <div className='mx-[5px]'>
                  <img src="images/banner.png" alt="banner.png" />
                </div>
              </div>
              <div>
                <div className='mx-[5px]'>
                  <img src="images/banner.png" alt="banner.png" />
                </div>
              </div>
              <div>
                <div className='mx-[5px]'>
                  <img src="images/banner.png" alt="banner.png" />
                </div>
              </div>
            </Slider>
          </div>
          <div className='w-[50%]'>
            <div className='flex items-center gap-2 '>
               <RiStarSFill className='text-[#FED550]'/>
               <RiStarSFill className='text-[#FED550]'/>
               <RiStarSFill className='text-[#FED550]'/>
               <RiStarSFill className='text-[#FED550]'/>
               <RiStarSFill className='text-[#FED550]'/>
               <span>(142)</span>
            </div>
            <h2 className='font-["Poppins"] font-semibold text-4xl leading-[46px] mt-[19px] border-b border-solid border-[#CBCBCB] pb-[20px]'>NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro</h2>

            {/* <hr className='mt-6 text-[#CBCBCB]'/> */}

            <div className='flex items-center gap-x-[18px] mt-6 mb-12'>
              <p className='text-[#FF624C] font-bold font-["Poppins"] text-[56px] leading-17 '>$2,999.99</p>
              <small className='text-[#303030] font-["Montserrat"] font-normal text-xl leading-6'>
                <del className='text-[#CBCBCB]'>
                  $5,499.99
                </del>
                </small>
            </div>
            <div>
               <ul className='flex gap-x-27 mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[87px]'>
                    Brand
                  </li>
                  <li className='font-["Montserrat"] font-semibold text-xl leading-[30px] text-[#303030]'>
                    NexSUS Tech Company
                  </li>
                </ul>
               <ul className='flex gap-x-27 mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[87px]'>
                    Size
                  </li>
                  <li className='font-["Montserrat"] font-semibold text-xl leading-[30px] text-[#303030]'>
                    15.7 x 11.1 x 1.0 inches (W x D x H)
                  </li>
                </ul>
               <ul className='flex gap-x-27 mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[87px]'>
                    Weight
                  </li>
                  <li className='font-["Montserrat"] font-semibold text-xl leading-[30px] text-[#303030]'>
                    6.28 pounds
                  </li>
                </ul>
               <ul className='flex gap-x-27 mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[87px]'>
                    Delivery
                  </li>
                  <li className='font-["Montserrat"] font-semibold text-xl leading-[30px] text-[#303030]'>
                    Worldwide
                  </li>
               </ul>
               <ul className='flex gap-x-27 mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[87px]'>
                    Variant
                  </li>
                  <li className='font-["Montserrat"] font-semibold text-xl leading-[30px] text-[#303030] flex flex-wrap items-center gap-x-1 gap-y-2'>
                    <button className='py-[15px] px-[30px] border border-solid border-[#979797] rounded-[5px] font-["Montserrat"]  text-base leading-6 font-bold  text-[#303030] hover:text-[#FF624C] hover:border-[#FFB0A5]'>Off White</button>
                    <button className='py-[15px] px-[30px] border border-solid border-[#979797] rounded-[5px] font-["Montserrat"]  text-base leading-6 font-bold  text-[#303030]  hover:text-[#FF624C] hover:border-[#FFB0A5]'>Space Gray</button>
                    <button className='py-[15px] px-[30px] border border-solid border-[#979797] rounded-[5px] font-["Montserrat"]  text-base leading-6 font-bold  text-[#303030]  hover:text-[#FF624C] hover:border-[#FFB0A5]'>Jet Black</button>
                    <button disabled className='py-[15px] px-[30px] border border-solid border-[#979797] rounded-[5px] font-["Montserrat"]  text-base leading-6 font-bold  text-[#303030] disabled:text-[#CBCBCB] disabled:border-[#CBCBCB]  hover:text-[#FF624C] hover:border-[#FFB0A5]'>Cinnamon Red</button>
                  </li>
               </ul>
            </div>

          </div>
        </div>
        <div className='flex  items-center mt-10 mb-20 gap-x-14'>

          <div className='flex w-[50%] items-center gap-x-8'> 
            <div className='flex justify-between items-center gap-x-3 '>
                <div>
                  <DeliveryIcon/>
                </div>
                <div className='font-["Montserrat"] text-[#303030]'>
                  <h4 className=' text-base font-bold leading-6'>Free Shipping</h4>
                  <p className='text-base font-normal leading-6'>Worldwide available</p>
                  </div>
            </div>
            <div className='flex justify-between items-center gap-x-3'>
              <div>
                <SecurityIcon/>
              </div>
              <div className='font-["Montserrat"] text-[#303030]'>
                <h4 className=' text-base font-bold leading-6'>100% Guaranteed</h4>
                <p className='text-base font-normal leading-6'>Receive product first</p>
              </div>
              
            </div>
            <div className='flex justify-between items-center gap-x-3 '>
              <div>
                <ReturnIcon/>
              </div>
              <div className='font-["Montserrat"] text-[#303030]'>
                <h4 className=' text-base font-bold leading-6'>Return Available</h4>
                <p className='text-base font-normal leading-6 '>See return policy</p>
              </div>
            </div>
          </div>

          <div className='w-[50%] flex items-center justify-between '>
            <div className='flex items-center justify-between '>
              <button onClick={()=>quantityHandleClick('minus')} className=' p-4 rounded-full bg-[#F4F4F4]'>
                <MinusIcon className='text-[#303030] text-[20px]'/> 
              </button>
              <input className='max-w-[194px]  leading-[46px] font-["Poppins"] text-4xl font-semibold text-[#303030] text-center'value={quantity} />
              <button onClick={()=>quantityHandleClick('plus')} className=' p-4 rounded-full bg-[#F4F4F4]'>
                <PlusIcon className='text-[#303030] text-[20px] '/>
              </button>
            </div>
            <div className='flex gap-x-4'>
              <button className='py-4 px-10 font-["Montserrat"] items-center leading-[30px] font-bold text-white text-xl bg-[#FF624C] rounded-[10px]'>Buy Now</button>
              <button className='p-[17px] border border-solid border-[#FF624C] rounded-[10px] '>
                <CartIcon className='text-[#FF624C] text-[20px]'/>
              </button>
            </div>
          </div>
      
      




        </div>  

        <div >
          <div className='flex items-center gap-x-[35px] mb-10'>
            <h4 className={`${desActive && " border-b-2 border-solid border-[#FF624C]"} pb-2 font-["Poppins"] font-semibold text-2xl leading-[30px] text-[#303030] cursor-pointer`} 
            onClick={handleDescription}>
              Description
            </h4>
            <h4 className={`${SpecificActive && " border-b-2 border-solid border-[#FF624C]"} pb-2 font-["Poppins"] font-semibold text-2xl leading-[30px] text-[#303030] cursor-pointer`} onClick={handleSpecification}>
              Specification
            </h4>
            <h4 className={`${reviewActive && " border-b-2 border-solid border-[#FF624C]"} pb-2 font-["Poppins"] font-semibold text-2xl leading-[30px] text-[#303030] cursor-pointer`} onClick={handleReview}>
              Reviews
            </h4>
          </div>
          <div className='w-full  bg-[#CBCBCB] mb-10'>
            {desActive &&
            <>
              <h1>Description</h1>
              <p className='font-["Montserrat"] text-base leading-6 text-[#303030]'>
              The NexSUS ROCK Strix Scar 17 Gaming Laptop is a high-performance machine designed for gamers and professionals alike. It features a powerful AMD Ryzen 9 processor, NVIDIA GeForce RTX 3080 graphics card, and a stunning 15.7-inch display with a 144Hz refresh rate for smooth visuals. With 1TB SSD storage and 16GB RAM, it offers ample space and speed for demanding applications. The laptop's sleek design is complemented by customizable RGB lighting, making it a stylish choice for any setup. Whether you're gaming, streaming, or working on intensive tasks, the Strix Scar 17 delivers exceptional performance and reliability.
              This laptop also boasts advanced cooling technology to keep temperatures low during extended gaming sessions. Its ergonomic keyboard ensures comfortable typing, while multiple connectivity options—including USB-C, HDMI, and Wi-Fi 6—provide versatility for all your devices. The long-lasting battery and robust build quality make it ideal for both home and travel use. Experience immersive audio, fast load times, and seamless multitasking with the NexSUS ROCK Strix Scar 17—engineered for those who demand the best in performance and reliability. Whether you're a hardcore gamer, a content creator, or a professional on the go, this laptop is designed to meet your needs with style and power.

              </p>
            
            </>
             }


            {reviewActive &&
            <>
              <h1>Review</h1>
              <p className='font-["Montserrat"] text-base leading-6 text-[#303030]'>
              The NexSUS ROCK Strix Scar 17 Gaming Laptop is a high-performance machine designed .</p>
            
            </>
             }


            {SpecificActive &&
            <div className='flex gap-x-[53px] items-center'>
              <div>
                <ul className='flex gap-x-[87px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[101px]'>
                    Brand
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030]'>
                    NexSUS Tech Company
                  </li>
                </ul>
                <ul className='flex gap-x-[87px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[101px]'>
                    Display
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030] w-[531px]'>
                    17.3-inch Full HD (1920 x 1080) IPS panel, 144Hz refresh rate, 3ms response time, 100% sRGB color gamut, Adaptive-Sync technology, anti-glare
                  </li>
                </ul>
                <ul className='flex gap-x-[87px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[101px]'>
                    Processor
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030] w-[531px]'>
                    10th Gen Intel Core i9-10980HK (8 cores, 16 threads, 2.4GHz base clock speed, up to 5.3GHz turbo boost)
                  </li>
                </ul>
                <ul className='flex gap-x-[87px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[101px]'>
                    Graphics
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030]'>
                    NVIDIA GeForce RTX 3080 (16GB GDDR6 VRAM)
                  </li>
                </ul>
                <ul className='flex gap-x-[87px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[87px]'>
                    Memory
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030]'>
                    32GB DDR4-3200 RAM
                  </li>
                </ul>
                <ul className='flex gap-x-[87px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[87px]'>
                    Storage
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030]'>
                    1TB PCIe NVMe M.2 SSD
                  </li>
                </ul>
              </div>
              <div>
                <ul className='flex gap-x-[68px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[120px]'>
                    Audio
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030] w-[560px]'>
                    2 x 4W speakers with Smart Amp technology
                  </li>
                </ul>
                <ul className='flex gap-x-[68px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[120px]'>
                    Connection
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030] w-[560px]'>
                    Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet, HDMI 2.0b, USB 3.2 Gen 2 Type-C with DisplayPort 1.4 and Power Delivery, 3 x USB 3.2 Gen 1 Type-A, 3.5mm audio
                  </li>
                </ul>
                <ul className='flex gap-x-[68px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[120px]'>
                    Keyboard
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030] w-[560px]'>
                    Backlit Chiclet keyboard, N-key rollover, per-key RGB lighting, Aura Sync technology
                  </li>
                </ul>
                <ul className='flex gap-x-[68px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[120px]'>
                    Battery
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030] w-[560px]'>
                    4-cell 90Wh lithium battery (up to 8 hours battery life)
                  </li>
                </ul>
                <ul className='flex gap-x-[68px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[120px]'>
                    Dimensions
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030] w-[560px]'>
                    15.7 x 11.1 x 1.0 inches (W x D x H)
                  </li>
                </ul>
                <ul className='flex gap-x-[68px] mb-4'>
                  <li className='font-["Poppins"] font-semibold text-xl leading-[30px] text-[#303030] w-[120px]'>
                    Weight
                  </li>
                  <li className='font-["Montserrat"] font-normal text-xl leading-[30px] text-[#303030] w-[560px]'>
                    6.28 pounds
                  </li>
                </ul>
              </div>
              
            </div>
             }
          </div>
        </div>






        {isactive &&
        
        <div className='fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,.5)]  flex items-center justify-center'>
          <MdCloseFullscreen  className="text-white absolute top-[10px] right-[10px]" onClick={()=>setActive(false)}/>
          <img src={isImage} alt="banner.png" />
        </div>
        }
      </Container>
    </>
  )
}

export default ProductDetails
