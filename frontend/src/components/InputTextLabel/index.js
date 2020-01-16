import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function InputTextLabel({ label, placeholder }) {
  return (
    <Container>
      <span>{label}</span>
      <input type="text" placeholder={placeholder} />
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
