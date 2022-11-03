import React, { FC } from 'react';
import { H5 } from './UI/Heading';

type Props = {
  question: string;
  answer: string;
};

const Faq: FC<Props> = React.memo(({ question, answer }) => {
  return (
    <article className="quesiton__item">
      <H5>{question}</H5>
      <p className="answer">{answer}</p>
    </article>
  );
});

export default Faq;
