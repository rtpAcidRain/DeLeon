import styled from "styled-components";
import { isDesktop } from "react-device-detect";

import {
  device,
  deviceForHeight,
  size,
} from "../../../../../styles/auth/breackpoints";
import { SectionButton } from "../../../../../styles/auth/Buttons";

const Home = styled.div`
  font-size: 7px;
  width: 100%;
  display: flex;
  position: relative;
  height: 100%;
  padding: 76px 0 0 0;
  //max-width: 230px;
  text-align: center;

  @media (${device.mobileS}) {
    font-size: 10px;
    //max-width: ${size.mobileS}px;
  }
  @media (${device.mobileM}) {
    font-size: 11px;
    //max-width: ${size.mobileM}px;
  }
  @media (${device.mobileL}) {
    font-size: 12px;
    //max-width: ${size.mobileL}px;
  }
  @media (${device.tablet}) {
    font-size: 12px;
    //max-width: ${size.tablet}px;
  }
  @media (${device.laptop}) {
    font-size: 18px;
    align-items: center;
    height: 100%;
    text-align: start;
    width: 100%;
    padding: 80px 0 20px 50px;
  }
  @media (${device.laptopL}) {
    padding: 80px 0 20px 100px;
  }
  @media (${device.desktop}) {
    font-size: 22px;
  }

  @media (${deviceForHeight.tablet}) and (max-height: 900px) and (${device.laptop}) {
    height: 100vh;
    padding-top: 0;
  }
`;

export const HomeButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (${device.laptop}) {
    flex-direction: row;
    gap: 60px;
    align-items: center;
    justify-content: start;
  }
`;

const HomeButton = styled(SectionButton)`
  padding: 13px 40px;
  font-weight: 600;
  font-size: 20px;
  width: 100%;
  max-width: 320px;
`;

const Button = styled(SectionButton)`
  padding: 13px 40px;
  font-weight: 600;
  font-size: 20px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentText = styled.div`
  h1 {
    margin-bottom: 12px;
  }

  .text {
    font-size: 20px;
    text-align: center;
    margin: 32px 0 46px 0;
    width: 100%;
  }

  @media (${device.laptop}) {
    .text {
      text-align: start;
      width: 640px;
    }
  }

  @media (${deviceForHeight.tablet}) and (max-height: 900px) and (${device.laptop}) {
    .text {
      margin: 12px 0;
    }
  }
`;

const List = styled.ul`
  font-size: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 0.7em;

  &::before {
    content: "•";
    height: 24px;
    font-weight: bold;
    width: 8px;
    margin-right: 8px;
    border-radius: 50px;
  }
`;

const Video = styled.div`
  position: absolute;
  right: -46%;
  top: 0;
  display: none;
  @media (${device.laptopL}) {
    display: block;
  }
`;

const Picture = styled.div`
  position: absolute;
  right: -14%;
  top: 20%;
  display: none;
  @media (${device.desktop}) {
    display: block;
  }

  @media (${deviceForHeight.tablet}) and (max-height: 900px) {
    top: 8%;
  }
`;

export {
  Video,
  Home,
  Button,
  Content,
  ContentText,
  List,
  ListItem,
  Picture,
  HomeButton,
};
