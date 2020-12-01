import React from 'react';

import lessonsData from 'data/lessons';

import arrowWhite from 'assets/icons/arrow-white.svg';
import arrowBlack from 'assets/icons/arrow-black.svg';
import aulaIcon from 'assets/icons/aula.svg';
import illustrationLessons from 'assets/illustration-error-colored.svg';

import {
  Container,
  HeaderContent,
  HeaderTitle,
  BackButton,
  LessonsListContainer,
  LessonItemContainer,
  LessonIcon,
  LessonItemContent,
  ArrowIcon,
  IllustrationLessons,
} from './Lessons.style';

const Lessons = () => (
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

    <LessonsListContainer>
      {lessonsData.map((lesson) => (
        <LessonItemContainer key={lesson.id} to={`/lessons/${lesson.id}`}>
          <LessonIcon src={aulaIcon} alt="" />
          <LessonItemContent>
            <p>
              {lesson.title}
            </p>
          </LessonItemContent>
          <ArrowIcon src={arrowWhite} alt="" />
        </LessonItemContainer>
      ))}
    </LessonsListContainer>
    <IllustrationLessons src={illustrationLessons} />
  </Container>
);

export default Lessons;
