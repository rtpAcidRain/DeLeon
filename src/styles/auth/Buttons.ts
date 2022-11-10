import styled from 'styled-components';
import { device } from './breackpoints';

const Button = styled.button`
  z-index: 9998;
  display: block;
  cursor: pointer;
`;

export const SectionButton = styled(Button)<{ disabled?: boolean }>`
  background: ${(props) =>
    props.disabled
      ? 'linear-gradient(110.51deg, #626262 -12.74%, #464749 90.2%)'
      : 'linear-gradient(110.51deg, #00fff0 -12.74%, #3362be 90.2%)'};
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
  border: 1px solid rgba(0, 255, 240, 0.6);
  border-radius: 6px;
  background: none;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.625em;
  line-height: 1.2em;
  padding: 0.9em 2em;
  margin-bottom: 2em;
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
`;

const BotButton = styled(ArrowBut)`
  bottom: 25px;
  transform: rotate(180deg);
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
