import React from 'react';
import PropTypes from 'prop-types';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { Container, InputMaskStyled } from './styles';

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false,
};

export default function InputMaskNumberLabel({
  maskOptions,
  label,
  placeholder,
  disabled,
  value,
}) {
  const numberMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return (
    <Container>
      <span>{label}</span>
      <InputMaskStyled
        mask={numberMask}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
      />
    </Container>
  );
}

InputMaskNumberLabel.propTypes = {
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.bool,
    thousandsSeparatorSymbol: PropTypes.string,
    allowDecimal: PropTypes.bool,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    integerLimit: PropTypes.number,
    requireDecimal: PropTypes.bool,
    allowNegative: PropTypes.bool,
    allowLeadingZeroes: PropTypes.bool,
  }),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
};

InputMaskNumberLabel.defaultProps = {
  maskOptions: {},
  label: null,
  placeholder: null,
  disabled: false,
  value: null,
};
