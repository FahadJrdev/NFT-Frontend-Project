import React from 'react';
import {CardAvailable} from "../../components/CardList/Card";

const CardAvailableList = ({cards, loading}) => {
    if(loading){
        return <h1>Loading ....</h1>;
    }
    return (
            <div className='grid-wrapper-card-gallery' style={{minWidth: `100%`}}>
                {cards.map((item, i) => (
                <CardAvailable 
                image={item.image}
                key={i} 
                id={i} 
                properties={item.properties} 
                name={item.name} 
                saled={item.saled} 
                />
            ))}
            </div>
    );
};

export default CardAvailableList;