import React from 'react';
import { FaAngleDown, FaBars, FaEllipsisH } from "react-icons/fa";
import { IconContext } from "react-icons";
import './ETH.css';

const ETH = () => {
  return (
        <div id='ETH' className='ETH bg-white'>
            <div className="header flex justify-between pv3">
                <img src="images/fox.png" alt="fox" width={35} height={"auto"} />
                <div className="opt flex">
                <IconContext.Provider value={{ color: "#4a4a4a", size: '0.8rem' }}>
                    <div>
                        <button className='flex justify-around items-center f6 fw6 mr3 pointer'>
                            <span className='perfect-center f6 white fw6 mr2'>?</span>
                            Ganache
                            <span className='mr2'></span>
                            <FaAngleDown />
                        </button>
                    </div>
                    </IconContext.Provider>
                    <img src="Images/opt.jpg" alt="opt" className='pointer' />
                </div>
            </div>
            <div className="accountInfo flex justify-between items-center pa3">
                <div className='options pointer'>
                    <FaBars />
                </div>
                <div className="acc flex flex-column items-center tc pionter">
                    <p>Account 2</p>
                    <h6>0xab6D...6A65</h6>
                </div>
                <div className="more pointer"><FaEllipsisH /></div>
            </div>
            <div className="eth pa4 flex flex-column justify-around items-center">
                <img src="Images/19.jpg" alt="ethicon" width={60} height={"auto"}/>
                <h4 className="f3 pv3">99.9978 ETH</h4>
                <div className="pay">
                    <button className='f6 link dim ph3 pv2 mr1 dib fw6 pointer'> Deposite </button>
                    <button className='f6 link dim ph4 pv2 ml1 dib fw6 pointer' > Send </button>
                </div>
            </div>
        </div>
  );
};

export default ETH;