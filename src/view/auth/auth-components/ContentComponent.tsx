import { FC } from "react";
import {
  HomeSection,
  VideoSection,
  OurProgram,
  TarifSection,
  AuthorSection,
  StuffSection,
  LearningFormatSection,
  Partners,
  ReviewSection,
  FaqSection,
} from "./sections";
import PostsSection from "./sections/PostsSection";
import FreeLessonModal from "./UI/FreeLessonModal/FreeLessonModal";

type Props = {
  ChangeSection: (idx: number) => void;
};

const ContentComponent: FC<Props> = ({ ChangeSection }) => {
  return (
    <>
      <HomeSection ChangeSection={ChangeSection} />
      <VideoSection />
      <PostsSection />
      <OurProgram />
      <TarifSection />
      <AuthorSection />
      <StuffSection />
      <LearningFormatSection />
      <Partners />
      <ReviewSection />
      <FaqSection />
      <FreeLessonModal />
    </>
  );
};

export default ContentComponent;
