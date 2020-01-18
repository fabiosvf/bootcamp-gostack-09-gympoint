import styled from 'styled-components';

import InputMask from 'react-text-mask';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    font-weight: bold;
    color: #444;
  }
`;

export const InputMaskStyled = styled(InputMask).attrs(props => ({
  mask: props.mask,
  placeholder: props.placeholder,
  disabled: props.disabled,
}))`
  border: 1px solid #ddd;
  border-radius: 4px;
  background: ${props => (props.disabled ? '#f5f5f5' : 'transparent')};
  height: 35px;
  width: 100%;
  color: #999;
  padding: 10px;
  margin-top: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'text')};
`;
