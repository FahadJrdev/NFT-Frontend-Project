import React from 'react';
import { SocialFollowWhite } from '../../components/SocialFollow';
import "./footer.css";

const Footer = () => {
  return (
      <div className='footer flex flex-column items-center justify-between bg-black white'>
          <h1 className='pb4'>DROP ME A MESSAGE FOR ANY COLLABORATIONS OR COMMISSIONS.</h1>
          < SocialFollowWhite/>
          <p className='pt4'>Copyright © 2022 PopBelly. All rights reserved.</p>
      </div>
  );
};

export default Footer;