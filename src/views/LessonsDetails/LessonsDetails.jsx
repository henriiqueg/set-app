import React from 'react';
import { useParams } from 'react-router-dom';

import lessonsData from 'data/lessons';

import arrowBlack from 'assets/icons/arrow-black.svg';

import {
  Container,
  HeaderContainer,
  Header,
  BackButton,
  HeaderTitle,
  HeaderIllustration,
  ContentWrapper,
  Title,
  Content,
} from './LessonsDetails.style';

const LessonsDetails = () => {
  const { id } = useParams();

  const lesson = lessonsData.filter((l) => (l.id === Number(id)));

  return (
    <Container>
      <HeaderContainer>
        <Header>
          <BackButton to="/">
            <img src={arrowBlack} alt="" />
            Voltar
          </BackButton>
          <HeaderTitle>
            {lesson[0].title}
          </HeaderTitle>
        </Header>
        <HeaderIllustration />
      </HeaderContainer>
      <ContentWrapper>
        <Title>
          {lesson[0].title}
        </Title>
        <Content>
          {lesson[0].content}
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default LessonsDetails;
