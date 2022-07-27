import React from "react";

type Props = { smallCard: string };

const HikingCards = (props: Props) => {
  return (
    <div
      className={`bg-primary  rounded-3xl relative p-4 flex flex-col justify-between  ${
        props.smallCard === "true" ? "" : "h-[26rem]"
      }`}
    >
      {/* Stars */}
      <div className="w-full flex justify-end ">
        <p>4,8</p>
      </div>

      {/* Description */}

      <div>
        <p className="font-body">Mont Rayou</p>
        {/* Country */}
        <div>
          <p>France</p>
        </div>
      </div>
    </div>
  );
};
export default HikingCards;
