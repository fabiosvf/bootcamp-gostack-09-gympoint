import React from 'react';

import { Container } from './styles';

export default function Update({ history }) {
  return (
    <Container>
      Enrollment Update
      <br />
      <button onClick={() => history.goBack()}>Voltar</button>
    </Container>
  );
}
