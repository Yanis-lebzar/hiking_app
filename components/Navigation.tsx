import Image from "next/image";
import React, { useState } from "react";
import NavButton from "./NavButton";

import HomeIcon from "../assets/home.svg";
import MapIcon from "../assets/map.svg";
import RandosIcon from "../assets/hiking.svg";
import SearchIcon from "../assets/search.svg";
import EventsIcon from "../assets/events.svg";
import DisconnectIcon from "../assets/disconnect.svg";
import Link from "next/link";
type Props = {};

const Navigation = (props: Props) => {
  const [active, setActive] = useState("");
  const handleClick = (e) => {};
  return (
    <div className="bg-white-300 flex flex-col items-center py-10 gap-16 relative">
      {/* logo */}
      <div className="h-16 w-40   relative">
        <Image
          src="/logo-text.svg"
          layout="fill"
          width={80}
          height={80}
          alt="logo"
        />
      </div>
      {/* navItems */}
      <div className="flex justify-center flex-col gap-3">
        <Link href="/" passHref>
          <NavButton svg={HomeIcon} buttonText="Accueil" isActive={active} />
        </Link>
        <Link href="/gallery" passHref>
          <NavButton svg={SearchIcon} buttonText="Gallery" />
        </Link>
        <Link href="/map" passHref>
          <NavButton svg={MapIcon} buttonText="Carte" />
        </Link>
        <Link href="/myHikes" passHref>
          <NavButton svg={RandosIcon} buttonText="Mes randos" />
        </Link>
        <Link href="/events" passHref>
          <NavButton svg={EventsIcon} buttonText="Evenements" />
        </Link>
      </div>
      {/* disconnection */}
      <div className="absolute bottom-10">
        <NavButton svg={DisconnectIcon} buttonText="Déconnexion" />
      </div>
    </div>
  );
};

export default Navigation;
