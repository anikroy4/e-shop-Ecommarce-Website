
import Container from '../layers/Container'
import ProductLayout from '../layers/ProductLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../layers/Button'
import SpringsaleImageicon from '../../icon/SpringsaleImageicon'

import Slider from 'react-slick'
import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width:"72px", height:"72px", background: "#F4F4F4", fontSize:"28.8px", color:"#303030", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", zIndex:"100", border:"1px solid #303030", right:"-16px", }}
      onClick={onClick}
    >
      <IoIosArrowForward/>
    </div>
  );
}



const SpringSale = () => {

    const[timeLeft, setTimeLeft]=useState(calculateTimeLeft());

    function calculateTimeLeft(){
        const saleEndDate=new Date("May 31 , 2025 12:00 AM +06").getTime()
        const now=new Date().getTime();
        const difference=saleEndDate-now;
        
        if(difference<0){
            return{ days: 0, hours: 0, minutes: 0, seconds: 0};
        }

        return{
          days: Math.floor(difference/(1000*60*60*24)),
          hours: Math.floor((difference%(1000*60*60*24))/(1000*60*60)),
          minutes: Math.floor((difference%(1000*60*60))/(1000*60)),
          seconds: Math.floor((difference%(1000*60))/1000),
        }
    }

    useEffect(()=>{
        const timer =setInterval(()=>{
            setTimeLeft(calculateTimeLeft());
        }, 1000)
 
        return ()=> clearInterval(timer);

    },[])





    var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplayspeed: 1500,
  };




  return (
    <div className='bg-[#F4F4F4] pb-16 pt-16'>
      <Container className='' >
          <div className='flex justify-between '>
            <div className='relative '>
                <h1 className='pt-[171px] font-["Poppins"]  font-bold leading-17 text-[56px]'>Spring Sale</h1>
                <div className='mt-10 text-[#FF624C] font-["Poppins"] font-semibold text-4xl justify-between leading-[46px] items-center'>
                  {/* {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days} */}
                  <span className='mr-6'>{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}</span>: 
                  <span className='ml-[26px] mr-[25px]'>{timeLeft.hours < 10 ? `0${timeLeft.hours}`: timeLeft.hours}</span>: 
                  <span className='ml-8 mr-[33px]'>{timeLeft.minutes < 10 ? `0${timeLeft.minutes}`: timeLeft.minutes}</span>: 
                  <span className=' ml-[41px]'>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}`: timeLeft.seconds}</span>
                  <br />

                  <div className='flex text-[#303030] text-base items-center leading-6 font-normal font-["Montserrat"]'>
                          <span className='mr-[60px]'>Days</span>
                          <span className='mr-[46px]'>Hours</span>
                          <span className='mr-[58px]'>Minutes</span>
                          <span>Seconds</span>
                  </div>
                </div>
                <Button className="mt-[72px]" text="Shop Now"/>
                <div className='absolute left-0 bottom-0'>
                    <SpringsaleImageicon/>
                </div>
            </div>
              
            <div className=' max-w-[901px]'>
              <Slider {...settings}>
                <ProductLayout className="hover:!bg-[#ffff] mr-6" percentTag={true} discount="50" category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="#EAEAEA" stock={true} changePadding='40px' stockAmount="50" isCircle={true}/>
                <ProductLayout changePadding='40px' TextSize='24px' className="hover:!bg-[#ffff] mr-6" percentTag={true} discount="30" category="Laptop" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="100" rating="5" price="1,199.00" border={true} bg="#EAEAEA" stock={true} stockAmount="50" isCircle={true}/>
                <ProductLayout changePadding='40px' TextSize='24px' className="hover:!bg-[#ffff] mr-6" percentTag={true} discount="45" category="camera" title="Mini Polaroid Camera for Girls with Flash Li..." totalRating="70" rating="5" price="79.00" border={true} bg="#EAEAEA" stock={true} stockAmount="" stockTag='Limited Available'  isCircle={true}/>
                <ProductLayout changePadding='40px' TextSize='24px' className="hover:!bg-[#ffff] mr-6" percentTag={true} discount="50" category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="#EAEAEA" stock={true} stockAmount="50" isCircle={true}/>
                <ProductLayout changePadding='40px' TextSize='24px' className="hover:!bg-[#ffff] mr-6" percentTag={false} discount="47"  category="television" title="AG OLED65CXPUA 4K Smart OLED TV New ..." totalRating="20" rating="4" price="2,799.00" border={true} bg="#EAEAEA" stock={true} stockAmount="80" isCircle={true}/>
              </Slider>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default SpringSale
