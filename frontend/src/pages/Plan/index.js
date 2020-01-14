import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { MdAdd } from 'react-icons/md';

import {
  Container,
  Header,
  Aside,
  Grid,
  TitleName,
  TitleDuration,
  TitleValue,
  DetailName,
  DetailDuration,
  DetailValue,
  DetailCommand,
  GridSeparator,
  LinkEdit,
  LinkDelete,
} from './styles';
import { Button } from '../_layouts/default/styles';

export default function Plan({ history }) {
  return (
    <Container>
      <Header>
        <span>Gerenciando planos</span>
        <Aside>
          <Button onClick={() => history.push('/plan/register')}>
            <MdAdd size={16} color="#fff" />
            <span>CADASTRAR</span>
          </Button>
        </Aside>
      </Header>

      <Grid>
        <TitleName>TÍTULO</TitleName>
        <TitleDuration>DURAÇÃO</TitleDuration>
        <TitleValue>VALOR p/ MÊS</TitleValue>

        <DetailName>Start</DetailName>
        <DetailDuration>1 mês</DetailDuration>
        <DetailValue>R$129,00</DetailValue>
        <DetailCommand>
          <LinkEdit to="/plan/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>

        <GridSeparator />

        <DetailName>Gold</DetailName>
        <DetailDuration>3 meses</DetailDuration>
        <DetailValue>R$109,00</DetailValue>
        <DetailCommand>
          <LinkEdit to="/plan/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>

        <GridSeparator />

        <DetailName>Diamond</DetailName>
        <DetailDuration>6 meses</DetailDuration>
        <DetailValue>R$89,00</DetailValue>
        <DetailCommand>
          <LinkEdit to="/plan/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>
      </Grid>
    </Container>
  );
}

Plan.propTypes = {
  history: PropTypes.shape(historyPropTypes),
};

Plan.defaultProps = {
  history: null,
};
