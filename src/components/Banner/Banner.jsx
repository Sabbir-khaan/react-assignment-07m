import React from "react";

const Banner = () => {
  return (
    <section className="bg-[url('/public/banner.png')] h-[41.25rem] bg-no-repeat bg-cover mt-7 font-sora">
      <h1 className="text-5xl leading-14 font-bold text-white pt-[14rem] pl-[10rem]">
        Bid on Unique Items from <br /> Around the World
      </h1>
      <p className="text-2xl leading-7 mt-4 opacity-60 text-white pl-[10rem]">
        Discover rare collections, luxury goods, and vintage <br /> treasures in
        our curated auctions
      </p>
      <div className="pl-[10rem]">
        <button className="bg-white py-3 px-8 rounded-4xl text-xl mt-8">
          Explore Auctions
        </button>
      </div>
    </section>
  );
};

export default Banner;
