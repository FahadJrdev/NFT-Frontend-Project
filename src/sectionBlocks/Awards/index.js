import React from 'react';
import Carousel from 'react-elastic-carousel';
import "./award.css"

const Award = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 450, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 },
    ];
  return (
    <div className='bg-white black award'>
        <h2 className='fw1 black f2 pb4 ml3 tc pt1'>FEATURES, PRESS & AWARDS</h2>
        <Carousel breakPoints={breakPoints}>
            <img src="Images/13.jpg" alt="adobe" />
            <img src="Images/14.jpg" alt="Business insider" />
            <img src="Images/15.jpg" alt="Forbes" />
            <img src="Images/16.jpg" alt="CNBC" />
            <img src="Images/17.jpg" alt="Behance" />
            <img src="Images/18.jpg" alt="AD" />
            <img src="Images/13.jpg" alt="adobe" />
            <img src="Images/14.jpg" alt="Business insider" />
            <img src="Images/15.jpg" alt="Forbes" />
            <img src="Images/16.jpg" alt="CNBC" />
            <img src="Images/17.jpg" alt="Behance" />
            <img src="Images/18.jpg" alt="AD" />
         </Carousel>
    </div>
  );
};

export default Award;