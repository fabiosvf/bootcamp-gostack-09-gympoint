import React from 'react';
import { Link } from 'react-router-dom';
import { Container, VerticalRow, StyledLink, Profile } from './styles';

import logo from '../../assets/logo-header.svg';

export default function Header({ children }) {
  const urlCurrent = children.props.match.url;

  const menu = [
    { url: '/student', title: 'ALUNOS' },
    { url: '/plan', title: 'PLANOS' },
    { url: '/enrollment', title: 'MATRÍCULAS' },
    { url: '/helporder', title: 'PEDIDOS DE AUXÍLIO' },
  ];
  return (
    <Container>
      <nav>
        <Link to="/">
          <img src={logo} alt="Gympoint" />
        </Link>

        <VerticalRow />

        {menu.map(m => (
          <StyledLink
            key={m.url}
            to={m.url}
            selected={urlCurrent.includes(m.url) > 0}
            editmode={urlCurrent !== m.url}
          >
            {m.title}
          </StyledLink>
        ))}
      </nav>
      <Profile>
        <strong>Fabio Silva Ferreira</strong>
        <Link to="/signout">sair do sistema</Link>
      </Profile>
    </Container>
  );
}
