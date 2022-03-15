import React from "react";
import './SocialFollow.css';

export const SocialFollowWhite = () => {
  return (
    <div className="social-container">
      <a className='social-icon' href="https://www.facebook.com"><img src="./icons/facebook.svg" alt="facebook" width={20} height={'auto'}/></a>
      <a className='social-icon' href="https://www.facebook.com"><img src="./icons/instagram.svg" alt="instagram" width={20} height={'auto'} /></a>
      <a className='social-icon' href="https://www.facebook.com"><img src="./icons/twitter.svg" alt="twitter" width={20} height={'auto'}/></a>
      <a className='social-icon' href="https://www.facebook.com"><img src="./icons/whatsapp.svg" alt="whatsapp" width={20} height={'auto'}/></a>
      <a className='social-icon' href="https://www.facebook.com"><img src="./icons/linkedin.svg" alt="linkedin" width={20} height={'auto'}/></a>
    </div>
  );
};

export const SocialFollowBlack = () => {
  return (
    <div className="social-container">
      <a className='social-icon' href="https://www.facebook.com"><img src="./icons/facebook-black.svg" alt="facebook" width={20} height={'auto'}/></a>
      <a className='social-icon' href="https://www.facebook.com"><img src="./icons/instagram-black.svg" alt="instagram" width={20} height={'auto'} /></a>
      <a className='social-icon' href="https://www.facebook.com"><img src="./icons/twitter-black.svg" alt="twitter" width={20} height={'auto'}/></a>
      <a className='social-icon' href="https://www.facebook.com"><img src="./icons/whatsapp-black.svg" alt="whatsapp" width={20} height={'auto'}/></a>
      <a className='social-icon' href="https://www.facebook.com"><img src="./icons/linkedin-black.svg" alt="linkedin" width={20} height={'auto'}/></a>
    </div>
  );
};
