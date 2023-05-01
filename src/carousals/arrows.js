import React from "react";

 export const NextArrow= (props )=>{
  
    return(
        <>
        <div
      className={props.className}
      style={{ ...props.style, display: "block", background: "red" ,margin:"0px" }}
      onClick={props.onClick}
    />
        </>
    )

}
 export const PrevArrow= (props )=>{
    return(

        <>
        <div
      className={props.className}
      style={{ ...props.style, display: "block", background: "red" ,margin:"0px" }}
      onClick={props.onClick}
    />
        </> 
       
    )

}