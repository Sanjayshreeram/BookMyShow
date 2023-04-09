import React from "react";
import { Route ,Routes} from "react-router-dom";
import Homepage from "./Entertainment/homepage";


import Herocarousal from "./carousals/herocarousal";
import EntertainmentCardSlider from "./Entertainment/Entertainment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./navbar.js";



/* for multiple components to be rendered put it inside fragments example see element={<> <>
  </>}*/
function App() {
  return (
    <Routes>
     <Route path="/"  element={<> <Navbar/> <Herocarousal/>  <Homepage/> </> }/>
     
     

     
    </Routes>
  );
}
// / , /movie
export default App;
