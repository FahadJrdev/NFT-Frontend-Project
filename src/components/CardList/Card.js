import React from 'react';
import './Card.css';
import Button from '../Button';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons";

export const Card = ({title, para, image}) => {
    return(
        <div className="card dib w-100-ns">
            <img src={`Images/${image}`} alt="NFTcard" />
            <div className='desc white pv3 pl2'>
                <h3 className='fw3'>{title}</h3>
                <p className='fw5'>{para}</p>
            </div>
        </div>
    );
};
export const CardNFT = ({name, sales, image}) => {
    return(
        <div className="cardNFT dib tc pa3 bg-white ba bw2">
            <div className='image-box-nft'>
                <img src={`Images/${image}`} alt="NFTcard"/>
            </div>
            <div className='desc pv2 black'>
                <p className='f6 fw6'>{name}</p>
                <p className='f6'>{sales}</p>
            </div>
        </div>
    );
};
export const CardAvailable = ({properties, name, saled, image}) => {
    return(
        <div className="cardAvailable dib tc bg-black pa1">
            <div className='image-box-available'>
                <img src={`Images/${image}`} alt="NFTcard" />
            </div>
            <div className='desc white'>
                <p className='pv2 f5'>{properties} 
                <br /><span className='f5'>{name}</span></p>
                <p className='pv2 f5'>{saled}</p>
            </div>
        </div>
    );
};

export const ProductCard = ({name, properties, desc, edition, sales, image, prevProductName, nextProductName, goLeft, goRight, paymentGateway, img}) => {
    return(
        <div className='productCard tc bg-black white pv5'>
            <div className="card-header w-100 pa3">
                <h1>{name}</h1>
                <p> {properties} </p>
            </div>
            <div className="card-body pv4">
                <div className="card-img w-50">
                    <img src={`Images/${image}`} alt="product" className='center'/>
                </div>
                <div className="card-desc w-50 tl">
                    <div className="desc-header"><h2>{name}</h2></div>
                    <div className="desc pv4"><p>{desc}</p></div>
                    <div className="desc-edition pb4"><p>{edition}</p></div>
                    <div className="desc-sales pb5"><p>{sales}</p></div>
                    <div className="buybtn">
                        <div onClick={paymentGateway} className='clickBuyBtn'>
                            <Button img={img} text={"Buy NFT"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="direction">
                <IconContext.Provider value={{size: "2rem", color: "white"}}>
                    <div onClick={goLeft} className="left"><FaAngleLeft/><p>{prevProductName}</p></div>
                    <div onClick={goRight} className="right"><p>{nextProductName}</p><FaAngleRight /></div>
                </IconContext.Provider>
            </div>
        </div>
    );
};
