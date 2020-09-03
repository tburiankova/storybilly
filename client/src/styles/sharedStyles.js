import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem 2.4rem;
  margin: 1.6rem auto;
  background-color: var(--offWhite);

  ${(props) =>
    props.full &&
    css`
      padding: 3.2rem 0;

      @media only screen and (min-width: 62.5em) {
        padding: 3.2rem 2.4rem;
      }
    `}

  ${(props) =>
    props.trans &&
    css`
      background-color: var(--whiteTrans);
    `}

  ${(props) =>
    props.centerCol &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

export const Flexbox = styled.div`
  display: flex;
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
      align-items: center;
    `}

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
`;

export const NotFound = styled.div`
  background-color: var(--offWhite);
  margin: 3.2rem auto;
  max-width: 90%;
  padding: 2rem 3.5rem;
  box-shadow: 0px 50px 80px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 1.5rem;
    color: var(--greyDark);
  }

  @media only screen and (min-width: 43.75em) {
    max-width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  font-family: var(--fontP);
  font-size: 1.3rem;
  background-color: var(--white);
  padding: 1.2rem 1.8rem;
  margin: 1.6rem 0;
  display: inline-block;
  box-shadow: 0px 50px 80px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
  }

  ${(props) =>
    props.small &&
    css`
      font-size: 1.2rem;
      padding: 1rem 1.4rem;
      margin: 0.8rem 0;
    `}
`;

export const Label = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  color: var(--lilacDark);
  font-family: var(--fontP);

  padding: 2.4rem 5.6rem;
  display: inline-block;
  max-width: 70%;
  box-shadow: 0px 30px 50px rgba(204, 248, 242, 0.5);
`;
