import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;

  @media only screen and (min-width: 34.375em) {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 62.5em) {
    grid-column-gap: 1.6rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 93.75em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
