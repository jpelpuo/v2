import { createGlobalStyle, css } from 'styled-components';
import 'react-toggle/style.css'

const GlobalStyle = createGlobalStyle`
    :root {
        --trout: #485156;
        --white: #ffffff;

        --dark-bg-color: #1b262c;
        --dark-bg-font-color: #bbe1fa;
        --dark-bg-accent-color: #3282b8;
        --dark-bg-shadow: rgba(21, 32, 38, 0.7);

        --light-bg-color: #ffffff;
        --light-bg-font-color: #333333;
        --light-bg-shadow: rgba(205, 208, 209, 0.7);

        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        --nav-height: 100px;
        --nav-scroll-height: 70px;

        --side-nav-width: min(70vw, 400px);

    }

    html {
        box-sizing: border-box;
        width: 100%;
    }

    * {
        box-sizing: inherit;
    }

    body {
        ${({ theme }) => css`
            background-color: ${theme.backgroundColor};
            color: ${theme.fontColor}
        `};
        transition: var(--transition);
        padding: 0;
        margin: 0;
    }

    .theme-toggler.react-toggle--checked .react-toggle-track {
        background-color: var(--trout);
    }

    .theme-toggler.react-toggle--unchecked .react-toggle-track {
        background-color: var(--trout); 
    }

    .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
        background-color: var(--trout); 
      }

    .react-toggle-thumb {
        background-color: ${({ theme }) => theme.accentColor}
    }

    .react-toggle--checked .react-toggle-thumb {
        border-color: var(--trout);
    }
`

export default GlobalStyle;