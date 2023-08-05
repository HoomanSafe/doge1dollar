import React from "react";

const Buy = () => {
  return (
    <section className="py-16 w-full bg-[#FFF6E7]">
      <div className="container flex justify-center items-center">
        <iframe
          src="https://voltichange.net/api/widget/?chain=1&
darktheme=false&
tokenin=Native&
tokenout=0x7f792db54B0e580Cdc755178443f0430Cf799aCa&
slippage=1"
          frameborder="0"
          className="voltichange-widget"
        ></iframe>
      </div>
    </section>
  );
};

export default Buy;
