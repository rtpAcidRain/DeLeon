import React, {FC} from 'react';
import {H2} from "../Heading";
import {isDesktop} from "react-device-detect";
import {device} from "../../../../../styles/auth/breackpoints";
import logo from "../../../auth-assets/images/logo.png";
import logoMobile from "../../../auth-assets/images/logo-mobile.png";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  background: linear-gradient(138.6deg, #3562B8 -0.11%, #18B7B2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  flex-direction: column;
  margin-bottom: 12px;
  
  .link {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
    border-image: linear-gradient(138.6deg, #3562B8 -0.11%, #18B7B2 100%);
    border-bottom: 1px solid transparent;
    -moz-border-image: -moz-linear-gradient(138.6deg, #3562B8 -0.11%, #18B7B2 100%);
    -webkit-border-image: -webkit-linear-gradient(138.6deg, #3562B8 -0.11%, #18B7B2 100%);
    border-image-slice: 1;
  }

  @media (${device.laptop}) {
    flex-direction: row;
    align-items: center;
  }
`;

const WrapperCoins = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  @media (${device.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (${device.laptop}) {
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  
  .item-coin-image {
    width: 44px;
    height: 44px;
  }

  @media (${device.laptop}) {
    .item-coin-image {
      width: 66px;
      height: 66px;
    }
  }
`;

const Price = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 28px;
  line-height: 49px;
  white-space: nowrap;

  @media (${device.laptop}) {
    font-size: 40px;
  }
`

const Text = styled.div`
  max-height: 368px;
  min-height: 368px;
  overflow-y: scroll;
  width: 100%;
  background-color: #fff; 
  height: 100%;
  color: #000;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding: 12px 8px;
  margin-bottom: 24px;
`;

interface PostItemProps {
    title: string
    link: string
    text: string
}

const PostItem: FC<PostItemProps> = ({title, text, link}) => {
    return (
        <Wrapper>
            <Title>
                <H2>{title}</H2>
                <a className="link" href={link}>оригинал статьи</a>
            </Title>
            <Text>{text}</Text>
            <WrapperCoins>
                <Item>
                    <picture className="item-coin-image">
                        {isDesktop && <source media={device.laptop} srcSet={logo} />}
                        <img height="100%" width="100%" loading="lazy" decoding="async" src={logoMobile} alt="logo" />
                    </picture>
                    Монета
                </Item>
                <Item><Price color="#0CE364">3000</Price>Стоимость в момент новости</Item>
                <Item><Price color="#D01A1A">500</Price>Стоимость при покупке</Item>
                <Item><Price color="#DFE30C">3 000 000</Price>Заработок</Item>
            </WrapperCoins>
        </Wrapper>
    );
};

export default PostItem;