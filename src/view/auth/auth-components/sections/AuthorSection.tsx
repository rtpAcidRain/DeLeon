import React from 'react';
import Section from '../layouts/Section';
import { H2, H3 } from '../UI/Heading';

import authorImage from '../../auth-assets/images/author.png';
import authorImageWebp from '../../auth-assets/images/author.webp';
import { calendar, dollar, electricity, settings } from '../../auth-assets/images/authorSection';
import MediaQuery from 'react-responsive';
import { device, size } from '../../../../styles/auth/breackpoints';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';
import star from '../../auth-assets/images/star.svg';

const Author = styled.div`
  font-size: 7px;
  border: 1px solid #375fbe;
  width: 100%;
  border-radius: 0.5em;
  display: flex;
  overflow: hidden;
  padding: 2.4375em 0.875em 0 2.0625em;
  max-width: 230px;
  background: top -62px right 47px / 678.34px 610.56px no-repeat url(${star}),
    rgba(55, 95, 190, 0.3);
  margin: 2.75em auto 0;

  @media (${device.mobileS}) {
    font-size: 9px;
    max-width: ${size.mobileS}px;
  }
  @media (${device.mobileM}) {
    font-size: 11px;
    max-width: ${size.mobileM}px;
  }
  @media (${device.mobileL}) {
    font-size: 13px;
    max-width: ${size.mobileL}px;
  }
  @media (${device.tablet}) {
    max-width: ${size.tablet}px;
  }

  @media (${isMobile ? device.laptop : 'min-width: 1302px'}) {
    font-size: 16px;
    max-width: 973px;
  }
`;

const Information = styled.div`
  margin-bottom: 1.6875em;
  .text {
    &__container {
      margin-top: 1.4375em;
    }
    &__item {
      margin-bottom: 1em;
      font-weight: 500;
      font-size: 0.9375em;
      line-height: 1.2em;
    }
  }
  @media (${device.tablet}) {
    padding-left: 2.625em;
  }
`;

const Skill = styled.div`
  font-weight: 800;
  font-size: 0.625em;
  margin-top: 2.4em;
  line-height: 1.2em;
  background: #58e0d8;
  border-radius: 0.8em;
  letter-spacing: 0.01em;
  padding: 0.7em 0.9em 0.8em 1.5em;
  max-width: 9em;
  color: #202c49;
`;

const Container = styled.div`
  @media (${device.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

const Qualitis = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding-bottom: 2.42857142857em;
  .quality {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__image {
      height: 1.5625em;
    }
    &__text {
      font-weight: 600;
      font-size: 0.625em;
      line-height: 1.2em;
      width: 100%;
      margin-left: 0.7em;
      .text:first-child {
        margin-bottom: 0.7em;
      }
    }
    &--yello {
      * {
        color: #fbbf24;
      }
    }
    &--green {
      * {
        color: #34d399;
      }
    }
    &--red {
      * {
        color: #f87171;
      }
    }
    &--purple {
      * {
        color: #a78bfa;
      }
    }
  }
  @media (${device.tablet}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: auto;
  }
`;

const AuthorSection: React.FC = React.memo(() => {
  return (
    <Section>
      <H3>Автор курса</H3>
      <Author as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <MediaQuery minWidth={size.tablet}>
          <picture>
            <source srcSet={authorImageWebp} type="image/webp" />
            <img className="course-author__image" src={authorImage} alt="author" />
          </picture>
        </MediaQuery>

        <Container>
          <Information>
            {' '}
            <H2>Создатель</H2>
            <Skill>Интеллект</Skill>
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
          </Information>
          <Qualitis>
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
          </Qualitis>
        </Container>
      </Author>
    </Section>
  );
});

export default AuthorSection;
