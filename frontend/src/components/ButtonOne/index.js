import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function ButtonOne({ type, title, confirmed, onClick }) {
  return (
    <Button type={type} onClick={onClick} confirmed={confirmed}>
      <span>{title}</span>
    </Button>
  );
}

ButtonOne.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  confirmed: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonOne.defaultProps = {
  type: null,
  title: null,
  confirmed: false,
  onClick: null,
};
