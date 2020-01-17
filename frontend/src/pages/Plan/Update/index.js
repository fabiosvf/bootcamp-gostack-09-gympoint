import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import {
  Container,
  Header,
  Aside,
  Fields,
  FieldTitle,
  FieldDuration,
  FieldPrice,
  FieldTotal,
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
          <span>Edição de plano</span>
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
          <FieldTitle>
            <InputTextLabel label="TÍTULO DO PLANO" />
          </FieldTitle>
          <FieldDuration>
            <InputTextLabel label="DURAÇÃO (EM MESES)" />
          </FieldDuration>
          <FieldPrice>
            <InputTextLabel label="PREÇO MENSAL" />
          </FieldPrice>
          <FieldTotal>
            <InputTextLabel label="PREÇO TOTAL" disabled />
          </FieldTotal>
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
