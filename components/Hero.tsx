import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col overflow-hidden justify-center items-start px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl lg:ml-44 md:ml-10 mt-20">
        <h1 className="text-[#FFFFFF] lg:text-[50px] md:text-[35px] text-[25px] lg:leading-[52px] md:leading-[45px] leading-[30px] mb-4">
          Empowering Lives Through <br className="lg:hidden md:hiddne" />
          Innovative{" "}
          <span className="underline decoration-[#6881FF] underline-offset-4">
            AI
          </span>{" "}
          Technologies.{" "}
        </h1>
        <p className="text-[#C0C2CC] lg:text-[16px] md:text-lg text-sm">
          Finding new horizons for visionaries to accelerate <br className="lg:hidden md:hidden" /> their
          innovation and progress.
        </p>
        <div className="flex mt-4 gap-4">
          <button className="text-white text-[12px] rounded-[12px] bg-[#6A35FF] px-4 py-2">
            Explore Our Services
          </button>
          <button className="text-white text-[12px] rounded-[12px] bg-[#151515] border border-1 border-[#6881FF] px-4 py-2">
            Learn more
          </button>
        </div>
        <div className="flex mt-12 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex">
            <p className="mx-2 md:mx-4 text-xs sm:text-sm md:text-base lg:text-lg">
              <span className="bg-gradient-text bg-clip-text text-transparent">
                From Ideas to Software Solutions
              </span>{" "}
              <span className="text-[#6881FF]">🌟✨</span>
            </p>
            <p className="mx-4">
              <span className="text-[#E3E3E3]">
                From Ideas to Software Solutions
              </span>{" "}
              <span className="text-[#6881FF]">🌟✨</span>
            </p>
            <p className="mx-2 md:mx-4 text-xs sm:text-sm md:text-base lg:text-lg">
              <span className="bg-gradient-text bg-clip-text text-transparent">
                From Ideas to Software Solutions
              </span>{" "}
              <span className="text-[#6881FF]">🌟✨</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
