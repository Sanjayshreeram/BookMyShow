import React from "react";
 //ENV




import axios from "axios";
import { Route ,Routes} from "react-router-dom";
import Homepage from "./Entertainment/homepage";
import { Movie } from "./movie/movie";
import MovieNavbar from "./navbar/movienavbar";
import { Plays } from "./plays/plays";


import Herocarousal from "./carousals/herocarousal";
//  import EntertainmentCardSlider from "./Entertainment/Entertainment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./navbar.js";
//axios default settings
//use base url only
axios.defaults.baseURL="https://api.themoviedb.org/3";
//to avoid errors we set default params={} which is empty initally
axios.defaults.params={} ;

axios.defaults.params["api_key"]= "16121e48f3ba0833b09ff9dceb430e47";









/* for multiple components to be rendered put it inside fragments example see element={<> <>
  </>}*/
function App() {
  return (
    <Routes>
     <Route path="/"  element={<> <Navbar/> <Herocarousal/>  <Homepage/> </> }/>
     <Route path="/movie/:id" element= {<>  <MovieNavbar/>    <Movie/>    </>} />
     <Route path="/Plays" element= {<>  <Plays/>    </>} />
     
     

     
    </Routes>
  );
}
// / , /movie
export default App;
