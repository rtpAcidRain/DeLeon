import { FC } from "react";
import styled from "styled-components";
import { device } from "../../../../../styles/auth/breackpoints";

type Props = {
  icons: any;
  title: string;
};

const StandWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;

  @media (${device.mobileL}) {
    max-width: 45.63px;
    height: 74.84px;
    width: 100%;
    position: absolute;
  }
  @media (${device.tablet}) {
    max-width: 91px;
    height: 150px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  line-height: 1.25em;
  display: flex;
  justify-content: center;
  color: #ffffff;

  @media (${device.mobileL}) {
    font-size: 6px;
  }
  @media (${device.tablet}) {
    font-size: 8px;
  }
  @media (${device.laptop}) {
    font-size: 9px;
  }
  @media (${device.desktop}) {
    font-size: 11px;
  }
`;

const BaseMent = styled.div`
  position: relative;
  .icon {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 35%;
  }
  .light {
    position: absolute;
    top: 1px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
  }
`;

const Stand: FC<Props> = ({ icons, title }) => {
  return (
    <StandWrapper className="stand">
      <Container>
        <Title>{title}</Title>
        <BaseMent>
          <icons.Icon className="icon" />
          <icons.Light className="light" />
          <icons.Stand className="stand" />
        </BaseMent>
      </Container>
    </StandWrapper>
  );
};

export default Stand;
