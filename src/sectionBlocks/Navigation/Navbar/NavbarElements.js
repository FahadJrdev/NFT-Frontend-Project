import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav `
    background: transparent;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 992px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`;

export const NavLogo = styled(LinkR)
`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    margin-top: 24px;
    font-weight: bold;
    text-decoration: none;

`;

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 992px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;

    }
`;

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 992px){
        display: none;
    }
`;

export const NavItem = styled.li `
    height: 80px;
`;

export const NavLinks = styled(LinkR)
`   
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: "HelveticaNeueLTStdBd", sans-serif;
    font-weight: 100;
    &.active {
        border-bottom: 3px solid #ed1c24;
    }
`;