/* eslint-disable @next/next/no-img-element */
import creatorsData from "../db/creators-data";

import { useMediaQuery } from "react-responsive";
import { useRef, useState } from "react";

const Creators = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [selection, setSelection] = useState(0);

  const carousel = useRef<HTMLInputElement>(null);

  const slide = (index: number) => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft = 350 * index;
    }
  };

  if (isMobile) {
    return (
      <div className="w-full bg-black text-white py-8 min-h-fit">
        <h1 className="text-xl uppercase font-semibold text-center tracking-tight py-4">
          #MONOCREATORS #GOPLAY
        </h1>
        <div
          ref={carousel}
          className="flex overflow-y-scroll  min-h-[350px] px-12 pt-6 space-x-4"
        >
          {creatorsData.map((item, index) => (
            <div
              key={index}
              id={`artist-${index}`}
              className="flex-1 shrink min-w-[350px] min-h-[350px] text-center"
            >
              <img
                src={item.img}
                alt={`photo of ${item.name}`}
                width={"350px"}
                height={"350px"}
                key={index}
              />
              <h1 className="py-6 font-bold">{item.name}</h1>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-black ">
          <div className="flex justify-center w-full space-x-4 ">
            {creatorsData.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelection(index);
                  slide(index);
                }}
                className={`${
                  index === selection ? "bg-orange-500" : ""
                } w-2 h-2 rounded-lg bg-white `}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white h-1/2 ">
      <h1 className="text-5xl uppercase font-semibold text-center tracking-tight py-12">
        #MONOCREATORS #GOPLAY
      </h1>
      <div className="mt-4 bg-black grid grid-cols-3  gap-x-5 gap-y-4 px-12">
        {new Array(creatorsData.length - 2).fill(1).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={creatorsData[index].img}
              className="w-full h-full"
              alt={`photo of ${creatorsData[index].name}`}
            />
            <h3 className="text-xl font-medium my-4">
              {creatorsData[index].name}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center px-12 pb-8">
        <div className="flex flex-col mt-4 items-center justify-center mr-2.5 max-h-[33%] max-w-[33%]">
          <img
            src={creatorsData[creatorsData.length - 2].img}
            className="w-full h-full"
            alt={`photo of ${creatorsData[creatorsData.length - 2].name}`}
          />
          <h3 className="text-xl font-medium mt-4">
            {creatorsData[creatorsData.length - 2].name}
          </h3>
        </div>
        <div className="flex flex-col mt-4 items-center justify-center ml-2.5 max-h-[33%] max-w-[33%]">
          <img
            src={creatorsData[creatorsData.length - 1].img}
            className="w-full h-full"
            alt={`photo of ${creatorsData[creatorsData.length - 1].name}`}
          />
          <h3 className="text-xl font-medium mt-4">
            {creatorsData[creatorsData.length - 1].name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Creators;
