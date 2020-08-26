import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
`;

export const Name = styled(Link)`
  font-size: 1.2rem;
  color: var(--lilacDark);
  font-family: var(--fontP);
`;

export const DateCreated = styled.p`
  font-size: 1.2rem;
  color: var(--greyMedium);
  margin-top: 0.6rem;
`;

export const Divider = styled.div`
  background-color: var(--greyLight);
  width: 1px;
  height: 18px;
  margin: 0 1rem;
`;
