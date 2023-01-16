import Section from "../../layouts/Section";
import { H1 } from "../../UI/Heading";

import coin from "../../../auth-assets/images/cryptocoin.png";
import coinWebp from "../../../auth-assets/images/cryptocoin.webp";
import timer from "../../../auth-assets/images/timer.png";

import React, { FC } from "react";
import {
  Home,
  HomeButtons,
  Button,
  Content,
  ContentText,
  List,
  ListItem,
  Picture,
} from "./style";
import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../../../../styles/auth/breackpoints";

const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin-bottom: 28px;

  @media (${device.mobileL}) {
    font-size: 34px;
  }

  @media (${device.tablet}) {
    font-size: 40px;
    line-height: 49px;
    text-align: start;
  }
`;

const WrapperDiscount = styled.div`
  display: flex;
  align-items: center;
  margin: 28px 0;
  flex-direction: column;
  gap: 14px;

  .time-image {
    max-width: 348px;
    max-height: 78px;
    height: auto;
    width: 100%;
  }

  @media (${device.tablet}) {
    flex-direction: row;
    gap: 28px;
  }
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
      <Home>
        <Content
          as={motion.div}
          initial={{ y: -20, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 35,
          }}
        >
          <ContentText className="content__text">
            <H1>КриптоСтарт</H1>
            <Title>
              СКИДКА <Discount>-40%</Discount> НА САМЫЙ ПОЛНЫЙ ОБУЧАЮЩИЙ КУРС ПО
              ЗАРАБОТКУ НА КРИПТОВАЛЮТЕ
            </Title>
            <WrapperDiscount>
              <img className="time-image" alt="" src={timer} />
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
            <Button onClick={() => ChangeSection(4)}>Программа курса</Button>
            <Button onClick={() => ChangeSection(5)}>Записаться на курс</Button>
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
