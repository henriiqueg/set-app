import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  padding-top: 50px;
  background-color: white;

  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-around; */
`;

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  
  background-color: ${({ theme }) => (theme === 'blue' ? '#5765F7' : '#F77657')};
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Header = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  padding: 15px 30px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const BackButton = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  color: white;

  img {
    transform: rotate(180deg);
    margin-right: 10px;
  }
`;

export const HeaderIcon = styled.div`
  width: 100%;
  max-width: 45px;
  margin-bottom: 10px;

  img {
    width: 100%;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
`;

export const HeaderIllustration = styled.img`
  position: absolute;
  right: -10%;
  bottom: -50px;
  width: auto;
  height: 220px;
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
  font-weight: 500;
  white-space: pre-line;
`;
