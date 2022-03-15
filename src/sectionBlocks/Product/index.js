import React, {useState, useEffect} from 'react';
import { NFTMarketInfo } from './NFTMarketInfo';
import { ProductCard } from '../../components/CardList/Card';
import ETH from '../../components/ETH';
import './NFTItems.css';


const NFTItems = () => {
  
  const [x,setX] = useState(0);
  const [img,setImg] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);

  const goLeft=()=>{
    (x === 0 ? setX(0):setX(x+100));
  };

  const goRight=()=>{
    (x=== -100*(NFTMarketInfo.length-1)) ? setX(-100*(NFTMarketInfo.length-1)): setX(x-100);
  };
  const paymentGateway = () =>{
    setIsDisplayed(value => !value);
    isDisplayed ? setImg("") : setImg("Images/fox.png");
  };
  useEffect(()=>{
    
    const close = e => {
      if (e.path[0].tagName !== 'BUTTON'){
        setIsDisplayed(false);
        isDisplayed ? setImg("") : setImg("Images/fox.png");
      }
    };
    
    document.body.addEventListener('click',close);
    return () => document.body.removeEventListener('click',close);
  });

  return (
    <div className='pt5 ph3 pb2 bg-black NFTItems'>
      <div className={'ETHpayment'+ (isDisplayed ? ' open' : ' closed')}><ETH /></div>
        {
            NFTMarketInfo.map((item, i) => {
                return (
                  <div key={i} className="NFTItem" style={{transform:`translateX(${x}%)`}}>
                    <ProductCard 
                    key={i} 
                    id={i} 
                    name={item.name} 
                    properties={item.properties} 
                    desc={item.desc}
                    image={item.image}
                    edition={item.edition}
                    sales={item.sales}
                    prevProductName={NFTMarketInfo[i-1] ? NFTMarketInfo[i-1].name : ""}
                    nextProductName={NFTMarketInfo[i+1] ? NFTMarketInfo[i+1].name : ""}
                    goLeft={goLeft}
                    goRight={goRight}
                    paymentGateway={paymentGateway}
                    img={img}
                    />
                  </div>
                );
            })
        }
    </div>
  );
};

export default NFTItems;