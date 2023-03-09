import { isDesktop } from "react-device-detect";
import styled from "styled-components";
import { device, deviceForHeight } from "../../../../styles/auth/breackpoints";
import { H6 } from "../UI/Heading";

export const Sidebar = styled.aside`
  height: 80px;
  right: 0;
  z-index: 2;
  background: #212d4a;
  font-size: 12px;
  top: 0;
  left: 0;
  position: fixed;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (${device.tablet}) {
    font-size: 14px;
  }
  ${isDesktop &&
  ` @media (${device.laptop}) {
    position: static;
    width: 100%;
    max-width: 300px;
    height: 100vh;
    right: unset;
    display: flex;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9px);
    bottom: 0;
    transition: left 0.3s;
    font-size: 16px;
    overflow: auto;
  }`}

  @media (${device.laptopL}) {
    max-width: 330px;
  }
`;

export const SideContainer = styled.div`
  padding: 17px 0 0;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  ${
    isDesktop &&
    `  @media (${device.laptop}) {
    width: 100%;
    height: 100%;
    max-height: 800px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 60px 30px;
  }`
  }

  @media (${
    deviceForHeight.tablet
  }) and (max-height: 900px) and (min-width: 1024px) {
  padding: 0 30px;
}
}
`;

export const Logo = styled.div`
  max-width: 102px;
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    width: 50%;
  }

  ${isDesktop &&
  `   @media (${device.laptop}) {
    img {
      width: 100%;
    }
  }
      `}
`;

export const Heading = styled(H6)`
  font-family: "Audiowide", cursive;
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
  margin-left: 24px;
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
  left: ${(props) => (!props.show ? "-100%" : "0%")};
  background: rgba(0, 0, 0, 0.5);

  ${isDesktop &&
  `   @media (${device.laptop}) {
      width: 100%;
      height: 100%;
      position: static;
      background: unset;
      left: unset;
      top: unset;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }`}
`;

export const Navbar = styled.nav`
  background: #212d4a;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  ${isDesktop &&
  `   @media (${device.laptop}) {
      padding-top: 0;
      background: none;
 
      height: 100%;
      max-height: 416px;
      color: #fff;
      justify-content: space-between;
      margin-top: 2.5em; 
      }`}

  @media (${device.laptop}) {
    overflow: visible;
    padding-top: 80px;
  }

  @media (${deviceForHeight.tablet}) and (max-height: 900px) and (${device.laptop}) {
    padding-top: 0;
    margin-top: 20px;
  }
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
  font-size: 20px;
  line-height: 40px;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0 20px;
  max-width: 300px;
  width: max-content;
  border-radius: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  filter: ${(props) => props.active && "drop-shadow(0px 0px 7px #0058FF)"};
  color: ${(props) => (props.active ? "#fff" : "#585858")};
  border: ${(props) =>
    props.active ? "2px solid #8FD1F9" : "2px solid transparent"};
  transition: all 0.1s linear;
  white-space: nowrap;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  margin-top: 8px;

  @media (${device.tablet}) {
    margin-top: 50px;
  }

  @media (${deviceForHeight.tablet}) and (max-height: 900px) and (${device.laptop}) {
    margin-top: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 19px;
`;

export const Mail = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  text-transform: uppercase;
  color: #585858;
  height: 40px;
`;

export const MailIcon = styled.svg`
  margin-right: 8px;
`;
