import React from "react";
import Slider from "react-slick";
import { NextArrow,PrevArrow } from "../carousals/arrows";


const  EntertainmentCard=(props)=> {





   
    return(
        <>

            
        <div className="w-full h-full px-6 py-6 lg:w-3/4 ">

          

            <img  src={props.src} className="w-full h-full rounded-xl " alt="imagess" />

        </div>
        </>
    );

};
const EntertainmentCardSlider= ()  => {
    const EntertainmentCardImage=["https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/ipl-collection-202302270454.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTgwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTIwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/theatre-shows-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/arts-crafts-collection-202211140440.png",
"https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/adventure-fun-collection-202211140440.png"]


const settings= {
    autoPlay:false,
    infinite:true,
    slidesToShow:5,
    slidesToScroll:2,
    InitialSlide:0,
    centreMode:true,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>


}
return(<>
<Slider { ...settings }>



    {


           
            
        EntertainmentCardImage.map((image)=>(
            <EntertainmentCard src={image}/>
        ))
    }

</Slider>


</>)
}
export default EntertainmentCardSlider;