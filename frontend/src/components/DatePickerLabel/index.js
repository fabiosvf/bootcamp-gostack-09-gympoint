import React from 'react';
import PropTypes from 'prop-types';

import { Container, DatePickerStyled } from './styles';

export default function DatePickerLabel({
  label,
  placeholder,
  disabled,
  selected,
  onChange,
}) {
  return (
    <Container>
      <span>{label}</span>
      <DatePickerStyled
        placeholder={placeholder}
        disabled={disabled}
        selected={selected}
        onChange={onChange}
      />
    </Container>
  );
}

DatePickerLabel.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

DatePickerLabel.defaultProps = {
  label: null,
  placeholder: null,
  disabled: false,
  selected: null,
  onChange: null,
};
