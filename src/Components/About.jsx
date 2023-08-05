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
            Pepe and Toad the memecoin Launched on the ethereum. Our mission is
            to provide a fun, community-driven investment opportunity that
            celebrates the power of memes and pop culture. With a vision to
            become the leading memecoin in the market, we believe Pepe and Toad
            is the perfect addition to any investor’s portfolio. Join us on this
            journey to revolutionize the world of memecoins. the market, we
            believe Pepe and Toad is the perfect addition to any investor’s
            portfolio. Join us on this journey to revolutionize the world of
            memecoins.
          </div>
        </article>

        <img src={logo} alt="" className="lg:ml-auto" />
      </div>
    </section>
  );
};

export default About;
