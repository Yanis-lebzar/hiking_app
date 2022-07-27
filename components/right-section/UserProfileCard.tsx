import Image from "next/image";
import React from "react";

type Props = {};

const UserProfileCard = (props: Props) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Image */}

      <div className="rounded-full h-14 w-14 bg-red-700"></div>
      <div className=" flex items-center space-x-10">
        {/* user name */}
        <div className="text-center">
          <p className="text-xl font-bold ">Yanis Lebzar</p>
          <p className="text-sm font-montserrat text-gray-500 ">
            Young Traveler
          </p>
        </div>
        {/* arrow menu */}
        <div className="">
          <Image
            src="/arrow-down.png"
            alt="arrow-icon"
            width={16}
            height={16}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
