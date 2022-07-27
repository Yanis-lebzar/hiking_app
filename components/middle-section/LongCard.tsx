import Image from "next/image";
import React from "react";

type Props = {
  rightSection: string;
};

const LongCard = (props: Props) => {
  return (
    <div
      className={`flex items-center  pr-5 space-x-6   rounded-xl h-min relative ${
        props.rightSection === "true"
          ? "border border-black p-4 rounded-2xl"
          : "bg-gray-200"
      }`}
    >
      {/* Image */}
      <div
        className={`bg-slate-600  rounded-xl ${
          props.rightSection === "true" ? "h-20 w-20" : "h-20 w-20"
        }`}
      ></div>
      <div
        className={`flex  justify-between   ${
          props.rightSection === "true"
            ? "flex-col space-y-2"
            : "space-x-9 items-center"
        }`}
      >
        {/* description */}
        <div
          className={` ${
            props.rightSection === "true" ? "space-y-1" : "space-y-4"
          } `}
        >
          <p className="text-xl font-medium">Pic saint-loup</p>
          <div className="flex space-x-6">
            {/* localisation */}
            {props.rightSection !== "true" ? (
              <div className="flex items-center space-x-3">
                <Image
                  src="/marker_icon.png"
                  alt="date icon"
                  width={20}
                  height={20}
                  layout="fixed"
                />
                <p className="text-sm">France</p>
              </div>
            ) : (
              ""
            )}

            {/* dates */}
            <div className="flex items-center space-x-3">
              <Image
                src="/date_icon.png"
                alt="date icon"
                width={19}
                height={18}
                layout="fixed"
              />
              <p className="text-sm">6 jul - 8 jul</p>
            </div>
          </div>
        </div>

        {/* participants */}
        <div
          className={`flex items-center  space-x-6  ${
            props.rightSection === "true" ? "justify-start" : "absolute right-4"
          }`}
        >
          {/* ppls pictures */}
          <div className="flex -space-x-2">
            <div
              className={`rounded-full ${
                props.rightSection === "true" ? "p-2.5" : "p3"
              } bg-blue-300`}
            ></div>
            <div
              className={`rounded-full ${
                props.rightSection === "true" ? "p-2.5" : "p3"
              } bg-blue-600`}
            ></div>
            <div
              className={`rounded-full  ${
                props.rightSection === "true" ? "p-2.5" : "p3"
              } bg-blue-700`}
            ></div>
          </div>
          {props.rightSection !== "true" ? (
            <button className=" rounded-full px-3 text-center py-1 text-white bg-primary font-semibold">
              Join
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {props.rightSection == "true" ? (
        <button className=" rounded-full px-3 text-center py-1 text-white bg-primary font-semibold">
          Join
        </button>
      ) : (
        "test"
      )}
    </div>
  );
};

export default LongCard;
