import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { MdAdd } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';

import {
  Container,
  Header,
  Aside,
  Grid,
  TitleStudent,
  TitlePlan,
  TitleStart,
  TitleEnd,
  TitleActive,
  DetailStudent,
  DetailPlan,
  DetailStart,
  DetailEnd,
  DetailActive,
  DetailCommand,
  GridSeparator,
  LinkEdit,
  LinkDelete,
} from './styles';

import ButtonIcon from '../../components/ButtonIcon';

export default function Enrollment({ history }) {
  function handleCadastrar() {
    history.push('/enrollment/register');
  }

  return (
    <Container>
      <Header>
        <span>Gerenciando matrículas</span>
        <Aside>
          <ButtonIcon
            icon={MdAdd}
            type="button"
            title="CADASTRAR"
            confirmed
            onClick={handleCadastrar}
          />
        </Aside>
      </Header>

      <Grid>
        <TitleStudent>ALUNO</TitleStudent>
        <TitlePlan>PLANO</TitlePlan>
        <TitleStart>INÍCIO</TitleStart>
        <TitleEnd>TÉRMINO</TitleEnd>
        <TitleActive>ATIVA</TitleActive>

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailPlan>Gold</DetailPlan>
        <DetailStart>10 de março de 2019</DetailStart>
        <DetailEnd>10 de junho de 2019</DetailEnd>
        <DetailActive>
          <FaCheckCircle size={16} color="#42cb59" />
        </DetailActive>
        <DetailCommand>
          <LinkEdit to="/enrollment/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>

        <GridSeparator />

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailPlan>Gold</DetailPlan>
        <DetailStart>10 de março de 2019</DetailStart>
        <DetailEnd>10 de junho de 2019</DetailEnd>
        <DetailActive>
          <FaCheckCircle size={16} color="#ddd" />
        </DetailActive>
        <DetailCommand>
          <LinkEdit to="/enrollment/update">editar</LinkEdit>
          <LinkDelete to="/">apagar</LinkDelete>
        </DetailCommand>
      </Grid>
    </Container>
  );
}

Enrollment.propTypes = {
  history: PropTypes.shape(historyPropTypes),
};

Enrollment.defaultProps = {
  history: null,
};
