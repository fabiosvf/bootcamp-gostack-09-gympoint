import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputText } from './styles';

export default function InputTextLabel({ label, placeholder, disabled }) {
  return (
    <Container>
      <span>{label}</span>
      <InputText placeholder={placeholder} disabled={disabled} />
    </Container>
  );
}

InputTextLabel.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

InputTextLabel.defaultProps = {
  label: null,
  placeholder: null,
};
