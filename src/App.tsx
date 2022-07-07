import { useCallback, useEffect, useRef, useState, WheelEvent } from 'react';
import debounce from 'lodash.debounce';

import useWheel from './hooks/useWheel';
import SideBar from './components/SideBar';
import ScrollButton from './components/UI/ScrollButton';
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
} from './components/sections';

import './scss/style.scss';

function App() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const onSckroll = useWheel();

  const onWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      onSckroll({ event, scrollRef, currentSection, setCurrentSection });
    },
    [currentSection],
  );
  // const onWheel = useCallback(
  //   debounce((event: WheelEvent<HTMLDivElement>) => {
  //     onSckroll({ event, scrollRef, currentSection, setCurrentSection });
  //   }, 500),
  //   [currentSection],
  // );

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
      scrollRef.current?.removeEventListener('wheel', (event) => {
        event.preventDefault();
      });
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.children[currentSection].scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  return (
    <div className={'decstop-app'}>
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

export default App;
