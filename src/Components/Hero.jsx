import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full flex justify-center items-center relative"
      id="hero"
    >
      <img
        src={hero1}
        alt=""
        className="absolute bottom-0 left-0 w-[10rem] lg:w-fit"
      />
      <img
        src={hero2}
        alt=""
        className="absolute bottom-0 right-0 w-[10rem] lg:w-fit"
      />
      <div className="container flex flex-col justify-center items-center gap-6">
        <h1 className="text-center text-white text-7xl md:text-9xl font-Modak leading-[120px] tracking-[2.80px]">
          $CHEME
        </h1>
        <p className="max-w-[435px] text-center text-white text-base font-Rakkas leading-loose">
          Introducing "EthEmpire: The 90% Revolution" – where we're flipping the
          crypto world on its head and making it rain with laughter and riches!
          🎉💰
        </p>

        <div className="flex gap-6 flex-col justify-center items-center md:flex-row">
          <a href="" className="">
            <div className="px-8 py-4 bg-amber-500 rounded-full justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-xl font-Modak leading-7 tracking-tight">
                BUY NOW
              </div>
            </div>
          </a>

          <a
            href=""
            className="p-[3px] rounded-full border border-cyan-600 justify-center items-center inline-flex"
          >
            <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-cyan-600 rounded-full justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-xl font-Modak leading-7 tracking-tight">
                LIVE CHART
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
