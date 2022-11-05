import styled from 'styled-components';
import { App, Main, Scroll } from '../../../../styles/auth/AuthApp';
import { device } from '../../../../styles/auth/breackpoints';

const DescApp = styled(App)`
  @media (${device.laptop}) {
    justify-content: unset;
  }
`;

const DescMain = styled(Main)`
  @media (${device.laptop}) {
    overflow-y: unset;
  }
`;

export { DescApp, DescMain, Scroll };
