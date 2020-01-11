import React from 'react';

import { Container } from './styles';

export default function Enrollment({ history }) {
  return (
    <Container>
      Enrollment List
      <br />
      <button onClick={() => history.push('/enrollment/register')}>
        Cadastrar
      </button>
      <br />
      <button onClick={() => history.push('/enrollment/update')}>Editar</button>
    </Container>
  );
}
