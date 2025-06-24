import React from "react";
import { mockGalleryData } from "../utils/mockData";
import { Card } from "../Components/Card";

export const Landing: React.FC = () => {
  return (
    <div className="flex flex-wrap h-fit w-full justify-center items-center gap-8 ">
      {mockGalleryData?.map((item) => (
        <div
          className="w-fit min-h-full flex justify-center items-center p-8"
          key={item.id}
        >
          <Card cardData={item} />
        </div>
      ))}
    </div>
  );
};
