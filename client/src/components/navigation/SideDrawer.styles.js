import styled, { css } from 'styled-components';

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100vh;
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

  display: flex;
  justify-content: center;

  transform: translateX(
    ${({ state }) => (state === 'entering' || state === 'entered' ? 0 : 150)}%
  );
`;

export const List = styled.ul`
  width: 75%;
  margin-top: 5.6rem;
`;

const SharedStyle = css`
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 400;
  text-decoration: none;
`;

export const ListItem = styled.li`
  ${SharedStyle}
  margin-bottom: 1.6rem;

  a,
  button {
    ${SharedStyle}
  }
`;

export const Divider = styled.div`
  width: 125%;
  height: 2px;
  background-color: var(--whiteTrans);
  margin-bottom: 2.4rem;
`;
