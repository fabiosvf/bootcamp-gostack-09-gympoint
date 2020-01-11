import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/logo-header.svg';

export default function Header() {
  return (
    <Container>
      Header
      <nav>
        <Link to="/">
          <img src={logo} alt="Gympoint" />
        </Link>
        <span> | </span>
        <Link to="/student">ALUNOS</Link>
        <span> | </span>
        <Link to="/plan">PLANOS</Link>
        <span> | </span>
        <Link to="/enrollment">MATRÍCULAS</Link>
        <span> | </span>
        <Link to="/helporder">PEDIDOS DE AUXÍLIO</Link>
        <span> | </span>
        <Link to="/signin">SAIR DO SISTEMA</Link>
      </nav>
    </Container>
  );
}
