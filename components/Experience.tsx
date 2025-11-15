import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20">
      <h1 className="heading text-[#adf1fd] relative z-50">
        My <span className="text-[#7ec2fa]">Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, index) => {
          return (
            <Button
              key={index}
              className="flex-1 text-blue-100 border-neutral-200 dark:border-slate-400 bg-black"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-4 md:p-4 lg:p-2 gap-2 min-h-[150px]"> 
                {/* Set a min-height for the container */}
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-24 md:w-16 w-12 h-auto" // Fixed image size
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-1xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-gray-300 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
