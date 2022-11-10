import React from 'react';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';
import { motion } from 'framer-motion';

import questions from '../../auth-assets/data/questioins.json';
import Faq from '../Faq';

type Props = {};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const FaqSection: React.FC<Props> = React.memo(() => {
  return (
    <Section>
      <div className="faq__container">
        <H3>Часто задаваемые вопросы</H3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="quesiton__items">
          {questions.map((el) => (
            <Faq key={el.id} question={el.question} answer={el.answer} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
});

export default FaqSection;
