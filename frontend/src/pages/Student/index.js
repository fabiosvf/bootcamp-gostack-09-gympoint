import React from 'react';

import { Container } from './styles';

export default function Student({ history }) {
  return (
    <Container>
      Student List
      <br />
      <button
        onClick={() => history.push('/student/register', { isSigned: true })}
      >
        Cadastrar
      </button>
      <br />
      <button onClick={() => history.push('/student/update')}>Editar</button>
    </Container>
  );
}
