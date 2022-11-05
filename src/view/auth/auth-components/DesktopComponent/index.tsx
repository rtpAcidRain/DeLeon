import { useCallback, useEffect, useRef, useState, WheelEvent } from 'react';

import useWheel from '../../auth-hooks/useWheel';
import SideBar from '../SideBar';

import ContentComponent from '../ContentComponent';

import { ScrollButton } from '../UI/Buttons';
import { DescApp, DescMain, Scroll } from './style';

function DesktopComponent() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const onSckroll = useWheel();
  const animation = useRef(true);

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
    animation.current = true;
    scrollRef.current?.children[currentSection].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      animation.current = false;
    }, 700);
  }, [currentSection]);

  return (
    <DescApp className=" dekstop-auth">
      {currentSection > 0 && <ScrollButton vector="up" ChangeSection={ChangeSection} />}
      <SideBar ChangeSection={ChangeSection} currentSection={currentSection} />
      <DescMain>
        <Scroll
          ref={scrollRef}
          onWheel={(event) => {
            onWheel(event);
          }}>
          <ContentComponent ChangeSection={ChangeSection} />
        </Scroll>
      </DescMain>
      {currentSection < 12 && <ScrollButton vector="down" ChangeSection={ChangeSection} />}
    </DescApp>
  );
}

export default DesktopComponent;
