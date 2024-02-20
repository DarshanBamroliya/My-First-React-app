import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "C:/Users/Darshan/Desktop/REACT/franchisewala/node_modules/swiper/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Components
import Leftsidemenu from "./components/Pages/Home-page/Side-menu/Side-menu";
import Footer from "./components/Pages/Home-page/Footer/Footer";
import CustomHeader from "./widgets/custom_header/custom_header";

import Home from "./components/Maincomponents/Home"
import Frenchiselist from "./components/Maincomponents/Frenchiselist";
import CategoryPage from "./components/Maincomponents/CategoryPage";
import ProductdetailsPage from "./components/Maincomponents/Product-details-Page";
import Fillinformationpage from "./components/Maincomponents/Fillinformationpage";
import Uploadinformationpage from "./components/Maincomponents/uploadinformationpage";
import AskForMoreDetailsPage from "./components/Maincomponents/Askmoredetailpage";
import Lernmore from "./components/Pages/Lern-more/Lern_more";
import SubcategoryPage from "./components/Maincomponents/Subcategorypage";
import Loginpage from "./components/Pages/Login-pagr/Loginpage";

// Login page

function App() {


  
  return (
    <>
      <BrowserRouter>
        <CustomHeader
          showsearchbar={true}
          showhomeicon={true}
          showloginicon={true}
          showpost={true}
        />
        <Leftsidemenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Frenchiselist" element={<Frenchiselist/>}/>
          <Route path="/CategoryPage" element={<CategoryPage/>}/>
          <Route path="/Product-details-Page" element={<ProductdetailsPage/>}/>
          <Route path="/Fill-information-page" element={<Fillinformationpage/>}/>
          <Route path="/upload-information-page" element={<Uploadinformationpage/>}/>
          <Route path="/Ask-For-More-Details-Page" element={<AskForMoreDetailsPage/>}/>
          <Route path="/Learn-More-Dialog" element={<Lernmore/>}/>
          <Route path="/Subcategory-Page" element={<SubcategoryPage/>}/>
          <Route path="/Login" element={<Loginpage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <CustomHeader/>
      <Leftsidemenu/>
      <Loginpage/> */}
    </>
  );
}

export default App;
