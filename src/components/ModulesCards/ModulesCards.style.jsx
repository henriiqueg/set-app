import styled from 'styled-components';
import { Link } from 'react-router-dom';

import pathBlue from 'assets/path-blue.svg';
import pathRed from 'assets/path-red.svg';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  width: 100%;
  max-width: 500px;
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

export const AllModulesButton = styled(Link)`
  text-decoration: none;
  font-size: .8rem;
  color: black;
`;

export const CardsRow = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 0 auto;
  width: calc(500px + 20px);

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 500px) {
    max-width: calc(100vw - 20px);
  }
`;

export const Card = styled.div`
  height: 150px;
  background-color: ${({ theme }) => (theme === 'blue' ? '#5765F7' : '#F77657')};
  min-width: 250px;
  position: relative;
  box-shadow: 10px 10px 20px #00000026;
  border-radius: 12px;
  margin-right: 20px;

  &:before {
    content: '';
    position: absolute;
    top: 0%;
    right: 0%;
    width: 78%;
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
  font-weight: bold;
`;

export const CardIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50px;

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
