import React from 'react';
import './button.css';

const Button = ({text, img}) => {
    return (  
        <>
            <button type='button' className='btn-component flex items-center'><img src={img} alt="" width={20} height={"auto"} /> {text}</button>
        </>  
    );
};

export default Button;