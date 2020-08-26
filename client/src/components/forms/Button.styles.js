import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0.8rem 0.4rem 0.8rem;
  outline-color: var(--white);
  border-radius: 2rem;
  color: var(--greyDark);
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.04);
  background: linear-gradient(
    256.65deg,
    #e8ecfc -13.12%,
    #f6fafd 42.26%,
    #dcf5fc 100%
  );

  &:disabled {
    opacity: 0.5;
  }

  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 0.4rem 1.4rem;
      font-size: 1.2rem;
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      padding: 1rem 3rem;
      font-size: 1.3rem;
    `}

    ${(props) =>
    props.center &&
    css`
      display: block;
      margin: 0.8rem auto;
    `}

    ${(props) =>
    props.danger &&
    css`
      background: var(--peach);
      color: var(--white);
    `}
`;
