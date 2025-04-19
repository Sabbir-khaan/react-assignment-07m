import React, { useEffect, useState } from "react";
import Auction from "../Auction/Auction";

const Auctions = ({ favItems, setFavItems }) => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch("biditems.json")
      .then((res) => res.json())
      .then((data) => setAuctions(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto rounded-3xl border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Items</th>
              <th className="text-center">Current Bid</th>
              <th className="text-center">Time Left</th>
              <th className="text-center ">Bid Now</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {auctions.map((auction) => (
              <Auction
                auction={auction}
                favItems={favItems}
                setFavItems={setFavItems}
              ></Auction>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Auctions;
