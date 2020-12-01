import styled from 'styled-components';
import { Link } from 'react-router-dom';

import pathBlue from 'assets/path-blue.svg';
import pathRed from 'assets/path-red.svg';

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

export const CardsContainer = styled.div`
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

export const Card = styled.div`
  height: 150px;
  background-color: ${({ theme }) => (theme === 'blue' ? '#5765F7' : '#F77657')};
  min-width: 250px;
  min-height: 150px;
  position: relative;
  box-shadow: 10px 10px 20px #00000026;
  border-radius: 12px;
  margin-bottom: 20px;

  &:before {
    content: '';
    position: absolute;
    top: 0%;
    right: 0%;
    width: 60%;
    height: 70%;
    background: url(${({ theme }) => (theme === 'blue' ? pathBlue : pathRed)}) center no-repeat;
    background-size: contain;
    z-index: 1;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 13px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 10;
`;

export const CardTitle = styled.p`
  font-size: 1rem;
  color: white;
  font-weight: 600;
  width: 70%;
`;

export const CardIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30px;

  img {
    width: 100%;
    margin-top: 10px;
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  font-size: .8rem;
  color: white;
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  width: 80px;

  p {
    margin-bottom: 2px;
  }

  img {
    width: 100%;
    max-width: 5px;
    margin-left: 10px;
  }
`;

export const IllustrationModules = styled.img`
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
