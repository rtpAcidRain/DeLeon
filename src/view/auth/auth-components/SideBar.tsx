import { FC } from 'react';
import { H6 } from './UI/Heading';
import { SidebarButton } from '../../../styles/auth/Buttons';

import logo from '../auth-assets/images/logo.png';
import mailImage from '../auth-assets/images/mail.svg';
import { isDesktop, isMobile, isTablet } from 'react-device-detect';

type Props = {
  ChangeSection: (idx: number) => void;
  currentSection: number;
};

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

const SideBar: FC<Props> = ({ ChangeSection, currentSection }) => {
  return (
    <>
      {isDesktop && (
        <div className="sidebar-toggle">
          <p>Меню</p>
        </div>
      )}
      {isMobile || isTablet ? <div className="toggle"></div> : <></>}
      <aside className="sidebar">
        <div className="sidebar__container">
          <div className="sidebar__logo logo">
            <picture className="logo__picture">
              <img src={logo} alt="De Leon" />
            </picture>
            <div className="logo__heading">
              <H6>DE LEON UNIVERSITY</H6>
            </div>
          </div>

          <div className="sidebar__controls">
            <nav className="navbar">
              <ol className="navbar__items">
                {sections.map((el, i) => (
                  <li
                    onClick={() => ChangeSection(i)}
                    key={i}
                    className={
                      currentSection === i ? 'navbar__item navbar__item--active' : 'navbar__item'
                    }>
                    {el}
                  </li>
                ))}
              </ol>
            </nav>
            <div className="sidebar__buttons">
              <SidebarButton>Вход</SidebarButton>
              <SidebarButton>Проверка NFT</SidebarButton>
              <SidebarButton onClick={() => ChangeSection(5)}>Записаться на курс</SidebarButton>
              <a href="mailto:admin@amdin" className="mail">
                <img src={mailImage} alt="email" className="emailImage" />
                Email
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
