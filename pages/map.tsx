import React from "react";
import Dashboard from "../components/Dashboard";
import MiddleHeader from "../components/middle-section/Header";
import HikingCards from "../components/middle-section/HikingCards";
import MiddleSection from "../components/MiddleSection";
import Navigation from "../components/Navigation";
import RightSection from "../components/RightSection";

type Props = {};

const Map = (props: Props) => {
  return (
    <div className="h-screen ">
      <Dashboard>
        <Navigation />

        <MiddleSection>
          <div className=" space-y-8">
            <MiddleHeader />
            <div className="flex flex-col">
              <iframe
                width="100%"
                height="500px"
                src="https://api.mapbox.com/styles/v1/yanis34/cl62f1865000e14qngxmru7xi.html?title=false&access_token=pk.eyJ1IjoieWFuaXMzNCIsImEiOiJja3VsMjAxbTgwc2txMnhtbzVja2E2NXRlIn0.4BcJvZynl5rUL3Fcq6fpFQ&zoomwheel=false#15.06/44.04571/3.84321/289.6/75"
                title="Mapbox Outdoors"
                className="border-none"
              ></iframe>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <button className=" bg-primary py-3.5  rounded-md font-semibold text-xl text-white font-montserrat hover:bg-white hover:text-primary border-primary  border-2 ">
                Ajouter un marker
              </button>
              <button className="bg-primary rounded-md font-semibold text-xl text-white font-montserrat hover:bg-white hover:text-primary border-primary border-2">
                Créer une randonnée
              </button>
            </div>
            <div className="grid grid-cols-3 grid-rows-[11rem]  gap-20">
              <HikingCards smallCard="true" />
              <HikingCards smallCard="true" />
              <HikingCards smallCard="true" />
            </div>
          </div>
        </MiddleSection>
        <RightSection />
      </Dashboard>
    </div>
  );
};
export default Map;
