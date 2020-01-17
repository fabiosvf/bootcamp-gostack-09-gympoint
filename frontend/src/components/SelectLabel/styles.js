import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */

  span {
    font-weight: bold;
    color: #444;
  }
`;

export const SelectStyled = styled(Select).attrs(props => ({
  placeholder: props.placeholder,
  options: props.options,
  isDisabled: props.disabled,
}))`
  margin-top: 5px;

  options: {
    width: 100;
  }
`;
