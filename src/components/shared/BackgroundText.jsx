import React from "react";

const BackgroundText = ({ text, top = "top-0", className = "" }) => {
  return (
    <h1
      className={`absolute ${top} left-1/2 transform -translate-x-1/2 
        text-[10vw] lg:text-[8vw] font-extrabold tracking-wider 
        text-brand-navy/10 z-0 select-none pointer-events-none whitespace-nowrap ${className}`}
    >
      {text}
    </h1>
  );
};
export default BackgroundText;