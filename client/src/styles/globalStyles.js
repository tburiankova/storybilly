import styled, { createGlobalStyle } from 'styled-components';

import PlayfairDisplayReg from './fonts/playfair-display-v21-latin-regular.woff';
import PlayfairDisplay700 from './fonts/playfair-display-v21-latin-700.woff';
import PlayfairDisplay800 from './fonts/playfair-display-v21-latin-800.woff';
import LatoReg from './fonts/lato-v16-latin-regular.woff';
import LatoIt from './fonts/lato-v16-latin-italic.woff';
import Lato700 from './fonts/lato-v16-latin-700.woff';
import confetti from '../assets/confetti-2x.png';

// BREAKPOINTS
// 400px = 25em
// 550px = 34.375em
// 700px = 43.75em
// 850px = 53.125em
// 1000px = 62.5em
// 1300px = 81.25em
// 1500px = 93.75em

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
        --greyDarkest: #2D2727;
        --greyDark: #434343;
        --greyMedium: #949494;
        --greyLight: #DADADA;
        --white: #ffffff;
        --offWhite: #F3F8FF;
        --mint: #CCF8F2;
        --mintLight: #E1FDF9;
        --lilac: #BCC1F7;
        --lilacDark: #696CC5;
        --peach: #F8A5A5;
        --pink: #EC95FE;
        --orange: orangered;
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

        @media only screen and (min-width: 53.125em) {
            font-size: 70%;
        }
        @media only screen and (min-width: 81.25em) {
            font-size: 75%;
        }
    }

    body {
        background-image: url(${confetti});
        background-repeat: repeat;
        background-size: 350px 350px;
        
        @media only screen and (min-width: 53.125em) {
            background-size: 500px 500px;
        }
    }

    h1, h2, h3, h4 {
        font-family: var(--fontH);
        font-weight: 700;
        margin-bottom: 1.6rem;
    }

    h1 {
        font-size: 2.4rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.9rem;
    }

    h4 {
        font-size: 1.8rem;
    }

    p {
        line-height: 163%;
    }

    p, li, span {
        font-family: var(--fontP);
        font-weight: 400;
        font-size: 1.5rem;
    }

    ul {
        list-style: none;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

  a {
    text-decoration: none;
    color: var(--lilacDark);

    &:hover {
      color: var(--lilac);
    }
  }

`;

export const MainContainer = styled.main`
  width: 100%;
  background-color: transparent;

  @media only screen and (min-width: 43.75em) {
    width: 90%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 81.25em) {
    width: 85%;
  }
  @media only screen and (min-width: 93.75em) {
    width: 80%;
  }
`;
