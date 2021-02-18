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
}

export default mixins;