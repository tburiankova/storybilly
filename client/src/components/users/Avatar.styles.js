import styled, { css } from 'styled-components';

export const AvatarWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
  overflow: hidden;

  ${(props) =>
    props.size === 'small' &&
    css`
      width: 3rem;
      height: 3rem;
    `}

  ${(props) =>
    props.size === 'tiny' &&
    css`
      width: 2.4rem;
      height: 2.4rem;
    `}
`;

export const AvatarImage = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
`;
