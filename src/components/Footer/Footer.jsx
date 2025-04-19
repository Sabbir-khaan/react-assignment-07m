import React from "react";

const Footer = () => {
  return (
    <div className="text-center">
      <h1 className="mt-[8.25rem] font-poppins">
        <span className="text-[#003EA4] text-3xl">Auction</span>
        <span className="text-[#FFD337] font-bold text-3xl">Gallery</span>
      </h1>
      <div className="space-x-5 text-[1.2rem] mt-3 font-sora">
      <h4 className="inline">Bid.</h4>
      <h4 className="inline">Win.</h4>
      <h4 className="inline">Own.</h4>
      </div>
      <div>
        <ul className="flex justify-center items-center space-x-5 font-poppins mt-3">
            <li>Home</li>
            <li>Auctions</li>
            <li>Categories</li>
            <li> How to works</li>
        </ul>
      </div>
      <div className="mt-5">
        <h3 className="font-sora">&copy;2025 AuctionHub. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
