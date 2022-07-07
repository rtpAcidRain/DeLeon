import Section from '../layouts/Section';
import Heading from '../UI/Heading';
import SectionButtons from '../UI/SectionButtons';

import coin from '../../assets/images/cryptocoin.png';
import React, { FC } from 'react';

type Props = {
  ChangeSection: (idx: number) => void;
};

const HomeSection: FC<Props> = React.memo(({ ChangeSection }) => {
  return (
    <Section>
      <div className="home-section">
        <div className="home-section__content content--left">
          <div className="content__text">
            <Heading level={1}>КриптоСтарт</Heading>
            <p className="text">
              Самый полный обучающий курс по заработку на криптовалютном рынке.
            </p>
            <ul className="list">
              <li className="list__item">30 обучающих уроков</li>
              <li className="list__item">12 способов заработать на криптовалютном рынке</li>
              <li className="list__item">Домашние задания и кураторство 24/7</li>
              <li className="list__item">NFT сертификат о прохождении курса</li>
            </ul>
            <p className="text">
              После прохождения нашего курса ты перестанешь бояться и начнешь действовать!
            </p>
          </div>
          <div className="buttons">
            <SectionButtons onClick={() => ChangeSection(4)}>Программа курса</SectionButtons>
            <SectionButtons onClick={() => ChangeSection(5)}>Записаться на курс</SectionButtons>
          </div>
        </div>
        <div className="home-section__content content--right">
          <picture>
            <img src={coin} alt="cryptoCoin" />
          </picture>
        </div>
      </div>
    </Section>
  );
});

export default HomeSection;
