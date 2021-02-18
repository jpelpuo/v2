import React, { useEffect, useState } from 'react';
import styled, { withTheme, css } from 'styled-components';
import Toggle from 'react-toggle';
import { themeMode } from '../config';
import { mixins } from '../styles'
import useScrollDirection from '../hooks/useScrollDirection';
import Menu from './menu';


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
    
    ${props =>
        !props.scrolledToTop && props.scrollDirection === `down` && css`
            height: var(--nav-scroll-height);
            box-shadow:  0 2px 10px 7px ${props.theme.mode === `dark` ? `var(--dark-bg-shadow)` : `var(--light-bg-shadow)`};
        `
    }
`;

const StyledNav = styled.nav`
    ${mixins.flexBetween}
    width: 100%;
    postion: relative;
    z-index: 12;
`;

const DarkModeIcon = styled.span`
    ${mixins.flexCenter}
    ${mixins.iconDimensions}

    &:before {
        content: '🌜️'
    }
`;

const LightModeIcon = styled.span`
    ${mixins.flexCenter}
    ${mixins.iconDimensions}

    &:after {
        content: '🌞️'
    }
`;

const Nav = ({ theme }) => {
    const [scrolledToTop, setScrolledToTop] = useState(false);
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

        // console.log(scrolledToTop)
        // console.log(scrollDir)

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
            <StyledNav>
                <Toggle
                    defaultChecked={theme.mode === `dark`}
                    className='theme-toggler'
                    icons={{
                        checked: <DarkModeIcon />,
                        unchecked: <LightModeIcon />
                    }}
                    onChange={() => toggleTheme(theme)}
                />
                <div>
                    <Menu />
                </div>
            </StyledNav>
        </StyledTopNav>
    );
}

Nav.propTypes = {

}

export default withTheme(Nav);