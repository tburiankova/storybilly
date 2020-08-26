import styled, { css } from 'styled-components';

export const Cta = styled.div`
  width: 90%;
  margin: 2.4rem auto 0 auto;
  padding: 3.2rem 1.6rem;
  background: linear-gradient(158.22deg, #f7fdff 33.38%, #ffffff 93.89%);
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.06);
  border-radius: 4rem;
`;

export const Heading = styled.h1`
  font-size: 3.2rem;
  line-height: 120%;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: var(--greyDarkest);
  margin-bottom: 1.6rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.6rem 0;
`;

export const Switch = styled.div`
  display: flex;
  justify-content: center;
`;

export const SwitchText = styled.p`
  font-size: 1.2rem;
  display: inline-block;
  margin-bottom: 0;
`;

export const SwitchButton = styled.button`
  font-weight: 700;
  color: var(--lilacDark);
  margin: 0 0.3rem;
`;
