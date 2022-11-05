import { isDesktop } from 'react-device-detect';
import styled from 'styled-components';
import { device } from '../../../../styles/auth/breackpoints';
import { H6 } from '../UI/Heading';

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  right: 0;
  background: #212d4a;
  z-index: 9999;
  font-size: 12px;
  @media (${device.tablet}) {
    font-size: 14px;
  }
  ${isDesktop &&
  ` @media (${device.laptop}) {
    width: 100%;
    max-width: 223px;
    height: 100vh;
    right: unset;
    display: flex;
    background: rgba(21, 21, 21, 0.07);
    bottom: 0;
    z-index: 9999;
    backdrop-filter: blur(7px);
    transition: left 0.3s;
    font-size: 16px;
    overflow: auto;
  }`}
`;

export const SideContainer = styled.div`
  padding: 17px 0 0;
  position: relative;
  ${isDesktop &&
  `  @media (${device.laptop}) {
    width: 100%;
    height: 100%;
    max-height: 800px;
    margin: auto 0;
    padding: 15px 0 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 15px 0 25px;
  }`}
`;

export const Logo = styled.div`
  max-width: 102px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Heading = styled(H6)`
  font-family: 'Audiowide', cursive;
  text-align: center;
  display: none;
  ${isDesktop &&
  ` @media (${device.laptop}) {
    display: block;
  }`}
`;

export const Burger = styled.button`
  display: block;
  cursor: pointer;
  position: absolute;
  top: 24px;
  left: 23px;
  z-index: 2;
  ${isDesktop &&
  `   @media (${device.laptop}) {
      display: none;
    }`}
`;

export const Controls = styled.div<{ show: boolean }>`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  transition: left 0.5s;
  left: ${(props) => (!props.show ? '-100%' : '0%')};
  background: rgba(0, 0, 0, 0.5);

  ${isDesktop &&
  `   @media (${device.laptop}) {
      width: 100%;
      height: 100%;
      position: static;
      background: unset;
      left: unset;
      top: unset;
      padding-left: 30px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }`}
`;

export const Navbar = styled.nav`
  padding-top: 80px;
  background: #212d4a;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${isDesktop &&
  `   @media (${device.laptop}) {
      padding-top: 0;
      background: none;
      height: 100%;
      max-height: 416px;
      color: #fff;
      justify-content: start;
      margin-top: 2.5em; 
      }`}
`;

export const NavItems = styled.ol`
  counter-reset: item;
  list-style-type: none;
  margin: 0 auto;
  ${isDesktop &&
  `   @media (${device.laptop}) {
    margin: 0;
  }
      `}
`;

export const Item = styled.li<{ active: boolean }>`
  margin-bottom: 0.75em;
  font-size: 1em;
  font-weight: ${(props) => (!props.active ? '500' : '800')};
  line-height: 1.25em;
  cursor: pointer;
  color: ${(props) => (!props.active ? ' #c8c8c8' : '#ffffff')};
  transition: all 0.1s linear;
  ::before {
    content: counter(item, decimal-leading-zero) ' ';
    counter-increment: item;
  }
`;

export const Buttons = styled.div`
  margin: 0 auto;
  ${isDesktop &&
  `   @media (${device.laptop}) {
    margin: 1em 0 0;
  }
      `}
`;

export const Mail = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.8125em;
  font-weight: 500;
  line-height: 1.230769230769231em;
  color: #ffffff;
`;

export const MailIcon = styled.svg`
  margin-right: 8px;
`;
