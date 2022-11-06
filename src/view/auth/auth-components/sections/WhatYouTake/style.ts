import styled from 'styled-components';
import { device, size } from '../../../../../styles/auth/breackpoints';

export const WhatYouTakeLay = styled.div`
  font-size: 7px;
  max-width: 230px;
  margin: 0 auto;
  @media (${device.mobileS}) {
    font-size: 10px;
    max-width: ${size.mobileS}px;
  }
  @media (${device.mobileM}) {
    font-size: 11px;
    max-width: ${size.mobileM}px;
  }
  @media (${device.mobileL}) {
    font-size: 12px;
    max-width: ${size.mobileL}px;
  }
  @media (${device.tablet}) {
    max-width: ${size.tablet}px;
  }
  @media (${device.laptop}) {
    font-size: 16px;
    margin: 0 auto;
    width: 100%;
    max-width: 1050px;
  }
`;

export const Content = styled.div`
  @media (${device.tablet}) {
    display: flex;
    justify-content: space-between;
  }
  @media (${device.laptop}) {
    margin: 3.375em 68px auto auto;
    max-width: 1050px;
    width: 100%;
  }
`;

export const Tabels = styled.div`
  @media (${device.laptop}) {
    max-width: 462px;
    width: 100%;
  }
`;

export const Text = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 1.25em;
  line-height: 1.2em;
  letter-spacing: 0.07em;
  :nth-child(2) {
    text-align: end;
    margin: 1em 0;
  }
  :nth-child(4) {
    text-align: end;
    margin-top: 1em;
    color: #c6c6c6;
  }
  @media (${device.tablet}) {
    margin-left: auto;

    :nth-child(1) {
      max-width: 465px;
      top: 0;
      left: 0px;
      margin-left: auto;
    }
    :nth-child(2) {
      font-size: 1.125em;
      line-height: 1.375em;
      margin: 0;
      margin-left: auto;

      max-width: 400px;
      top: 48px;
      left: 0;
    }
    :nth-child(3) {
      text-align: center;
      max-width: 342px;
      font-weight: 700;
      top: 109px;
      left: 6px;
    }
    :nth-child(4) {
      font-size: 1em;
      line-height: 1.25em;
      margin-top: 0;

      max-width: 393px;
      top: 156px;
      left: -41px;
      text-align: start;
    }
  }
  @media (${device.laptop}) {
    :nth-child(1) {
      max-width: unset;
      width: 620px;
      top: 0;
      left: -80px;
      margin-left: auto;
    }
    :nth-child(2) {
      font-size: 1.125em;
      line-height: 1.375em;
      margin: 0;
      margin-left: auto;
      text-align: start;
      max-width: unset;
      width: 400px;
      top: 25px;
      left: 19px;
    }
    :nth-child(3) {
      text-align: center;
      max-width: unset;

      width: 551px;
      top: 54px;
      left: 6px;
    }
    :nth-child(4) {
      font-size: 1em;
      line-height: 1.25em;
      margin-top: 0;
      margin-left: 0;
      max-width: unset;
      width: 393px;
      top: 100px;
      left: 0;
      text-align: start;
    }
  }
`;
