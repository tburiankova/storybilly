import styled from 'styled-components';

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 100;
  width: 70%;
  background: linear-gradient(
    164.53deg,
    var(--lilacDark) -27.7%,
    var(--lilac) 79.22%
  );
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  border-radius: 3rem 0 0 3rem;

  transform: translateX(
    ${({ state }) => (state === 'entering' || state === 'entered' ? 0 : 100)}%
  );
`;
