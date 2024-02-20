import React from "react";
import Hero from "../../Pages/Home-page/Hero/Hero";
import Category from "../../Pages/Home-page/Category/Category";
import RectangleCategory from "../../Pages/Home-page/Rectangle-Category/RectangleCategory";
import Exclusive from "../../Pages/Home-page/Exclusivesec/Exclusive";
import Trustlist from "../../Pages/Home-page/Trust-list/Trustlist";
import Trending from "../../Pages/Home-page/Trending-sec/Trending";
import TopNews from "../../Pages/Home-page//News/News";


function Home() {
  return (
    <>
      <Hero />
      <Category />
      <RectangleCategory />
      <Exclusive />
      <Trustlist />
      <Trending />
      <TopNews />
    </>
  );
}

export default Home;
