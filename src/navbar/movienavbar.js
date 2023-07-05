//this page is for movie navbar.
import React from "react";
// npm install react icons in cmd . copy the icon name from react icons after "react-icons/first two  letters of icon name in smaller case"
import {BsChevronCompactRight,BsSearch,BsMenuUp,BsChevronLeft,BsShare} from "react-icons/bs";
//simply hidden will hide everything md medium lg:large



const Navsm=()=>{
    return(
        <>
        <div className="text-white flex items-center justify-between ">
            <div  >
                <h2 className="text-xl font-bold"> IT'S ALL STARTS HERE</h2>
                <span className="text-gray-400 text-xs flex items-center ">
                    chennai<BsChevronCompactRight/>
                </span>
                </div>
                <div className="w-8 h-8">
                    <BsShare className=" w-full h-full"/>
                
            </div>
        </div>
        </>
    )

}






const Navlg=()=>{
    
    return(<>
    <div className="container mx-auto px-4   flex  items-center justify-between ">
    <div className="flex items-center w-1/2  ">
            
               <div className="w-12 h-12">
                <img src="https://seeklogo.com/images/B/bookmyshow-logo-31BC3C7354-seeklogo.com.png" alt="logo "  className="w-full h-full"/>
               </div>
            
            <div className="w-full flex items-center  bg-white gap-3  px-3 py-2  rounded-lg">
    <BsSearch/>
    <input type="search" className="w-full focus:outline-none " placeholder="Search For Movie "/>

    </div>
    </div>
            <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs flex items-center hover:text-white  cursor-pointer">
                    chennai<BsChevronCompactRight/>
                </span>
                <button className="bg-red-600 text-white text-sm rounded"> sign in </button>
                  <div className="w-8 h-8 text-white">
                    <BsMenuUp  className="w-full h-full"/>


                  </div>
            </div>
        </div>
        
        </>
    )
}


 const MovieNavbar=()=>{
    return (
        <>
        <nav className= " absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative  bg-sky-950 pt-3 pb-3 pr-4 ps-4 ">
            <div className="md:hidden">
                {/* mobile screen*/
                <Navsm/>

            }

            </div>
            
            <div className="hidden lg:hidden md:block h-12 ">{ 
            /*tab screen  hidden for larger screen also simple hidden for for everything and md:flex*/
                <Navsm/>
            }
s
            </div>
            <div className="hidden lg:flex">{
                <Navlg/>

            }

            </div>
        </nav>






        </>
    )
    
};
export default MovieNavbar;