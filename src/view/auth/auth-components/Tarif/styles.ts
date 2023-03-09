import styled from "styled-components";
import { H4 } from "../UI/Heading";

import { SectionButton } from "../../../../styles/auth/Buttons";
import { device, deviceForHeight } from "../../../../styles/auth/breackpoints";

export type ColorsType = {
  lower: LevelColorType;
  middle: LevelColorType;
  max: LevelColorType;
};

export type LevelColorType = {
  bg: string;
  cl: string;
  circlebg: string;
};

export const colorsObj: ColorsType = {
  lower: {
    bg: "rgba(19, 58, 133, 0.1)",
    cl: "#375fbe",
    circlebg: "#182236",
  },
  middle: {
    bg: "rgba(182, 24, 222, 0.1)",
    cl: "#b618de",
    circlebg: "#3a1e31",
  },
  max: {
    bg: "rgba(255, 251, 44, 0.1)",
    cl: "#fffd93",
    circlebg: "#3a3519",
  },
};

export const TarifWrapper = styled.article<{ colors: LevelColorType }>`
  padding: 2.8125em 0.625em 1.0625em;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(7px);
  border-radius: 0.5em;
  position: relative;
  background: ${(props) => props.colors.bg};

  @media (${device.tablet}) {
    height: 640px;
  }

  @media (${device.laptop}) {
    height: 100%;
  }

  @media (${deviceForHeight.tablet}) and (max-height: 900px) and (${device.laptop}) {
    padding: 0.4em 0.625em;
  }
`;

export const Dec = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 0;
  ${(props) => (props.left ? "left: 24px" : "right: 24px")};
`;

export const TarifContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const IconWrapper = styled.div<{ colors: LevelColorType }>`
  margin: auto;
  z-index: 2;
  width: 127px;
  height: 127px;
  border-radius: 50%;
  background-color: ${(props) => props.colors.circlebg};
  border: 5px solid ${(props) => props.colors.circlebg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div<{ colors: LevelColorType }>`
  position: relative;
  text-align: center;
  width: 153px;
  height: 153px;
  border-radius: 50%;
  background: ${(props) => props.colors.circlebg};
  margin: 11px auto 0;
  display: flex;
  :before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(
      180deg,
      ${(props) => props.colors.cl},
      #ffffff 49.48%,
      ${(props) => props.colors.cl} 100%
    );
    border-radius: 50%;
    z-index: -1;
  }
  :after {
    content: "";
    position: absolute;
    top: 11px;
    bottom: 11px;
    left: 11px;
    right: 11px;
    background: linear-gradient(
      180deg,
      ${(props) => props.colors.cl},
      #ffffff 49.48%,
      ${(props) => props.colors.cl} 100%
    );
    border-radius: 50%;
    z-index: 1;
  }

  @media (${deviceForHeight.tablet}) and (max-height: 900px) and (${device.laptop}) {
    width: 130px;
    height: 130px;
  }
`;

export const Header = styled.div`
  margin-bottom: 9px;
`;

export const Main = styled.main`
  margin-bottom: 5px;
`;

export const ItemModule = styled.li`
  display: flex;
  align-items: center;
  max-width: 266px;
  border: 1px solid #fff;
  margin: auto;
  :not(:last-child) {
    margin-bottom: 11px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 11px;
  }
`;

export const TextModule = styled.p`
  position: relative;
  width: 100%;
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1.25em;
  padding-left: 24px;

  color: #ffffff;

  .title {
    cursor: pointer;
    border-bottom: 1px solid #fff;
  }

  .arrow-module {
    margin-left: 4px;
  }

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Text = styled.p`
  position: relative;
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1.25em;
  color: #ffffff;
  padding-left: 24px;

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Price = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 1.3125em;
  line-height: 1.238095238095238em;
  margin-bottom: 4px;
  color: #8f8b8b;
  * {
    color: #8f8b8b;
  }
`;

export const Sale = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 1.125em;
  line-height: 1.222222222222222em;
  margin-bottom: 11px;
  color: #ffffff;
`;

export const Button = styled(SectionButton)`
  font-size: 0.8125em;
  width: 100%;
  padding: 0.6923076923076923em 0;
`;

export const Heading = styled(H4)<{ colors: LevelColorType }>`
  background: linear-gradient(
    180deg,
    ${(props) => props.colors.cl} 0%,
    #ffffff 144.12%
  );

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  text-align: center;
`;
