import React from "react";
import type { GalleryData } from "../utils/mockData";

interface CardProps {
  cardData: GalleryData;
}

export const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 10%, transparent)`,
      }}
      className="h-fit flex relative justify-between items-end text-2xl p-8 text-white"
    >
      <img
        src={cardData?.image}
        alt={cardData?.title}
        className="w-full h-full object-contain -z-10 rounded-[20px] shadow-lg"
      />

      <div className="absolute bottom-0 left-0 w-full h-fit flex justify-between items-end p-8 ">
        <div className="flex flex-col gap-4">
          <div className="text-4xl">{cardData?.title}</div>
          <div className="text-gray-300">{cardData?.summary}</div>
        </div>
        <a
          href={cardData?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline hover:text-white h-fit hover:bg-blue-500 transition-all duration-300 mt-2 flex items-end w-fit px-6 py-4 rounded-[10px]"
        >
          Come Here
        </a>
      </div>
    </div>
  );
};
