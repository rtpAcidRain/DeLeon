import { useCallback, useEffect, useRef, useState, WheelEvent } from 'react';
import { Helmet } from 'react-helmet';

import useWheel from '../auth-hooks/useWheel';
import SideBar from '../auth-components/SideBar';

import ContentComponent from '../auth-components/ContentComponent';

import '../../../scss/auth-styles/desktop/style.scss';
import { ScrollButton } from './UI/Buttons';

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
    <div className="app dekstop-auth">
      <Helmet>
        <meta name="viewport" content="width=1200, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>
      {currentSection > 0 && <ScrollButton vector="up" ChangeSection={ChangeSection} />}
      <SideBar ChangeSection={ChangeSection} currentSection={currentSection} />
      <main>
        <div
          ref={scrollRef}
          className="scroll"
          onWheel={(event) => {
            onWheel(event);
          }}>
          <ContentComponent ChangeSection={ChangeSection} />
        </div>
      </main>
      {currentSection < 12 && <ScrollButton vector="down" ChangeSection={ChangeSection} />}
    </div>
  );
}

export default DesktopComponent;
