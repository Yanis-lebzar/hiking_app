import React, { Children } from "react";
import MiddleSection from "./MiddleSection";
import Navigation from "./Navigation";
import RightSection from "./RightSection";
import HomeIcon from "../assets/home.svg";

type Props = {
  children: React.ReactNode;
};
{
  /* <Navigation />
<MiddleSection />
<RightSection /> */
}
const Dashboard = (props: Props) => {
  return (
    <main className="lg:grid lg:grid-cols-[20rem,auto,28rem] lg:h-full  py-5  ">
      {props.children}
    </main>
  );
};

export default Dashboard;
