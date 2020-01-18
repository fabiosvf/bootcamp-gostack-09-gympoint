import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function TextLabel({ label, text }) {
  return (
    <Container>
      <strong>{label}</strong>
      <span>{text}</span>
    </Container>
  );
}

TextLabel.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
};

TextLabel.defaultProps = {
  label: null,
  text: null,
};
