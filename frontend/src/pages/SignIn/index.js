import React from 'react';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

export default function SignIn({ history }) {
  return (
    <Container>
      SignIn
      <img src={logo} alt="Gympoint" />
      <br />
      <button onClick={() => history.push('/', { isSigned: true })}>
        Acessar
      </button>
    </Container>
  );
}
