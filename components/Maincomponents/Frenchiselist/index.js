import React from 'react';
import Herofrenchiselist from "../../Pages/Franchise-list/Hero/Hero";
import Visibilitylist from "../../Pages/Franchise-list/visibility/Visibilitylist";
import Experience from "../../Pages/Franchise-list/Expirince/Experience";
import Subscribe from "../../Pages/Franchise-list/Subscribe-sec/Subscribe";
import TopNews from "../../Pages/Home-page/News/News";


function Frenchiselist() {
  return (
    <>
     <Herofrenchiselist/>
      <Visibilitylist/>
      <Experience/>
      <Subscribe/>
      <TopNews/>
    </>
  )
}

export default Frenchiselist