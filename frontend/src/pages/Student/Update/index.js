import React from 'react';

import { Container } from './styles';

export default function Update({ history }) {
  return (
    <Container>
      Student Update
      <br />
      <button onClick={() => history.goBack()}>Voltar</button>
    </Container>
  );
}
