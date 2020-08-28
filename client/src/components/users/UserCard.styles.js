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

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;

  background: linear-gradient(
    158.22deg,
    ${(props) => colors[props.number]} 33.38%,
    #ffffff 83.89%
  );
  box-shadow: 0px 30px 50px rgba(204, 248, 242, 0.5);
  border-radius: 2px;
`;

export const Text = styled.p`
  margin: 0.8rem 0;
  margin-bottom: 0;

  ${(props) =>
    props.light &&
    css`
      color: var(--greyMedium);
      font-size: 1.15rem;
    `}
`;
