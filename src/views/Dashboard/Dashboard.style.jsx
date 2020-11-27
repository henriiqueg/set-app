import styled from 'styled-components';
import colors from 'styles/colors';
import breakoutPoint from 'styles/breakout-points';

import triangleMenu from 'assets/icons/triangle-menu.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${colors.white};
  border-bottom: 2px solid #c7c7c7;
  box-shadow: 0 14px 41px -21px black;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: ${breakoutPoint.mobile};
  height: 100%;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${colors.lightBlue};
    font-size: .85rem;
    font-weight: 500;
    margin-bottom: 3px;
  }

  img {
    width: auto;
    height: 100%;
    max-height: 20px;
    margin-right: 10px;
  }
`;

export const Profile = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProfileInfo = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none!important;
  background-color: transparent;
  
  p {
    color: ${colors.lightBlue};
    font-size: .85rem;
    font-weight: 500;
    margin-bottom: 3px;
  }

  img {
    width: auto;
    height: 100%;
    max-height: 30px;
    margin-right: 10px;
    
    border: 1px solid ${colors.purple};
    border-spacing: 1px;
    border-radius: 100%;
  }
`;

export const ProfileMenu = styled.div`
  position: absolute;
  right: -5%;
  bottom: -70px;
  width: 30vw;
  padding: 10px 10px;
  max-width: 130px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 6px 10px -10px gray;

  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;

  button {
    outline: none!important;
    background-color: transparent;
    font-size: .85rem;
    font-weight: 500;
    width: 100%;
    border: none;
    padding: 5px 8px;

    // UNCOMENT IF HAVE MORE THAN 1 BUTTON
    /* margin-bottom: 10px; */
    /* border-bottom: 1px solid #c7c7c7; */
  }

  &:after {
    content: '';
    background: url(${triangleMenu}) center no-repeat;
    background-size: contain;
    width: 11px;
    height: 11px;
    top: -8px;
    right: 12px;
    position: absolute;
  }

`;
