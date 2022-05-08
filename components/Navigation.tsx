import Image from "next/image";
import React from "react";
import NavButton from "./NavButton";
import HomeIcon from "../assets/navIcons/home.svg";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="bg-orange-300">
      {/* logo */}
      <div className="h-20 w-20   relative">
        <Image src="/logo.svg" layout="fill" alt="logo" />
      </div>
      {/* navItems */}
      <div>
        <NavButton iconName="HomeIcon" text="Accueil" svg={HomeIcon} />
        <NavButton iconName="map" text="Accueil" />
        <NavButton iconName="hiking" text="Accueil" />
        <NavButton iconName="search" text="Accueil" />
        <NavButton iconName="events" text="Accueil" />
      </div>
    </div>
  );
};

export default Navigation;
