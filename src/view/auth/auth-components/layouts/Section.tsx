import React, { FC, ReactNode } from 'react';
import { isDesktop, isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { device } from '../../../../styles/auth/breackpoints';

type Props = {
  children: ReactNode;
};

const SectionLay = styled.section`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  :first-child {
    min-height: 100vh;
    padding: 80px 0 2rem 0;
  }
  :not(:first-child) {
    padding: 1.5rem 1rem;
  }

  ${isDesktop &&
  `  @media (${device.laptop}) {
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    object-fit: cover;

    :first-child {
      min-height: unset;
      padding: 0;
    }
    :not(:first-child) {
      padding: 0;
    }
  }`}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;

  @media (${device.laptop}) {
    ${isDesktop && 'height: 100vh;'}
    max-width: 1440px;
    max-height: 800px;
    width: 100%;
  }
`;

const Section: FC<Props> = React.memo(({ children }) => {
  return (
    <SectionLay>
      <Container>{children}</Container>
    </SectionLay>
  );
});

export default Section;
