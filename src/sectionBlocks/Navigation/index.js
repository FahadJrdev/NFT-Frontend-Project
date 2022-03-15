import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../../pages';
import Markets from '../../pages/Markets';
import NFTs from '../../pages/NFTs';
import Work from '../../pages/Work';
import About from '../../pages/About';
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
function Navigation() {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/NFT-Frontend-Project/" exact element={<Home />}></Route>
        <Route path="/NFT-Frontend-Project/nfts" exact element={<NFTs />}></Route>
        <Route path="/NFT-Frontend-Project/markets" exact element={<Markets />}></Route>
        <Route path="/NFT-Frontend-Project/work" exact element={<Work />}></Route>
        <Route path="/NFT-Frontend-Project/about" exact element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
