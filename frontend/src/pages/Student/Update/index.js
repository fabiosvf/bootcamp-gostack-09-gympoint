import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import {
  Container,
  Header,
  Aside,
  Fields,
  FieldName,
  FieldEmail,
  FieldAge,
  FieldWeight,
  FieldHeight,
} from './styles';

import ButtonIcon from '../../../components/ButtonIcon';
import InputTextLabel from '../../../components/InputTextLabel';

export default function Update({ history }) {
  function handleVoltar() {
    history.goBack();
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Salvar');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Header>
          <span>Edição de aluno</span>
          <Aside>
            <ButtonIcon
              icon={MdKeyboardArrowLeft}
              type="button"
              title="VOLTAR"
              confirmed={false}
              onClick={handleVoltar}
            />
            <ButtonIcon icon={MdDone} type="submit" title="SALVAR" confirmed />
          </Aside>
        </Header>

        <Fields>
          <FieldName>
            <InputTextLabel label="NOME COMPLETO" />
          </FieldName>
          <FieldEmail>
            <InputTextLabel label="ENDEREÇO DE E-MAIL" />
          </FieldEmail>
          <FieldAge>
            <InputTextLabel label="IDADE" />
          </FieldAge>
          <FieldWeight>
            <InputTextLabel label="PESO (EM KG)" />
          </FieldWeight>
          <FieldHeight>
            <InputTextLabel label="ALTURA" />
          </FieldHeight>
        </Fields>
      </form>
    </Container>
  );
}

Update.propTypes = {
  history: PropTypes.shape(historyPropTypes),
};

Update.defaultProps = {
  history: null,
};
