import { useEffect, useRef, useState } from 'react';
import { useWheelScroll } from '../hooks/useWheelScroll';
import '../scss/style.scss';
import Section from './layouts/Section';
import HomeSection from './sections/HomeSec';
import SideBar from './SideBar';
import Heading from './UI/Heading';

function App() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const scrollSection = useRef<HTMLDivElement>(null);
  const scrollWheel = useWheelScroll(scrollSection, currentSection, setCurrentSection);

  useEffect(() => {
    scrollWheel();
  }, [currentSection]);

  return (
    <div className={'decstop-app'}>
      <SideBar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        <div ref={scrollSection} className="scroll-container">
          <HomeSection setCurrentSection={setCurrentSection} />
          <Section>
            <></>
          </Section>
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
    </div>
  );
}

export default App;
