import React from 'react';

import lessonsData from 'data/lessons';

import aulaIcon from 'assets/icons/aula.svg';
import arrowWhite from 'assets/icons/arrow-white.svg';

import {
  ContainerLesson,
  LessonHeader,
  AllLessonsButton,
  LessonsListContainer,
  LessonItemContainer,
  LessonIcon,
  LessonItemContent,
  ArrowIcon,
} from './LessonsList.style';

const LessonsList = () => (
  <ContainerLesson>
    <LessonHeader>
      <p>
        Aulas
      </p>
      <AllLessonsButton to="">
        Ver todos as aulas
      </AllLessonsButton>
    </LessonHeader>

    <LessonsListContainer>
      {lessonsData.map((lesson) => (
        <LessonItemContainer key={lesson.id}>
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
  </ContainerLesson>
);

export default LessonsList;
