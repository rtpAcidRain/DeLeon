import React from 'react';
import Section from '../layouts/Section';
import Heading from '../UI/Heading';

const WillKnow: React.FC = React.memo(() => {
  return (
    <Section>
      <Heading>Что вы узнаете</Heading>
      <div className="will-know"></div>
    </Section>
  );
});

export default WillKnow;
