import React, { FC, ReactNode } from "react";
import { isDesktop } from "react-device-detect";
import styled from "styled-components";
import { device } from "../../../../styles/auth/breackpoints";

type Props = {
  children: ReactNode;
};

const SectionLay = styled.section`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  margin: 24px auto;
  :first-child {
    min-height: 100vh;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  ${isDesktop &&
  `  @media (${device.laptop}) {
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    object-fit: cover;
  }
  `}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (${device.laptop}) {
    ${isDesktop && "height: 100vh;"}
    ${isDesktop && "max-height: 800px;"}
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
