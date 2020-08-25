import styled, { keyframes, css } from 'styled-components';

const colors = keyframes`
    0% {
        stroke: var(--lilac);
    }
    25% {
        stroke: var(--lilacDark);
    }
    50% {
        stroke: var(--pink);
    }
    75% {
        stroke: var(--peach);
    }
    100% {
        stroke: var(--mint);
    }
`;

const rotator = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(270deg);
    }
`;

const dash = keyframes`
    0% {
        stroke-dashoffset: 187;
    }
    50% {
        stroke-dashoffset: 46.75;
        transform: rotate(135deg);
    }
    100% {
        stroke-dashoffset: 187;
        transform: rotate(450deg);
    }
`;

export const SpinnerWrapper = styled.div`
  margin: 3.2rem auto;

  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const SpinnerSvg = styled.svg`
  animation: ${rotator} 1.4s linear infinite;
`;

export const SpinnerPath = styled.circle`
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} 1.4s ease-in-out infinite,
    ${colors} 5.6s ease-in-out infinite;
`;
