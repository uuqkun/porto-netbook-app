import React from "react";

const SubHeader = ({ value}) => {
  return (
    <p className={`text-[12px] text-primary font-quicksand font-semibold`}>
      {value}
    </p>
  );
};

export default SubHeader;
