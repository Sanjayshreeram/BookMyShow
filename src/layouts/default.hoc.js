import React from "react";
//import Temp from "./temp";

import { Route, Routes } from "react-router-dom";

//Layouts
import DefaultLayout from "./default.layout";
import Temp from "./temp";

const DefaultHOC = ({ componen:Component,restproperties} ) => {
  //component
  //props -> path exact
  return (
    <Routes>
    <Route
    {...restproperties}


    Component = {(props) => (
      <DefaultLayout>
       <Component {...props}/>
      </DefaultLayout>
    )

    }
     />
    </Routes>
  );
};

export default DefaultHOC;
