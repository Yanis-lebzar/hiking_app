import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

type Props = {
  buttonText: string;
  svg: any;
  onClick: IntrinsicAttributes & Props;
  isActive: string;
  href: string;
};

const NavButton = (props: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={props.onClick}
      className={` relative w-48 h-14 transition-all duration-300 ease-in-out group hover:bg-primary hover:shadow-slate-300 hover:shadow-md   ${
        router.pathname == props.href
          ? "bg-primary shadow-slate-300 shadow-md"
          : ""
      }  rounded-xl shadow-primary p-4 flex items-center space-x-4 text-gray-600`}
    >
      {/* icon */}
      <div className="flex relative  ">
        {/* <Image
          src="/assets/navIcons/home.svg"
          height={30}
          width={30}
          layout="fill"
          alt="navIcon"
        /> */}
        {/* <HomeIcon fill="white" /> */}
        {
          <props.svg
            className="group-hover:fill-white transition-all duration-300 ease-in-out"
            fill={router.pathname == props.href ? "#fff" : "#1EC28B"}
          />
        }
      </div>
      {/* text */}

      <p
        className={`font-body  text-base group-hover:text-white group-hover:font-semibold  transition-all duration-300 ease-in-out ${
          router.pathname == props.href
            ? "text-white font-bold"
            : "text-primary font-semibold"
        }`}
      >
        {props.buttonText}
      </p>
    </button>
  );
};

export default NavButton;
