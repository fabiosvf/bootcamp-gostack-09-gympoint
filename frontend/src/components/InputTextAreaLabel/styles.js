import styled from 'styled-components';

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

export const InputTextArea = styled.textarea.attrs(props => ({
  placeholder: props.placeholder,
  disabled: props.disabled,
  rows: props.rows,
  defaultValue: props.defaultValue,
}))`
  border: 1px solid #ddd;
  border-radius: 4px;
  background: ${props => (props.disabled ? '#f5f5f5' : 'transparent')};
  width: 100%;
  color: #999;
  padding: 10px;
  margin-top: 5px;
  resize: none;
  font-size: 16px;
  line-height: 25px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'text')};
`;
