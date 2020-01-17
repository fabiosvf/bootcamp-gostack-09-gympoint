import React from 'react';
import PropTypes from 'prop-types';

import { Container, SelectStyled } from './styles';

export default function SelectLabel({ label, options, placeholder, disabled }) {
  return (
    <Container>
      <span>{label}</span>
      <SelectStyled
        options={options}
        placeholder={placeholder}
        disabled={disabled}
      />
    </Container>
  );
}

SelectLabel.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    })
  ),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

SelectLabel.defaultProps = {
  label: null,
  options: {},
  placeholder: null,
  disabled: false,
};
