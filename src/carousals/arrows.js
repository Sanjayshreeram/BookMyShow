import React from "react";

 export const NextArrow= (props )=>{
    return(
        <>
        <div 
        
        className={props.className}
        style={{ ...props.style,backgroundColor:"silver", width:"70px" ,height:"40px" , display:"flex",justifyContent:"center" , padding:"10px" ,margin:"10px", borderRadius:"4px" }} onClick={ props.onClick}
        />
        </>
    )

}
 export const PrevArrow= (props )=>{
    return(
        <>
        <div  className={props.className}
        style={{ ...props.style,backgroundColor:"silver", width:"70px" ,height:"40px" , display:"flex",justifyContent:"center" , padding:"10px" ,margin:"10px",left:"-200px",right:"0px" , borderRadius:"4px"}} onClick={ props.onClick } />
        </>
    )

}