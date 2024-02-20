import React from "react";
import Companyinfo from "../../Pages/Uplod-info-page/Company-info/Company-info";
import Ownerdetail from "../../Pages/Uplod-info-page/Owner-info/Owner-info";
import Brandinfo from "../../Pages/Uplod-info-page/Brand-info/Brand-info";
import Documentation from "../../Pages/Uplod-info-page/Document-detail/Documentation";

function Uploadinformationpage() {
  return (
    <>
      <Companyinfo />
      <Ownerdetail />
      <Brandinfo />
      <Documentation/>
    </>
  );
}

export default Uploadinformationpage;
