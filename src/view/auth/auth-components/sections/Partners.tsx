import React from 'react';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';

import { AirLinesIco, ApploIco, X5Ico } from '../../auth-assets/svg/icons';
import styled from 'styled-components';
import { device, size } from '../../../../styles/auth/breackpoints';
import { isDesktop, isMobile } from 'react-device-detect';

type Props = {};

const PartnersStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  width: 100%;
  justify-content: space-between;
  margin: auto;
  @media (${device.mobileS}) {
    max-width: ${size.mobileS}px;
  }
  @media (${device.laptop}) {
    max-width: ${size.laptop}px;
    flex-direction: row;
  }
`;

const Plate = styled.div`
  border-radius: 23px;
  border: 4px solid #bababa;
`;

const Back = styled(Plate)`
  position: relative;
  height: 118px;
  width: 185px;
  margin: 0 auto 42px;
  @media (${device.mobileS}) {
    width: 270px;
    height: 141px;
  }
  @media (${isDesktop && device.laptop}) {
    height: 118px;
    width: 185px;
  }
  @media (${isMobile ? device.laptop : 'min-width: 1189px'}) {
    margin: 0;
    margin-right: 45px;
    width: 270px;
    height: 141px;
  }
`;

const Front = styled(Plate)`
  top: 13px;
  left: 22px;
  position: absolute;
  background: #ffffff;
  display: flex;
  height: 118px;
  width: 185px;
  .logo {
    max-width: 120px;
    width: 100%;
    margin: auto;
    max-height: 43px;
  }

  @media (${device.mobileS}) {
    width: 270px;
    height: 141px;
    .logo {
      max-width: 233px;
    }
  }
  @media (${isDesktop && device.laptop}) {
    height: 118px;
    width: 185px;
    .logo {
      max-width: 120px;
    }
  }
  @media (${isDesktop && 'min-width: 1189px'}) {
    width: 270px;
    height: 141px;
    .logo {
      max-width: 233px;
    }
  }
`;

const Partners: React.FC<Props> = React.memo((props: Props) => {
  return (
    <Section>
      <H3>Партнеры</H3>
      <PartnersStyle>
        <Back>
          <Front>
            <ApploIco className="logo" />
          </Front>
        </Back>
        <Back>
          <Front>
            <AirLinesIco className="logo" />
          </Front>
        </Back>
        <Back>
          <Front>
            <X5Ico className="logo" />
          </Front>
        </Back>
      </PartnersStyle>
    </Section>
  );
});

export default Partners;
