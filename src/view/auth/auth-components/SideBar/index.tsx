import { FC, useState } from 'react';
import {SidebarButton, SubscribeSidebarButton} from '../../../../styles/auth/Buttons';

import logo from '../../auth-assets/images/logo.png';
import logoMobile from '../../auth-assets/images/logo-mobile.png';

import { device } from '../../../../styles/auth/breackpoints';
import { BurgerMenu, BurgerMenuClose } from '../../auth-assets/svg/icons';
import {
  Sidebar,
  SideContainer,
  Burger,
  Logo,
  Controls,
  Navbar,
  NavItems,
  Item,
  Buttons,
  Mail,
  Wrapper,
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
  'Тарифы',
  'Автор курса',
  'Команда',
  'Формат обучения',
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
                  active={currentSection === i}>
                  {el}
                </Item>
              ))}
            </NavItems>

            <Wrapper>
              <Buttons>
                <SidebarButton>Вход</SidebarButton>
                <SidebarButton>Проверка NFT</SidebarButton>
                <Mail href="mailto:admin@amdin">
                  Email
                </Mail>
              </Buttons>
              <SubscribeSidebarButton onClick={() => onChange(5)}>Записаться на курс</SubscribeSidebarButton>
            </Wrapper>
          </Navbar>
        </Controls>
      </SideContainer>
    </Sidebar>
  );
};

export default SideBar;
