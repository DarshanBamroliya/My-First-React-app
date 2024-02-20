import React from "react";

const CustomSlider = ({ sliderText, customClasses, customClass, img, sliderHeading, sliderIcontxt, sliderData,  viewIcon, showslider, showslidertext }) => {
  const combinedClasses = `${customClasses}`;
  const combinedClass = `${customClass}`;

  return (
    <div className={combinedClasses}>
      <img src={img} alt={sliderHeading} />
      <h2>{sliderHeading}</h2>
      {showslidertext==true? <p>{sliderText}</p>:<div></div>}
      {showslider==true?  <div className={combinedClass}>
        <span>{sliderData}</span>
        <span><i className={viewIcon}></i>{sliderIcontxt}</span>
      </div>:<div></div>}
    </div>
  );
};

export default CustomSlider;
