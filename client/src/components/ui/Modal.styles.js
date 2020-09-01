import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 101;
  padding: 3.2rem;
  width: 80%;
  background-color: var(--white);
  box-shadow: 0px 30px 50px rgba(204, 248, 242, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4rem;
  transition: all 0.5s ease-in-out;

  @media only screen and (min-width: 53.125em) {
    width: 35%;
  }

  @media only screen and (min-width: 53.125em) {
    width: 30%;
  }

  ${(props) =>
    props.state === 'entered' || props.state === 'entering'
      ? css`
          transform: translate(-50%, -50%);
          opacity: 1;
          pointer-events: all;
        `
      : css`
          transform: translate(-50%, -70%);
          opacity: 0;
          pointer-events: none;
        `}
`;

export const Message = styled.p`
  color: var(--greyMedium);
  font-size: 1.4rem;
  text-align: center;
`;
