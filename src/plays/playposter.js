import React from "react";
import { Plays } from "./plays";



 export const Playposter=(props)=> {


    return(
        <>
       
            <div className="flex flex-col h-72 w-52 gap-2 mb-2 ">
            <div>
                <img  src={props.src} className="h-full rounded-md " />
            </div>
            <div>
                <h1 className="font-bold text-black text-xl">
                    {props.title}
                </h1>
                <p>
                    {props.subtitle}
                </p>
            </div>

            </div>

           

       
        
        
        </>
    )

 }