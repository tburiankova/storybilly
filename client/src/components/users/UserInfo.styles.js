import styled from 'styled-components';

export const UserContainer = styled.div`
  width: 100%;
  margin: 1.6rem auto;
  padding: 3.2rem 1.6rem;
  background-color: var(--whiteTrans);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 30px 50px rgba(236, 149, 254, 0.1);
`;

export const Info = styled.p`
  margin-top: 2.4rem;
  color: var(--greyMedium);
  font-size: 1.3rem;

  &:nth-child(2n) {
    margin-top: 0;
  }
`;
