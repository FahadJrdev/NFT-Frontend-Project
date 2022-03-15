import React from 'react';
import HeroSection from '../sectionBlocks/HeroSection';
import Production from '../sectionBlocks/Production';
import Feature from '../sectionBlocks/Feature';
import Award from '../sectionBlocks/Awards';
import Footer from '../sectionBlocks/Footer';
function Home() {
  return (
    <>
      <HeroSection />
      <Feature />
      <Production />
      <Award />
      <Footer />
    </>
  );
};

export default Home;