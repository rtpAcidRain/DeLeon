import styled from 'styled-components';
import { device } from './breackpoints';

import background from '../../view/auth/auth-assets/images/background.png';

export const App = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: center / 100% 100% no-repeat url(${background}), #c4c4c4;
  display: flex;
  overflow: hidden;

  justify-content: center;
`;

export const Main = styled.main`
  overflow-y: scroll;
  width: 100%;
`;

export const Scroll = styled.div`
  @media (${device.laptop}) {
    height: 100vh;
    overflow: hidden;
    scroll-snap-type: y mandatory;
  }
`;