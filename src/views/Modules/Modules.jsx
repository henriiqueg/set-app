import React from 'react';

import modulesData from 'data/modules';

import arrowWhite from 'assets/icons/arrow-white.svg';
import arrowBlack from 'assets/icons/arrow-black.svg';
import illustrationModules from 'assets/illustration-error-colored.svg';

import {
  Container,
  HeaderContent,
  HeaderTitle,
  BackButton,
  CardsContainer,
  Card,
  CardContent,
  CardTitle,
  CardIcon,
  CardLink,
  IllustrationModules,
} from './Modules.style';

const Modules = () => (
  <Container>
    <HeaderContent>
      <BackButton to="/">
        <img src={arrowBlack} alt="" />
        Voltar
      </BackButton>
      <HeaderTitle>
        <p>Módulos</p>
      </HeaderTitle>
    </HeaderContent>

    <CardsContainer>
      {modulesData.map((module) => (
        <Card key={module.id} theme={module.theme}>
          <CardContent>
            <CardTitle>
              {module.title}
            </CardTitle>
            <CardIcon>
              <img src={module.icon} alt="" />
            </CardIcon>

            <CardLink to={`/modules/${module.id}`}>
              <p>
                Ler sobre
              </p>
              <img src={arrowWhite} alt="" />
            </CardLink>
          </CardContent>
        </Card>
      ))}
    </CardsContainer>
    <IllustrationModules src={illustrationModules} />
  </Container>
);

export default Modules;
