import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";

import {
  LowerIco,
  MiddleIco,
  MaxIco,
  RightDec,
  LeftDec,
} from "../../auth-assets/images/tarif";
import Module from "../UI/Module/Module";
import { isOpenFreeLessonModalAtom } from "../UI/FreeLessonModal/FreeLessonModal";

import { TarifStar } from "../../auth-assets/svg/icons";
import {
  colorsObj,
  Dec,
  Header,
  Heading,
  Icon,
  Item,
  LevelColorType,
  Main,
  TarifContainer,
  TarifWrapper,
  Text,
  IconWrapper,
  Footer,
  Price,
  Sale,
  Button,
} from "./styles";
import { motion } from "framer-motion";

export enum TarifENUMS {
  LOWERLEVEL = "Хомяк",
  MIDDLELEVEL = "Акула",
  MAXLEVEL = "Кит",
}

type Props = {
  title: TarifENUMS;
  content: string[];
  prise: string;
  sale: string;
};

const Tarif: React.FC<Props> = React.memo(({ title, content, prise, sale }) => {
  const [colors, setColors] = useState<LevelColorType>(colorsObj.lower);
  const [, setIsOpenModal] = useAtom(isOpenFreeLessonModalAtom);

  const buyTarif = () => setIsOpenModal(true);

  useEffect(() => {
    if (title === TarifENUMS.MIDDLELEVEL) {
      return setColors(colorsObj.middle);
    }
    if (title === TarifENUMS.MAXLEVEL) {
      return setColors(colorsObj.max);
    }
    // eslint-disable-next-line
  }, []);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <TarifWrapper
      colors={colors}
      as={motion.article}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      variants={item}
    >
      <Dec>
        <RightDec
          color1={
            title === TarifENUMS.LOWERLEVEL
              ? "#375FBE"
              : title === TarifENUMS.MIDDLELEVEL
              ? "#B618DE"
              : "#FED900"
          }
          id={
            title === TarifENUMS.LOWERLEVEL
              ? "65656522"
              : title === TarifENUMS.MIDDLELEVEL
              ? "12123123"
              : "79846155"
          }
        />
      </Dec>
      <Dec left>
        <LeftDec
          color1={
            title === TarifENUMS.LOWERLEVEL
              ? "#375FBE"
              : title === TarifENUMS.MIDDLELEVEL
              ? "#B618DE"
              : "#FED900"
          }
          id={
            title === TarifENUMS.LOWERLEVEL
              ? "65656522"
              : title === TarifENUMS.MIDDLELEVEL
              ? "12123123"
              : "79846155"
          }
        />
      </Dec>
      <TarifContainer>
        <Header>
          <Heading colors={colors}>{title}</Heading>
          <Icon colors={colors}>
            <IconWrapper colors={colors}>
              {title === TarifENUMS.LOWERLEVEL ? (
                <LowerIco />
              ) : title === TarifENUMS.MIDDLELEVEL ? (
                <MiddleIco />
              ) : (
                <MaxIco />
              )}
            </IconWrapper>
          </Icon>
        </Header>
        <Main>
          <ul>
            {title !== TarifENUMS.LOWERLEVEL ? (
              <>
                <Item>
                  <Module
                    contentTitle={"Модуль 1. Базовый"}
                    module={1}
                    color={title === TarifENUMS.MIDDLELEVEL ? "middle" : "max"}
                    title={"Модуль 1 "}
                  />
                </Item>
                <Item>
                  <Module
                    contentTitle={"Модуль 2. Продвинутый"}
                    module={2}
                    color={title === TarifENUMS.MIDDLELEVEL ? "middle" : "max"}
                    title={"Модуль 2"}
                  />
                </Item>
                <Item>
                  <Module
                    contentTitle={"Модуль 3. Гуру Криптовалюты"}
                    module={3}
                    color={title === TarifENUMS.MIDDLELEVEL ? "middle" : "max"}
                    title={"Модуль 3"}
                  />
                </Item>
              </>
            ) : (
              <>
                <Item>
                  <Module
                    contentTitle={"Модуль 1. Базовый"}
                    module={1}
                    color={"lower"}
                    title={"Модуль 1 "}
                  />
                </Item>
                <Item>
                  <Module
                    contentTitle={"Модуль 2. Продвинутый"}
                    module={2}
                    color={"lower"}
                    title={"Модуль 2"}
                  />
                </Item>
              </>
            )}
            {content.map((el, i) => (
              <Item key={i}>
                <Text className="text">
                  <TarifStar color={colors.cl} />
                  {el}
                </Text>
              </Item>
            ))}
          </ul>
        </Main>
        <Footer>
          <Price>
            {title === TarifENUMS.MAXLEVEL ? prise : <s>{prise}</s>}
          </Price>
          <Sale>{sale}</Sale>
          {title === TarifENUMS.MAXLEVEL ? (
            <Button disabled>SOLD OUT</Button>
          ) : (
            <Button onClick={buyTarif}>Купить</Button>
          )}
        </Footer>
      </TarifContainer>
    </TarifWrapper>
  );
});
export default Tarif;
