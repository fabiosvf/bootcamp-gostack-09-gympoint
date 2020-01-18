import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const isSigned = true;

  if (!isSigned && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (isSigned && !isPrivate) return <Redirect to="/" />;

  const Layout = isSigned ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <ModalProvider>
          <Layout>
            <Component {...props} />
          </Layout>
        </ModalProvider>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
