import React from "react";
import Dashboard from "../components/Dashboard";
import { useRouter } from "next/router";
import MiddleSection from "../components/MiddleSection";
import Navigation from "../components/Navigation";
import RightSection from "../components/RightSection";
type Props = {};

const Gallery = (props: Props) => {
  const router = useRouter();
  console.log(router);
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
export default Gallery;
