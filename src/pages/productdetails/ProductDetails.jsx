import { useEffect, useRef, useState } from 'react'
import Container from '../../components/layers/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EnlargeIcon from '../../icon/EnlargeIcon';
import { MdCloseFullscreen } from 'react-icons/md';

const ProductDetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isactive, setActive] = useState(false);
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  let handleClick = () => {
    setActive(!isactive);
    
    
    
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

        <div className='flex justify-between'>
          <div className='w-[49%]'>
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} {...settings} >
              <div>
                <div className='relative'>
                  <img className='' src="images/banner.png" alt="banner.png" />
                  <EnlargeIcon onClick={handleClick} className="absolute top-[4%] right-[2%] " textColor='white'/>
                </div>
              </div>
              <div>
                <div>
                  <img src="images/banner.png" alt="banner.png" />
                </div>
              </div>
              <div>
                <div>
                  <img src="images/banner.png" alt="banner.png"  />
                </div>
              </div>
              <div>
                <div>
                  <img src="images/banner.png" alt="banner.png"  />
                </div>
              </div>
              <div>
                <div>
                  <img src="images/banner.png" alt="banner.png"  />
                </div>
              </div>
              <div>
                <div>
                  <img src="images/banner.png" alt="banner.png"  />
                </div>
              </div>
             
            </Slider>

            <Slider asNavFor={nav1} ref={slider => (sliderRef2 = slider)} {...settingsAnother}>
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
          <div className='w-[49%]'>right</div>
        </div>
        {isactive &&
        
        <div className='fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,.5)]  flex items-center justify-center'>
          <MdCloseFullscreen  className="text-white absolute top-[10px] right-[10px]" onClick={()=>setActive(false)}/>
          <img src="images/banner.png" alt="banner.png" />
        </div>
        }
      </Container>
    </>
  )
}

export default ProductDetails
