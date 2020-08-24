import styled, { createGlobalStyle, css } from 'styled-components';

import PlayfairDisplayReg from './fonts/playfair-display-v21-latin-regular.woff';
import PlayfairDisplay700 from './fonts/playfair-display-v21-latin-700.woff';
import PlayfairDisplay800 from './fonts/playfair-display-v21-latin-800.woff';
import LatoReg from './fonts/lato-v16-latin-regular.woff';
import LatoIt from './fonts/lato-v16-latin-italic.woff';
import Lato700 from './fonts/lato-v16-latin-700.woff';
import confetti from '../assets/confetti-2x.png';

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Playfair Display';
        src: local('Playfair Display'), local('PlayfairDisplay'),
            url(${PlayfairDisplayReg}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Playfair Display';
        src: local('Playfair Display'), local('PlayfairDisplay'),
            url(${PlayfairDisplay700}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Playfair Display';
        src: local('Playfair Display'), local('PlayfairDisplay'),
            url(${PlayfairDisplay800}) format('woff');
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'Lato';
        src: local('Lato'),
            url(${LatoReg}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Lato';
        src: local('Lato'),
            url(${LatoIt}) format('woff');
        font-weight: 400;
        font-style: italic;
    }

    @font-face {
        font-family: 'Lato';
        src: local('Lato'),
            url(${Lato700}) format('woff');
        font-weight: 700;
        font-style: normal;
    }


    :root {
        --fontH: 'Playfair Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        --fontP: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        --black: #000000;
        --white: #ffffff;
        --mint: #CCF8F2;
        --lilac: #BCC1F7;
        --lilacDark: #696CC5;
        --whiteTrans: rgba(255, 255, 255, 0.7);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        background-image: url(${confetti});
        background-repeat: repeat;
        background-size: 500px 500px;
    }

    h1, h2, h3, h4 {
        font-family: var(--fontH);
        font-weight: 700;
    }

    p, li {
        font-family: var(--fontP);
        font-weight: 400;
    }

    ul {
        list-style: none;
    }

    button {
        background: none;
        border: none;

    }

`;
