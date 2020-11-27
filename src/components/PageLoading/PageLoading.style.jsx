import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
`;

export const ContentWrapper = styled.div`
  width: 100vw;
  max-width: 250px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  [aria-label="animation"]:first-child {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-80%);
  }

  [aria-label="animation"]:last-child {
    position: absolute;
    left: 50%;
    top: 63%;
    transform: translate(-50%, -50%);
  }
`;
