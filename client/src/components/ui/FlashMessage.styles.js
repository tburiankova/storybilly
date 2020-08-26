import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 5rem;
  left: 50%;
  padding: 1.6rem 2.4rem;
  transform: translateX(-50%);
  background-color: var(--mintLight);
  box-shadow: 0px 30px 50px rgba(236, 149, 254, 0.3);
  border-radius: 2px;
  z-index: 101;
`;

export const Message = styled.p`
  color: var(--greyDarkest);
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 0;
`;
