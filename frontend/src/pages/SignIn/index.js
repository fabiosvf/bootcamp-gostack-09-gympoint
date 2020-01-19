import React from 'react';
import PropTypes from 'prop-types';
import { history as historyPropTypes } from 'history-prop-types';

import logo from '~/assets/logo.svg';

export default function SignIn({ history }) {
  return (
    <>
      <img src={logo} alt="Gympoint" />

      <form>
        <span>SEU E-MAIL</span>
        <input type="email" placeholder="exemplo@email.com" />

        <span>SUA SENHA</span>
        <input type="password" placeholder="************" />

        <button type="button">Entrar no sistema</button>
      </form>
    </>
  );
}

SignIn.propTypes = {
  history: PropTypes.shape(historyPropTypes),
};

SignIn.defaultProps = {
  history: null,
};
