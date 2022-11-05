import Section from '../../layouts/Section';
import { H1 } from '../../UI/Heading';

import coin from '../../../auth-assets/images/cryptocoin.png';
import React, { FC } from 'react';
import { Home, Buttons, Button, Content, ContentText, List, ListItem, Picture } from './style';

type Props = {
  ChangeSection: (idx: number) => void;
};

const HomeSection: FC<Props> = React.memo(({ ChangeSection }) => {
  return (
    <Section>
      <Home>
        <Content>
          <ContentText className="content__text">
            <H1>КриптоСтарт</H1>
            <p className="text">
              Самый полный обучающий курс по заработку на криптовалютном рынке.
            </p>
            <List className="list">
              <ListItem className="list__item">30 обучающих уроков</ListItem>
              <ListItem className="list__item">
                12 способов заработать на криптовалютном рынке
              </ListItem>
              <ListItem className="list__item">Домашние задания и кураторство 24/7</ListItem>
              <ListItem className="list__item">NFT сертификат о прохождении курса</ListItem>
            </List>
            <p className="text">
              После прохождения нашего курса ты перестанешь бояться и начнешь действовать!
            </p>
          </ContentText>
          <Buttons>
            <Button onClick={() => ChangeSection(4)}>Программа курса</Button>
            <Button onClick={() => ChangeSection(5)}>Записаться на курс</Button>
          </Buttons>
        </Content>
        <Picture>
          <picture>
            <img src={coin} alt="cryptoCoin" />
          </picture>
        </Picture>
      </Home>
    </Section>
  );
});

export default HomeSection;
