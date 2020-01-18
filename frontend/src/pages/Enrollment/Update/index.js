import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import {
  Container,
  Header,
  Aside,
  Fields,
  FieldStudent,
  FieldPlan,
  FieldStartDate,
  FieldEndDate,
  FieldEndValue,
} from './styles';

import ButtonIcon from '../../../components/ButtonIcon';
import InputTextLabel from '../../../components/InputTextLabel';
import SelectLabel from '../../../components/SelectLabel';
import DatePickerLabel from '../../../components/DatePickerLabel';

export default function Update({ history }) {
  const [startDate, setStartDate] = useState(new Date());

  function handleVoltar() {
    history.goBack();
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Salvar');
  }

  const plans = [
    { value: 1, label: 'Start' },
    { value: 2, label: 'Gold' },
    { value: 3, label: 'Diamond' },
  ];

  const students = [
    { value: 1, label: 'Jose' },
    { value: 2, label: 'Maria' },
    { value: 3, label: 'Daniel' },
  ];

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Header>
          <span>Edição de matrícula</span>
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
          <FieldStudent>
            <SelectLabel
              label="ALUNO"
              options={students}
              placeholder="Selecione o aluno"
            />
          </FieldStudent>
          <FieldPlan>
            <SelectLabel
              label="PLANO"
              options={plans}
              placeholder="Selecione o plano"
            />
          </FieldPlan>
          <FieldStartDate>
            <DatePickerLabel
              label="DATA DE INÍCIO"
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </FieldStartDate>
          <FieldEndDate>
            <InputTextLabel label="DATA DE TÉRMINO" disabled />
          </FieldEndDate>
          <FieldEndValue>
            <InputTextLabel label="VALOR FINAL" disabled />
          </FieldEndValue>
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
