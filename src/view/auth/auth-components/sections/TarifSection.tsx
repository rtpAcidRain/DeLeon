import React from "react";
import Section from "../layouts/Section";
import { H3 } from "../UI/Heading";
import Tarif, { TarifENUMS } from "../Tarif";
import styled from "styled-components";
import {
  device,
  deviceForHeight,
  size,
} from "../../../../styles/auth/breackpoints";

const tarifsData = [
  {
    id: 1,
    title: TarifENUMS.LOWERLEVEL,
    content: [
      "Первые 2 главы курса (Основной модуль)",
      "Чат группы с куратором",
      "Проверка практических заданий",
      "Полезные материалы в формате pdf",
      "+ 3 месяца доступа к урокам по завершению курса",
    ],
    prise: "15000₽",
    sale: "7500₽",
  },
  {
    id: 2,
    title: TarifENUMS.MIDDLELEVEL,
    content: [
      "Все что есть в тарифе “Хомяк” + глава 3 (уроки 20 - 29)",
      "Доступ в закрытый клуб выпускников",
      "Подарки от спонсоров*",
      "1 год доступа к урокам по завершению курса",
      "NFT - сертификат о полном прохождении курса",
    ],
    prise: "25000₽",
    sale: "12500₽",
  },
  {
    id: 3,
    title: TarifENUMS.MAXLEVEL,
    content: [
      "Все что есть в тарифе “Акула”",
      "Доступ на год в закрытый инвест-клуб De Leon",
      "Приватный онлайн-разбор ошибок от эксперта",
      "3 сессии личного общения с преподавателем курса",
      "Выездной 3-дневный мастермайнд с автором курса",
    ],
    prise: "доступно 0 из 10",
    sale: "580000₽",
  },
];

const Tarifs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  //max-width: 230px;
  width: 100%;
  gap: 20px;
  margin: auto;

  @media (${device.mobileS}) {
    max-width: ${size.mobileS}px;
  }
  @media (${device.mobileM}) {
    max-width: ${size.mobileM}px;
  }
  @media (${device.mobileL}) {
    max-width: ${size.mobileL}px;
  }
  @media (${device.tablet}) {
    max-width: ${size.tablet}px;
    font-size: 16px;
    flex-direction: row;
    justify-content: space-around;
    gap: 33px;
  }
  @media (${device.laptop}) {
    max-width: ${size.laptop}px;
    margin: 51px auto auto auto;
    font-size: 20px;
  }

  @media (${device.laptopL}) {
    margin: 51px auto auto auto;
    font-size: 20px;
  }

  @media (${deviceForHeight.tablet}) and (max-height: 900px) and (${device.laptop}) {
    margin-top: 12px;
  }
`;

const TarifSection: React.FC = React.memo(() => {
  return (
    <Section>
      <H3>Тарифы</H3>
      <Tarifs>
        {tarifsData.map((el) => (
          <Tarif
            key={el.id}
            content={el.content}
            title={el.title}
            prise={el.prise}
            sale={el.sale}
          />
        ))}
      </Tarifs>
    </Section>
  );
});

export default TarifSection;
