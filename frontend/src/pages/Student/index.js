import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { MdAdd, MdSearch } from 'react-icons/md';
import {
  Container,
  Header,
  Search,
  InputIconText,
  Grid,
  TitleName,
  TitleEmail,
  TitleAge,
  DetailName,
  DetailEmail,
  DetailAge,
  DetailCommand,
  GridSeparator,
  LinkEdit,
  LinkDelete,
} from './styles';
import { Button } from '../_layouts/default/styles';

export default function Student({ history }) {
  return (
    <Container>
      <Header>
        <span>Gerenciando alunos</span>
        <Search>
          <Button onClick={() => history.push('/student/register')}>
            <MdAdd size={16} color="#fff" />
            <span>CADASTRAR</span>
          </Button>
          <InputIconText icon={MdSearch} placeholder="Buscar aluno" />
        </Search>
      </Header>

      <Grid>
        <TitleName>NOME</TitleName>
        <TitleEmail>E-MAIL</TitleEmail>
        <TitleAge>IDADE</TitleAge>

        <DetailName>Cha Ji-Hun</DetailName>
        <DetailEmail>example@rocketseat.com.br</DetailEmail>
        <DetailAge>20</DetailAge>
        <DetailCommand>
          <LinkEdit to="/student/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>

        <GridSeparator />

        <DetailName>Cha Ji-Hun</DetailName>
        <DetailEmail>example@rocketseat.com.br</DetailEmail>
        <DetailAge>20</DetailAge>
        <DetailCommand>
          <LinkEdit to="/student/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>

        <GridSeparator />

        <DetailName>Cha Ji-Hun</DetailName>
        <DetailEmail>example@rocketseat.com.br</DetailEmail>
        <DetailAge>20</DetailAge>
        <DetailCommand>
          <LinkEdit to="/student/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>

        <GridSeparator />

        <DetailName>Cha Ji-Hun</DetailName>
        <DetailEmail>example@rocketseat.com.br</DetailEmail>
        <DetailAge>20</DetailAge>
        <DetailCommand>
          <LinkEdit to="/student/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>

        <GridSeparator />

        <DetailName>Cha Ji-Hun</DetailName>
        <DetailEmail>example@rocketseat.com.br</DetailEmail>
        <DetailAge>20</DetailAge>
        <DetailCommand>
          <LinkEdit to="/student/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>

        <GridSeparator />

        <DetailName>Cha Ji-Hun</DetailName>
        <DetailEmail>example@rocketseat.com.br</DetailEmail>
        <DetailAge>20</DetailAge>
        <DetailCommand>
          <LinkEdit to="/student/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>
      </Grid>
    </Container>
  );
}

Student.propTypes = {
  history: PropTypes.shape(historyPropTypes),
};

Student.defaultProps = {
  history: null,
};
