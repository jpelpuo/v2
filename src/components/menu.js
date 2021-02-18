import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';

const StyledMenu = styled.div`
    display: block;
`;

const Bar = styled.div`
    // transform-origin: 1px;
`;

const StyledHamburger = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    align-items: center;
    
    ${Bar}{
        &:nth-child(1){
            background-color: ${({ theme }) => theme.fontColor};
            height: 0.15rem;
            width: ${({ menuOpen }) => menuOpen ? "1.2rem" : "1.4rem"};
            border-radius: 0.1rem;
            transform: ${({ menuOpen }) => menuOpen ? "translate(9px, 5px) rotate(40deg)" : ""};
            transition: 0.1s linear;
            position: relative;
        }
    
        &:nth-child(2){
            background-color: ${({ theme }) => theme.fontColor};
            height: 0.15rem;
            width: ${({ menuOpen }) => menuOpen ? "100%" : "1.7rem"};
            border-radius: 0.1rem;
            // transform: ${({ menuOpen }) => menuOpen ? "translateX(-50px)" : ""};
            // background: ${({ menuOpen }) => menuOpen ? "transparent" : ""};
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
        </StyledMenu>
    );
}

export default withTheme(Menu);