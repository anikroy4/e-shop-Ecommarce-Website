import React, { useEffect, useRef, useState } from 'react'
import Container from '../../components/layers/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductDetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
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
                <div>
                  <img src="images/banner.png" alt="banner.png" />
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
      </Container>
    </>
  )
}

export default ProductDetails
