import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
  WheelEvent,
} from 'react';
import '../scss/style.scss';
import Section from './layouts/Section';
import HomeSection from './sections/HomeSec';
import VideoSection from './sections/VideoSection';
import SideBar from './SideBar';
import Heading from './UI/Heading';
import ScrollButton from './UI/ScrollButton';

type AppContextType = {
  currentSection: number;
  setCurrentSection: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

function App() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const onSckroll = (event: WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current?.children) {
      if (event.deltaY > 0) {
        if (currentSection >= 0 && currentSection !== scrollRef.current.children.length - 1) {
          setCurrentSection((prev) => prev + 1);
        }
      }
      if (event.deltaY < 0) {
        if (currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
        }
      }
    }
  };

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
    <AppContext.Provider value={{ currentSection, setCurrentSection }}>
      <div className={'decstop-app'}>
        {currentSection > 0 && (
          <ScrollButton vector="prev" onClick={() => setCurrentSection((prev) => prev - 1)} />
        )}
        <SideBar />
        <main>
          <div
            ref={scrollRef}
            className="scroll-container"
            onWheel={(event) => {
              onSckroll(event);
            }}>
            <HomeSection />
            <VideoSection />
            <Section>
              <Heading>Чего же вы ждете? Начните прямо сейчас!</Heading>
            </Section>
            <Section>
              <Heading>Что вы узнаете</Heading>
            </Section>
            <Section>
              <Heading>Наша программа</Heading>
            </Section>
            <Section>
              <Heading>Тарифы</Heading>
            </Section>
            <Section>
              <Heading>Автор курса</Heading>
            </Section>
            <Section>
              <Heading>Наша команда</Heading>
            </Section>
            <Section>
              <Heading>Формат обучения</Heading>
            </Section>
            <Section>
              <Heading>Бонусы</Heading>
            </Section>
            <Section>
              <Heading>Партнеры</Heading>
            </Section>
            <Section>
              <Heading>Отзывы</Heading>
            </Section>
            <Section>
              <Heading>Часто задаваемые вопросы</Heading>
            </Section>
          </div>
        </main>
        {currentSection < 12 && (
          <ScrollButton vector="next" onClick={() => setCurrentSection((prev) => prev + 1)} />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
