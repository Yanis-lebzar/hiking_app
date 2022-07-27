import React from "react";

type Props = {
  children: React.ReactNode;
};

const MiddleSection = (props: Props) => {
  return (
    <div className="bg-[#F5F9F8] rounded-mainSection px-8 py-8">
      {props.children}
    </div>
  );
};

export default MiddleSection;
