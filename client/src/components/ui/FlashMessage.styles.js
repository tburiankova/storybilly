import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 5rem;
  left: 50%;
  padding: 1.6rem 2.4rem;
  transform: translate(-50%, 0);
  background-color: var(--mintLight);
  box-shadow: 0px 30px 50px rgba(236, 149, 254, 0.3);
  border-radius: 2px;
  z-index: 101;

  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.state === 'entered' || props.state === 'entering'
      ? css`
          transform: translate(-50%, 0);
          opacity: 1;
          pointer-events: all;
        `
      : css`
          transform: translate(-50%, -3rem);
          opacity: 0;
          pointer-events: none;
        `}
`;

export const Message = styled.p`
  color: var(--greyDarkest);
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 0;
`;
