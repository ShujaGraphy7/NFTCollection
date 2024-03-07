import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import{Navbar} from  "../components/Navbar";


// This is the chain your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChainId}>
      <Head>
        <title>OG NFT Collection</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's Edition Drop contract and create a customizable Edition Drop minting page"
        />
        <meta
          name="keywords"
          content="Thirdweb, thirdweb Edition drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
        />
      </Head>
      <Navbar/>

      <Component {...pageProps} />
    
    </ThirdwebProvider>
  );
}

export default MyApp;
