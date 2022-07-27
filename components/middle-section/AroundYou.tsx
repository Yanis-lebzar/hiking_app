import React from "react";
import LongCard from "./LongCard";

type Props = {};

const AroundYou = (props: Props) => {
  return (
    <div className="bg-white h-full  rounded-3xl px-6 py-8 space-y-7">
      {/* header */}
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-semibold">Autour de chez vous !</p>
          <p className="text-gray-400">
            Randonnées aux alentours de chez vous..
          </p>
        </div>
        <button className=" h-min p-3  font-semibold rounded-lg bg-primary border-2 border-primary text-white text-sm hover:bg-white hover:border-2 hover:border-primary hover:text-primary">
          En voir plus
        </button>
      </div>

      {/* long cards */}
      <div className="space-y-6">
        <LongCard />
        <LongCard />
      </div>
    </div>
  );
};

export default AroundYou;
