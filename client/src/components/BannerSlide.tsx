import type { SlideData } from "../types/hero.ts";

const BannerSlide = ({
  title,
  subtitle,
  description,
  image,
  primaryBtn,
  secondaryBtn,
  bgColor,
}: SlideData) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col md:flex-row items-center justify-between px-6 py-12"
    >
      {/* LEFT CONTENT */}
      <div className="md:w-1/2 space-y-4 ">
        <h2 className="text-3xl font-bold ">{title}</h2>
        <h3 className="text-xl text-gray-600">{subtitle}</h3>
        <p className="text-gray-500">{description}</p>

        <div className="flex gap-4 mt-4">
          <button
            className="rounded-xl border border-primary bg-primary px-7 py-3
  font-semibold text-white
  transition-all duration-300
  hover:border-secondary
  hover:shadow-[0_12px_30px_rgba(0,51,102,0.25)]"
          >
            {primaryBtn}
          </button>

          <button
            className="rounded-lg border border-primary px-6 py-3 font-medium text-primary
  transition-all duration-300
  hover:border-secondary
  hover:bg-secondary/5
  hover:text-secondary"
          >
            {secondaryBtn}
          </button>
        </div>
      </div>
      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0 h-64 md:h-96 w-full relative">
        <div className="absolute h-72 w-72 rounded-full bg-secondary/50 blur-3xl" />

        <img
          src={image}
          alt="hero"
          loading="lazy"
          decoding="async"
          className="h-4/5 w-4/5 object-contain scale-125 drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default BannerSlide;
