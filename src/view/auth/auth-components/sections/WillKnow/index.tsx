import React from 'react';
import Section from '../../layouts/Section';
import { H3 } from '../../UI/Heading';

import line from '../../../auth-assets/images/willKnow/dashes.png';
import arch from '../../../auth-assets/images/willKnow/arch.svg';

import * as bitcoin from '../../../auth-assets/images/willKnow/bitcoin';
import * as nft from '../../../auth-assets/images/willKnow/nft';
import * as safety from '../../../auth-assets/images/willKnow/safety';
import * as operation from '../../../auth-assets/images/willKnow/operation';
import * as mining from '../../../auth-assets/images/willKnow/mining';
import * as wallet from '../../../auth-assets/images/willKnow/wallets';

const WillKnow: React.FC = React.memo(() => {
  return (
    <Section>
      <H3>Что вы узнаете</H3>
      <div className="will-know">
        <p className="text text-1 text--big">Узнаете, что такое смарт-контракты и NFT</p>
        <p className="text text-2 text--big">Как обезопасить свои криптоактивы</p>
        <p className="text text-3 text--small">Какими кошельками и биржами лучше пользоваться</p>
        <p className="text text-4 text--big">
          Как заработать в криптовалюте без вложений <br /> Сможете создавать свои токены и многое
          другое!
        </p>
        <p className="text text-5 text--small">Что такое криптовалюта, блокчейн и майнинг</p>
        <p className="text text-6 text--small">Как покупать, продавать и переводить криптовалюту</p>
        <div className="composition">
          <img src={line} alt="line" className="line line--1" />
          <img src={line} alt="line" className="line line--2" />
          <img src={line} alt="line" className="line line--3" />
          <img src={line} alt="line" className="line line--4" />
          <img src={arch} alt="arch" className="arch arch--1" />
          <img src={arch} alt="arch" className="arch arch--2" />
          <img src={arch} alt="arch" className="arch arch--3" />
          <div className="stand stand-bitcoin">
            <div className="stand__container">
              <p className="title">Криптовалюта</p>
              <div className="basement">
                <img src={bitcoin.icon} alt="icon" className="icon" />
                <img src={bitcoin.light} alt="light" className="light" />
                <img src={bitcoin.stand} alt="stand" />
              </div>
            </div>
          </div>
          <div className="stand stand-nft">
            <div className="stand__container">
              <p className="title">NFT</p>
              <div className="basement">
                <img src={nft.icon} alt="icon" className="icon" />
                <img src={nft.light} alt="light" className="light" />
                <img src={nft.stand} alt="stand" />
              </div>
            </div>
          </div>
          <div className="stand stand-safety">
            <div className="stand__container">
              <p className="title">Безопасность</p>
              <div className="basement">
                <img src={safety.icon} alt="icon" className="icon" />
                <img src={safety.light} alt="light" className="light" />
                <img src={safety.stand} alt="stand" />
              </div>
            </div>
          </div>
          <div className="stand stand-operation">
            <div className="stand__container">
              <p className="title">Криптовалютные операции</p>
              <div className="basement">
                <img src={operation.icon} alt="icon" className="icon" />
                <img src={operation.light} alt="light" className="light" />
                <img src={operation.stand} alt="stand" />
              </div>
            </div>
          </div>
          <div className="stand stand-mining">
            <div className="stand__container">
              <p className="title">Майнинг</p>
              <div className="basement">
                <img src={mining.icon} alt="icon" className="icon" />
                <img src={mining.light} alt="light" className="light" />
                <img src={mining.stand} alt="stand" />
              </div>
            </div>
          </div>
          <div className="stand stand-wallet">
            <div className="stand__container">
              <p className="title">Кошельки</p>
              <div className="basement">
                <img src={wallet.icon} alt="icon" className="icon" />
                <img src={wallet.light} alt="light" className="light" />
                <img src={wallet.stand} alt="stand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default WillKnow;
