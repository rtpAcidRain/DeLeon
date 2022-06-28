import { FC } from 'react';
import Heading from '../UI/Heading';
import SidebarButton from '../UI/SidebarButton';

import styles from './sideBar.module.scss';
import logo from '../../images/logo.png';
import mailImage from '../../images/mail.svg';

type Props = {
  currentSection: number;
  setCurrentSection: (idx: number) => void;
};

const SideBar: FC<Props> = ({ currentSection, setCurrentSection }) => {
  const sections = [
    'Главная',
    'Видео',
    'Рынок сегодня',
    'Что вы получите',
    'Программа курса',
    'Тарифы',
    'Автор курса',
    'Команда',
    'Формат обучения',
    'Бонусы',
    'Наши партнеры',
    'Отзывы',
    'FAQ',
  ];

  return (
    <aside className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <picture className={styles.logo__picture}>
            <img src={logo} alt="De Leon" />
          </picture>
          <div className={styles.logo__heading}>
            <Heading level={6}>DE LEON UNIVERSITY</Heading>
          </div>
        </div>

        <div className={styles.aside__content}>
          <nav className={styles.nav__items}>
            <ol>
              {sections.map((el, i) => (
                <li
                  onClick={() => setCurrentSection(i)}
                  key={i}
                  className={currentSection === i ? styles.active : ''}>
                  {el}
                </li>
              ))}
            </ol>
          </nav>
          <div className={styles.aside__buttons}>
            <SidebarButton>Вход</SidebarButton>
            <SidebarButton>Проверка NFT</SidebarButton>
            <SidebarButton>Записаться на курс</SidebarButton>
            <div className={styles.mail}>
              <img src={mailImage} alt="email" className={styles.emailImage} />
              <p>Email</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
