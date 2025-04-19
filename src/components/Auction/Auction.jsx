import React from "react";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const Auction = ({ auction, favItems, setFavItems }) => {
  // const {auction}=props;
  const favItemsId = favItems?.map((item) => item.id);
  console.log(favItemsId.includes(auction.id));
  return (
    <tr>
      <td>
        <div className="flex gap-x-6">
          <img src={auction.image} alt="" />
          <p className="mt-4">{auction.description}</p>
        </div>
      </td>
      <td>
        <p className="text-center">${auction.currentBidPrice}</p>
      </td>
      <td>
        <p className="text-center">{auction.timeLeft}</p>
      </td>
      <td>
        <div className="flex justify-center items-center">
          <button
            className={
              favItemsId.includes(auction.id) ? "cursor-not-allowed" : ""
            }
            disabled={favItemsId.includes(auction.id)}
            onClick={() => {
              setFavItems((prev) => [...prev, auction]);
              toast("Item added to favorites.");
            }}
          >
            <FontAwesomeIcon
              className={favItemsId.includes(auction.id) ? "text-red-500" : ""}
              icon={favItemsId.includes(auction.id) ? solidHeart : regularHeart}
            ></FontAwesomeIcon>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Auction;
