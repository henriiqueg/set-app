import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from 'styles/colors';
import triangleMenu from 'assets/icons/triangle-menu.svg';
import breakoutPoint from 'styles/breakout-points';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${colors.white};
  border-bottom: 2px solid #c7c7c7;
  box-shadow: 0 14px 41px -21px black;
  position: fixed;
  z-index: 1000000;
  
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

export const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  p {
    color: ${colors.lightBlue};
    font-size: .75rem;
    font-weight: 600;
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
  cursor: pointer;
  
  p {
    color: ${colors.lightBlue};
    font-size: .75rem;
    font-weight: 600;
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
    font-size: .75rem;
    font-weight: 600;
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
