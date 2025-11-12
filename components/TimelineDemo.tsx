import React from "react";
import { Timeline } from "./ui/Timeline";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 text-lg font-normal text-neutral-800 md:text-[16px] dark:text-neutral-200">
            Learnt coding from scratch using C, C++, Java & strengthening DSA
            concepts
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-lg">
              {/* Default image */}
              <Image
                src="/code.png"
                alt="coding languages"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover transition-opacity duration-700 ease-in-out md:h-44 lg:h-60 opacity-100 "
              />

              <div className="absolute bottom-2 left-2 flex items-center gap-2">
                <img
                  src="/c-logo.png"
                  alt="C"
                  className="h-6 w-5\6 rounded-md"
                />
                <img src="/c++.png" alt="C++" className="h-6 w-6 rounded-md" />
                <img
                  src="/java.png"
                  alt="Java"
                  className="h-6 w-6 rounded-md"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-lg">
              {/* Default image */}
              <img
                src="https://assets.aceternity.com/templates/startup-2.webp"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover transition-opacity duration-700 ease-in-out md:h-44 lg:h-60 opacity-100 "
              />

              <div className="absolute bottom-2 left-2 flex items-center gap-2">
                <img
                  src="/web.png"
                  alt="HTML"
                  className="h-8 w-[5.5rem] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            build one of my own.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm dark:text-neutral-200">
            The trend of Chat GPT started in 2023 which being an artificial
            intelligence caught my attention too. So, I learnt Python and its
            libraries, performing data analysis, EDA and feature engineering,
            thus strengthening my core concepts in the world of AI/ML
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="machine.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover transition-opacity duration-700 ease-in-out md:h-44 lg:h-60 opacity-100 group-hover:opacity-0"
              />
              <img
                src="/data.png"
                alt="hero hover"
                width={500}
                height={500}
                className="absolute inset-0 h-20 w-full rounded-lg object-cover transition-opacity duration-700 ease-in-out md:h-44 lg:h-60 opacity-0 group-hover:opacity-100"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-2">
                <img
                  src="/python-ic.png"
                  alt="React"
                  className="h-5 w-6 rounded-md"
                />
                <img
                  src="/matplotlib.png"
                  alt="Tailwind"
                  className="h-6 w-15 rounded-md"
                />
              </div>
            </div>

            {/* Image 4 */}
            {/* Image 4 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://assets.aceternity.com/cards.png"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover transition-transform duration-700 ease-in-out md:h-44 lg:h-60 scale-[1.75]"
              />

              {/* 
  <div className="absolute bottom-2 left-2 flex items-center gap-2">
    <img src="/icons/figma.png" alt="Figma" className="h-5 w-5 rounded-md" />
    <img src="/icons/react.png" alt="React" className="h-5 w-5 rounded-md" />
  </div> */}
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2024-25",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-base dark:text-white">
            Deployed 5 webistes and built 3 apps. Here are some more examples of
            beautiful designs I built.
          </p>

          <div className="mb-8">
            <h1>Websites:</h1>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-slate-50">
              ✅ Rental Website
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-slate-50">
              ✅ Portfolio Website
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-slate-50">
              ✅ Recipe Website
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-slate-50">
              ✅ Furniture Website
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-slate-50">
              ✅ Kanvas Website (Kanban board for Agile Development)
            </div>
            <h1>Apps:</h1>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-slate-50">
              ✅ Hospital Scheduling App (Android Studio - Kotlin + Firebase)
            </div>{" "}
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-slate-50">
              ✅ Fitness App (Android Studio - Java + MySqlPHP)
            </div>{" "}
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-slate-50">
              ✅ Food Delivery App (React Native + Appwrite)
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 - Canvas */}
            <div className="group relative overflow-hidden rounded-lg h-20 md:h-44 lg:h-60">
              <div className="absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out group-hover:opacity-0 z-10">
                <h3 className="text-white text-s md:text-s font-semibold uppercase tracking-wide">
                  Portfolio Website
                </h3>
              </div>

              <img
                src="/portfolio.png"
                alt="canvas hover"
                className="absolute inset-0 h-20 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-lg md:h-44 lg:h-60"
              />
              <img
                src="/canvas.png"
                alt="canvas template"
                className="h-20 w-full object-cover opacity-30 group-hover:opacity-0 transition-opacity duration-700 ease-in-out rounded-lg md:h-44 lg:h-60"
              />

              <div className="absolute bottom-2 left-2 flex items-center gap-2 z-20">
                <img
                  src="/next.png"
                  alt="Figma"
                  className="h-8 w-8 rounded-md"
                />
                <img
                  src="/tail.svg"
                  alt="React"
                  className="h-5 w-5 rounded-md"
                />
              </div>
            </div>

            {/* Image 2 - Recipe */}
            <div className="group relative overflow-hidden rounded-lg h-20 md:h-44 lg:h-60">
              <div className="absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out group-hover:opacity-0 z-10">
                <h3 className="text-white text-s md:text-s font-semibold uppercase tracking-wide">
                  Recipe Website
                </h3>
              </div>

              <img
                src="/recipes.png"
                alt="recipe hover"
                className="absolute inset-0 h-20 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-lg md:h-44 lg:h-60"
              />
              <img
                src="/recipe.png"
                alt="recipe template"
                className="h-20 w-full object-cover opacity-30 group-hover:opacity-0 transition-opacity duration-700 ease-in-out rounded-lg md:h-44 lg:h-60"
              />

              <div className="absolute bottom-2 left-2 flex items-center  z-20">
                <img
                  src="/web.png"
                  alt="Next.js"
                  className="h-6 w-[4.2rem] rounded-md"
                />

                <img
                  src="/php.png"
                  alt="Next.js"
                  className="h-5 w-5 rounded-md"
                />
              </div>
            </div>

            {/* Image 3 - Rental */}
            <div className="group relative overflow-hidden rounded-lg h-20 md:h-44 lg:h-60">
              <div className="absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out group-hover:opacity-0 z-10">
                <h3 className="text-white text-s md:text-s font-semibold uppercase tracking-wide">
                  Rental Website
                </h3>
              </div>

              <img
                src="/rental.png"
                alt="fitness hover"
                className="absolute inset-0 h-20 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-lg md:h-44 lg:h-60"
              />
              <img
                src="/rental.png"
                alt="rental template"
                className="h-20 w-full object-cover opacity-30 group-hover:opacity-0 transition-opacity duration-700 ease-in-out rounded-lg md:h-44 lg:h-60"
              />

              <div className="absolute bottom-2 left-2 flex items-center gap-1 z-20">
                <img
                  src="/react.png"
                  alt="HTML"
                  className="h-6 w-6 rounded-md"
                />
                <img
                  src="/figma.png"
                  alt="CSS"
                  className="h-8 w-8 rounded-md"
                />
                <img src="/tail.svg" alt="CSS" className="h-5 w-5 rounded-md" />
                <img
                  src="/supabase.png"
                  alt="CSS"
                  className="h-6 w-7 rounded-md"
                />
                <img src="/git.svg" alt="CSS" className="h-6 w-6 rounded-md" />
              </div>
            </div>

            {/* Image 4 - Furniture */}
            <div className="group relative overflow-hidden rounded-lg h-20 md:h-44 lg:h-60">
              <div className="absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-700 ease-in-out group-hover:opacity-0 z-10">
                <h3 className="text-white text-s md:text-s font-semibold uppercase tracking-wide">
                  Furniture Website
                </h3>
              </div>

              <img
                src="/furniture.png"
                alt="furniture hover"
                className="absolute inset-0 h-20 w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-lg md:h-44 lg:h-60"
              />
              <img
                src="/furniture.png"
                alt="furniture template"
                className="h-20 w-full object-cover opacity-30 group-hover:opacity-0 transition-opacity duration-700 ease-in-out rounded-lg md:h-44 lg:h-60"
              />

              <div className="absolute bottom-2 left-2 flex items-center gap-2 z-20">
                <img
                  src="/react.png"
                  alt="HTML"
                  className="h-6 w-6 rounded-md"
                />

                <img src="/tail.svg" alt="CSS" className="h-5 w-5 rounded-md" />

                <img src="/git.svg" alt="CSS" className="h-6 w-6 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
