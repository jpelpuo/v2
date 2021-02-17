import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.fontColor};
        transition: background-color 0.2s linear;
    }
`

export default GlobalStyle;