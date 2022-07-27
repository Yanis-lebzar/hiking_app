import React from "react";
import Dashboard from "../components/Dashboard";
import MiddleSection from "../components/MiddleSection";
import Navigation from "../components/Navigation";
import RightSection from "../components/RightSection";
type Props = {};

const MyHikes = (props: Props) => {
  return (
    <div className="h-screen ">
      <Dashboard>
        <Navigation />

        <MiddleSection />
        <RightSection />
      </Dashboard>{" "}
    </div>
  );
};
export default MyHikes;
