import React, {useState, useEffect} from 'react';
import CardAvailableList from './cardAvailableList';
import { cardAvailableItem } from "./AvailableInfo";
import './NFTMarket.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

const NFTMarketPlace = () => {
    const [x,setX] = useState(0);
    const [newerPost, setNewerPost] = useState("");
    const [olderPost, setOlderPost] = useState("Next");
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(0);

    useEffect(()=>{
        const fetchCards = async () =>{
            setLoading(true);
            const cardsItem = await cardAvailableItem;
            setCards(cardsItem);
            setLoading(false);
            setCardsPerPage(16);
            setCurrentPage(1);
        };
        fetchCards();
    }, [cards, cardsPerPage]);
    console.log(cards.length);
    const lastPage = Math.floor(cards.length/cardsPerPage) + 1;
    const goToLeft=()=>{
        if((x === 0)) {
            setX(0);
            setOlderPost("Next");
            setNewerPost("");
        }else if(x===-100){
            setCurrentPage(currentPage - 1);
            setX(x+100);
            setOlderPost("Next");
            setNewerPost("");
        }else{
            setCurrentPage(currentPage - 1);
            setX(x+100);
            setOlderPost("Next");
            setNewerPost("Back");
        }
    };
    
    const goToRight=()=>{
        if ((x=== -100*(lastPage-1))) {
            setX(-100*(lastPage-1));
            setOlderPost("");
            setNewerPost("Back"); 
        }else if((x=== -100*(lastPage-2))){
            setCurrentPage(currentPage + 1);
            setX(x-100);
            setOlderPost("");
            setNewerPost("Back");
        }else{
            setCurrentPage(currentPage + 1);
            setX(x-100);
           setOlderPost("Next");
           setNewerPost("Back");
        }
    }
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard); 
    
    return(
        <div className="NFTMarketPlace pa4 bg-black">
            <div className="slider-items w-100">
                <div className='slide-item'>
                    <CardAvailableList cards = {currentCards} loading ={loading} />
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