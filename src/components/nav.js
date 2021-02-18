import React, { useEffect, useState } from 'react';
import styled, { withTheme, css } from 'styled-components';
import Toggle from 'react-toggle';
import { themeMode } from '../config';
import { mixins } from '../styles'
import useScrollDirection from '../hooks/useScrollDirection';
import Menu from './side-menu';
import { navLinks } from '../config';


const StyledTopNav = styled.div`
    ${mixins.flexCenter}
    height: var(--nav-height);
    position: fixed;
    top: 0;
    background-color: ${({ theme }) => theme.backgroundColor}};
    transition: var(--transition);
    width: 100%;
    z-index: 11;
    padding: 0 20px;
    flex-direction: row;
    
    ${props =>
        !props.scrolledToTop && props.scrollDirection === `down` && css`
            height: var(--nav-scroll-height);
            box-shadow:  0 2px 10px 7px ${props.theme.mode === `dark` ? `var(--dark-bg-shadow)` : `var(--light-bg-shadow)`};
        `
    }
`;


const StyledNav = styled.nav`
    flex-flow: row nowrap;
    text-align: center;
    height: 100%;
`;

const StyledTopNavLinks = styled.div`
    width: 100%;
    height: 100%;
    // background-color: green;
`;

const StyledListItem = styled.li`
    margin: 0 auto;
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: right;
`;

const StyledNavLink = styled.a`
    ${mixins.link};
    ${mixins.flexCenter};
    width: 100%;
    height: 100%;
    padding: 1rem;
    text-align: right;
`;

const StyledList = styled.ul`
    ${mixins.flexBetween};
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    height: 100%;
`;

const LogoPlaceholder = styled.div`
    width: 20%;
    height: 100%;
    ${mixins.flexCenter};
`;

const DarkModeIcon = styled.span`
    ${mixins.flexCenter};
    ${mixins.iconDimensions};

    &:before {
        content: '🌜️'
    }
`;

const LightModeIcon = styled.span`
    ${mixins.flexCenter};
    ${mixins.iconDimensions};

    &:after {
        content: '🌞️'
    }
`;


const Nav = ({ theme }) => {
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const scrollDir = useScrollDirection('down');

    // If page is scrolled by more than 50 pixels from the top
    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    }


    const toggleTheme = (theme) => {
        theme.setTheme(
            theme.mode === `dark`
                ? themeMode.light
                : themeMode.dark
        )
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolledToTop, scrollDir])


    return (
        <StyledTopNav
            theme={theme}
            scrolledToTop={scrolledToTop}
            scrollDirection={scrollDir}
        >
            <LogoPlaceholder>Jamal Pelpuo</LogoPlaceholder>
            <StyledTopNavLinks>
                <StyledNav>
                    <StyledList>
                        {
                            navLinks.map(({ text, url }, index) => (
                                <StyledListItem key={index}>
                                    <StyledNavLink href={url}>{text}</StyledNavLink>
                                </StyledListItem>
                            ))
                        }
                    </StyledList>
                </StyledNav>
            </StyledTopNavLinks>
            <Menu />
            <Toggle
                defaultChecked={theme.mode === `dark`}
                className='theme-toggler'
                icons={{
                    checked: <DarkModeIcon />,
                    unchecked: <LightModeIcon />
                }}
                onChange={() => toggleTheme(theme)}
            />
        </StyledTopNav>
    );
}

Nav.propTypes = {

}

export default withTheme(Nav);