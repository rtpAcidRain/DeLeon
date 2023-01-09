import { useCallback, useEffect, useRef, useState, WheelEvent } from 'react';

import useWheel from '../../auth-hooks/useWheel';
import SideBar from '../SideBar';

import ContentComponent from '../ContentComponent';

import { ScrollButton } from '../UI/Buttons';
import { DescApp, DescMain, Scroll } from './style';
import { GiftButton } from '../../../../styles/auth/Buttons';
import gift from "../../auth-assets/images/gifts.png";
import BonusesModal from "../UI/BonusesModal/BonusesModal";

function DesktopComponent() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null);
  const onSckroll = useWheel();
  const animation = useRef(true);

  const onClose = () => setIsOpenModal(false)

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (!animation.current) {
      onSckroll({ event, scrollRef, currentSection, setCurrentSection });
    }
  };

  const ChangeSection = useCallback((idx: number) => {
    setCurrentSection(idx);
  }, []);

  window.onresize = function () {
    scrollRef.current?.children[currentSection].scrollIntoView();
  };

  useEffect(() => {
    scrollRef.current?.addEventListener(
      'wheel',
      (event) => {
        event.preventDefault();
      },
      {
        passive: false,
      },
    );

    return () => {
      // eslint-disable-next-line
      scrollRef.current?.removeEventListener('wheel', (event) => {
        event.preventDefault();
      });
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpenModal(true)
    }, 7000)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    animation.current = true;
    scrollRef.current?.children[currentSection].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      animation.current = false;
    }, 1000);
  }, [currentSection]);

  return (
    <DescApp className="dekstop-auth">
      <SideBar ChangeSection={ChangeSection} currentSection={currentSection} />
      <GiftButton onClick={() => setIsOpenModal(true)}>
        <img alt="" src={gift} />
      </GiftButton>
      <DescMain>
      {currentSection > 0 && <ScrollButton vector="up" ChangeSection={ChangeSection} />}
        <Scroll
          ref={scrollRef}
          onWheel={(event) => {
            onWheel(event);
          }}>
          <ContentComponent ChangeSection={ChangeSection} />
        </Scroll>
      {currentSection < 12 && <ScrollButton vector="down" ChangeSection={ChangeSection} />}
      <BonusesModal onClose={onClose}  isOpen={isOpenModal} />
      </DescMain>
    </DescApp>
  );
}

export default DesktopComponent;
