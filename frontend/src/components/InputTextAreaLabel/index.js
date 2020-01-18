import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputTextArea } from './styles';

export default function InputTextAreaLabel({
  label,
  placeholder,
  disabled,
  rows,
  defaultValue,
}) {
  return (
    <Container>
      <span>{label}</span>
      <InputTextArea
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        defaultValue={defaultValue}
      />
    </Container>
  );
}

InputTextAreaLabel.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  defaultValue: PropTypes.string,
};

InputTextAreaLabel.defaultProps = {
  label: null,
  placeholder: null,
  disabled: false,
  rows: 0,
  defaultValue: null,
};
