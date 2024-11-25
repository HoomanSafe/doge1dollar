import React from "react";
import logo from "../assets/doge1logo-removebg-preview.png";

const About = () => {
  return (
    <section className="py-20 w-full bg-[#FFF6E7] text-black">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex-col justify-start items-start gap-3 inline-flex">
          <div className="text-lime-600 text-7xl font-Modak leading-[80px]">
            DOGE1$
          </div>
          <div className=" text-stone-950 text-xl font-normal">
           The $1 target represents more than just a number—it symbolizes the collective strength of the Dogecoin community
            . By banding together, we can bring awareness, excitement, and investment that could make $1 a reality.
          </div>
        </article>

        <img src={logo} alt="" className="lg:ml-auto" />
      </div>
    </section>
  );
};

export default About;
