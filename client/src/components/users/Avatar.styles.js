import styled, { css } from 'styled-components';

export const AvatarWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
  overflow: hidden;

  ${(props) =>
    props.tiny &&
    css`
      width: 3rem;
      height: 3rem;
    `}
`;

export const AvatarImage = styled.img`
  width: 100%;
`;
