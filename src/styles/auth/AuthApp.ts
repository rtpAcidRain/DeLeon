import styled from 'styled-components';
import { device } from './breackpoints';
import { isWebpSupported } from 'react-image-webp/dist/utils';

import background from '../../view/auth/auth-assets/images/background.png';
import backgroundWebp from '../../view/auth/auth-assets/images/background.webp';

export const App = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background: center / 100% 100% no-repeat url(${isWebpSupported ? backgroundWebp : background}),
    #c4c4c4;

  @media (${device.laptop}) {
    flex-direction: row;
  }
`;

export const Main = styled.main`
  overflow-y: scroll;
  width: 100%;

  @media (${device.laptop}) {
    width: calc(100% - 330px);
  }
`;

export const Scroll = styled.div`
  @media (${device.laptop}) {
    height: 100vh;
    overflow: hidden;
    scroll-snap-type: y mandatory;
  }
`;
