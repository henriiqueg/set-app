import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  position: relative;
`;

export const PathBackgroundTop = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  position: absolute;
  z-index: 50;
  top: 0%;
  right: 0%;
`;

export const PathBackgroundBottom = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  position: absolute;
  z-index: 50;
  bottom: 0%;
  left: 0%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  padding: 20px 30px;
  position: relative;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 50px;
  margin: 0 auto;
`;

export const Illustration = styled.div`
  width: 100%;
  height: auto;
  max-height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;

  span {
    font-weight: 700;
  }
`;

export const HeaderDescription = styled.p`
  font-size: 1rem;
`;

export const GoogleButton = styled.button`
  border: none;
  color: ${colors.white};
  border-radius: 15px;
  background-color: ${colors.blackSoft};
  padding: 13px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  font-size: .8rem;
  font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  outline: none!important;

  img {
    margin-right: 30px;
    margin-left: -30px;
  }
`;
