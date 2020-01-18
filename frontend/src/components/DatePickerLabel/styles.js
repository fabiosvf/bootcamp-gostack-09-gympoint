import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';

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

export const DatePickerStyled = styled(DatePicker).attrs(props => ({
  placeholderText: props.placeholder,
  disabled: props.disabled,
  dateFormat: 'dd/MM/yyyy',
  locale: pt,
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

  > .datePicker {
    background: red;
  }
`;
