import { isDesktop } from 'react-device-detect';
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
    font-size: 16px;
    align-items: center;
    max-width: 1046px;
    padding: 0 2em;
  }
`;

const Buttons = styled.div`
  display: flex;
  max-width: 507px;
  justify-content: center;
`;

const Button = styled(SectionButton)`
  font-size: 0.75em;
  :first-child {
    margin-right: 3.66666667em;
  }
`;

const Content = styled.div`
  height: 100%;
  max-width: 533px;
  @media (${device.laptop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
  }
`;

const ContentText = styled.div`
  & > *:nth-child(2) {
    margin-top: 1.1em;
    margin-bottom: 1.8em;
  }
  & > *:last-child {
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

const Picture = styled.div`
  display: none;
  * {
    width: 100%;
  }
  @media (${device.tablet}) {
    display: block;
  }
`;

export { Picture, Home, Buttons, Button, Content, ContentText, List, ListItem };
