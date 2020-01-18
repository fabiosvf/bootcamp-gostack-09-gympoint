import React, { useState } from 'react';

import {
  Container,
  Header,
  Grid,
  TitleStudent,
  DetailStudent,
  DetailCommand,
  GridSeparator,
  LinkAnswer,
} from './styles';

import ModalAnswer from '../../components/ModalAnswer';

export default function HelpOrder() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Header>
        <span>Pedidos de auxílio</span>
      </Header>

      <Grid>
        <TitleStudent>ALUNO</TitleStudent>

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailCommand>
          <LinkAnswer onClick={toggleModal}>responder</LinkAnswer>
        </DetailCommand>

        <GridSeparator />

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailCommand>
          <LinkAnswer onClick={toggleModal}>responder</LinkAnswer>
        </DetailCommand>

        <GridSeparator />

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailCommand>
          <LinkAnswer onClick={toggleModal}>responder</LinkAnswer>
        </DetailCommand>

        <GridSeparator />

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailCommand>
          <LinkAnswer onClick={toggleModal}>responder</LinkAnswer>
        </DetailCommand>

        <GridSeparator />

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailCommand>
          <LinkAnswer onClick={toggleModal}>responder</LinkAnswer>
        </DetailCommand>
      </Grid>

      <ModalAnswer isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
}
