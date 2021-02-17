import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import SEO from './seo';
import { useTheme } from '../hooks';
import { GlobalStyle } from '../styles';
import { themes } from '../config'

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
`;

const StyledContentContainer = styled.div``;
const StyledContent = styled.div``;


const MainLayout = ({ children }) => {
    const [theme] = useTheme();

    return (
        <ThemeProvider theme={
            theme.mode === 'dark'
                ? { ...themes.darkTheme, ...theme }
                : { ...themes.lightTheme, ...theme }

        }>
            <>
                <GlobalStyle />
                <MainContainer>
                    <SEO />
                    <StyledContentContainer>
                        <StyledContent>
                            {children}
                        </StyledContent>
                    </StyledContentContainer>
                </MainContainer>
            </>
        </ThemeProvider>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    // location: PropTypes.object.isRequired
}

export default MainLayout;