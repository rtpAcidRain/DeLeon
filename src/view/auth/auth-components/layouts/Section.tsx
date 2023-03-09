import React, { FC, ReactNode } from "react";
import { isDesktop } from "react-device-detect";
import styled from "styled-components";
import { device } from "../../../../styles/auth/breackpoints";

type Props = {
  children: ReactNode;
  ref?: React.MutableRefObject<HTMLElement | null>;
};

const SectionLay = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  overflow-x: hidden;
  margin: 24px auto;

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
    width: 100%;
  }
`;

const Section: FC<Props> = React.memo(({ children, ref }) => {
  return (
    <SectionLay ref={ref}>
      <Container>{children}</Container>
    </SectionLay>
  );
});

export default Section;
