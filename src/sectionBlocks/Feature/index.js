import React from 'react';
import "./feature.css";
import { cardInfo } from './FeatureInfo';
import { Card } from '../../components/CardList/Card';

const Feature = () => {
  return (
    <div className='grid-wrapper pt5 ph3 pb2 bg-black'>
        {
                cardInfo.map((item, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={i} 
                        title={item.title} 
                        para={item.para} 
                        image={item.image}
                        />
                    )
                })
            }
    </div>
  );
};

export default Feature;