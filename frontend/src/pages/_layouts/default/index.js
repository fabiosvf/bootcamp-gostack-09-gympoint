import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';

import { Container, Main } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Header children={children} />
      <Main>{children}</Main>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
