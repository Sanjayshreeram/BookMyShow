import React from "react";
import { Moviehero } from "./moviehero";
import {BiCameraMovie} from "react-icons/bi";
import { Castslider } from "./moviecastcarousal";
const launchRazorPay = () => {
    let options = {
      key: "rzp_test_ReX2FS7h6yTue6",
      amount: 50000,
      currency: "INR",
      name: "Book My Show Clone",
      description: "Movie Purchase on Rental",
      image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
      handler: () => {
        alert("Payment Done")
      },
      theme: {color: "#c4242d"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
  };












 export const Movie=()=> {
    return(
        <>


      
            <Moviehero/>
            <div className=" my-12 container    lg:w-1/2 lg:ml-64 items-center">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="font-bold text-2xl ">
                    About the movie
                    </h2>
                    <p className="mt-2">
                    Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope`s parents and Scott`s daughter, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible

                    </p>

                </div>
                <hr className="mt-2 bg-slate-600"/>






                <div className="">
                <h1 className="font-bold text-2xl mb-2">
                Applicable offers
            </h1>


            <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed rounded-md border-2 p-3   ">
                <div className="w-8 h-8">
                <BiCameraMovie className="w-full h-full"/>

                </div>
           


<div className="flex flex-col items-start">
<h2 className="text-gray-800 text-lg"> 
    Flimy Pass

</h2>
<p className="text-grey-600">
    Get 75% off on 3 movies you buy?rent on stream.

</p>
</div>

            </div>
                
            </div>
            <button  onClick={launchRazorPay} class="rounded-sm  ... bg-red-500 mt-2 w-28 h-10">BOOK NOW</button>



            
            <Castslider/>

                
            </div>



            
            


           
        
        </>
    )
}