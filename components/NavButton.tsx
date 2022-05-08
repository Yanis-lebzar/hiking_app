import Image from "next/image";
import React from "react";
import HomeIcon from "../assets/navIcons/home.svg";
import MapIcon from "../assets/navIcons/map.svg";
import HikingIcon from "../assets/navIcons/hiking.svg";

type Props = {
  text: string;
  iconName: string;
};

const NavButton = (props: Props) => {
  return (
    <button className=" relative w-48 h-16 bg-primary rounded-xl shadow-primary p-4 flex items-center space-x-4 text-gray-600">
      {/* icon */}
      <div className=" relative h-8 w-8 text-blue-800">
        {/* <Image
          src={`/navIcons/${props.iconName}.svg`}
          layout="fill"
          alt="navIcon"
        /> */}
        <HomeIcon fill="white" />
      </div>
      {/* text */}

      <p className="font-body font-bold text-base text-white ">{props.text}</p>
    </button>
  );
};

export default NavButton;
