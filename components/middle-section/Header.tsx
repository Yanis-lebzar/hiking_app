import Image from "next/image";
import React from "react";
import NotificationIcon from "../../assets/icon_notif.svg";
import NotificationIconPoint from "../../assets/icon_notif_point.svg";

type Props = {};

const MiddleHeader = (props: Props) => {
  return (
    <div className="flex justify-between ">
      {/* Head text + descr */}
      <div>
        <h2 className="text-black font-semibold text-2xl font-montserrat">
          Bonjour, Yanis !
        </h2>
        <p className=" text-base text-subText font-body font-light">
          Organisez vos randonnées dès maintenant.
        </p>
      </div>
      {/* Search bar / notification */}

      <div className="flex space-x-10 ">
        {/* Search bar */}
        <div className="h-14 w-80 relative  bg-white flex  rounded-full items-center justify-between">
          <input
            className="rounded-full h-full w-full px-4"
            type="text"
            placeholder="Rechercher.."
          />
          <div className="absolute right-6">
            <Image
              src="/icon_search.png"
              alt="search-icon"
              width={24}
              height={24}
              quality={100}
            />
          </div>
        </div>
        {/* notif icon */}
        <div className="bg-white flex items-center rounded-full h-min p-3">
          <NotificationIcon className="bg-white" />
          <NotificationIconPoint className="absolute" fill={`#FF9D2B`} />
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
