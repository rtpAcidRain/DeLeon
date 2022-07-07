import React from 'react';
import Section from '../layouts/Section';
import Heading from '../UI/Heading';

import authorImage from '../../assets/images/author.png';
import { calendar, dollar, electricity, settings } from '../../assets/images/authorSection';

const AuthorSection: React.FC = React.memo(() => {
  return (
    <Section>
      <Heading>Автор курса</Heading>
      <div className="course-autor">
        <img className="course-author__image" src={authorImage} alt="author" />

        <div className="course-author__content">
          <div className="information">
            {' '}
            <Heading level={2}>Создатель</Heading>
            <div className="skill">Интелект</div>
            <div className="information__text text__container">
              <p className="text__item">
                Преподаватель курса знает, что такое фондовый рынок не понаслышке, это человек,
                познавший всю эту кухню изнутри.{' '}
              </p>
              <p className="text__item">
                После ухода с фондового рынка он приумножил свое состояние на криптовалютах в
                десятки раз.{' '}
              </p>
              <p className="text__item">
                Автор согласился для нас записать курс только оставаясь инкогнито, так как свою
                анонимность ценит выше любых денег.
              </p>
              <p className="text__item">
                В основе курса лежит его многолетний опыт который он самостоятельно получил на
                практике.{' '}
              </p>
              <p className="text__item">
                У вас есть возможность сократить этот длинный тернистый путь и сразу воспользоваться
                его готовыми проверенными решениями.
              </p>
            </div>
          </div>
          <div className="qualitis">
            <div className="quality quality--yello">
              <img className="quality__image" src={settings} alt="quality" />{' '}
              <div className="quality__text">
                <p className="text">Основной инструмент</p>
                <p className="text">Прибыль за 5 лет</p>
              </div>
            </div>
            <div className="quality quality--green">
              <img className="quality__image" src={dollar} alt="quality" />{' '}
              <div className="quality__text">
                <p className="text">Долгосрочное инвестирование</p>
                <p className="text">+22000%</p>
              </div>
            </div>
            <div className="quality quality--red">
              <img className="quality__image" src={electricity} alt="quality" />{' '}
              <div className="quality__text">
                <p className="text">Профиль риска</p>
                <p className="text">Лет на крипторынке</p>
              </div>
            </div>
            <div className="quality quality--purple">
              <img className="quality__image" src={calendar} alt="quality" />{' '}
              <div className="quality__text">
                <p className="text">Умеренно-агрессивный</p>
                <p className="text">5+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default AuthorSection;
