import { FC, useState } from 'react';
import { SidebarButton } from '../../../../styles/auth/Buttons';

import logo from '../../auth-assets/images/logo.png';
import logoMobile from '../../auth-assets/images/logo-mobile.png';

import { device } from '../../../../styles/auth/breackpoints';
import { BurgerMenu, BurgerMenuClose } from '../../auth-assets/svg/icons';
import {
  Sidebar,
  SideContainer,
  Burger,
  Logo,
  Heading,
  Controls,
  Navbar,
  NavItems,
  Item,
  Buttons,
  Mail,
  MailIcon,
} from './style';
import { isDesktop } from 'react-device-detect';
import { motion } from 'framer-motion';

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
  const [show, setShow] = useState<boolean>(false);

  const onChange = (i: number) => {
    setShow(false);
    ChangeSection(i);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <Sidebar>
      <SideContainer>
        <Burger onClick={() => setShow(!show)}>
          {show ? <BurgerMenuClose /> : <BurgerMenu />}
        </Burger>
        <Logo>
          <picture>
            {isDesktop && <source media={device.laptop} srcSet={logo} />}
            <img loading="lazy" decoding="async" src={logoMobile} alt="logo" />
          </picture>
          <Heading>DE LEON UNIVERSITY</Heading>
        </Logo>

        <Controls show={show}>
          <Navbar>
            <NavItems
              as={motion.ul}
              variants={container}
              initial="hidden"
              animate="visible"
              className="navbar__items">
              {sections.map((el, i) => (
                <Item
                  as={motion.li}
                  variants={item}
                  onClick={() => onChange(i)}
                  key={i}
                  active={currentSection === i ? true : false}>
                  {el}
                </Item>
              ))}
            </NavItems>

            <Buttons>
              <SidebarButton>Вход</SidebarButton>
              <SidebarButton>Проверка NFT</SidebarButton>
              <SidebarButton onClick={() => onChange(5)}>Записаться на курс</SidebarButton>
              <Mail href="mailto:admin@amdin" className="mail">
                <MailIcon
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.7143 0H1.28571C0.944722 0 0.617695 0.136964 0.376577 0.380761C0.135459 0.624558 0 0.955219 0 1.3V11.7C0 12.0448 0.135459 12.3754 0.376577 12.6192C0.617695 12.863 0.944722 13 1.28571 13H16.7143C17.0553 13 17.3823 12.863 17.6234 12.6192C17.8645 12.3754 18 12.0448 18 11.7V1.3C18 0.955219 17.8645 0.624558 17.6234 0.380761C17.3823 0.136964 17.0553 0 16.7143 0V0ZM15.3 1.3L9 5.707L2.7 1.3H15.3ZM1.28571 11.7V1.8915L8.63357 7.033C8.74118 7.10848 8.86903 7.14893 9 7.14893C9.13097 7.14893 9.25882 7.10848 9.36643 7.033L16.7143 1.8915V11.7H1.28571Z"
                    fill="#00FFF0"
                    fillOpacity="0.69"
                  />
                </MailIcon>
                Email
              </Mail>
            </Buttons>
          </Navbar>
        </Controls>
      </SideContainer>
    </Sidebar>
  );
};

export default SideBar;
