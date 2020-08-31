import styled, { css } from 'styled-components';

export const UserContainer = styled.div`
  width: 90%;
  margin: 1.6rem auto;
  padding: 3.2rem 1.6rem;
  background-color: var(--whiteTrans);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 30px 50px rgba(236, 149, 254, 0.1);
`;

export const FollowersInfo = styled.p`
  margin-top: 2.4rem;
  margin-bottom: 0;
  color: var(--greyMedium);
  font-size: 1.3rem;
`;
