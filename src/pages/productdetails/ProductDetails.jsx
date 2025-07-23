import { useEffect, useRef, useState } from 'react'
import Container from '../../components/layers/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EnlargeIcon from '../../icon/EnlargeIcon';
import { MdCloseFullscreen } from 'react-icons/md';
import { RiStarSFill } from 'react-icons/ri';

const ProductDetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isactive, setActive] = useState(false);
  const [isImage, setImage] = useState(" ");
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  

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
          <div className='w-[50%] '>
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

            <div className='flex items-center gap-x-[18px] mt-6'>
              <p className='text-[#FF624C] font-bold font-["Poppins"] text-[56px] leading-17'>$2,999.99</p>
              <small className='text-[#303030] font-["Montserrat"] font-normal text-xl leading-6'>
                <del className='text-[#CBCBCB]'>
                  $5,499.99
                </del>
                </small>
            </div>

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
