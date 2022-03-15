import React from 'react';
import Button from '../../components/Button';
import './newsLetter.css';
import { BackgroundOverlay } from './NewsLetterElement';

const NewsLetter = () => {
  return (
    <BackgroundOverlay>
        <div className='newsLetter pv5'>    
            <h1 className='white tc'>INTERESTED IN A WEEKLY NEWSLETTER OF MY UPCOMING DROPS AND SOME DELICIOUS CURATED ARTWORKS FROM FELLOW ARTISTS?</h1>
            <Button text={"Join My Newsletter"} />
        </div>
    </BackgroundOverlay>
  );
};

export default NewsLetter;