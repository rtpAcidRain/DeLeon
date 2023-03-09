import { isDesktop } from "react-device-detect";
import Section from "../../layouts/Section";
import { H1 } from "../../UI/Heading";

import coin from "../../../auth-assets/images/cryptocoin.png";
import coinWebp from "../../../auth-assets/images/cryptocoin.webp";

import React, { FC } from "react";
import {
  Home,
  HomeButtons,
  HomeButton,
  Content,
  ContentText,
  List,
  ListItem,
  Picture,
} from "./style";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  device,
  deviceForHeight,
} from "../../../../../styles/auth/breackpoints";
import { TimerComponent } from "../../TimerComponent";
const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 40px;

  @media (${device.mobileL}) {
    font-size: 34px;
  }

  @media (${device.tablet}) {
    font-size: 40px;
    line-height: 49px;
  }
`;

const WrapperDiscount = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 48px;

  .time-image {
    max-width: 348px;
    max-height: 78px;
    height: auto;
    width: 100%;
  }

  @media (${device.laptop}) {
    flex-direction: row;
    gap: 28px;
  }

  ${!isDesktop &&
  `
  @media (${deviceForHeight.tablet}) and (max-height: 900px) {
    margin-bottom: 12px;
  }`}
`;

const DiscountPrice = styled.div`
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  color: #0ce364;
`;

const OriginPrice = styled.div`
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-decoration-line: line-through;
  color: #d01a1a;
`;

const Discount = styled.span`
  background: linear-gradient(
    88.35deg,
    #0ce364 0%,
    #18b7b2 52.92%,
    #24488c 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  font-weight: 800;
  font-size: 28px;

  @media (${device.mobileL}) {
    font-size: 40px;
  }

  @media (${device.tablet}) {
    font-size: 60px;
  }
`;

type Props = {
  ChangeSection: (idx: number) => void;
};

const HomeSection: FC<Props> = React.memo(({ ChangeSection }) => {
  return (
    <Section>
      <Home
        as={motion.div}
        initial={{ y: -20, scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 35,
        }}
      >
        <Content>
          <ContentText className="content__text">
            <H1>КриптоСтарт</H1>
            <Title>
              СКИДКА <Discount>-40%</Discount> НА САМЫЙ ПОЛНЫЙ ОБУЧАЮЩИЙ КУРС ПО
              ЗАРАБОТКУ НА КРИПТОВАЛЮТЕ
            </Title>
            <WrapperDiscount>
              <TimerComponent />
              <OriginPrice>25000₽</OriginPrice>
              <DiscountPrice>7500₽</DiscountPrice>
            </WrapperDiscount>
            <List className="list">
              <ListItem className="list__item">30 обучающих уроков</ListItem>
              <ListItem className="list__item">
                12 способов заработать на криптовалютном рынке
              </ListItem>
              <ListItem className="list__item">
                Домашние задания и кураторство 24/7
              </ListItem>
              <ListItem className="list__item">
                NFT сертификат о прохождении курса
              </ListItem>
            </List>
            <p className="text">
              После прохождения нашего курса ты перестанешь бояться и начнешь
              действовать!
            </p>
          </ContentText>
          <HomeButtons>
            <HomeButton onClick={() => ChangeSection(4)}>
              Программа курса
            </HomeButton>
            <HomeButton onClick={() => ChangeSection(5)}>
              Записаться на курс
            </HomeButton>
          </HomeButtons>
        </Content>
        <Picture>
          <picture>
            <source srcSet={coinWebp} type="image/webp" />
            <motion.img
              loading="lazy"
              decoding="async"
              width={890}
              height={810}
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 35,
              }}
              src={coin}
              alt="cryptoCoin"
            />
          </picture>
        </Picture>
      </Home>
    </Section>
  );
});

export default HomeSection;
