import React from 'react';

import { Container } from './styles';

export default function Register({ history }) {
  return (
    <Container>
      Plan Register
      <br />
      <button onClick={() => history.goBack()}>Voltar</button>
    </Container>
  );
}