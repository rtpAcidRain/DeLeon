import styled from 'styled-components';
import { device } from './breackpoints';

const Button = styled.button`
  display: block;
  cursor: pointer;
`;

export const SectionButton = styled(Button)<{ disabled?: boolean }>`
  background: linear-gradient(88.35deg, #0CE364 0%, #18B7B2 52.92%, #24488C 100%);;
  font-style: normal;
  font-weight: 800;
  font-size: 0.9375em;
  border-radius: 0.533333333333em;
  line-height: 1.2em;
  padding: 0.9333333333333333em 2.266666666666667em;
  color: ${(props) => (props.disabled ? '#b3adad' : '#ffffff')};
  &:disabled {
    cursor: not-allowed;
  }
`;

export const SidebarButton = styled(Button)`
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  text-transform: uppercase;
  color: #585858;
  height: 40px; 
`;

export const SubscribeSidebarButton = styled(Button)`
  background: #8FD1F9;
  box-shadow: 0 0 13px #0058FF;
  border-radius: 10px;
  color: #292929;
  font-size: 20px;
  max-width: fit-content;
  margin: 0 auto;
  line-height: 24px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 8px 14px;
`;

const ArrowBut = styled(Button)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: 0;
  z-index: 9999;
  @media (${device.laptop}) {
    width: 45px;
  }
`;

const TopButton = styled(ArrowBut)`
  top: 25px;
  transform: translateX(50%);
`;

export const GiftButton = styled.button`
  position: fixed;
  right: 10px;
  bottom: 20px;
  outline: none;
  border: none;
  z-index: 1;
  
  img {
    display: block;
    height: auto;
    width: auto;
    max-height: 80px;
    max-width: 80px;
  }
`;

const BotButton = styled(ArrowBut)`
  bottom: 25px;
  transform: rotate(180deg) translateX(-50%);
`;

const SwiperBut = styled(ArrowBut)`
  width: 20px;
  top: 50%;
  @media (${device.mobileS}) {
    width: 25px;
  }
  @media (${device.mobileM}) {
    width: 30px;
  }
  @media (${device.mobileL}) {
    width: 35px;
  }
  @media (${device.tablet}) {
    width: 40px;
  }
  @media (${device.laptop}) {
    width: 45px;
  }
`;

const LeftButton = styled(SwiperBut)`
  transform: translateY(-50%) rotate(-90deg);
  left: 0;
`;
const RightButton = styled(SwiperBut)`
  left: unset;
  transform: translateY(-50%) rotate(90deg);
  right: 0;
`;

export { TopButton, BotButton, LeftButton, RightButton };
