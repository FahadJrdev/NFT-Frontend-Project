import React from 'react';
import { NavLogo } from '../Navbar/NavbarElements';
import { SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink  } from './SidebarElements';
import { SocialFollowBlack } from '../../../components/SocialFollow';
import "./sidebar.css";

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <img src='icons/close.svg' alt='close' width={30} height={'auto'}></img>
        </Icon>
        <NavLogo to='/NFT-Frontend-Project/'><img src="Images/Menu-logo.png" alt="logo" className='menu-logo'/></NavLogo>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/NFT-Frontend-Project/" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="/NFT-Frontend-Project/nfts" onClick={toggle}>NFTs</SidebarLink>
                <SidebarLink to="/NFT-Frontend-Project/markets" onClick={toggle}>Markets</SidebarLink>
                <SidebarLink to="/NFT-Frontend-Project/work" onClick={toggle}>Work</SidebarLink>
                <SidebarLink to="/NFT-Frontend-Project/about" onClick={toggle}>About</SidebarLink>
            </SidebarMenu>
            <SocialFollowBlack className="pl5"/>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;