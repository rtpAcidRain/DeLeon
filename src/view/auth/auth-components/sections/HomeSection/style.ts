import styled from 'styled-components';
import { device, size } from '../../../../../styles/auth/breackpoints';
import { SectionButton } from '../../../../../styles/auth/Buttons';

const Home = styled.div`
  font-size: 7px;
  width: 100%;
  padding: 2em;
  height: 100%;
  max-height: 560px;
  display: flex;
  margin: auto;
  position: relative;
  max-width: 230px;
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
    font-size: 12px;
    max-width: ${size.tablet}px;
  }
  @media (${device.laptop}) {
    font-size: 18px;
    align-items: center;
    max-width: 1046px;
    padding: 0 2em;
  }
  @media (${device.desktop}) {
    font-size: 22px;
    max-width: 1247px;
    max-height: 600px;
  }
`;

export const HomeButtons = styled.div`
  display: flex;
  max-width: 507px;
  gap: 60px;
  @media (${device.desktop}) {
    max-width: 640px;
  }
`;

const Buttons = styled.div`
  display: flex;
  max-width: 507px;
  justify-content: center;
  @media (${device.desktop}) {
    max-width: 640px;
  }
`;

const Button = styled(SectionButton)`
  font-size: 0.75em;
`;

const Content = styled.div`
  width: 100%;
`;

const ContentText = styled.div`
  & > *:nth-child(2) {
    margin-top: 1.1em;
    margin-bottom: 1.8em;
  }
  & > *:last-child {
    max-width: 700px;
    margin-top: 1.8em;
    margin-bottom: 3.4em;
  }
`;

const List = styled.ul`
  list-style-type: disc;
`;

const ListItem = styled.li`
  margin-bottom: 0.7em;
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
  right: -46%;
  top: 0;
  display: none;
  @media (${device.laptopL}) {
    display: block;
  }
`;

export { Video, Home, Buttons, Button, Content, ContentText, List, ListItem, Picture };
