import {css} from 'styled-components';

const mixins = {
    flexCenter: css`
        display: flex;
        align-items: center;
        justify-content: center;
    `,

    flexBetween: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,

    iconDimensions: css`
        width: 10px;
        height: 10px;
        position: relative;
    `,

    link: css`
        display: inline-block;
        text-decoration: none;
        color: inherit;
        

        &:active,
        &:hover,
        &:focus {
            background-color: red;
        }
    `,
}

export default mixins;