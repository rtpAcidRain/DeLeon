import React from 'react';
import Section from '../layouts/Section';
import { H2, H3 } from '../UI/Heading';

import authorImage from '../../auth-assets/images/author.png';
import authorImageWebp from '../../auth-assets/images/author.webp';
import MediaQuery from 'react-responsive';
import { device, size } from '../../../../styles/auth/breackpoints';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import star from '../../auth-assets/images/star.svg';
import {Button} from "./HomeSection/style";
import coinWebp from "../../auth-assets/images/cryptocoin.webp";

const Author = styled.div`
  font-size: 7px;
  border: 1px solid #375fbe;
  position: relative;
  width: 100%;
  display: flex;
  border-radius: 0.5em;
  padding: 2.4375em 0.875em 0.875em 2.0625em;
  margin: 2.75em auto;
  background: top -100px right 10px / 678.34px 610.56px no-repeat url(${star}),
    rgba(55, 95, 190, 0.3);
  
  .image {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  
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

  @media (${device.laptopL}) {
    padding-left: 2.625em;
    max-width: 1319px;
    max-height: 687px;
  }
`;

const Information = styled.div`
  width: 100%;
  
  .information__text {
    margin-top: 40px;
    margin-bottom: 40px;
    
    .text__item {
      font-size: 24px;
      line-height: 29px;
      color: #fff;
      
      .text__white {
        font-weight: 600;
        color: #fff;
      }
    }
    p:nth-child(1) {
      margin-bottom: 4px;
    }
    p:nth-child(2) {
      margin-bottom: 24px;
    }
  }
  
  @media (${device.tablet}) {
    padding-top: 40px;
    padding-left: 2.625em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  .button {
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    padding: 13px 40px;
    align-self: end;
  }
  
  .coin-image {
    width: 368px;
    height: 280px;
  }
  
  @media (${device.tablet}) {
    padding-left: 2.625em;
    
    .button {
      margin-bottom: 60px;
    }
  }
`;

const Container = styled.div`
  
  
  @media (${device.tablet}) {
    display: flex;
    flex-direction: column;
  }

  @media (${device.laptopL}) {
    padding-left: 400px;
  }
`;

const AuthorSection: React.FC = React.memo(() => {
  return (
    <Section>
      <H3>Автор курса</H3>
      <Author as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <MediaQuery minWidth={size.laptopL}>
          <picture className="image">
            <source height="100%" srcSet={authorImageWebp} type="image/webp" />
            <img
              loading="lazy"
              decoding="async"
              className="course-author__image"
              src={authorImage}
              alt="author"
            />
          </picture>
        </MediaQuery>

        <Container>
          <Information>
            <H2>Создатель</H2>
            <div className="information__text">
              <p className="text__item">
                <span className="text__white">Здесь я бы мог написать о себе все что угодно,</span>
                ведь я нахожусь под маской и ты не сможешь проверить эту информацию, поэтому,
              </p>
              <p className="text__item">чтобы заслужить твое доверие предлагаю тебе</p>
              <p className="text__item">
                <span className="text__white">посмотреть первый урок и самостоятельно сделать вывод о качестве информации которую я тебе даю</span>
              </p>
            </div>
          </Information>
          <Wrapper>
            <Button className="button">Забрать бесплатный урок</Button>
            <MediaQuery minWidth={size.tablet}>
              <picture className="coin-image">
                <source srcSet={coinWebp} type="image/webp" />
                <motion.img
                    loading="lazy"
                    decoding="async"
                    height="100%"
                    width="100%"
                    initial={{ rotate: 180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 35,
                    }}
                    src={coinWebp}
                    alt="cryptoCoin"
                />
              </picture>
            </MediaQuery>
          </Wrapper>
        </Container>
      </Author>
    </Section>
  );
});

export default AuthorSection;
