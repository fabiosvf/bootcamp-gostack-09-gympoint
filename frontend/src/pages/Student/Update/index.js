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
import InputMaskNumberLabel from '../../../components/InputMaskNumberLabel';

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
            <InputMaskNumberLabel
              maskOptions={{ allowDecimal: false, integerLimit: 2 }}
              label="IDADE"
            />
          </FieldAge>
          <FieldWeight>
            <InputMaskNumberLabel
              maskOptions={{
                allowDecimal: true,
                integerLimit: 2,
                decimalLimit: 1,
                suffix: 'kg',
              }}
              label="PESO (EM KG)"
            />
          </FieldWeight>
          <FieldHeight>
            <InputMaskNumberLabel
              maskOptions={{
                allowDecimal: true,
                integerLimit: 1,
                decimalLimit: 2,
                suffix: 'm',
              }}
              label="ALTURA (EM MTS)"
            />
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
