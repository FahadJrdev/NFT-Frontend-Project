import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { SocialFollowWhite} from "../../../components/SocialFollow";
import "./navbar.css";


const Navbar = ({toggle}) => {
  return (
      <div>
          <Nav>
            <NavbarContainer>
                <NavLogo to='/NFT-Frontend-Project/'><img src="Images/Main-Logo.png" alt="Logo" className='logo'/></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/NFT-Frontend-Project/">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/NFT-Frontend-Project/nfts">NFTs</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/NFT-Frontend-Project/markets">Markets</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/NFT-Frontend-Project/work">Work</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/NFT-Frontend-Project/about">About</NavLinks>
                    </NavItem>
                    <SocialFollowWhite />
                </NavMenu>
            </NavbarContainer>
          </Nav>
      </div>
  );
};

export default Navbar;