import styled from 'styled-components';

export const Bar = styled.div`
  padding: 1.6rem 3.2rem;
  background-color: var(--whiteTrans);
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.08);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const LogoImg = styled.img`
  width: 6.5rem;
  height: 6.5rem;
`;
