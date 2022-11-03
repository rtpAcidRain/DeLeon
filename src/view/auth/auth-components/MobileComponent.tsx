import { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import ContentComponent from './ContentComponent';
import SideBar from './SideBar';

import '../../../scss/auth-styles/mobile/style.scss';

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
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Helmet>
      <div className="app mobile-auth">
        <SideBar ChangeSection={ChangeSection} currentSection={currentSection} />

        <main ref={scrollRef}>
          <ContentComponent ChangeSection={ChangeSection} />
        </main>
      </div>
    </>
  );
};

export default MobileComponent;
