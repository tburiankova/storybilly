import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: 2.4rem;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 20rem;
  margin-bottom: 1.6rem;
  border-radius: 2px;
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media only screen and (min-width: 53.125em) {
    width: 80%;
    height: 25rem;
    margin: 0 auto 2.4rem auto;
  }
  @media only screen and (min-width: 89.75em) {
    width: 70%;
    height: 28rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
