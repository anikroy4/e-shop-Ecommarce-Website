import React from 'react'
import Container from '../layers/Container'
import ProductLayout from '../layers/ProductLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width:"40px", height:"40px", background: "transparent", fontSize:"20px", color:"#303030", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", zIndex:"100", border:"1px solid #303030", right:"-40px" ,}}
      onClick={onClick}
    >
      <FaAngleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width:"40px", height:"40px", background: "transparent", fontSize:"20px", color:"#303030", borderRadius:"50%", display:"flex",  justifyContent:"center", alignItems:"center", border:"1px solid #303030", zIndex:"100", left:"-40px", 
        
      }}
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
}


const FeaturedProduct = () => {

    var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 1500,


  };


  return (
    <Container >
      <div className='flex items-center justify-between mb-24'>
        {/* <h4 className='mb-18 font-["Poppins"] text-3xl font-semibold text-[#303030] leading-[46px] not-italic'>
          Featured Products
        </h4> */}
        <h2 className=' font-["Poppins"] text-4xl font-semibold text-[#303030] leading-[46px] not-italic '>Featured Products</h2>
          <Link to="#">
          <p className='flex items-center justify-end gap-x-4 text-[#303030] hover:text-[#FF624C] font-bold font-["Montserrat"] text-base leading-6'> 
          View All
         <span className='text-2xl'><HiOutlineArrowNarrowRight /> </span>
        </p>
          </Link>
      </div>
      <div className='w-[1440px] mx-auto'>
        <Slider {...settings}>

          <ProductLayout percentTag={false} category="Laptop" title="JPhone 13 High Quality Value Buy Best Cam..." totalRating="50" rating="5" price="999.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          <ProductLayout percentTag={true} discount="50" category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          <ProductLayout percentTag={false} category="Laptop" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="100" rating="5" price="1,199.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          <ProductLayout percentTag={false} category="camera" title="Mini Polaroid Camera for Girls with Flash Li..." totalRating="70" rating="5" price="79.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          <ProductLayout percentTag={true} discount="50" category="Audio" title="WH-1000XM4 Wireless Headphones High Qu..." totalRating="120" rating="4" price="118.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          <ProductLayout percentTag={false} category="television" title="AG OLED65CXPUA 4K Smart OLED TV New ..." totalRating="20" rating="4" price="2,799.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/>
          {/* <ProductLayout percentTag={false}  category="television" title="S21 Laptop Ultra HD LED Screen Feature 2023..." totalRating="20" rating="4" price="2,799.00" border={true} bg="transparent" stock={false} stockAmount="" isCircle={false}/> */}

        </Slider>
      </div>

     
    </Container>
  )
}

export default FeaturedProduct
