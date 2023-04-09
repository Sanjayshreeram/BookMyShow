import React from "react";
import EntertainmentCardSlider from "./Entertainment";
import Poster from "../poster/poster";
import { Premier } from "../premier/premier";

const  Homepage=()=> {
  return(
    <>
    <div className="container mx-auto px-4 ">
        <h1 className="text-2l font-bold text-gray-50">
            THE Best of Entertainment
        </h1>
        <EntertainmentCardSlider/>
        
    </div>
    <div className="bg-gray-900 py-16">
      <div className="flex py-1 ">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="Rupay" className="w-full h-16 bg-yellow-300"/>

      </div>
      <div className="container mx-auto px-4 py-2 ">
        <Premier/>

      </div>
    </div>
    
    </>
  )
}

export default Homepage;