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

import ButtonIcon from '../../components/ButtonIcon';

export default function Student({ history }) {
  function handleCadastrar() {
    history.push('/student/register');
  }

  return (
    <Container>
      <Header>
        <span>Gerenciando alunos</span>
        <Search>
          <ButtonIcon
            icon={MdAdd}
            type="button"
            title="CADASTRAR"
            confirmed
            onClick={handleCadastrar}
          />
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
