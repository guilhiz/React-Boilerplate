import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  > img {
    display: block;
    height: 100px;
  }
`;
