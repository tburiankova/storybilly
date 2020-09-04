import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

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

export const Card = styled(Link)`
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

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 62.5em) {
    width: 100%;
  }

  ${(props) =>
    props.main &&
    css`
      @media only screen and (min-width: 62.5em) {
        &:first-child {
          grid-column: 1 / span 2;

          .sc-fzoXzr {
            margin-top: -20%;
          }
        }
      }
    `}
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--black);
  text-transform: capitalize;
`;

export const Author = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--greyMedium);
  font-size: 1.5rem;
  font-family: var(--fontP);
`;

export const Name = styled.span`
  color: var(--lilacDark);
  margin-left: auto;
  margin-right: 0.8rem;
`;
