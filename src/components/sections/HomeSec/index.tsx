import Section from '../../layouts/Section';
import Heading from '../../UI/Heading';
import SectionButtons from '../../UI/SectionButtons';

import styles from './homeSection.module.scss';
import coin from '../../../assets/images/cryptocoin.png';
import { useContext } from 'react';
import { AppContext } from '../../App';

const HomeSection = () => {
  const { setCurrentSection } = useContext(AppContext);
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div className={styles.content__text}>
              <Heading level={1}>КриптоСтарт</Heading>
              <p className={styles.text}>
                Самый полный обучающий курс по заработку на криптовалютном рынке.
              </p>
              <ul className={styles.list}>
                <li>30 обучающих уроков</li>
                <li>12 способов заработать на криптовалютном рынке</li>
                <li>Домашние задания и кураторство 24/7</li>
                <li>NFT сертификат о прохождении курса</li>
              </ul>
              <p className={styles.text}>
                После прохождения нашего курса ты перестанешь бояться и начнешь действовать!
              </p>
            </div>
            <div className={styles.buttons}>
              <SectionButtons onClick={() => setCurrentSection(4)}>Программа курса</SectionButtons>
              <SectionButtons onClick={() => setCurrentSection(5)}>
                Записаться на курс
              </SectionButtons>
            </div>
          </div>
          <div className={styles.rightContent}>
            <picture>
              <img src={coin} alt="cryptoCoin" />
            </picture>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeSection;
