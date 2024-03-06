import { MediaRenderer, Web3Button } from "@thirdweb-dev/react";
import { useState } from "react";

const Home = () => {
  const [claimQuantity, setClaimQuantity] = useState(1);
  const maxClaimQuantity = 2;

  const increment = () => {
    if (claimQuantity < maxClaimQuantity) {
      setClaimQuantity(claimQuantity + 1);
    }
  };

  const decrement = () => {
    if (claimQuantity > 1) {
      setClaimQuantity(claimQuantity - 1);
    }
  };

  return (
    <div className="bg-black w-full h-full">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto mt-3 md:w-3/4 lg:w-1/2 bg-gray-900 text-white px-4 py-2 rounded-md mb-8">
        <div className="collectionImage mr-0 md:mr-5 p-14">
          <MediaRenderer />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold">Name</h1>
          <p className="text-lg">Description</p>
    
          <div className="mt-4">
            <p className="text-lg">Eligible to claim</p>
            <div className="flex items-center">
              <div className="flex items-center">
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-2" onClick={decrement}>-</button>
                <input className="bg-gray-800 text-white px-4 py-2 rounded-md w-16 text-center" type="number" value={claimQuantity} readOnly />
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md ml-2" onClick={increment}>+</button>
              </div>
              <button className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-black px-4 py-2 rounded-md mt-4 md:mt-0">
                Claim NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
