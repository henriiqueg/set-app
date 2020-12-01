import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerLesson = styled.div`
  background-color: #F4CA28;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  width: calc(100% - 40px);
  max-width: 500px;
  margin: 20px;
  border-radius: 12px;
  box-shadow: 10px 10px 20px #00000026;
  position: relative;
  z-index: 500;
`;

export const LessonHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 20px;

  p {
    font-weight: bold;
    font-size: .9rem;
  }
`;

export const AllLessonsButton = styled(Link)`
  text-decoration: none;
  font-size: .8rem;
  color: black;
`;

export const LessonsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 45vh;
`;

export const LessonItemContainer = styled(Link)`
  width: 100%;
  background-color: #F2B619;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  font-weight: bold;
`;

export const LessonIcon = styled.img`
  height: 90%;
  width: auto;
  flex: 15%;
`;

export const LessonItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 80%;
  padding-left: 10px;
`;

export const ArrowIcon = styled.img`
  height: 80%;
  width: auto;
`;
