import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Serious Platypus Verse NFT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="We are supporting environmental advocates through this 105 unique genesis collection of serious platypus."
        />
        <meta
          name="keywords"
          content="serious, platypus, nft, project"
        />
        <meta property="og:url" content="https://seriousplatypusnft.xyz/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Serious Platypus Verse NFT"/>
        <meta property="og:description" content="We are supporting environmental advocates through this 105 unique genesis collection of serious platypus. This collection is your key to Serious PlatyVerse."/>
        <meta property="og:image" content="https://share.warengonzaga.com/asset/misc/thumbnail-nft.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="seriousplatypusnft.xyz"/>
        <meta property="twitter:url" content="https://seriousplatypusnft.xyz/"/>
        <meta name="twitter:title" content="Serious Platypus Verse NFT"/>
        <meta name="twitter:description" content="We are supporting environmental advocates through this 105 unique genesis collection of serious platypus. This collection is your key to Serious PlatyVerse."/>
        <meta name="twitter:image" content="https://share.warengonzaga.com/asset/misc/thumbnail-nft.png"/>
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
