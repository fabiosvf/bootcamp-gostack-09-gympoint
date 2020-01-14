import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 30px;
  width: 100%;

  svg {
    height: 20px;
    width: 20px;
    color: #999;
    margin: 0 10px;
  }

  input[type='text'] {
    border: 0;
    background: transparent;
    height: 100%;
    width: 100%;
    color: #999;
  }
`;
