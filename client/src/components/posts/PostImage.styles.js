import styled from 'styled-components';

export const ImageWrapper = styled.div`
  height: 18rem;
  width: 100%;
  margin: 1.6rem auto;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.06);

  @media only screen and (min-width: 25em) {
    height: 23rem;
  }
`;

export const Image = styled.img`
  min-height: 100%;
  width: 100%;
  object-fit: cover;
`;
