import styled from 'styled-components';

export const Burger = styled.button`
  display: block;
  cursor: pointer;
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
`;
