import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
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
    <div className="bg-[#EBF0F5]">
      <section className=" max-w-[75%] mx-auto pt-[8.25rem] font-sora">
        <div>
          <h1 className="text-[2rem] text-[#0E2954]">Active Auctions</h1>
          <p className="text-lg opacity-90 mt-3 mb-5">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div>
          <div className="main-container gap-6 flex justify-between pb-[7.25rem]">
            <div className="left-container w-[70%]">
              <Auctions favItems={favItems} setFavItems={setFavItems} />
            </div>
            <div className="w-[30%]">
              <div className="right-container border border-gray-100 rounded-3xl bg-white ">
                <div className="flex justify-center items-center gap-2 mt-6">
                  <FontAwesomeIcon
                    className="text-2xl"
                    icon={faHeart}
                  ></FontAwesomeIcon>
                  <h1 className="text-3xl ml-2 text-center font-semibold">
                    Favorites Items
                  </h1>
                </div>
                <div className="border-b border-gray-100 mt-3"></div>
                <div>
                  {favItems?.length === 0 ? (
                    <div className="text-center">
                      <h1 className="text-[1.2rem] mt-12 font-semibold">
                        No favorites yet
                      </h1>
                      <p className="mt-6  mb-12">
                        Click the heart icon on any item <br /> to add it to
                        your favorites
                      </p>
                      <div className="border-b border-gray-100 mt-3"></div>
                    </div>
                  ) : (
                    favItems?.map((item) => (
                      <div className="flex gap-x-6 mt-4 px-4 pb-3 border-b border-gray-100" key={item.id}>
                        <img className="w-18 h-18" src={item.image} alt="" />
                        <div className="flex justify-between w-full">
                        <div>
                          <p className="text-sm">{item.description}</p>
                          <div className="flex gap-x-6 mt-4">
                            <p>${item.currentBidPrice}</p>
                            <p>Bids: {item.bidsCount}</p>
                          </div>
                        </div>
                        <div>
                          <button onClick={() => handleRemoveFavItems(item.id)}>
                            <FontAwesomeIcon
                              className="text-xl"
                              icon={faXmark}
                            ></FontAwesomeIcon>
                          </button>
                        </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="flex justify-between p-8 font-semibold">
                  <h1>Total Bids Amount</h1>
                  <h1>${totalPrice ? totalPrice : "0000"}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuctionsSection;
