import Image from "next/image";
import React from "react";
import HomeIcon from "../assets/home.svg";
import LongCard from "./middle-section/LongCard";
import CalendarHikes from "./right-section/CalendarHikes";
import UserProfileCard from "./right-section/UserProfileCard";

type Props = {};

const RightSection = (props: Props) => {
  return (
    <div className=" flex justify-center  py-8">
      <div className="space-y-10">
        {/* <Image
          src={"/assets/navIcons/map.svg"}
          width={30}
          height={30}
          alt="dsfsd"
        /> */}
        {/* <HomeIcon fill={"red"} /> */}
        <UserProfileCard />
        <CalendarHikes />

        <div className=" space-y-4">
          <p className="text-2xl font-semibold">Mon calendrier</p>
          <LongCard rightSection="true" />
          <LongCard rightSection="true" />
          <LongCard rightSection="true" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
