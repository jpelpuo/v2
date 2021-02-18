import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { navLinks } from '../config';
import { mixins, breakpoint } from '../styles';

const StyledMenu = styled.div`
    display: none;

    @media screen and (${breakpoint.tabletL}){
        display: block;
    }
    
`;

const Bar = styled.div``;

const StyledHamburger = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    align-items: center;
    z-index: 13;
    position: relative;
    transform: ${({ menuOpen }) => menuOpen ? 'translateX(calc((var(--side-nav-width) - 70px) * -1))' : '0'};
    transition: var(--transition);
    
    ${Bar}{
        &:nth-child(1){
            background-color: ${({ theme }) => theme.fontColor};
            height: 0.15rem;
            width: ${({ menuOpen }) => menuOpen ? "1.2rem" : "1.4rem"};
            border-radius: 0.1rem;
            transform: ${({ menuOpen }) => menuOpen ? "translate(9px, 5px) rotate(40deg)" : ""};
            transition: 0.25s linear;
            position: relative;
        }
    
        &:nth-child(2){
            background-color: ${({ theme }) => theme.fontColor};
            height: 0.15rem;
            width: ${({ menuOpen }) => menuOpen ? "100%" : "1.7rem"};
            border-radius: 0.1rem;
            transition: 0.1s linear;
        }
    
        &:nth-child(3){
            background-color: ${({ theme }) => theme.fontColor};
            height: 0.15rem;
            width: ${({ menuOpen }) => menuOpen ? "1.2rem" : "1.4rem"};
            border-radius: 0.1rem;
            transform: ${({ menuOpen }) => menuOpen ? "translate(9px, -5px) rotate(-40deg)" : ""};
            transition: 0.1s linear;
        }
    }
`;

const Nav = styled.nav`
    ${mixins.flexCenter};
    width: 100%;
    flex-flow: column nowrap;
    text-align: center;
    height: 100%;
`;
const ListItem = styled.li`
    position: relative;
    margin: 0 auto;
`;
const NavLink = styled.a`
    ${mixins.link};
    width: 100%;
    padding: 1rem;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
`;

const StyledSideMenu = styled.aside`
    display: none;

    @media screen and (${breakpoint.tabletL}){
        ${mixins.flexCenter};
        display: block;
        width: var(--side-nav-width);
        background-color: ${({ theme }) => theme.backgroundColor};
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        transform: ${({ menuOpen }) => menuOpen ? '0' : 'translateX(var(--side-nav-width))'};
        transition: var(--transition);
        box-shadow: 0 -8px 20px -5px ${({ theme }) => theme.mode === `dark` ? 'var(--dark-bg-shadow)' : 'var(--light-bg-shadow)'};
    }
`;


const Menu = ({ theme }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <StyledMenu>
            <StyledHamburger
                theme={theme}
                menuOpen={menuOpen}
                onClick={toggleMenu}
            >
                <Bar />
                <Bar />
                <Bar />
            </StyledHamburger>
            <StyledSideMenu theme={theme} menuOpen={menuOpen}>
                <Nav>
                    <List>
                        {
                            navLinks.map(({ text, url }, index) => (
                                <ListItem key={index}>
                                    <NavLink href={url}>{text}</NavLink>
                                </ListItem>
                            ))
                        }
                    </List>
                </Nav>
            </StyledSideMenu>
        </StyledMenu>
    );
}

export default withTheme(Menu);