import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import HeroSlider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow,NextArrow } from "./arrows";


const Herocarousal=()=>{
  const [images,setImages]=useState([]);
  useEffect(()=> {
    const requestNowPlayingMovies= async()=>{
      const getImages=await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    };
    requestNowPlayingMovies();
  },[]);
    var settings = {
        dots: true,
        centreMode:true,
        centrepadding:"200px",
        arrows:true,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow/>,

        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }; 
      /*put your logic here   inside 
        <HeroSlider {...settings}>
            

      </HeroSlider> */
      var  settingsLg= {
        dots:false,
        arrows:true,
        centreMode:true,
        autoplay:true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,

        
        centrepadding:"250px",
        slidesToShow:3,
        slidesToScroll:1,
        infinite:true,
      }
     
      return(<>
      <div className="lg:hidden">
      <HeroSlider {...settings}>
            {
                images.map((image)=>
                <div className=" w-full h-44 md:h-64 py-3 ">
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md"/>
                </div>)
            }
            

      </HeroSlider>

      </div>
      <div className="hidden lg:block">
      <HeroSlider {...settingsLg}>
            {
                images.map((image)=>
                <div className=" w-full h-96 px-2 py-3">
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="images" className="w-full h-full  rounded-md"/>
                </div>)
            }
            

      </HeroSlider>

      </div>
      















    
        
      </>
      )
      

};
export default Herocarousal;
