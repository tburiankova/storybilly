import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 3.2rem 2.4rem;
  margin: 3.2rem 0.8rem;
  background-color: var(--offWhite);
`;

export const Flexbox = styled.div`
  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const NotFound = styled.div`
  background-color: var(--offWhite);
  margin: 3.2rem auto;
  max-width: 80%;
  padding: 2rem 3.5rem;
  box-shadow: 0px 50px 80px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5rem;
    color: var(--greyDark);
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

  ${(props) =>
    props.small &&
    css`
      font-size: 1.2rem;
      padding: 1rem 1.4rem;
      margin: 0.8rem 0;
    `}
`;
