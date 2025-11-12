import { cn } from "@/lib/utils";
import { linearGradient } from "motion/react-client";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {
  return (
    <div
      className={cn(
        "relative mb-4 inline-block w-full break-inside-avoid rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl dark:border-white/[0.2] dark:bg-black overflow-hidden",
        className
      )}
      // style={{
      //   backgroundImage: 
      //      "linear-gradient(90deg, rgba(94,196,209,1) 29%, rgba(182,179,227,1) 70%, rgba(232,193,216,1) 100%)",
      // }}
      
       style={{
    backgroundImage: "linear-gradient(90deg, rgba(0,0,0,1), rgba(0,0,0,1))",
  }}
    >
      {/* Image wrapper */}
      {img && (
        <div
          className={cn(
            "w-full h-full flex justify-center items-center",
            id === 6 && "justify-center"
          )}
        >
          <img
            src={img}
            alt={title?.toString() || ""}
            className={cn(
              "w-full rounded-lg object-cover object-center mb-3",
              imgClassName
            )}
          />
        </div>
      )}

      {/* Text content */}
      <div className={cn("flex flex-col", titleClassName)}>
        <h3 className="mb-1 font-sans font-bold text-neutral-800 dark:text-neutral-100">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      </div>

      {/* Spare image (optional watermark) */}
      {spareImg && (
        <img
          src={spareImg}
          alt=""
          className="absolute bottom-2 right-2 w-10 h-10 opacity-30"
        />
      )}
    </div>
  );
};
