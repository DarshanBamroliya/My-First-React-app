import React from "react";
import CustomSlider from "../../../../widgets/custom_slider_high_demand_sec/custom_slider";

const Highdemand = () => {
    const franchisesData = [
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
    <CustomSlider franchisesData={franchisesData} headingName="High demand franchise" headingTxt="First Choice recommended" />
  );
};

export default Highdemand;
