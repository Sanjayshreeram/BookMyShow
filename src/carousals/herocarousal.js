import React from "react";
import HeroSlider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow,NextArrow } from "./arrows";

const Herocarousal=()=>{
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
      const settingsLg= {
        dots:true,
        arrows:true,
        centreMode:true,
        autoplay:true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,

        
        centrepadding:"300px",
        slidesToShow:3,
        slidesToScroll:1,
        infinite:true,
      }
      const images=["https://images.unsplash.com/photo-1680664777916-0e4735183619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
        " https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    " https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170& q=80",
"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "             ]
      return(<>
      <div className="lg:hidden">
      <HeroSlider {...settings}>
            {
                images.map((image)=>
                <div className=" w-full h-44 md:h-64 py-3 ">
                    <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                </div>)
            }
            

      </HeroSlider>

      </div>
      <div className="hidden lg:block">
      <HeroSlider {...settingsLg}>
            {
                images.map((image)=>
                <div className=" w-full h-96 px-2 py-3">
                    <img src={image} alt="images" className="w-full h-full  rounded-md"/>
                </div>)
            }
            

      </HeroSlider>

      </div>
      















    
        
      </>
      )
      

};
export default Herocarousal;
