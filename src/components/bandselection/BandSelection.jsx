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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1000,
    arrows: false,
    
  };

  return (
    <Container className='mt-[100px] mb-[100px] items-center '>
      <Slider {...settings} >
        <div className="flex justify-center items-center mr-[199px]">
          <SamsungIcon />
        </div>
        <div className="flex justify-center items-center mr-[199px]">
          <OpenAiIcon />
        </div>
        <div className="flex justify-center items-center mr-[199px]">
          <AmazonIcon />
        </div>
        <div className="flex justify-center items-center mr-[199PX]">
          <TancentIcon />
        </div>
        <div className="flex justify-center items-center mr-[199PX]">
          <SpotifyIcon />
        </div>
      </Slider>
    </Container>
  )
}

export default BandSelection