import React from 'react';

import { useAuth } from 'contexts/AuthProvider';

import logo from 'assets/logo/set-logo.svg';
import illustration from 'assets/illustration-login.svg';
import googleLogo from 'assets/icons/google.svg';
import pathTop from 'assets/path-top-login.svg';
import pathBottom from 'assets/path-bottom-login.svg';

import {
  Container,
  PathBackgroundTop,
  PathBackgroundBottom,
  ContentWrapper,
  Logo,
  Illustration,
  HeaderTitle,
  HeaderDescription,
  GoogleButton,
} from './Login.style';

const Login = () => {
  const user = useAuth();

  const handleLogin = () => {
    user.login();
  };

  return (
    <Container>
      <PathBackgroundTop src={pathTop} />
      <ContentWrapper>

        <Logo src={logo} />

        <Illustration>
          <img src={illustration} alt="" />
        </Illustration>

        <HeaderTitle>
          Aprenda sobre produção musical a
          {' '}
          <span>qualquer hora e em qualquer lugar</span>
        </HeaderTitle>

        <HeaderDescription>
          Um texto sobre o que o aplicativo faz
          e por que você deveria utilizá-lo
          Um texto sobre o que o aplicativo faz e por que você deveria utilizá-lo
        </HeaderDescription>

        <GoogleButton type="button" onClick={handleLogin}>
          <img src={googleLogo} alt="" />
          Entrar com o Google
        </GoogleButton>
      </ContentWrapper>
      <PathBackgroundBottom src={pathBottom} />
    </Container>
  );
};

export default Login;
