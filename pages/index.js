import styles from "../styles/Home.module.css";
import { MediaRenderer, Web3Button, useActiveClaimConditionForWallet, useAddress, useClaimIneligibilityReasons, useContract, useContractMetadata, useTotalCirculatingSupply, useTotalCount } from "@thirdweb-dev/react";
// import { CONTRACT_ADDRESS } from "../const/addresses";
// import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useState } from "react";

const Home = () => {
  // const address = useAddress();
  // const router = useRouter();
  // const maxClaimQuantity = 2;

  // const { contract } = useContract(CONTRACT_ADDRESS);

  // const { data: contractMetadata, isLoading: isContractMetadataLoading } = useContractMetadata(contract);

  // const { data: activeClaimPhase, isLoading: isActiveClaimPhaseLoading } = useActiveClaimConditionForWallet(contract, address);

  // const { data: claimIneligibilityReasons, isLoading: isClaimIneligibilityReasonsLoading } = useClaimIneligibilityReasons(contract, {
  //   walletAddress: address || "",
  //   quantity: 1
  // });

  // const { data: totalSupply, isLoading: isTotalSupplyLoading } = useTotalCount(contract);
  // const { data: totalClaimSupply, isLoading: isTotalClaimSupplyLoading } = useTotalCirculatingSupply(contract);

  // const [claimQuantity, setClaimQuantity] = useState(1);
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

  return /*#__PURE__*/(
    <div className={styles.container}>
      <main className={styles.main}>
      
          <div className={styles.heroSection}>
            <div className={styles.collectionImage}>
              <MediaRenderer  />
            </div>
            <div>
              <h1>Name</h1>
              <p>desc</p>

              <div>
                <p>Eligible to claim</p>
                <div className={styles.claimContainer}>
                  <div className={styles.claimValue}>
                    <button className={styles.claimBtn} onClick={decrement}>-</button>
                    <input className={styles.claimInput} type="number"  />
                    <button className={styles.claimBtn} onClick={increment}>+</button>
                  </div>
                  <Web3Button >
                    Claim NFT
                  </Web3Button>
                 
                </div>
              </div>
            </div>
          </div>
  
      </main>
    </div>
  );
};

export default Home;
