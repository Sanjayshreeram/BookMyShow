import axios   from "axios";
import React ,{useState,useEffect}from "react";



import EntertainmentCardSlider from "./Entertainment";
import Poster from "../poster/poster";
import { Posterslider } from "../posterslider/posterslider";
import { Premier } from "../premier/premier";
import { PremierImages } from "../config/Images";

const  Homepage=()=> {



  const [Popularmovies,setPopularmovies]=useState([]);
  
  //const [LatestMovies,setLatestMovies]=useState([]);
  useEffect(()=> {


    const requestPopularMovies= async ()=>
    {
      const GetpopularMovies=await axios.get("/movie/popular");
      setPopularmovies(GetpopularMovies.data.results);

    }
    requestPopularMovies();




    

  },[]);
  //console.log({Popularmovies});
  const [LatestMovies,setLatestMovies]=useState([]);
  
// hook for latest movie
  
 useEffect(() => {
    const requestLatestMovies = async () => {
      const GetLatestMovies = await axios.get("/movie/upcoming");
      setLatestMovies(GetLatestMovies.data.results);
    };
    requestLatestMovies();
  }, []);

  //console.log({latestMovies: LatestMovies});

  //console.log({LatestMovies});

  const [UpcomingMovies,SetUpcomingMovies]=useState([]);
  
  // hook for latest movie
    
   useEffect(() => {
      const requestupcomingMovies = async () => {
        const GetupcomingMovies = await axios.get("/movie/top_rated");
        SetUpcomingMovies(GetupcomingMovies.data.results);
      };
      requestupcomingMovies();
    }, []);
  
    console.log({upcomingMovies: UpcomingMovies});
  


 
  return(
    <>


<div className="container  gap-6 lg:w-3/4 lg:ml-36 lg:mr-36 ">  
      <Posterslider images={LatestMovies} title="Recommended Movies  " isDark= {false}/>

    </div>
    <div className="container mx-auto px-4 ">
        <h1 className="text-2l font-bold text-gray-50">
            THE Best of Entertainment
        </h1>
        <EntertainmentCardSlider/>
        
    </div>
    <div className="bg-gray-900 py-16">
      <div className="flex py-1 ">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="Rupay" className="w-full h-16"/>

      </div>
      <div className="container mx-auto px-4 py-2 ">
        

        <Posterslider images={Popularmovies} title="premieres" subtitle="Brand new sliders every Friday " isDark={true}/>

      </div>

    </div>
   
    <div className="container gap-6 lg:w-3/4 lg:ml-36 lg:mr-36 ">
      <Posterslider images={UpcomingMovies} title="Top Rated " isDark={false}/>

    </div>
  
    
    </>
  )
}

export default Homepage;