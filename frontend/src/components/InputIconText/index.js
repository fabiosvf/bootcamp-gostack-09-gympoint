import React from 'react';

import { Container } from './styles';

export default function InputIconText({ icon: Icon, placeholder }) {
  return (
    <Container>
      <Icon />
      <input type="text" placeholder={placeholder} />
    </Container>
  );
}
