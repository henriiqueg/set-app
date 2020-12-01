import styled from 'styled-components';
import { Link } from 'react-router-dom';

import illustrationLesson from 'assets/illustration-lesson.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  padding-top: 50px;
  background-color: white;
  margin: 0 auto;

  /* display: flex;
  flex-direction: column;
  justify-content: space-around; */
`;

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  
  background-color: #5765F7;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 20px 30px 10px;
  background: url(${illustrationLesson}) no-repeat;
  background-position: 0% 30%;
  background-size: 50%;
`;

export const BackButton = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: -10px;
  font-weight: bold;

  img {
    transform: rotate(180deg);
    margin-right: 10px;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: white;
`;

export const HeaderIllustration = styled.img`
  position: absolute;
  right: 0%;
  bottom: 0%;
  width: 100%;
  max-width: 100px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  font-size: 2rem;
  width: 80%;
`;

export const Content = styled.p`
  margin-top: 30px;
  font-size: 1rem;
  white-space: pre-line;
  font-weight: 500;
`;
