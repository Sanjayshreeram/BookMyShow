import React from "react";
import { PremierImages } from "../config/Images";
import Poster from "../poster/poster";
import settings from "../config/postercarousal";
import Slider from "react-slick";

export const Posterslider=(props)=>{
    return (<>
    <div className="flex flex-col items-start py-4">
        <h3 className={`text-2xl font-bold  ${props.isDark ? "text-white":"text-gray-800"}`}  >

            
           {props.title }
        </h3>
        <p className=" text-white text-sm font-bold ">{props.subtitle}</p>
    </div>
    <Slider {...settings}>
        {
            props.images.map((images)=>(
                <Poster {...images} isDark={props.isDark} />


            )

            )
        }



    </Slider>





    </>)
}

