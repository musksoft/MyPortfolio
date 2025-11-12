import { companies } from "@/data";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-2 md:mt-4 relative z-10">
      {companies.map(({ id, img, name, nameImg }) => (
        <div
          key={id}
          className="flex items-center justify-center gap-1 md:gap-2 rounded-lg px-2 py-2 md:px-3 md:py-3 shadow-sm hover:scale-105 transition-transform duration-200"
        >
          {/* Icon */}
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <img
              src={img}
              alt={name}
              className="max-h-full max-w-full object-cover"
            />
          </div>

          {/* Name */}
          <div className="w-20 h-6 md:w-28 md:h-8 flex items-center justify-center">
            <img
              src={nameImg}
              alt={`${name} name`}
              className="max-h-full max-w-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
