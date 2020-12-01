/* eslint-disable no-return-assign */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

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

  let illustrationRef = useRef(null);
  let titleRef = useRef(null);
  let descriptionRef = useRef(null);
  let buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(illustrationRef, {
      duration: 2,
      opacity: 0,
      ease: 'power3.out',
    });
  }, [illustrationRef]);

  useEffect(() => {
    gsap.from([titleRef, descriptionRef], {
      duration: 1,
      opacity: 0,
      y: 200,
      ease: 'power3.out',
      stagger: {
        amount: 0.3,
      },
    });
  }, [titleRef, descriptionRef]);

  useEffect(() => {

  }, [buttonRef]);

  const handleLogin = () => {
    user.login();
  };

  return (
    <Container>
      <PathBackgroundTop src={pathTop} />
      <ContentWrapper>

        <Logo src={logo} />

        <Illustration ref={(el) => (illustrationRef = el)}>
          <img src={illustration} alt="" />
        </Illustration>

        <HeaderTitle ref={(el) => (titleRef = el)}>
          Aprenda sobre produção musical a
          {' '}
          <span>qualquer hora e em qualquer lugar</span>
        </HeaderTitle>

        <HeaderDescription ref={(el) => (descriptionRef = el)}>
          Com aulas teóricas e módulos de aprendizado práticos,
          simples e direcionados para o seu interesse.
        </HeaderDescription>

        <GoogleButton type="button" onClick={handleLogin} ref={(el) => (buttonRef = el)}>
          <img src={googleLogo} alt="" />
          Entrar com o Google
        </GoogleButton>
      </ContentWrapper>
      <PathBackgroundBottom src={pathBottom} />
    </Container>
  );
};

export default Login;
