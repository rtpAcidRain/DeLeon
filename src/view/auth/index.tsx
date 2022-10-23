import { useCallback, useEffect, useRef, useState, WheelEvent } from 'react';

import useWheel from './auth-hooks/useWheel';
import SideBar from './auth-components/SideBar';
import ScrollButton from './auth-components/UI/ScrollButton';
import {
  HomeSection,
  VideoSection,
  WhatYouTake,
  WillKnow,
  OurProgram,
  TarifSection,
  AuthorSection,
  StuffSection,
  LearningFormatSection,
  BonuseSection,
  Partners,
  ReviewSection,
  FaqSection,
} from './auth-components/sections';

import '../../scss/auth-styles/style.scss';

function Auth() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const onSckroll = useWheel();
  const animation = useRef(true);

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (!animation.current) {
      onSckroll({ event, scrollRef, currentSection, setCurrentSection });
    }
  };

  const ChangeSection = useCallback((idx: any) => {
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
    <div className={'decstop-auth'}>
      {currentSection > 0 && <ScrollButton vector="up" ChangeSection={ChangeSection} />}
      <SideBar ChangeSection={ChangeSection} currentSection={currentSection} />
      <main>
        <div
          ref={scrollRef}
          className="scroll"
          onWheel={(event) => {
            onWheel(event);
          }}>
          <HomeSection ChangeSection={ChangeSection} />
          <VideoSection />
          <WhatYouTake />
          <WillKnow />
          <OurProgram />
          <TarifSection />
          <AuthorSection />
          <StuffSection />
          <LearningFormatSection />
          <BonuseSection />
          <Partners />
          <ReviewSection />
          <FaqSection />
        </div>
      </main>
      {currentSection < 12 && <ScrollButton vector="down" ChangeSection={ChangeSection} />}
    </div>
  );
}

export default Auth;
