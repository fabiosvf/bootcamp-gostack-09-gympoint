import React from 'react';

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

export default function HelpOrder() {
  return (
    <Container>
      <Header>
        <span>Pedidos de auxílio</span>
      </Header>

      <Grid>
        <TitleStudent>ALUNO</TitleStudent>

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailCommand>
          <LinkAnswer to="/">responder</LinkAnswer>
        </DetailCommand>

        <GridSeparator />

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailCommand>
          <LinkAnswer to="/">responder</LinkAnswer>
        </DetailCommand>

        <GridSeparator />

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailCommand>
          <LinkAnswer to="/">responder</LinkAnswer>
        </DetailCommand>

        <GridSeparator />

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailCommand>
          <LinkAnswer to="/">responder</LinkAnswer>
        </DetailCommand>

        <GridSeparator />

        <DetailStudent>Shen Zhi</DetailStudent>
        <DetailCommand>
          <LinkAnswer to="/">responder</LinkAnswer>
        </DetailCommand>
      </Grid>
    </Container>
  );
}
