import React, {useState} from 'react';
import {CardAvailable} from "../../components/CardList/Card";
import { cardAvailableItem } from "./AvailableInfo";
import './NFTMarket.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

const NFTMarketPlace = () => {
    const [x,setX] = useState(0);
    const [newerPost, setNewerPost] = useState("Newer Post")
    const [olderPost, setOlderPost] = useState("Older Post")
    const goToLeft=()=>{
        (x === 0 ? setX(0) && setOlderPost("") : setX(x+100) && setOlderPost("Older Post"));
    };
    
    const goToRight=()=>{
        (x=== -100*(cardAvailableItem.length-1)) ? setX(-100*(cardAvailableItem.length-1))  && setNewerPost("") : setX(x-100)  && setNewerPost("Newer Post");
      };
    return(
        <div className="NFTMarketPlace pa4 bg-black">
            <div className="slider-items">
                <div className='grid-wrapper-card-gallery slide-item' style={{transform:`translateX(${x}%)`}}>
                    {
                        cardAvailableItem.map((item, i) => {
                            return (
                                    <CardAvailable 
                                    key={i} 
                                    id={i} 
                                    properties={item.properties} 
                                    name={item.name} 
                                    saled={item.saled} 
                                    image={item.image}
                                    />
                                    )
                                })
                    }
                </div>
            </div>
            <div className="direction pt5 ph2 pb4 white f2">
                <IconContext.Provider value={{size: "1rem", color: "white"}}>
                    <div onClick={goToLeft} className="left"><FaAngleLeft/><p className="ml2">{newerPost}</p></div>
                    <div onClick={goToRight} className="right"><p className="mr2">{olderPost}</p><FaAngleRight /></div>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default NFTMarketPlace;