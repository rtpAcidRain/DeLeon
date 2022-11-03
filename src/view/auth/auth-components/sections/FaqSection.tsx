import React from 'react';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';

import questions from '../../auth-assets/data/questioins.json';
import Faq from '../Faq';

type Props = {};

const FaqSection: React.FC<Props> = React.memo(() => {
  return (
    <Section>
      <div className="faq__container">
        <H3>Часто задаваемые вопросы</H3>
        <div className="quesiton__items">
          {questions.map((el) => (
            <Faq key={el.id} question={el.question} answer={el.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
});

export default FaqSection;
