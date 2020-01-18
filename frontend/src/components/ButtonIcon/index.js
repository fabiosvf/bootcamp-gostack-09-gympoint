import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function ButtonIcon({
  icon: Icon,
  type,
  title,
  confirmed,
  onClick,
}) {
  return (
    <Button type={type} onClick={onClick} confirmed={confirmed}>
      <Icon size={16} color="#fff" />
      <span>{title}</span>
    </Button>
  );
}

ButtonIcon.propTypes = {
  icon: PropTypes.func,
  type: PropTypes.string,
  title: PropTypes.string,
  confirmed: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  icon: null,
  type: null,
  title: null,
  confirmed: false,
  onClick: null,
};
