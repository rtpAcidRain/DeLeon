import { useCallback, useEffect, useRef, useState } from 'react';
import ContentComponent from './ContentComponent';
import SideBar from './SideBar';

import gift from '../../auth/auth-assets/images/gifts.png'
import { App, Main } from '../../../styles/auth/AuthApp';
import { GiftButton } from '../../../styles/auth/Buttons';

import '../../../scss/auth-styles/desktop/style.scss';
import BonusesModal from "./UI/BonusesModal/BonusesModal";


type Props = {};

const MobileComponent = (props: Props) => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null);

  const onClose = () => setIsOpenModal(false)

  const ChangeSection = useCallback((idx: number) => {
    setCurrentSection(idx);
  }, []);

  useEffect(() => {
      const timeout = setTimeout(() => {
          setIsOpenModal(true)
      }, 7000)

      return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    scrollRef.current?.children[currentSection].scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  return (
    <App>
      <SideBar ChangeSection={ChangeSection} currentSection={currentSection} />
        <GiftButton onClick={() => setIsOpenModal(true)}>
            <img alt="" src={gift} />
        </GiftButton>

      <Main ref={scrollRef}>
        <ContentComponent ChangeSection={ChangeSection} />
      </Main>

      <BonusesModal isOpen={isOpenModal} onClose={onClose} />
    </App>
  );
};

export default MobileComponent;
