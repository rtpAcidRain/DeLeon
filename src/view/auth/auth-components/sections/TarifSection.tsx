import React from 'react';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';
import Tarif, { TarifENUMS } from '../Tarif';
import styled from 'styled-components';
import { device, size } from '../../../../styles/auth/breackpoints';
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';

const tarifsData = [
  {
    id: 1,
    title: TarifENUMS.LOWERLEVEL,
    content: [
      'Первые 2 главы курса (Основной модуль)',
      'Чат группы с куратором',
      'Проверка практических заданий',
      'Полезные материалы в формате pdf',
      '+ 3 месяца доступа к урокам по завершению курса',
    ],
    prise: '15000₽',
    sale: '7500₽',
  },
  {
    id: 2,
    title: TarifENUMS.MIDDLELEVEL,
    content: [
      'Все что есть в тарифе “Хомяк” + глава 3 (уроки 20 - 29)',
      'Доступ в закрытый клуб выпускников',
      'Подарки от спонсоров*',
      '1 год доступа к урокам по завершению курса',
      'NFT - сертификат о полном прохождении курса',
    ],
    prise: '25000₽',
    sale: '12500₽',
  },
  {
    id: 3,
    title: TarifENUMS.MAXLEVEL,
    content: [
      'Все что есть в тарифе “Акула”',
      'Доступ на год в закрытый инвест-клуб De Leon',
      'Приватный онлайн-разбор ошибок от эксперта',
      '3 сессии личного общения с преподавателем курса',
      'Выездной 3-дневный мастермайнд с автором курса',
    ],
    prise: 'доступно 0 из 10',
    sale: '580000₽',
  },
];

const Tarifs = styled.div`
  margin-top: 51px;
  display: grid;
  row-gap: 33px;
  font-size: 10px;
  margin: auto;
  max-width: 230px;
  @media (${device.mobileS}) {
    font-size: 11px;
    max-width: ${size.mobileS}px;
  }
  @media (${device.mobileM}) {
    font-size: 12px;
    max-width: ${size.mobileM}px;
  }
  @media (${device.mobileL}) {
    font-size: 14px;
    max-width: ${size.mobileL}px;
  }
  @media (${device.tablet}) {
    font-size: 15px;
    max-width: ${size.tablet}px;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 33px;
  }
  @media (${isMobile ? device.laptop : 'min-width: 1302px'}) {
    font-size: 16px;
    max-width: ${size.laptop}px;
    gap: 77px;
  }
`;

const TarifSection: React.FC = React.memo(() => {
  return (
    <Section>
      <H3>Тарифы</H3>
      <Tarifs
        as={motion.div}
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
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
