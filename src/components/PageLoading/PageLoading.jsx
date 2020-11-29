import React from 'react';
import Lottie from 'react-lottie';

import guitarAnimation from 'assets/animations/playing-guitar';
import loadingDots from 'assets/animations/loading-dots';

import {
  Container,
  ContentWrapper,
} from './PageLoading.style';

const PageLoading = () => (
  <Container>
    <ContentWrapper>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: guitarAnimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={200}
        width={200}
        isClickToPauseDisabled={false}
      />
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: loadingDots,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={50}
        width={100}
        isClickToPauseDisabled={false}
      />
    </ContentWrapper>
  </Container>
);

export default PageLoading;
