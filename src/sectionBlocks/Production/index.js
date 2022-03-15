import React from 'react';
import Carousel from 'react-elastic-carousel';
import { cardNFtItem } from './ProductionInfo';
import { CardNFT } from '../../components/CardList/Card';
import "./production.css";

const Production = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
    ];
  return (
    <div className='pt3 pb5 bg-black production'>
        <h2 className='fw1 white f2 pb3 pt3 mt4 ml3 '>MAIN TITLE</h2>
        <Carousel breakPoints={breakPoints}>
            {
                cardNFtItem.map((item, i) => {
                    return (
                        <CardNFT
                        key={i} 
                        id={i} 
                        name={item.name} 
                        sales={item.sales} 
                        image={item.image}
                        />
                    )
                })
            }
         </Carousel>
    </div>
  );
};

export default Production;