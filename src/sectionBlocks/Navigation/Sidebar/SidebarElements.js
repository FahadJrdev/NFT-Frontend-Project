import styled from 'styled-components';
// import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div `
    color: #000;
`;

export const SidebarMenu = styled.ul `
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 992px){
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkR)
`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    padding-left: 1.7rem;

    &:hover {
        color: #ed1c24;
        transition: 0.2s ease-in-out;
    }
`;