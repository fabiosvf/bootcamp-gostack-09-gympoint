import React from 'react';

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
