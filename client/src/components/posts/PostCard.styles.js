import { Link } from 'react-router-dom';
import styled from 'styled-components';

const colors = [
  '#E8ECFC',
  '#ECFBFF',
  '#F6F0F0',
  '#F7FDFF',
  '#FFF6E5',
  '#DCF5FC',
  '#E9D7ED',
  '#EAEAEA',
  'none',
];

export const CardWrapper = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const Card = styled.div`
  width: 90%;
  margin: 2.4rem auto 0 auto;
  padding: 3.2rem 1.6rem;
  background: linear-gradient(
    158.22deg,
    ${(props) => colors[props.number]} 33.38%,
    #ffffff 83.89%
  );
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--black);
`;

export const Author = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--greyMedium);
  font-size: 1.5rem;
`;

export const Name = styled.span`
  color: var(--lilacDark);
  margin-left: auto;
  margin-right: 0.8rem;
`;
