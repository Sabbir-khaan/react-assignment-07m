import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Auctions from "./Auctions";
import { useState } from "react";
import { toast } from "react-toastify";

const AuctionsSection = () => {
  const [favItems, setFavItems] = useState([]);
  console.log({ favItems });

  let totalPrice = 0;

  favItems.forEach((item) => {
    totalPrice += item.currentBidPrice;
  });

  const handleRemoveFavItems = (id) => {
    toast("Item removed from favorites.");
    const filteredItems = favItems?.filter((item) => item.id !== id);
    setFavItems(filteredItems);
  };

  return (
    <section className=" max-w-[75%] mx-auto my-20 font-sora">
      <div>
        <h1 className="text-[2rem] text-[#0E2954]">Active Auctions</h1>
        <p className="text-lg opacity-90">
          Discover and bid on extraordinary items
        </p>
      </div>
      <div>
        <div className="main-container gap-6 flex justify-between">
          <div className="left-container w-[70%] ">
            <Auctions favItems={favItems} setFavItems={setFavItems} />
          </div>
          <div className="w-[30%]">
            <div className="right-container border border-gray-100 rounded-lg">
              <div className="flex justify-center items-center gap-2">
                <FontAwesomeIcon
                  className="text-2xl"
                  icon={faHeart}
                ></FontAwesomeIcon>
                <h1 className="text-3xl ml-2 text-center">Favorites Items</h1>
              </div>
              <div className="border-b border-gray-100 mt-3"></div>
              <div>
                {favItems?.length === 0 ? (
                  <div>
                    <h1 className="text-[1.2rem]">No favorites yet</h1>
                    <p className="">
                      Click the heart icon on any item <br /> to add it to your
                      favorites
                    </p>
                  </div>
                ) : (
                  favItems?.map((item) => (
                    <div className="flex gap-x-6 mt-4 " key={item.id}>
                      <img src={item.image} alt="" />
                      <div>
                        <p>{item.description}</p>
                        <div className="flex gap-x-6">
                          <p>${item.currentBidPrice}</p>
                          <p>${item.bidsCount}</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={() => handleRemoveFavItems(item.id)}>
                          x
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="flex justify-between">
                <h1>Total Bids Amount</h1>
                <h1>${totalPrice ? totalPrice : "0000"}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuctionsSection;
