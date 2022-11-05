import { FC } from 'react';
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
} from './sections';

type Props = {
  ChangeSection: (idx: number) => void;
};

const ContentComponent: FC<Props> = ({ ChangeSection }) => {
  return (
    <>
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
    </>
  );
};

export default ContentComponent;
