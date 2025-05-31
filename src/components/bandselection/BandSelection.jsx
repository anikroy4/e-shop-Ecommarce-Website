import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from '../layers/Container'
import SamsungIcon from '../../icon/bandselectionicons/SamsungIcon'
import OpenAiIcon from '../../icon/bandselectionicons/OpenAiIcon'
import AmazonIcon from '../../icon/bandselectionicons/AmazonIcon'
import TancentIcon from '../../icon/bandselectionicons/TancentIcon'
import SpotifyIcon from '../../icon/bandselectionicons/SpotifyIcon'






const BandSelection = () => {

 const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    
  };

  return (
    <Container className='mt-[100px] mb-[100px]  mx-auto'>
      <div className="mx-auto ">
        <Slider {...settings} >
         <div className="flex justify-start items-center ">
          <img src="images/bandselectionimages/samsung.png" alt="samsung.png" />
         </div>
         <div className="flex justify-center items-center">
          <img src="images/bandselectionimages/samsung.png" alt="samsung.png" />
         </div>
         <div className="flex justify-between items-center">
          <img src="images/bandselectionimages/samsung.png" alt="samsung.png" />
         </div>
         <div className="flex justify-between items-center">
          <img src="images/bandselectionimages/samsung.png" alt="samsung.png" />
         </div>
         <div className="flex justify-end items-center">
          <img src="images/bandselectionimages/samsung.png" alt="samsung.png" />
         </div>
         
        </Slider>
      </div>
    </Container>
  )
}

export default BandSelection