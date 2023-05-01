import React from "react";
import  { FcLike } from "react-icons/fc";
import {BsChevronRight} from "react-icons/bs";

//we use height:calc(180vw)-to attain the entier view port(vw) of the screen 
// small screen
// medium screen
//large screen




export const Moviehero=()=> {
    return(
        <>
        
<div className="md:hidden py-16 " >
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg"  className="w-full h-full "/>

</div>
<div className="relative  hidden md:block lg:hidden w-full">



<div  className="absolute h-full w-full z-10" style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
   />
<img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg"  className="w-full h-full"/>




<div className="absolute z-20 w-52 h- left-12 top-14 my-auto ">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg " className="rounded-md mt-12"/>
  </div>









<div className="absolute left-96 h-100 w-72 top-6 z-20  mt-16 ">
    <h1 className="text-white font-bold text-2xl">
        Ant-Man and the Wasp
    </h1>
    <div className="  cursor-pointer">
        <div className="flex  items-center gap-1">
            <span>
            <FcLike/>
        </span>
        <span className="text-white font-semibold hover:underline">
            8/10
            36.5k Votes
            
        </span>
        <span className="px-0">
        <BsChevronRight/>
        </span>
        </div>
        
        <div className="bg-stone-700 rounded-md px-2  gap-1 flex items-center w-full  h-20 mt-3">
            <div>
            <h2 className="text-white font-bold"> 
                Add your rating & review
            </h2>
            <h3>
              Your ratings matter 
            </h3>
            </div>
          
            
            <button className="bg-white h-8 rounded-sm">
                Rate Now
            </button>
        </div>

        
            <div className="bg-white rounded-sm mt-3">
            <h1 >
            2D,IMAX 2D,ICE 3D,MX4D 3D,4DX 3D,3D SCREEN X,IMAX 3D
            </h1>


            </div>
            <div className=" rounded-sm mt-3 p-1  flex flex-col " >
                <h2  className="bg-white rounded-sm">
                English,Hindi,Tamil,Telugu

                </h2>

                <h3 className="bg-transparent mt-4 gap-2 text-white">
                2h 4m•Action -Adventure,Comedy,Sci-Fi•UA•17 Feb, 2023
                </h3>

            </div>
        



    </div>

        
   

</div>






</div>
<div className=" relative hidden lg:block " style={{height: "30rem"}}>
    <div  className="absolute h-full w-full z-10" style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
   />


  <div className="absolute z-20 w-64 h-96 left-20 top-10 ">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg " className="rounded-md"/>
  </div>









<div className="absolute left-96 h-100 w-72 top-6 z-20   ">
    <h1 className="text-white font-bold text-2xl">
        Ant-Man and the Wasp
    </h1>
    <div className="  cursor-pointer">
        <div className="flex  items-center gap-1">
            <span>
            <FcLike/>
        </span>
        <span className="text-white font-semibold hover:underline">
            8/10
            36.5k Votes
            
        </span>
        <span className="px-0">
        <BsChevronRight/>
        </span>
        </div>
        
        <div className="bg-stone-700 rounded-md px-2  gap-1 flex items-center w-full  h-20 mt-3">
            <div>
            <h2 className="text-white font-bold"> 
                Add your rating & review
            </h2>
            <h3>
              Your ratings matter 
            </h3>
            </div>
          
            
            <button className="bg-white h-8 rounded-sm">
                Rate Now
            </button>
        </div>

        
            <div className="bg-white rounded-sm mt-3">
            <h1 >
            2D,IMAX 2D,ICE 3D,MX4D 3D,4DX 3D,3D SCREEN X,IMAX 3D
            </h1>


            </div>
            <div className=" rounded-sm mt-3 p-1  flex flex-col " >
                <h2  className="bg-white rounded-sm">
                English,Hindi,Tamil,Telugu

                </h2>

                <h3 className="bg-transparent mt-4 gap-2 text-white">
                2h 4m•Action -Adventure,Comedy,Sci-Fi•UA•17 Feb, 2023
                </h3>

            </div>
        



    </div>

        
   

</div>
<img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg"  className="w-full h-full"/>


</div>


        </>
    )

}