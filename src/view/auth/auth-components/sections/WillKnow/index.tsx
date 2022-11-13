import React from 'react';
import Section from '../../layouts/Section';
import { H3 } from '../../UI/Heading';

import line from '../../../auth-assets/images/willKnow/dashes.png';
import lineWebp from '../../../auth-assets/images/willKnow/dashes.webp';

import {
  ArchIco,
  Bitcoin,
  Wallet,
  Nft,
  Safety,
  Operation,
  Mining,
} from '../../../auth-assets/images/willKnow';

import styled from 'styled-components';
import Stand from './Stand';
import { device } from '../../../../../styles/auth/breackpoints';
import { isDesktop, isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';

const WillKnowWrapper = styled.div`
  font-size: 7px;
  position: relative;

  margin: auto;
  @media (${device.mobileM}) {
    font-size: 10px;
  }
  @media (${device.tablet}) {
    font-size: 18px;
  }
  ${isMobile &&
  `@media (min-width: 1134px){
    left: -97px;
  }`}
  ${isDesktop &&
  `@media (min-width: 1360px){
    left: -97px;
  }`}
`;

const Composition = styled.div`
  width: 208px;
  height: 136px;
  margin-top: 25px;

  position: relative;
  .line {
    position: absolute;
    width: 104px;
    &--1 {
      top: 0;
      left: 41.46px;
    }
    &--2 {
      top: 35.7px;
      left: 0;
    }
    &--3 {
      right: 41.16px;
      bottom: 0;
    }
    &--4 {
      right: 0;
      bottom: 34.81px;
    }
    @media (${device.mobileM}) {
      width: 178px;
      &--1 {
        left: 70.7px;
      }
      &--2 {
        top: 60.37px;
      }
      &--3 {
        right: 70.2px;
      }
      &--4 {
        right: 0;
        bottom: 58.87px;
      }
    }
    @media (${device.tablet}) {
      width: 355px;
      &--1 {
        left: 141px;
      }
      &--2 {
        top: 121px;
      }
      &--3 {
        right: 140px;
      }
      &--4 {
        bottom: 118px;
      }
    }
  }

  .arch {
    position: absolute;
    width: 14px;
    &--1 {
      top: 29.8px;
      right: 31.17px;
      transform: scale(-1, 1);
    }
    &--2 {
      right: 27.34px;
      bottom: 36.29px;
    }
    &--3 {
      top: 85.85px;
      right: 124.96px;
      transform: scale(-1, 1);
    }
    @media (${device.mobileM}) {
      width: 23.57px;
      &--1 {
        top: 50.39px;
        right: 53.15px;
      }
      &--2 {
        top: 121px;
        right: 46.63px;
      }
      &--3 {
        top: 145.18px;
        right: 213.1px;
      }
    }
    @media (${device.tablet}) {
      width: 47px;
      &--1 {
        top: 101px;
        right: 106px;
      }
      &--2 {
        top: 243px;
        right: 93px;
      }
      &--3 {
        top: 291px;
        right: 425px;
      }
    }
  }

  div {
    .stand {
      &:nth-child(1) {
        top: 32.7px;
        left: 93.5px;
        @media (${device.mobileM}) {
          top: 54.7px;
          left: 164.5px;
        }
        @media (${device.tablet}) {
          top: 120.7px;
          left: 325.5px;
        }
      }
      &:nth-child(2) {
        top: -5.16px;
        left: 43.58px;

        @media (${device.mobileM}) {
          top: -3.16px;
          left: 74.58px;
        }
        @media (${device.tablet}) {
          top: 0px;
          left: 149.58px;
        }
      }
      &:nth-child(3) {
        top: 1.38px;
        right: 50.98px;
        @media (${device.mobileM}) {
          top: 6.38px;
          right: 92.98px;
        }
        @media (${device.tablet}) {
          top: 25.38px;
          right: 185.98px;
        }
      }
      &:nth-child(4) {
        top: 21px;
        left: 3px;
        @media (${device.mobileM}) {
          top: 54px;
          left: 27px;
        }
        @media (${device.tablet}) {
          top: 120px;
          left: 57px;
        }
      }
      &:nth-child(5) {
        bottom: 5px;
        left: 100px;
        @media (${device.mobileM}) {
          bottom: 10px;
          left: 161px;
        }
        @media (${device.tablet}) {
          bottom: 18px;
          left: 316px;
        }
      }
      &:nth-child(6) {
        top: 39px;
        right: 0px;
        @media (${device.mobileM}) {
          top: 63px;
          right: -8px;
        }
        @media (${device.tablet}) {
          top: 142px;
          right: -8px;
        }
      }
    }
  }
  @media (${device.mobileM}) {
    width: 353px;
    height: 231px;
    margin-top: 50px;
  }
  @media (${device.tablet}) {
    width: 704px;
    height: 468px;
  }
`;

const Text = styled.p`
  position: absolute;
  font-size: 1em;
  :nth-child(1) {
    top: -10px;
    left: 52px;
    width: 66px;
    text-align: center;
    @media (${device.mobileM}) {
      top: 17px;
      left: 19px;
      width: 140px;
      text-align: start;
    }
    @media (min-width: 560px) {
      top: 33px;
      left: -33px;
    }
    @media (${device.tablet}) {
      top: -5px;
      left: 5px;
      width: 223px;
    }
    @media (min-width: ${isDesktop ? '1360px' : '1134px'}) {
      top: 43px;
    left: -107px;
    width: 270px;
      font-size: 20px;
  }
    }
  }
  :nth-child(2) {
    top: 4px;
    right: 0px;
    width: 84px;
    @media (${device.mobileM}) {
      top: 25px;
      right: 60px;
      width: 116px;
      text-align: start;
    }
    @media (min-width: 560px) {
      top: 30px;
      right: -20px;
    }
    @media (${device.tablet}) {
      top: 15px;
      right: 4px;
      width: 247px;
    }
    @media (min-width: ${isDesktop ? '1360px' : '1134px'}) {
      top: 43px;
    right: -60px;
    width: 247px;
  }
  }
  :nth-child(3) {
    top: 123px;
    right: -9px;
    width: 71px;
    text-align: end;
    @media (${device.mobileM}) {
      top: unset;
      bottom: 181px;
      right: -17px;
      width: 117px;
    }
    @media (min-width: 560px) {
      bottom: 157px;
      right: -98px;
    }
    @media (${device.tablet}) {
      bottom: 51px;
      right: -19px;
      width: 205px;
    }
    @media (min-width: ${isDesktop ? '1360px' : '1134px'}) {
      bottom: 320px;
      right: -353px;
      width: 357px;
      text-align: start;
    }
  }
  :nth-child(4) {
    bottom: -22px;
    width: 152px;
    left: 12px;
    text-align: center;
    font-size: 6px;
    @media (${device.mobileM}) {
      bottom: -22px;
      width: 161px;
      left: 200px;
      text-align: end;
      font-size: 1em;
    }
    @media (min-width: 560px) {
      bottom: -20px;
      width: 213px;
      left: 260px;
      text-align: start;
    }
    @media (${device.tablet}) {
      width: 293px;
      left: 37px;
    }
    @media (min-width: ${isDesktop ? '1360px' : '1134px'}) {
      width: 438px;
      left: 577px;
      font-size: 20px;
    }
  }
  :nth-child(5) {
    bottom: 13px;
    left: -2px;
    width: 89px;
    @media (${device.mobileM}) {
      bottom: -9px;
      left: 61px;
      width: 124px;
    }
    @media (min-width: 560px) {
      bottom: -25px;
      left: 73px;

      width: 171px;
    }
    @media (${device.tablet}) {
      bottom: 96px;
      left: -7px;
      width: 214px;
    }
    @media (min-width: ${isDesktop ? '1360px' : '1134px'}) {
      bottom: 0;
      left: 78px

  ;
      width: 280px;
    }
  }
  :nth-child(6) {
    left: -9px;
    top: 7px;
    width: 86px;
    @media (${device.mobileM}) {
      left: -14px;
      top: 192px;
      width: 127px;
    }
    @media (min-width: 560px) {
      left: -65px;
      top: 209px;
      width: 153px;
    }
    @media (${device.tablet}) {
      left: -25px;
      top: 73px;
    }
    @media (min-width: ${isDesktop ? '1360px' : '1134px'}) {
      width: 305px;
      left: -108px;
    top: 350px;
    }
  }
`;

const WillKnow: React.FC = React.memo(() => {
  return (
    <Section>
      <H3>Что вы узнаете</H3>
      <WillKnowWrapper
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}>
        <Composition>
          <picture>
            <source srcSet={lineWebp} type="image/webp" />
            <img loading="lazy" decoding="async" src={line} alt="line" className="line line--1" />
          </picture>
          <picture>
            <source srcSet={lineWebp} type="image/webp" />
            <img loading="lazy" decoding="async" src={line} alt="line" className="line line--2" />
          </picture>
          <picture>
            <source srcSet={lineWebp} type="image/webp" />
            <img loading="lazy" decoding="async" src={line} alt="line" className="line line--3" />
          </picture>
          <picture>
            <source srcSet={lineWebp} type="image/webp" />
            <img loading="lazy" decoding="async" src={line} alt="line" className="line line--4" />
          </picture>

          <ArchIco className="arch arch--1" />
          <ArchIco className="arch arch--2" />
          <ArchIco className="arch arch--3" />
          <div>
            <Stand icons={Bitcoin} title="Криптовалюта" />
            <Stand icons={Nft} title="NFT" />
            <Stand icons={Safety} title="Безопасность" />
            <Stand icons={Operation} title="Криптовалютные операции" />
            <Stand icons={Mining} title="Майнинг" />
            <Stand icons={Wallet} title="Кошельки" />
          </div>
        </Composition>
        <div>
          <Text className="text text-1 text--big">Узнаете, что такое смарт-контракты и NFT</Text>
          <Text className="text text-2 text--big">Как обезопасить свои криптоактивы</Text>
          <Text className="text text-3 text--small">
            Какими кошельками и биржами лучше пользоваться
          </Text>
          <Text className="text text-4 text--big">
            Как заработать в криптовалюте без вложений <br /> Сможете создавать свои токены и многое
            другое!
          </Text>
          <Text className="text text-5 text--small">
            Что такое криптовалюта, блокчейн и майнинг
          </Text>
          <Text className="text text-6 text--small">
            Как покупать, продавать и переводить криптовалюту
          </Text>
        </div>
      </WillKnowWrapper>
    </Section>
  );
});

export default WillKnow;
