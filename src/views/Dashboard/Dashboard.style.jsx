import styled from 'styled-components';
import breakoutPoint from 'styles/breakout-points';

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

export const IllustrationDashboard = styled.img`
  width: 100%;
  max-width: ${breakoutPoint.mobile};
  height: auto;
  position: absolute;
  z-index: 0;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: .5;
`;

export const DashboardContent = styled.div`
  width: 100%;
  max-width: 500px;
  /* min-height: calc(100vh - 100px); */
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin: 30px auto 20px;
  justify-content: space-around;
`;

export const DashboardUserName = styled.div`
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
