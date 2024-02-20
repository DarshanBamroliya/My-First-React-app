import React from "react";
import CustomSlider from "../../../../widgets/custom_slider_high_demand_sec/custom_slider";

const Better = () => {
    const betterdata = [
    {
      name: "LAKME",
      imageSrc: "./catagoey-img/lakeme.svg",
      priceRange: "Rs. 20 - 15 lakh",
      rating: 4.3,
      totalReviews: 110,
      totalFranchise: 5,
      headquarters: "Madhya Pradesh"
    },
    {
      name: "LAKME",
      imageSrc: "./catagoey-img/lakeme.svg",
      priceRange: "Rs. 20 - 15 lakh",
      rating: 4.3,
      totalReviews: 110,
      totalFranchise: 5,
      headquarters: "Madhya Pradesh"
    },
    {
      name: "LAKME",
      imageSrc: "./catagoey-img/lakeme.svg",
      priceRange: "Rs. 20 - 15 lakh",
      rating: 4.3,
      totalReviews: 110,
      totalFranchise: 5,
      headquarters: "Madhya Pradesh"
    },
    {
      name: "LAKME",
      imageSrc: "./catagoey-img/lakeme.svg",
      priceRange: "Rs. 20 - 15 lakh",
      rating: 4.3,
      totalReviews: 110,
      totalFranchise: 5,
      headquarters: "Madhya Pradesh"
    },
    {
      name: "LAKME",
      imageSrc: "./catagoey-img/lakeme.svg",
      priceRange: "Rs. 20 - 15 lakh",
      rating: 4.3,
      totalReviews: 110,
      totalFranchise: 5,
      headquarters: "Madhya Pradesh"
    },
    
  ];

  return (
    <CustomSlider franchisesData={betterdata} headingName="Better priced" headingTxt="Based on the franchise you viewed" />
  );
};

export default Better;
