import { useCallback, useEffect, useRef, useState } from 'react';
import ContentComponent from './ContentComponent';
import SideBar from './SideBar';

import '../../../scss/auth-styles/desktop/style.scss';
import { App, Main } from '../../../styles/auth/AuthApp';

type Props = {};

const MobileComponent = (props: Props) => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ChangeSection = useCallback((idx: number) => {
    setCurrentSection(idx);
  }, []);

  useEffect(() => {
    scrollRef.current?.children[currentSection].scrollIntoView({ behavior: 'smooth' });
  }, [currentSection]);

  return (
    <App>
      <SideBar ChangeSection={ChangeSection} currentSection={currentSection} />

      <Main ref={scrollRef}>
        <ContentComponent ChangeSection={ChangeSection} />
      </Main>
    </App>
  );
};

export default MobileComponent;
