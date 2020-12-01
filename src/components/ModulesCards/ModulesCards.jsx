/* eslint-disable */
import React from 'react';

import modulesData from 'data/modules';

import arrowWhite from 'assets/icons/arrow-white.svg';

import {
  CardContainer,
  CardHeader,
  AllModulesButton,
  CardsRow,
  Card,
  CardContent,
  CardTitle,
  CardIcon,
  CardLink,
} from './ModulesCards.style';

const ModulesCards = () => (
  <CardContainer>
    <CardHeader>
      <p>
        Módulos
      </p>
      <AllModulesButton to="/modules">
        Ver todos os módulos
      </AllModulesButton>
    </CardHeader>

    <CardsRow>
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
    </CardsRow>
  </CardContainer>
);

export default ModulesCards;
