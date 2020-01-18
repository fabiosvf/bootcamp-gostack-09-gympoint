import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputTextArea } from './styles';

export default function InputTextAreaLabel({
  label,
  placeholder,
  disabled,
  rows,
  children,
}) {
  return (
    <Container>
      <span>{label}</span>
      <InputTextArea placeholder={placeholder} disabled={disabled} rows={rows}>
        {children}
      </InputTextArea>
    </Container>
  );
}

InputTextAreaLabel.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  children: PropTypes.string,
};

InputTextAreaLabel.defaultProps = {
  label: null,
  placeholder: null,
  disabled: false,
  rows: 0,
  children: null,
};
