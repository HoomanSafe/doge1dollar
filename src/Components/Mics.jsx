import React from "react";
import mic from "../assets/mics.png";

const Mics = () => {
  return (
    <section className="py-20 w-full bg-[#FFF6E7] text-black">
      <div className="container flex justify-center items-center flex-col">
        <h1 className="text-lime-600 text-6xl md:text-7xl font-Modak leading-[80px]">
          Tokenomics
        </h1>

        <div className="w-full grid bg-[#90CA4F] p-10 grid-cols-1 lg:grid-cols-2 justify-between items-center rounded-xl mt-16">
          <ul className="flex flex-col gap-4 text-white text-xl">
            <li>$SCHEME your way to the the top to earn 90% revenue share</li>
            <li>1,000,000 Supply</li>
            <li>90% Tax Revenue goes to holder in $USDC</li>
            <li>Private Presales 20%</li>
            <li>Uniswap 20%</li>
          </ul>

          <img src={mic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Mics;
