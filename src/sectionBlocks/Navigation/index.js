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
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/nfts" exact element={<NFTs />}></Route>
        <Route path="/markets" exact element={<Markets />}></Route>
        <Route path="/work" exact element={<Work />}></Route>
        <Route path="/about" exact element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default Navigation;
