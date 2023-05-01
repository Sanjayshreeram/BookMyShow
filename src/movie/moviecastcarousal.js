import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow,PrevArrow } from "../carousals/arrows";

import Slider from "react-slick";



 export const Castslider=()=>{





    var settings = {
        dots: true,
        centreMode:true,
        centrepadding:"200px",
        arrows:true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
       

        
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };





      const Castimages=[{

        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/paul-rudd-11271-24-03-2017-12-33-52.jpg",
        name:"Paul Rudd",
        role:"as Scott Lang/Ant-Man"




      },
      {

        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/paul-rudd-11271-24-03-2017-12-33-52.jpg",
        name:"Paul Rudd",
        role:"as Scott Lang/Ant-Man"




      },
      {

        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/paul-rudd-11271-24-03-2017-12-33-52.jpg",
        name:"Paul Rudd",
        role:"as Scott Lang/Ant-Man"




      },
      {

        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/paul-rudd-11271-24-03-2017-12-33-52.jpg",
        name:"Paul Rudd",
        role:"as Scott Lang/Ant-Man"




      },
      {

        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/paul-rudd-11271-24-03-2017-12-33-52.jpg",
        name:"Paul Rudd",
        role:"as Scott Lang/Ant-Man"




      },{

        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/paul-rudd-11271-24-03-2017-12-33-52.jpg",
        name:"Paul Rudd",
        role:"as Scott Lang/Ant-Man"




      },
      {

        img:"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/paul-rudd-11271-24-03-2017-12-33-52.jpg",
        name:"Paul Rudd",
        role:"as Scott Lang/Ant-Man"




      }
    
      
    ]


    return(<>
    <Slider {...settings}>
        {
            Castimages.map((props)=>


            <div className="w-full h-44 flex flex-col mt-3  ">

                <img  src={props.img} className=" w-28 h-28 rounded-full"/>


                <h1 className="text-black ">
                    {props.name}
                </h1>

                <h3 className=" text-slate-400">
                {props.role}
                </h3>
                   
                
            </div>
            )
        }

        



    </Slider>
    
    </>)

}


