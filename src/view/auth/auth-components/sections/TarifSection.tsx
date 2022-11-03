import React from 'react';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';
import Tarif, { TarifENUMS } from '../Tarif';
import styled from 'styled-components';

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
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 77px;
  margin-left: 229px;
  padding: 0 50px;
  @media screen and (max-width: 1439px) {
    margin: auto;
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
