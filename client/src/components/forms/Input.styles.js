import styled, { css } from 'styled-components';

const SharedStyles = css`
  font-size: 1.5rem;
  font-family: var(--fontP);
  display: block;
  padding: 0.8rem 1.6rem;
  background-color: var(--white);
  border: none;
  outline-color: var(--offWhite);
  width: 100%;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
`;

export const StyledInput = styled.input`
  ${SharedStyles}
  margin: .8rem 0 1.2rem 0;

  ${(props) =>
    props.size === 'small' &&
    css`
      color: var(--greyDark);
      padding: 0.4rem;
      width: 100%;
      font-size: 1.3rem;
      margin: 0.4rem 0 0.8rem 0;

      &::placeholder {
        font-size: 1.2rem;
        color: var(--greyMedium);
      }
    `};
`;

export const TextArea = styled.textarea`
  ${SharedStyles}
`;

export const Label = styled.label`
  font-family: var(--fontP);
  font-size: 1.3rem;

  ${(props) =>
    props.size === 'small' &&
    css`
      color: var(--white);
    `};
`;

export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  color: var(--pink);
  margin-bottom: 0.8rem;
`;
