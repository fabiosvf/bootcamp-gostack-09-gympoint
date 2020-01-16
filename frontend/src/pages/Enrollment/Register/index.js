import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Container } from './styles';

import ButtonIcon from '../../../components/ButtonIcon';

export default function Register({ history }) {
  function handleVoltar() {
    history.goBack();
  }

  return (
    <Container>
      Enrollment Register
      <br />
      <ButtonIcon
        icon={MdKeyboardArrowLeft}
        type="button"
        title="VOLTAR"
        confirmed={false}
        onClick={handleVoltar}
      />
      <ButtonIcon icon={MdDone} type="submit" title="SALVAR" confirmed />
    </Container>
  );
}

Register.propTypes = {
  history: PropTypes.shape(historyPropTypes),
};

Register.defaultProps = {
  history: null,
};
