import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Burger = styled.button`
  display: block;
  cursor: pointer;

  @media only screen and (min-width: 53.125em) {
    display: none;
  }
`;

export const Line = styled.span`
  width: 5rem;
  height: 0.5rem;
  background-color: var(--black);
  display: block;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export const List = styled.ul`
  display: none;

  @media only screen and (min-width: 53.125em) {
    display: flex;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 1.6rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: var(--lilacDark);
  font-size: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    color: var(--lilac);
  }
`;
