import React from "react";

const CustomButton = ({ buttonText, customClasses, iconClasses }) => {
  const combinedClasses = `${customClasses}`;
  return (
      <button className={combinedClasses}>
        {buttonText}
        {iconClasses !== '' ? <i className={iconClasses}></i> : null}
      </button>
  );
};

export default CustomButton;

