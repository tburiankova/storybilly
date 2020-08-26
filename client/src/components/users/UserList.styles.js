import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-items: center;
`;
