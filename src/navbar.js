import React from "react";
// npm install react icons in cmd . copy the icon name from react icons after "react-icons/first two  letters of icon name in smaller case"
import {BsChevronCompactRight,BsSearch,BsMenuUp} from "react-icons/bs";
//simpy hidden will hide everything md medium lg:large


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
                    <BsSearch className=" w-full h-full"></BsSearch>
                
            </div>
        </div>
        </>
    )

}


const Navmd=()=>{

  return(  <div className="w-full flex items-center  bg-white gap-3  px-3 py-2  rounded-lg">
    <BsSearch/>
    <input type="search" className="w-full focus:outline-none " placeholder="Search For Movie "/>

    </div>
)}




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


 const Navbar=()=>{
    return (
        <>
        <nav className="bg-sky-950 pt-3 pb-3 pr-4 ps-4 ">
            <div className="md:hidden">
                {/* mobile screen*/
                <Navsm/>

            }

            </div>
            
            <div className="hidden lg:hidden md:flex ">{ 
            /*tab screen  hidden for larger screen also simple hidden for for everything and md:flex*/
                <Navmd/>
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
export default Navbar;