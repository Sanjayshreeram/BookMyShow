

// this premiere becomes useless when we render posterslider component inside homepage.js;
//its 

import React from "react";
import Slider from "react-slick";
import Poster from "../poster/poster";

import settings from "../config/postercarousal";
import { PremierImages } from "../config/Images";


export const Premier =()=> {
    
   
    return(<>
    <div className="flex flex-col items-start py-4">
        <h3 className="text-white text-xl font-bold ">
           premieres 
        </h3>
        <p className=" text-white text-sm font-bold ">Brand new release every friday</p>
    </div>
    <Slider {...settings}>
        {
            PremierImages.map((images)=>(
                <Poster {...images} isDark />


            )

            )
        }



    </Slider>



    </>)
}
