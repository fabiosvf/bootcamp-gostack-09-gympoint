import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button.attrs(props => ({
  type: props.type,
}))`
  display: flex;
  padding: 0 20px 0 15px;
  height: 40px;
  background: ${props => (props.confirmed ? '#ee4d64' : '#ccc')};
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  justify-content: center;
  transition: background 0.2s;

  span {
    color: #fff;
  }

  &:hover {
    background: ${props => darken(0.03, props.confirmed ? '#ee4d64' : '#ccc')};
  }
`;
