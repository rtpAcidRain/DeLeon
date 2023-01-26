import React, { FC } from "react";
import { H5 } from "./UI/Heading";
import { motion } from "framer-motion";

type Props = {
  question: string;
  answer: string;
};

const Faq: FC<Props> = React.memo(({ question, answer }) => {
  return (
    <motion.article
      className="quesiton__item"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
      <H5 className="question">{question}</H5>
      <p className="answer">{answer}</p>
    </motion.article>
  );
});

export default Faq;
