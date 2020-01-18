import React from 'react';
import PropTypes from 'prop-types';

import { StyledModal } from './styles';

import TextLabel from '../TextLabel';
import InputTextAreaLabel from '../InputTextAreaLabel';
import ButtonOne from '../ButtonOne';

export default function ModalAnswer({ isOpen, setIsOpen }) {
  const question = `
  Olá pessoal da academia, gostaria de saber se quando
  acordar devo ingerir batata doce e frango logo de
  primeira, preparar as marmitas e lotar a geladeira?
  Dou um pico de insulina e jogo o hipercalórico?
  `;

  const answer = `Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango logo de primeira, preparar as marmitas e lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?`;

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <StyledModal isOpen={isOpen}>
      <TextLabel label="PERGUNTA DO ALUNO" text={question} />

      <br />
      <InputTextAreaLabel label="SUA RESPOSTA" rows={6}>
        {answer}
      </InputTextAreaLabel>

      <br />
      <ButtonOne
        type="button"
        title="Responder aluno"
        confirmed
        onClick={toggleModal}
      />
    </StyledModal>
  );
}

ModalAnswer.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

ModalAnswer.defaultProps = {
  isOpen: false,
  setIsOpen: null,
};
