import React from "react";
import Slider from "react-slick";
import Poster from "../poster/poster";
import { NextArrow,PrevArrow } from "../carousals/arrows";


export const Premier =()=> {
    const settings={ autoPlay:false,
        infinite:true,
        slidesToShow:5,
        slidesToScroll:2,
        InitialSlide:0,
        centreMode:true,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow/>,
    


    }
    const PremierImages=[
        {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNDguM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-peatrzdcmr-portrait.jpg" ,

            alt:"JOHN WICK" ,
            title:"JOHN WICK" ,
            subtitle:"Action/drama" ,

        },
        {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNDguM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-peatrzdcmr-portrait.jpg" ,

            alt:"JOHN WICK" ,
            title:"JOHN WICK" ,
            subtitle:"Action/drama" ,

        },
        {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNDguM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-peatrzdcmr-portrait.jpg" ,

            alt:"JOHN WICK" ,
            title:"JOHN WICK" ,
            subtitle:"Action/drama" ,

        },
        {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNDguM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-peatrzdcmr-portrait.jpg" ,

            alt:"JOHN WICK" ,
            title:"JOHN WICK" ,
            subtitle:"Action/drama" ,

        },
        {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNDguM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-peatrzdcmr-portrait.jpg" ,

            alt:"JOHN WICK" ,
            title:"JOHN WICK" ,
            subtitle:"Action/drama" ,

        },
        {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNDguM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-peatrzdcmr-portrait.jpg" ,

            alt:"JOHN WICK" ,
            title:"JOHN WICK" ,
            subtitle:"Action/drama" ,

        },
        {
            src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNDguM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-peatrzdcmr-portrait.jpg" ,

            alt:"JOHN WICK" ,
            title:"JOHN WICK" ,
            subtitle:"Action/drama" ,

        },

    ]
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
