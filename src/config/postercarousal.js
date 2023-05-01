import React from "react";
import { NextArrow,PrevArrow } from "../carousals/arrows";
const settings={ autoPlay:false,
    infinite:true,
    slidesToShow:5,
    slidesToScroll:2,
    InitialSlide:0,
    centreMode:true,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow/>,
    responsive:[
        {
            breakpoint:1024,
            settings:{
                autoPlay:false,
    infinite:true,
    slidesToShow:5,
    slidesToScroll:2,
    InitialSlide:0,
    centreMode:true,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow/>,

            }

        },
        { breakpoint:600,
            settings:{
            autoPlay:false,
infinite:true,
slidesToShow:2,
slidesToScroll:1,
InitialSlide:0,
centreMode:true,


        }
    },
    { breakpoint:400,
        settings:{
        autoPlay:false,
infinite:true,
slidesToShow:1,
slidesToScroll:1,
InitialSlide:0,
centreMode:true,


    }
}



    ]



}
export default settings;