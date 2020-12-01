import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  padding-top: 50px;

  display: flex;
  flex-direction: column;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 500px;
  /* min-height: calc(100vh - 100px); */
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 10px auto 20px;
  justify-content: space-around;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-size: .85rem;
    font-weight: 400;
    margin-right: 5px;
  }

  p {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const BackButton = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  color: black;

  img {
    transform: rotate(180deg);
    margin-right: 10px;
  }
`;

export const LessonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  position: relative;
  z-index: 100;
  max-height: 70vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const IllustrationLessons = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  position: absolute;
  z-index: 0;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
`;

export const LessonsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 70vh;
  position: relative;
  z-index: 500;
  padding: 0 20px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LessonItemContainer = styled(Link)`
  width: 100%;
  background-color: #F2B619;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
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
