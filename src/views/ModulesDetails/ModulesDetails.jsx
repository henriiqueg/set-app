import React from 'react';
import { useParams } from 'react-router-dom';

import modulesData from 'data/modules';

import illustrationDetail from 'assets/illustration-detail.svg';
import arrowWhite from 'assets/icons/arrow-white.svg';

import {
  Container,
  HeaderContainer,
  Header,
  BackButton,
  HeaderIcon,
  HeaderTitle,
  HeaderIllustration,
  ContentWrapper,
  Title,
  Content,
} from './ModulesDetails.style';

const LessonsDetails = () => {
  const { id } = useParams();

  const module = modulesData.filter((m) => (m.id === Number(id)));

  return (
    <Container>
      <HeaderContainer theme={module[0].theme}>
        <Header>
          <BackButton to="/">
            <img src={arrowWhite} alt="" />
            Voltar
          </BackButton>
          <HeaderIcon>
            <img src={module[0].icon} alt="" />
          </HeaderIcon>
          <HeaderTitle>
            {module[0].title}
          </HeaderTitle>
        </Header>
        <HeaderIllustration src={illustrationDetail} alt="" />
      </HeaderContainer>
      <ContentWrapper>
        <Title>
          {module[0].title}
        </Title>
        <Content>
          {module[0].content}
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default LessonsDetails;
