import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from 'react-slick'
import men from './../assets/men.png'
import women from './../assets/women.png'
import beg from './../assets/beg.png'
import './Hero'
import { MdMargin } from "react-icons/md";




function Hero() {

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true ,
    autoPlaySpeed : 2500
  };

  return (
    <Slider {...settings} >
  <div>
    <img className="h-full w-full object-cover" src={men} />
  </div>
  <div>   
  <img className="h-full w-full object-cover" src={women}/>
  </div>
  <div>   
  <img className="h-full w-full object-cover" src={beg}/>
  </div>
    
    </Slider>
  )
}

export default Hero