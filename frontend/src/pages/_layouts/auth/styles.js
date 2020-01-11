import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  margin: 0px;
  padding: 30px;
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 1px #666;

  img {
    margin: 15px 0 15px;
  }

  form {
    display: flex;
    flex-direction: column;

    span {
      color: #444;
      align-self: flex-start;
      margin: 0 0 5px;
      font-weight: bold;
    }

    input {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: rgba(9, 9, 9, 0.7);
      margin: 0 0 15px;

      &::placeholder {
        color: #999;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;
