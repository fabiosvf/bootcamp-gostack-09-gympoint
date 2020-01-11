import React from 'react';

import { Container } from './styles';

export default function Register({ history }) {
  return (
    <Container>
      Student Register
      <br />
      <button onClick={() => history.goBack()}>Voltar</button>
    </Container>
  );
}
