import React from 'react';

import { Container } from './styles';

export default function Plan({ history }) {
  return (
    <Container>
      Plan List
      <br />
      <button onClick={() => history.push('/plan/register')}>Cadastrar</button>
      <br />
      <button onClick={() => history.push('/plan/update')}>Editar</button>
    </Container>
  );
}
