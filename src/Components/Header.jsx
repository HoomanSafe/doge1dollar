import React from "react";

const Header = () => {
  return (
    <header className="py-4 w-full absolute top-0 z-50">
      <div className="container flex items-center justify-center">
        <nav className="flex w-full py-3 px-4  bg-white font-Modak rounded-[100px] justify-between items-center">
          <a href="" className="text-lime-600 text-[32px] font-normal">
            $SCHEME
          </a>
          <div className="justify-start items-start gap-6 hidden  lg:inline-flex">
            <div className="px-5 py-[3px] bg-white rounded-[100px] justify-center items-center gap-2.5 flex">
              <div className="text-lime-600 text-2xl font-normal leading-loose">
                Tokomomic
              </div>
            </div>
            <div className="px-5 py-[3px] bg-white rounded-[100px] justify-center items-center gap-2.5 flex">
              <div className="text-lime-600 text-2xl font-normal leading-loose">
                About
              </div>
            </div>
            <div className="px-5 py-[3px] bg-white rounded-[100px] justify-center items-center gap-2.5 flex">
              <div className="text-lime-600 text-2xl font-normal leading-loose">
                Roadmap
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
