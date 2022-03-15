import React from 'react';
import HeroSection from "../sectionBlocks/HeroSection";
import NFTMarketPlace from '../sectionBlocks/NFTMarket';
import NewsLetter from '../sectionBlocks/NewsLetter';
import Footer from '../sectionBlocks/Footer';

const NFTs = () => {
    return (
      <>
        <HeroSection />
        <NFTMarketPlace />
        <NewsLetter />
        <Footer />
      </>
    );
};

export default NFTs;