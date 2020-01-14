import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  padding: 0 20px 0 15px;
  height: 30px;
  background: #ee4d64;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  transition: background 0.2s;

  span {
    margin-left: 5px;
  }

  &:hover {
    background: ${darken(0.03, '#ee4d64')};
  }
`;
