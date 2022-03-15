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
        <NavLogo to='/'><img src="Images/Menu-logo.png" alt="logo" className='menu-logo'/></NavLogo>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="/nfts" onClick={toggle}>NFTs</SidebarLink>
                <SidebarLink to="/markets" onClick={toggle}>Markets</SidebarLink>
                <SidebarLink to="/work" onClick={toggle}>Work</SidebarLink>
                <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
            </SidebarMenu>
            <SocialFollowBlack className="pl5"/>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;