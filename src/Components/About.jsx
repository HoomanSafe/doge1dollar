import React from "react";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <section className="py-20 w-full bg-[#FFF6E7] text-black">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex-col justify-start items-start gap-3 inline-flex">
          <div className="text-lime-600 text-7xl font-Modak leading-[80px]">
            $CHEME
          </div>
          <div className=" text-stone-950 text-xl font-normal">
            Introducing "EthEmpire: The 90% Revolution" – where we're flipping
            the crypto world on its head and making it rain with laughter and
            riches! 🎉💰
          </div>
        </article>

        <img src={logo} alt="" className="lg:ml-auto" />
      </div>
    </section>
  );
};

export default About;
