import React, { FC } from 'react';
import Heading from './UI/Heading';

type Props = {
  question: string;
  answer: string;
};

const Faq: FC<Props> = React.memo(({ question, answer }) => {
  return (
    <article className="quesiton__item">
      <Heading level={5}>{question}</Heading>
      <p className="answer">{answer}</p>
    </article>
  );
});

export default Faq;
